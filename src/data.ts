export type LinkVariant = "mercadolivre" | "loja" | "amazon" | "whatsapp";

export interface LinkCard {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  url: string;
  displayUrl?: string;
  cta: string;
  badge?: string;
  variant: LinkVariant;
}

export interface InfoCard {
  title: string;
  description: string;
  desktopOnly?: boolean;
}

export const PROFILE_DATA = {
  name: "Eduardo",
  brand: "Agilizza",
  tagline: "Achadinhos, ofertas e links selecionados para você comprar melhor.",
  avatarUrl: "/images/eduardo.jpg",
  logoUrl: "/logo-agilizza.svg",
  whatsappUrl: "https://wa.me/message/YIRTD7DD5VG5I1",
};

// Trocar links aqui quando precisar atualizar destino de algum card.
export const MAIN_LINKS: LinkCard[] = [
  {
    id: "mercadolivre",
    eyebrow: "Ofertas do dia",
    title: "Ofertas no Mercado Livre",
    description: "As melhores ofertas e produtos selecionados.",
    url: "https://mercadolivre.com/sec/2KEd3DT",
    displayUrl: "mercadolivre.com/sec/2KEd3DT",
    cta: "Ver ofertas",
    badge: "Recomendado",
    variant: "mercadolivre",
  },
  {
    id: "loja",
    eyebrow: "Minha loja",
    title: "Loja Agilizza",
    description: "Todos os produtos selecionados em um só lugar.",
    url: "https://collshp.com/agilizza?view=storefront",
    cta: "Visitar loja",
    variant: "loja",
  },
  {
    id: "amazon",
    eyebrow: "Ofertas na Amazon",
    title: "Agilizza na Amazon",
    description: "Confira minhas indicações e produtos selecionados.",
    url: "https://www.amazon.com.br/shop/agilizzas",
    cta: "Ver na Amazon",
    variant: "amazon",
  },
  {
    id: "whatsapp",
    eyebrow: "Fale comigo",
    title: "Falar no WhatsApp",
    description: "Tire dúvidas ou peça indicações.",
    url: "https://wa.me/message/YIRTD7DD5VG5I1",
    cta: "Enviar mensagem",
    variant: "whatsapp",
  },
];

// Cards de apoio, sem link — só reforço visual.
export const INFO_CARDS: InfoCard[] = [
  {
    title: "Achados selecionados",
    description: "Ofertas e produtos que realmente valem a pena.",
  },
  {
    title: "Links rápidos",
    description: "Acesso fácil aos melhores links para economizar tempo.",
  },
  {
    title: "Atualizado sempre",
    description: "Novas ofertas e produtos com frequência.",
    desktopOnly: true,
  },
];
