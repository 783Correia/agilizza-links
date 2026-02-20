import https from 'https';
import fs from 'fs';
import path from 'path';

const outDir = path.join(process.cwd(), 'public', 'products');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const products = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public', 'extracted_products.json'), 'utf8'));

const fetchHtml = (url) => {
    return new Promise((resolve, reject) => {
        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
                'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7'
            }
        };
        https.get(url, options, (res) => {
            let data = '';
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                return fetchHtml(res.headers.location).then(resolve).catch(reject);
            }
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
};

const downloadImage = (url, dest) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:123.0) Gecko/20100101 Firefox/123.0',
                'Accept': 'image/avif,image/webp,*/*',
                'Referer': 'https://produto.mercadolivre.com.br/'
            }
        };
        https.get(url, options, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                return downloadImage(res.headers.location, dest).then(resolve).catch(reject);
            }
            res.pipe(file);
            file.on('finish', () => file.close(resolve));
        }).on('error', (err) => {
            fs.unlink(dest, () => { });
            reject(err);
        });
    });
};

const delay = ms => new Promise(res => setTimeout(res, ms));

async function run() {
    const updatedProducts = [];

    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const url = product.link.split('#')[0].split('?')[0]; // clean tracking
        const cleanUrl = product.link;
        let imageUrl = '';

        console.log(`Processing ${i + 1}/${products.length}: ${product.title}`);

        try {
            const html = await fetchHtml(url);
            const ogMatch = html.match(/<meta\s+property="og:image"\s+content="([^"]+)"/i);

            if (ogMatch && ogMatch[1]) {
                imageUrl = ogMatch[1];
            } else {
                const imgMatch = html.match(/<img[^>]+class="ui-pdp-image[^>]+src="([^"]+)"/i);
                if (imgMatch && imgMatch[1]) {
                    imageUrl = imgMatch[1];
                } else {
                    console.log(`  -> URL NOT FOUND IN HTML. Using fallback avatar.`);
                    imageUrl = '/logo-agilizza.svg';
                }
            }

            const localPath = `/products/p${i + 1}.webp`;
            const dest = path.join(outDir, `p${i + 1}.webp`);

            if (imageUrl !== '/logo-agilizza.svg') {
                await downloadImage(imageUrl, dest);
                console.log(`  -> Image downloaded to ${localPath}`);
            }

            updatedProducts.push({
                id: `p${i + 1}`,
                title: product.title,
                price: product.price,
                imageUrl: localPath,
                link: cleanUrl,
                platform: 'mercadolivre'
            });

        } catch (e) {
            console.log(`  -> ERROR: ${e.message}`);
        }
        await delay(300); // Prevent rate limiting
    }

    // Now write data.ts
    const dataTsPath = path.join(process.cwd(), 'src', 'data.ts');
    const existingCode = fs.readFileSync(dataTsPath, 'utf8');

    // Extract PROFILE_DATA block to keep it intact
    const profileMatch = existingCode.match(/export const PROFILE_DATA = {[\s\S]*?};\n/);
    const profileCode = profileMatch ? profileMatch[0] : `export const PROFILE_DATA = {
  name: "Agilizza Soluções",
  bio: "Serviços técnicos residenciais e empresariais. Elétrica, hidráulica, climatização e segurança eletrônica.",
  avatarUrl: "/logo-agilizza.svg",
  websiteUrl: "https://agilizzasolucoes.com.br",
  websiteButtonLabel: "Acessar nosso Site",
  whatsappUrl: "https://wa.me/5554996592223",
  whatsappLabel: "Fale pelo WhatsApp"
};\n`;

    const newCode = `export interface Product {
  id: string;
  title: string;
  price: string;
  imageUrl: string;
  link: string;
  platform: 'shopee' | 'mercadolivre';
}

${profileCode}
export const PRODUCTS: Product[] = ${JSON.stringify(updatedProducts, null, 2).replace(/"([^"]+)":/g, '$1:')};
`;

    fs.writeFileSync(dataTsPath, newCode);
    console.log('SUCCESS: data.ts updated with all 40 products!');
}

run();
