import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const baseUrl = 'https://www.mercadolivre.com.br/social/eduardofauste/lists/c5c643c2-1c23-40a1-b9d1-45b91f649921';

(async () => {
    console.log('Starting headless browser...');
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36');

    let allProducts = [];
    let currentPage = 1;

    while (true) {
        const url = `${baseUrl}?page=${currentPage}&matt_tool=24809446&forceInApp=true`;
        console.log(`Navigating to page ${currentPage}: ${url}`);

        await page.goto(url, { waitUntil: 'networkidle2' });
        await new Promise(r => setTimeout(r, 2000)); // allow rendering

        console.log(`Extracting items from page ${currentPage}...`);
        const pageProducts = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.poly-card')).map(card => {
                const titleEl = card.querySelector('.poly-component__title');
                const priceEl = card.querySelector('.andes-money-amount__fraction');
                const priceCentsEl = card.querySelector('.andes-money-amount__cents');

                let priceText = priceEl ? 'R$ ' + priceEl.innerText.trim() : 'N/A';
                if (priceCentsEl && priceText !== 'N/A') {
                    priceText += ',' + priceCentsEl.innerText.trim();
                }
                return {
                    title: titleEl ? titleEl.innerText.trim() : 'N/A',
                    price: priceText,
                    link: titleEl ? titleEl.href : 'N/A'
                };
            }).filter(p => !p.title.includes('N/A') && !p.link.includes('N/A'));
        });

        if (pageProducts.length === 0) {
            console.log("No more products found. Ending pagination.");
            break;
        }

        allProducts = allProducts.concat(pageProducts);
        console.log(`Page ${currentPage} extracted ${pageProducts.length} items. Total: ${allProducts.length}`);

        // Check if there's a next page link active
        const hasNextInfo = await page.evaluate(() => {
            const nextBtn = document.querySelector('.andes-pagination__button--next a');
            const activeNext = document.querySelector('.andes-pagination__button--next:not(.andes-pagination__button--disabled)');
            return !!activeNext;
        });

        if (!hasNextInfo) {
            console.log("No active 'Next' button found. Ending pagination.");
            break;
        }

        currentPage++;
    }

    const outputPath = path.join(process.cwd(), 'public', 'extracted_products.json');
    fs.writeFileSync(outputPath, JSON.stringify(allProducts, null, 2));

    console.log(`Successfully extracted ${allProducts.length} unique products to ${outputPath}`);

    await browser.close();
})();
