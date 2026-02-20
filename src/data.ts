export type Platform = 'shopee' | 'mercadolivre';

export interface Product {
  id: string;
  title: string;
  price: string;
  imageUrl: string;
  link: string;
  platform: Platform;
}

export const PROFILE_DATA = {
  name: "Agilizza Soluções",
  bio: "Serviços técnicos residenciais e empresariais. Elétrica, hidráulica, climatização e segurança eletrônica.",
  avatarUrl: "/logo-agilizza.svg", // Replaced with official logo
  websiteUrl: "https://agilizzasolucoes.com.br",
  websiteButtonLabel: "Acessar nosso Site",
  whatsappUrl: "https://wa.me/5554996592223",
  whatsappLabel: "Fale pelo WhatsApp"
};

export const PRODUCTS: Product[] = [
  {
    id: "1",
    title: "Salva Tomada 3D Agilizza Reutilizável Resistente",
    price: "R$ 22,00",
    imageUrl: "/products/1.webp",
    link: "https://produto.mercadolivre.com.br/MLB-6193378934-salva-tomada-3d-agilizza-reutilizavel-resistente-_JM",
    platform: "mercadolivre"
  },
  {
    id: "2",
    title: "Caneta Detectora Tensão 12-300v Display Hsdt33001 Ingco",
    price: "R$ 99,00",
    imageUrl: "/products/2.webp",
    link: "https://produto.mercadolivre.com.br/MLB-6047607496-caneta-detectora-tensao-12-300v-display-hsdt33001-ingco-_JM",
    platform: "mercadolivre"
  },
  {
    id: "3",
    title: "Mochila De Ferramentas Reforçada Ingco Marrom",
    price: "R$ 237,43",
    imageUrl: "/products/3.webp",
    link: "https://produto.mercadolivre.com.br/MLB-4014600527-mochila-de-ferramentas-reforcada-ingco-marrom-_JM",
    platform: "mercadolivre"
  },
  {
    id: "4",
    title: "Multímetro Digital True RMS Ingco - Dm36002",
    price: "R$ 152,71",
    imageUrl: "/products/4.webp",
    link: "https://www.mercadolivre.com.br/multimetro-digital-true-rms-ingco-dm36002/p/MLB28154685",
    platform: "mercadolivre"
  },
  {
    id: "5",
    title: "Bolsa Aberta Cliptech e Coleira 20cm Toughbuilt",
    price: "R$ 599,99",
    imageUrl: "/products/5.webp",
    link: "https://www.mercadolivre.com.br/bolsa-aberta-cliptech-e-coleira-de-20-cm-toughbuilt-tb-ct-180-8-cor-preta/p/MLB32402128",
    platform: "mercadolivre"
  },
  {
    id: "6",
    title: "Caixa Organizadora Tampa Translúcida Toughbuilt",
    price: "R$ 363,52",
    imageUrl: "/products/6.webp",
    link: "https://www.mercadolivre.com.br/caixa-organizadora-tampa-translucida-compacto-toughbuilt/up/MLBU3112303064",
    platform: "mercadolivre"
  },
  {
    id: "7",
    title: "Kit Caixas Ferramentas Modular Stacktech 3pcs Toughbuilt",
    price: "R$ 3.839,00",
    imageUrl: "/products/7.webp",
    link: "https://www.mercadolivre.com.br/kit-caixas-ferramentas-modular-stacktech-3pcs-toughbuilt/up/MLBU3057318471",
    platform: "mercadolivre"
  },
  {
    id: "8",
    title: "Bolsa de Ferramentas Toughbuilt 5 Pocket Drill",
    price: "R$ 261,99",
    imageUrl: "/products/8.webp",
    link: "https://produto.mercadolivre.com.br/MLB-4018418205-bolsa-de-ferramentas-toughbuilt-5-pocket-drill-_JM",
    platform: "mercadolivre"
  }
];
