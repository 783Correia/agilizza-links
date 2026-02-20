export interface Product {
  id: string;
  title: string;
  price: string;
  imageUrl: string;
  link: string;
  platform: 'shopee' | 'mercadolivre';
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
    id: "p1",
    title: "Salva Tomada 3d Agilizza Reutilizável Resistente",
    price: "R$ 22",
    imageUrl: "/products/p1.webp",
    link: "https://produto.mercadolivre.com.br/MLB-6193378934-salva-tomada-3d-agilizza-reutilizavel-resistente-_JM?searchVariation=196178372553#polycard_client=social-profile-middleend&source=lists&type=item&tracking_id=81074e5e-11ae-4bb5-bd63-870bf6244818",
    platform: "mercadolivre"
  },
  {
    id: "p2",
    title: "Caneta Detectora Tensao 12-300v Display Hsdt33001 Ingco",
    price: "R$ 99",
    imageUrl: "/products/p2.webp",
    link: "https://produto.mercadolivre.com.br/MLB-6047607496-caneta-detectora-tensao-12-300v-display-hsdt33001-ingco-_JM#polycard_client=social-profile-middleend&source=lists&type=product&tracking_id=81074e5e-11ae-4bb5-bd63-870bf6244818&wid=MLB6047607496&sid=storefronts",
    platform: "mercadolivre"
  },
  {
    id: "p3",
    title: "Mochila De Ferramentas Reforçada Ingco Marrom",
    price: "R$ 237,43",
    imageUrl: "/products/p3.webp",
    link: "https://produto.mercadolivre.com.br/MLB-4014600527-mochila-de-ferramentas-reforcada-ingco-marrom-_JM#polycard_client=social-profile-middleend&source=lists&type=product&tracking_id=81074e5e-11ae-4bb5-bd63-870bf6244818&wid=MLB4014600527&sid=storefronts",
    platform: "mercadolivre"
  },
  {
    id: "p4",
    title: "Multimetro Digital True Ingco - Dm36002",
    price: "R$ 224,90",
    imageUrl: "/products/p4.webp",
    link: "https://www.mercadolivre.com.br/multimetro-digital-true-ingco--dm36002/up/MLBU3398998542?pdp_filters=item_id%3AMLB4186145251#polycard_client=social-profile-middleend&wid=MLB4186145251&source=lists&type=item&tracking_id=81074e5e-11ae-4bb5-bd63-870bf6244818&sid=storefronts",
    platform: "mercadolivre"
  },
  {
    id: "p5",
    title: "Bolsa Aberta Cliptech E Coleira De 20 Cm Toughbuilt Tb-ct-180-8 Cor Preta",
    price: "R$ 599,99",
    imageUrl: "/products/p5.webp",
    link: "https://www.mercadolivre.com.br/bolsa-aberta-cliptech-e-coleira-de-20-cm-toughbuilt-tb-ct-180-8-cor-preta/p/MLB26957862?pdp_filters=item_id%3AMLB5402811494#polycard_client=social-profile-middleend&wid=MLB5402811494&source=lists&type=product&tracking_id=81074e5e-11ae-4bb5-bd63-870bf6244818&sid=storefronts",
    platform: "mercadolivre"
  },
  {
    id: "p6",
    title: "Caixa Organizadora Tampa Translucida Compacto Toughbuilt Laranja",
    price: "R$ 363,52",
    imageUrl: "/products/p6.webp",
    link: "https://www.mercadolivre.com.br/caixa-organizadora-tampa-translucida-compacto-toughbuilt/up/MLBU3112303064?pdp_filters=item_id%3AMLB4024688463#polycard_client=social-profile-middleend&wid=MLB4024688463&source=lists&type=item&tracking_id=81074e5e-11ae-4bb5-bd63-870bf6244818&sid=storefronts",
    platform: "mercadolivre"
  },
  {
    id: "p7",
    title: "Kit Caixas Ferramentas Modular Stacktech 3pcs Toughbuilt Preto",
    price: "R$ 3.839,02",
    imageUrl: "/products/p7.webp",
    link: "https://www.mercadolivre.com.br/kit-caixas-ferramentas-modular-stacktech-3pcs-toughbuilt/up/MLBU3057318471?pdp_filters=item_id%3AMLB3998437147#polycard_client=social-profile-middleend&wid=MLB3998437147&source=lists&type=item&tracking_id=81074e5e-11ae-4bb5-bd63-870bf6244818&sid=storefronts",
    platform: "mercadolivre"
  },
  {
    id: "p8",
    title: "Bolsa De Ferramentas Toughbuilt 5 Pocket Drill",
    price: "R$ 261,99",
    imageUrl: "/products/p8.webp",
    link: "https://produto.mercadolivre.com.br/MLB-4018418205-bolsa-de-ferramentas-toughbuilt-5-pocket-drill-_JM#polycard_client=social-profile-middleend&source=lists&type=product&tracking_id=81074e5e-11ae-4bb5-bd63-870bf6244818&wid=MLB4018418205&sid=storefronts",
    platform: "mercadolivre"
  },
  {
    id: "p9",
    title: "Kit Cinto Porta Ferramenta Tb-ct111cp Toughbuilt",
    price: "R$ 999,90",
    imageUrl: "/products/p9.webp",
    link: "https://produto.mercadolivre.com.br/MLB-5489201802-kit-cinto-porta-ferramenta-tb-ct111cp-toughbuilt-_JM#polycard_client=social-profile-middleend&source=lists&type=item&tracking_id=81074e5e-11ae-4bb5-bd63-870bf6244818&wid=MLB5489201802&sid=storefronts",
    platform: "mercadolivre"
  },
  {
    id: "p10",
    title: "Bolsa De Ferramentas Toughbuilt 27 Pocket Belt",
    price: "R$ 466",
    imageUrl: "/products/p10.webp",
    link: "https://produto.mercadolivre.com.br/MLB-5368847684-bolsa-de-ferramentas-toughbuilt-27-pocket-belt-_JM#polycard_client=social-profile-middleend&source=lists&type=product&tracking_id=81074e5e-11ae-4bb5-bd63-870bf6244818&wid=MLB5368847684&sid=storefronts",
    platform: "mercadolivre"
  },
  {
    id: "p11",
    title: "Bolsa De Ferramentas Toughbuilt 6 Pocket Hammer",
    price: "R$ 279,90",
    imageUrl: "/products/p11.webp",
    link: "https://www.mercadolivre.com.br/bolsa-de-ferramentas-toughbuilt-6-pocket-hammer/p/MLB24656317?pdp_filters=item_id%3AMLB4019205333#polycard_client=social-profile-middleend&wid=MLB4019205333&source=lists&type=product&tracking_id=81074e5e-11ae-4bb5-bd63-870bf6244818&sid=storefronts",
    platform: "mercadolivre"
  },
  {
    id: "p12",
    title: "Jogo De Chaves Fenda/philips Isolada Com 6 Peças-ingco",
    price: "R$ 137,25",
    imageUrl: "/products/p12.webp",
    link: "https://www.mercadolivre.com.br/jogo-de-chaves-fendaphilips-isolada-com-6-pecas-ingco/p/MLB27409859?pdp_filters=item_id%3AMLB5735234972#polycard_client=social-profile-middleend&wid=MLB5735234972&source=lists&type=product&tracking_id=81074e5e-11ae-4bb5-bd63-870bf6244818&sid=storefronts",
    platform: "mercadolivre"
  },
  {
    id: "p13",
    title: "Estilete Lamina Corte Profissional 18 Mm + 6 Laminas Ingco",
    price: "R$ 58,50",
    imageUrl: "/products/p13.webp",
    link: "https://www.mercadolivre.com.br/estilete-lamina-corte-profissional-18-mm-6-laminas-ingco/p/MLB24441736?pdp_filters=item_id%3AMLB3453314841#polycard_client=social-profile-middleend&wid=MLB3453314841&source=lists&type=product&tracking_id=81074e5e-11ae-4bb5-bd63-870bf6244818&sid=storefronts",
    platform: "mercadolivre"
  },
  {
    id: "p14",
    title: "Multimetro Digital 1999 Contagens Ingco - Dm200",
    price: "R$ 197,97",
    imageUrl: "/products/p14.webp",
    link: "https://www.mercadolivre.com.br/multimetro-digital-1999-contagens-ingco--dm200/up/MLBU1158371234?pdp_filters=item_id%3AMLB3977939858#polycard_client=social-profile-middleend&wid=MLB3977939858&source=lists&type=item&tracking_id=81074e5e-11ae-4bb5-bd63-870bf6244818&sid=storefronts",
    platform: "mercadolivre"
  },
  {
    id: "p15",
    title: "Chave De Fenda Sem Fio De - 4nm Com Acessórios - Cor Laranja Claro Ajustável 4v",
    price: "R$ 284,97",
    imageUrl: "/products/p15.webp",
    link: "https://produto.mercadolivre.com.br/MLB-3899788975-chave-de-fenda-sem-fio-de-4nm-com-acessorios-cor-laranja-claro-ajustavel-4v-_JM#polycard_client=social-profile-middleend&source=lists&type=product&tracking_id=81074e5e-11ae-4bb5-bd63-870bf6244818&wid=MLB3899788975&sid=storefronts",
    platform: "mercadolivre"
  },
  {
    id: "p16",
    title: "Alicate 4 Em 1 Corta Desencapa Crimpa E Detecta Tensão 8.1/4",
    price: "R$ 199",
    imageUrl: "/products/p16.webp",
    link: "https://www.mercadolivre.com.br/alicate-4-em-1-corta-desencapa-crimpa-e-detecta-tenso-814/p/MLB26610355?pdp_filters=item_id%3AMLB5100714324#polycard_client=social-profile-middleend&wid=MLB5100714324&source=lists&type=product&tracking_id=81074e5e-11ae-4bb5-bd63-870bf6244818&sid=storefronts",
    platform: "mercadolivre"
  },
  {
    id: "p17",
    title: "Chave Ajustável/inglesa Cabo Emborrachado 12 Polegadas",
    price: "R$ 160,88",
    imageUrl: "/products/p17.webp",
    link: "https://produto.mercadolivre.com.br/MLB-5069118592-chave-ajustavelinglesa-cabo-emborrachado-12-polegadas-_JM#polycard_client=social-profile-middleend&source=lists&type=item&tracking_id=0ce92c07-164e-49b7-afaa-f21c7b3fbf1d&wid=MLB5069118592&sid=storefronts",
    platform: "mercadolivre"
  },
  {
    id: "p18",
    title: "Alicate Amperimetro Digital Ingco 600a",
    price: "R$ 208",
    imageUrl: "/products/p18.webp",
    link: "https://produto.mercadolivre.com.br/MLB-3972385013-alicate-amperimetro-digital-ingco-600a-_JM#polycard_client=social-profile-middleend&source=lists&type=product&tracking_id=0ce92c07-164e-49b7-afaa-f21c7b3fbf1d&wid=MLB3972385013&sid=storefronts",
    platform: "mercadolivre"
  },
  {
    id: "p19",
    title: "Broca Escalonada Precisão Ingco Hss 4mm A 22mm",
    price: "R$ 62,69",
    imageUrl: "/products/p19.webp",
    link: "https://produto.mercadolivre.com.br/MLB-5450023878-broca-escalonada-preciso-ingco-hss-4mm-a-22mm-_JM#polycard_client=social-profile-middleend&source=lists&type=product&tracking_id=0ce92c07-164e-49b7-afaa-f21c7b3fbf1d&wid=MLB5450023878&sid=storefronts",
    platform: "mercadolivre"
  },
  {
    id: "p20",
    title: "Abafador De Ruido Protetor Ouvido Som Protecao Libus 17 Db",
    price: "R$ 49,90",
    imageUrl: "/products/p20.webp",
    link: "https://www.mercadolivre.com.br/abafador-de-ruido-protetor-ouvido-som-protecao-libus-17-db/p/MLB24691319?pdp_filters=item_id%3AMLB4370942140#polycard_client=social-profile-middleend&wid=MLB4370942140&source=lists&type=product&tracking_id=0ce92c07-164e-49b7-afaa-f21c7b3fbf1d&sid=storefronts",
    platform: "mercadolivre"
  },
  {
    id: "p21",
    title: "Óculos De Segurança Delta Plus Hekla 2 Antirrisco Proteção Uv Transparente",
    price: "R$ 22,12",
    imageUrl: "/products/p21.webp",
    link: "https://produto.mercadolivre.com.br/MLB-3964189655-oculos-de-seguranca-delta-plus-hekla-2-antirrisco-proteco-uv-transparente-_JM#polycard_client=social-profile-middleend&source=lists&type=product&tracking_id=0ce92c07-164e-49b7-afaa-f21c7b3fbf1d&wid=MLB3964189655&sid=storefronts",
    platform: "mercadolivre"
  },
  {
    id: "p22",
    title: "Marreta Oitavada Com Cabo De Fibra E Emborrachada Ingco",
    price: "R$ 78,62",
    imageUrl: "/products/p22.webp",
    link: "https://www.mercadolivre.com.br/marreta-oitavada-com-cabo-de-fibra-e-emborrachada-ingco/p/MLB32093082?pdp_filters=item_id%3AMLB3588776919#polycard_client=social-profile-middleend&wid=MLB3588776919&source=lists&type=product&tracking_id=0ce92c07-164e-49b7-afaa-f21c7b3fbf1d&sid=storefronts",
    platform: "mercadolivre"
  },
  {
    id: "p23",
    title: "Mini Ventilador Soprador De Ar Turbo Jato 130000 Rpm Sem Fio Preto 127/220v",
    price: "R$ 125,90",
    imageUrl: "/products/p23.webp",
    link: "https://produto.mercadolivre.com.br/MLB-4035427547-mini-ventilador-soprador-de-ar-turbo-jato-130000-rpm-sem-fio-preto-127220v-_JM#polycard_client=social-profile-middleend&source=lists&type=item&tracking_id=0ce92c07-164e-49b7-afaa-f21c7b3fbf1d&wid=MLB4035427547&sid=storefronts",
    platform: "mercadolivre"
  },
  {
    id: "p24",
    title: "Chave Inglesa Ajustável Vise-grip 8 Irwin",
    price: "R$ 123,14",
    imageUrl: "/products/p24.webp",
    link: "https://produto.mercadolivre.com.br/MLB-1433598982-chave-inglesa-ajustavel-vise-grip-8-irwin-_JM#polycard_client=social-profile-middleend&source=lists&type=item&tracking_id=0ce92c07-164e-49b7-afaa-f21c7b3fbf1d&wid=MLB1433598982&sid=storefronts",
    platform: "mercadolivre"
  },
  {
    id: "p25",
    title: "Pistola De Cola Quente A Bateria 20v Ingco Cggli2001 Laranja",
    price: "R$ 214,90",
    imageUrl: "/products/p25.webp",
    link: "https://www.mercadolivre.com.br/pistola-de-cola-quente-a-bateria-20v-ingco-cggli2001/up/MLBU1983880498?pdp_filters=item_id%3AMLB3767182932#polycard_client=social-profile-middleend&wid=MLB3767182932&source=lists&type=item&tracking_id=0ce92c07-164e-49b7-afaa-f21c7b3fbf1d&sid=storefronts",
    platform: "mercadolivre"
  },
  {
    id: "p26",
    title: "Talhadeira Larga 40mm Sds Plus P/todos Martelete Sds Plus",
    price: "R$ 22,87",
    imageUrl: "/products/p26.webp",
    link: "https://www.mercadolivre.com.br/talhadeira-larga-40mm-sds-plus-ptodos-martelete-sds-plus/up/MLBU772814300?pdp_filters=item_id%3AMLB3772780939#polycard_client=social-profile-middleend&wid=MLB3772780939&source=lists&type=item&tracking_id=0ce92c07-164e-49b7-afaa-f21c7b3fbf1d&sid=storefronts",
    platform: "mercadolivre"
  },
  {
    id: "p27",
    title: "Controlador De Haste De Aterramento Sds-plus Para Hastes De",
    price: "R$ 108,83",
    imageUrl: "/products/p27.webp",
    link: "https://produto.mercadolivre.com.br/MLB-5488351842-controlador-de-haste-de-aterramento-sds-plus-para-hastes-de-_JM#polycard_client=social-profile-middleend&source=lists&type=product&tracking_id=0ce92c07-164e-49b7-afaa-f21c7b3fbf1d&wid=MLB5488351842&sid=storefronts",
    platform: "mercadolivre"
  },
  {
    id: "p28",
    title: "Kit 2 Grampo Sargento Aperto Rápido Marceneiro 15cm 6 Irwin",
    price: "R$ 93,26",
    imageUrl: "/products/p28.webp",
    link: "https://www.mercadolivre.com.br/kit-2-grampo-sargento-aperto-rapido-marceneiro-15cm-6-irwin/p/MLB2048351771?pdp_filters=item_id%3AMLB5028199302#polycard_client=social-profile-middleend&wid=MLB5028199302&source=lists&type=product&tracking_id=0ce92c07-164e-49b7-afaa-f21c7b3fbf1d&sid=storefronts",
    platform: "mercadolivre"
  },
  {
    id: "p29",
    title: "Saco Reutilizável P/ Aspirador Electrolux Acqua Power Aqp20",
    price: "R$ 35,90",
    imageUrl: "/products/p29.webp",
    link: "https://www.mercadolivre.com.br/saco-reutilizavel-p-aspirador-electrolux-acqua-power-aqp20/up/MLBU1971456190?pdp_filters=item_id%3AMLB2699281191#polycard_client=social-profile-middleend&wid=MLB2699281191&source=lists&type=item&tracking_id=0ce92c07-164e-49b7-afaa-f21c7b3fbf1d&sid=storefronts",
    platform: "mercadolivre"
  },
  {
    id: "p30",
    title: "Para Aparelho De Aterramento Sds-plus T Post, Parafuso De",
    price: "R$ 31,01",
    imageUrl: "/products/p30.webp",
    link: "https://www.mercadolivre.com.br/wwj-aparato-de-puesta-a-tierra-con-poste-sds-plus-t/p/MLB2058421839?pdp_filters=item_id%3AMLB3855283609#polycard_client=social-profile-middleend&wid=MLB3855283609&source=lists&type=product&tracking_id=0ce92c07-164e-49b7-afaa-f21c7b3fbf1d&sid=storefronts",
    platform: "mercadolivre"
  },
  {
    id: "p31",
    title: "Lamina De Estilete 18mm 10 Folhas Ingco",
    price: "R$ 13,90",
    imageUrl: "/products/p31.webp",
    link: "https://www.mercadolivre.com.br/lamina-de-estilete-18mm-10-folhas-ingco/p/MLB27281677?pdp_filters=item_id%3AMLB5327517056#polycard_client=social-profile-middleend&wid=MLB5327517056&source=lists&type=product&tracking_id=0ce92c07-164e-49b7-afaa-f21c7b3fbf1d&sid=storefronts",
    platform: "mercadolivre"
  },
  {
    id: "p32",
    title: "Suporte Magnético Celular Pescoço Gravar Vídeos Telesin Cinza",
    price: "R$ 259,99",
    imageUrl: "/products/p32.webp",
    link: "https://produto.mercadolivre.com.br/MLB-5031683776-suporte-magnetico-celular-pescoco-gravar-videos-telesin-cinza-_JM#polycard_client=social-profile-middleend&source=lists&type=item&tracking_id=0ce92c07-164e-49b7-afaa-f21c7b3fbf1d&wid=MLB5031683776&sid=storefronts",
    platform: "mercadolivre"
  },
  {
    id: "p33",
    title: "Carretel Organizador Para Passa Fio - Soprano",
    price: "R$ 135,75",
    imageUrl: "/products/p33.webp",
    link: "https://www.mercadolivre.com.br/carretel-organizador-para-passa-fio--soprano/up/MLBU1478309493?pdp_filters=item_id%3AMLB4936337986#polycard_client=social-profile-middleend&wid=MLB4936337986&source=lists&type=item&tracking_id=cb6f49cf-cf4a-428e-80df-8624901e8ed3&sid=storefronts",
    platform: "mercadolivre"
  },
  {
    id: "p34",
    title: "Estilete Especial Com Raspador + 5 Lâminas Toughbuilt",
    price: "R$ 184,80",
    imageUrl: "/products/p34.webp",
    link: "https://www.mercadolivre.com.br/estilete-especial-com-raspador-5-lminas-toughbuilt/p/MLB26867144?pdp_filters=item_id%3AMLB5937138946#polycard_client=social-profile-middleend&wid=MLB5937138946&source=lists&type=product&tracking_id=cb6f49cf-cf4a-428e-80df-8624901e8ed3&sid=storefronts",
    platform: "mercadolivre"
  },
  {
    id: "p35",
    title: "Jogo Chave Allen Hexagonal 1,5 A 10 Mm Color C/ 09 Pçs Sata",
    price: "R$ 157,75",
    imageUrl: "/products/p35.webp",
    link: "https://produto.mercadolivre.com.br/MLB-3933593637-jogo-chave-allen-hexagonal-15-a-10-mm-color-c-09-pcs-sata-_JM#polycard_client=social-profile-middleend&source=lists&type=product&tracking_id=cb6f49cf-cf4a-428e-80df-8624901e8ed3&wid=MLB3933593637&sid=storefronts",
    platform: "mercadolivre"
  },
  {
    id: "p36",
    title: "Fita Crepe Adere Amarela Para Pintura Automotiva 48mm X 40m",
    price: "R$ 23,15",
    imageUrl: "/products/p36.webp",
    link: "https://www.mercadolivre.com.br/fita-crepe-adere-amarela-para-pintura-automotiva-48mm-x-40m/p/MLB27488952?pdp_filters=item_id%3AMLB5097664734#polycard_client=social-profile-middleend&wid=MLB5097664734&source=lists&type=product&tracking_id=cb6f49cf-cf4a-428e-80df-8624901e8ed3&sid=storefronts",
    platform: "mercadolivre"
  },
  {
    id: "p37",
    title: "Lápis Lapiseira De Carpinteiro Apontador Embutido + Refil",
    price: "R$ 68,90",
    imageUrl: "/products/p37.webp",
    link: "https://produto.mercadolivre.com.br/MLB-4018560285-lapis-lapiseira-de-carpinteiro-apontador-embutido-refil-_JM?searchVariation=187751436631#polycard_client=social-profile-middleend&source=lists&type=item&tracking_id=cb6f49cf-cf4a-428e-80df-8624901e8ed3",
    platform: "mercadolivre"
  },
  {
    id: "p38",
    title: "Conjunto De Bits Ph2 E Limitador Magnético Dewalt",
    price: "R$ 55",
    imageUrl: "/products/p38.webp",
    link: "https://produto.mercadolivre.com.br/MLB-4471439718-conjunto-de-bits-ph2-e-limitador-magnetico-dewalt-_JM#polycard_client=social-profile-middleend&source=lists&type=product&tracking_id=cb6f49cf-cf4a-428e-80df-8624901e8ed3&wid=MLB4471439718&sid=storefronts",
    platform: "mercadolivre"
  },
  {
    id: "p39",
    title: "Kit Esmerilhadeira Bateria Parafusadeira 20v Brushless Ingco Laranja 127/220v",
    price: "R$ 1.841",
    imageUrl: "/products/p39.webp",
    link: "https://produto.mercadolivre.com.br/MLB-4331624825-kit-esmerilhadeira-bateria-parafusadeira-20v-brushless-ingco-laranja-127220v-_JM#polycard_client=social-profile-middleend&source=lists&type=product&tracking_id=cb6f49cf-cf4a-428e-80df-8624901e8ed3&wid=MLB4331624825&sid=storefronts",
    platform: "mercadolivre"
  },
  {
    id: "p40",
    title: "Ingco Cortador De Parede 1500w 220v",
    price: "R$ 1.799",
    imageUrl: "/products/p40.webp",
    link: "https://produto.mercadolivre.com.br/MLB-3998515175-ingco-cortador-de-parede-1500w-220v-_JM#polycard_client=social-profile-middleend&source=lists&type=item&tracking_id=cb6f49cf-cf4a-428e-80df-8624901e8ed3&wid=MLB3998515175&sid=storefronts",
    platform: "mercadolivre"
  }
];
