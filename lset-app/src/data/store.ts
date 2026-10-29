// Catálogo público da LSET7 consultado em 21/10/2026. Preços e estoque são uma fotografia da consulta, sem sincronização de vendas.
import luysePhoto from "@/assets/luyse.png";
import faixaVideo from "@/assets/videos/lset7-skincare-faixa-video.mp4.asset.json";
import faixaPoster from "@/assets/videos/lset7-video-poster.jpg.asset.json";
import faixaWebm from "@/assets/videos/lset7-skincare-faixa-video.webm.asset.json";

export const storeConfig = {
  name: "LSET7",
  logo: "/lset/catalog/logo-preta-v2.png",
  founderPhoto: luysePhoto,
  whatsappNumber: "5545991588887",
  whatsappMessage: "Olá, Luyse! Quero ajuda para escolher meus produtos na LSET7.",
  email: "Lsete.cosmeticos@gmail.com",
  instagram: "",
  legalName: "LSET7",
  cnpj: "61.237.159/0001-19",
  address: "",
  contactUrl: "https://lset7.com/contato/",
  sourceDate: "21/10/2026",
  trust: {
    procedencia: "",
    entrega: "Frete grátis a partir de R$ 500 na loja atual",
    pagamento: "Parcelamento disponível na loja atual",
    trocas: "",
  },
};
export const whatsappLink = () =>
  `https://wa.me/${storeConfig.whatsappNumber}?text=${encodeURIComponent(storeConfig.whatsappMessage)}`;
export const needs = [
  {
    id: "primeiros-cuidados",
    label: "Começar uma rotina",
    text: "Os passos essenciais, sem complicação.",
  },
  { id: "hidratacao", label: "Hidratação", text: "Cuidado para uma pele confortável." },
  { id: "luminosidade", label: "Luminosidade", text: "Explore cuidados para o viço da pele." },
  { id: "firmeza", label: "Firmeza", text: "Conheça as opções de tratamento." },
] as const;
export type NeedId = (typeof needs)[number]["id"];
export const steps = [
  {
    id: "limpeza",
    label: "Limpeza",
    order: 1,
    text: "Comece removendo resíduos e preparando a pele para os próximos cuidados.",
  },
  {
    id: "tonico",
    label: "Tônico",
    order: 2,
    text: "Um passo opcional após a limpeza, conforme o produto escolhido.",
  },
  {
    id: "tratamento",
    label: "Tratamento",
    order: 3,
    text: "Escolha um cuidado para seu foco e siga as orientações do rótulo.",
  },
  {
    id: "hidratacao",
    label: "Hidratação",
    order: 4,
    text: "Complete o cuidado com uma textura que combine com sua pele.",
  },
  {
    id: "protecao",
    label: "Proteção solar",
    order: 5,
    text: "Na rotina da manhã, finalize com proteção e siga a reaplicação indicada.",
  },
  {
    id: "extras",
    label: "Cuidado extra",
    order: 6,
    text: "Máscaras e acessórios para complementar seu ritual.",
  },
] as const;
export type StepId = (typeof steps)[number]["id"];
export const productTypes = [
  "Espuma de limpeza",
  "Óleo de limpeza",
  "Bálsamo de limpeza",
  "Tônico",
  "Sérum",
  "Essência",
  "Creme",
  "Protetor solar",
  "Máscara",
  "Esfoliante",
  "Tecnologia beauty",
] as const;
export type UsageGuide = {
  intro: string;
  steps: { title: string; text: string; videoAt?: number }[];
  frequency?: string;
  amount?: string;
  notes?: string;
  socialCaption?: string;
  sourceUrl?: string;
  sourceLabel?: string;
  video?: {
    src: string;
    poster?: string;
    downloadUrl?: string;
    fileName?: string;
    captionsUrl?: string;
    aspectRatio?: "9:16" | "16:9";
    description?: string;
  };
};
export type ProductDetails = {
  category: string;
  aliases: string[];
  verified: boolean;
  sources: { label: string; url: string }[];
  skinTypes: string[];
  periods: ("manha" | "noite")[];
  texture: string;
  summary: string;
  amount: string;
  frequency: string;
  instructions: string;
  ingredients: { name: string; role: string }[];
  composition?: string;
  care: string[];
  gallery: { src: string; alt: string; label: string }[];
  faqs: { question: string; answer: string }[];
};
export type Product = {
  id: string;
  name: string;
  brand: string;
  type: (typeof productTypes)[number];
  step: StepId;
  needs: NeedId[];
  price: number;
  size: string;
  benefit: string;
  benefits: string[];
  indication: string;
  howTo: string;
  usageGuide?: UsageGuide;
  details?: ProductDetails;
  composition?: string;
  images: string[];
  bestSeller?: boolean;
  kbeauty?: boolean;
  originalUrl: string;
  available: boolean;
  description: string;
  sourceDate: string;
  compareAt?: number;
  installments?: string;
};
export const products: Product[] = [
  {
    id: "medicube-pdrn-pink-collagen-capsule-cream",
    name: "PDRN Pink Collagen Capsule Cream",
    brand: "Medicube",
    type: "Creme",
    step: "hidratacao",
    needs: ["primeiros-cuidados", "hidratacao", "firmeza"],
    price: 167.0,
    size: "55 g",
    benefit: "PDRN e colágeno na sua rotina",
    benefits: ["PDRN e colágeno na sua rotina"],
    indication: "Consulte a indicação e os cuidados na embalagem do produto.",
    howTo:
      "Misture as cápsulas com o gel e aplique no rosto e no pescoço após o sérum. Segundo a Medicube, o uso pode ser feito pela manhã e à noite. Ajuste a proporção entre gel e cápsulas à textura desejada, seguindo a embalagem.",
    images: ["/lset/catalog/medicube-pdrn-pink-collagen-capsule-cream.webp"],
    kbeauty: true,
    originalUrl: "https://lset7.com/produtos/medicube-pdrn-pink-collagen-capsule-cream/",
    available: true,
    bestSeller: true,
    description: "PDRN e colágeno na sua rotina. Produto da linha Medicube.",
    sourceDate: "21/10/2026",
    installments: "12 x de R$16,99",
    compareAt: 247.0,
    usageGuide: {
      intro: "Veja como combinar as duas texturas e incluir este creme na etapa de hidratação.",
      steps: [
        {
          title: "Misture as duas texturas",
          text: "Combine as cápsulas com o gel antes de aplicar. A Medicube orienta usar mais gel para uma textura mais leve, ou aumentar a proporção de cápsulas para uma textura mais rica.",
          videoAt: 6,
        },
        {
          title: "Aplique após o sérum",
          text: "Aplique a mistura no rosto e no pescoço, depois do sérum, conforme o modo de uso do fabricante.",
          videoAt: 14,
        },
        {
          title: "Inclua na sua rotina",
          text: "O fabricante orienta o uso pela manhã e à noite. Confira também as instruções da sua embalagem e os demais produtos que fazem parte da sua rotina.",
          videoAt: 18,
        },
      ],
      frequency: "Manhã e noite, após o sérum, conforme o fabricante.",
      amount: "Proporção ajustável entre gel e cápsulas, seguindo a embalagem.",
      notes:
        "Demonstração ilustrativa com modelo fictícia e cenas geradas por IA, montadas em sequência animada. Não é filmagem de aplicação. Confira sempre as instruções da embalagem.",
      sourceUrl: "https://medicube.us/products/pdrn-pink-collagen-capsule-cream",
      sourceLabel: "Modo de uso oficial da Medicube",
      video: {
        src: "/lset/videos/medicube-modelo-tutorial.mp4",
        poster: "/lset/videos/medicube-modelo-poster.png",
        aspectRatio: "9:16",
        description: "Modelo virtual · Sequência animada com IA · 27 segundos · Sem áudio",
      },
    },
  },
  {
    id: "mixsoon-daily-mask-pack-com-7-mascaras-faciais",
    name: "Daily Mask Pack Com 7 Máscaras Faciais",
    brand: "Mixsoon",
    type: "Máscara",
    step: "extras",
    needs: ["hidratacao"],
    price: 94.0,
    size: "7 máscaras",
    benefit: "Um cuidado para complementar a rotina",
    benefits: ["Um cuidado para complementar a rotina"],
    indication: "Consulte a indicação e os cuidados na embalagem do produto.",
    howTo:
      "Siga as instruções da embalagem. Para ativos e tratamentos, confira os cuidados e a frequência de uso antes de começar.",
    images: ["/lset/catalog/mixsoon-daily-mask-pack-com-7-mascaras-faciais.webp"],
    kbeauty: true,
    originalUrl: "https://lset7.com/produtos/mixsoon-daily-mask-pack-com-7-mascaras-faciais/",
    available: true,
    bestSeller: false,
    description: "Um cuidado para complementar a rotina. Produto da linha Mixsoon.",
    sourceDate: "21/10/2026",
    installments: "12 x de R$9,57",
    compareAt: 140.0,
  },
  {
    id: "medicube-txa-niacinamide-capsule-cream",
    name: "TXA Niacinamide Capsule Cream",
    brand: "Medicube",
    type: "Creme",
    step: "hidratacao",
    needs: ["primeiros-cuidados", "luminosidade"],
    price: 154.0,
    size: "",
    benefit: "Cuidado para a uniformidade do tom",
    benefits: ["Cuidado para a uniformidade do tom"],
    indication: "Consulte a indicação e os cuidados na embalagem do produto.",
    howTo:
      "Siga as instruções da embalagem. Para ativos e tratamentos, confira os cuidados e a frequência de uso antes de começar.",
    images: ["/lset/catalog/medicube-txa-niacinamide-capsule-cream.webp"],
    kbeauty: true,
    originalUrl: "https://lset7.com/produtos/medicube-txa-niacinamide-capsule-cream/",
    available: true,
    bestSeller: true,
    description: "Cuidado para a uniformidade do tom. Produto da linha Medicube.",
    sourceDate: "21/10/2026",
    installments: "12 x de R$15,67",
    compareAt: 245.0,
  },
  {
    id: "mixsoon-soondy-centella-asiatica-essence",
    name: "Soondy Centella Asiatica Essence",
    brand: "Mixsoon",
    type: "Essência",
    step: "tratamento",
    needs: ["hidratacao"],
    price: 142.0,
    size: "",
    benefit: "Cuidado com centella asiática",
    benefits: ["Cuidado com centella asiática"],
    indication: "Consulte a indicação e os cuidados na embalagem do produto.",
    howTo:
      "Siga as instruções da embalagem. Para ativos e tratamentos, confira os cuidados e a frequência de uso antes de começar.",
    images: ["/lset/catalog/mixsoon-soondy-centella-asiatica-essence.webp"],
    kbeauty: true,
    originalUrl: "https://lset7.com/produtos/mixsoon-soondy-centella-asiatica-essence/",
    available: true,
    bestSeller: true,
    description: "Cuidado com centella asiática. Produto da linha Mixsoon.",
    sourceDate: "21/10/2026",
    installments: "12 x de R$14,45",
    compareAt: 200.0,
  },
  {
    id: "medicube-triple-collagen-cream-50ml",
    name: "Triple Collagen Cream",
    brand: "Medicube",
    type: "Creme",
    step: "hidratacao",
    needs: ["primeiros-cuidados", "hidratacao", "firmeza"],
    price: 135.0,
    size: "50ml",
    benefit: "Cuidado e hidratação para a pele",
    benefits: ["Cuidado e hidratação para a pele"],
    indication: "Consulte a indicação e os cuidados na embalagem do produto.",
    howTo:
      "Siga as instruções da embalagem. Para ativos e tratamentos, confira os cuidados e a frequência de uso antes de começar.",
    images: ["/lset/catalog/medicube-triple-collagen-cream-50ml.webp"],
    kbeauty: true,
    originalUrl: "https://lset7.com/produtos/medicube-triple-collagen-cream-50ml/",
    available: true,
    bestSeller: false,
    description: "Cuidado e hidratação para a pele. Produto da linha Medicube.",
    sourceDate: "21/10/2026",
    installments: "12 x de R$13,74",
    compareAt: 250.0,
  },
  {
    id: "mascara-facial-skin1004-poremizing-quick-clay-stick-mask",
    name: "Poremizing Quick Clay Stick Mask",
    brand: "SKIN1004",
    type: "Máscara",
    step: "extras",
    needs: [],
    price: 174.0,
    size: "",
    benefit: "Cuidado com a aparência dos poros",
    benefits: ["Cuidado com a aparência dos poros"],
    indication: "Consulte a indicação e os cuidados na embalagem do produto.",
    howTo:
      "Siga as instruções da embalagem. Para ativos e tratamentos, confira os cuidados e a frequência de uso antes de começar.",
    images: ["/lset/catalog/mascara-facial-skin1004-poremizing-quick-clay-stick-mask.webp"],
    kbeauty: true,
    originalUrl:
      "https://lset7.com/produtos/mascara-facial-skin1004-poremizing-quick-clay-stick-mask/",
    available: true,
    bestSeller: false,
    description: "Cuidado com a aparência dos poros. Produto da linha SKIN1004.",
    sourceDate: "21/10/2026",
    installments: "12 x de R$17,71",
    compareAt: 217.0,
  },
  {
    id: "serum-facial-skin1004-madagascar-centella-poremizing-fresh-ampoule",
    name: "Madagascar Centella Poremizing Fresh Ampoule",
    brand: "SKIN1004",
    type: "Sérum",
    step: "tratamento",
    needs: ["hidratacao"],
    price: 165.0,
    size: "",
    benefit: "Cuidado com centella asiática",
    benefits: ["Cuidado com centella asiática"],
    indication: "Consulte a indicação e os cuidados na embalagem do produto.",
    howTo:
      "Siga as instruções da embalagem. Para ativos e tratamentos, confira os cuidados e a frequência de uso antes de começar.",
    images: ["/lset/catalog/serum-facial-skin1004-madagascar-centella-poremizing-fresh-ampoule.webp"],
    kbeauty: true,
    originalUrl:
      "https://lset7.com/produtos/serum-facial-skin1004-madagascar-centella-poremizing-fresh-ampoule/",
    available: true,
    bestSeller: true,
    description: "Cuidado com centella asiática. Produto da linha SKIN1004.",
    sourceDate: "21/10/2026",
    installments: "12 x de R$16,79",
    compareAt: 210.0,
  },
  {
    id: "mixsoon-mung-bean-seed-essence-30ml1",
    name: "Mung Bean Seed Essence",
    brand: "Mixsoon",
    type: "Essência",
    step: "tratamento",
    needs: ["hidratacao", "luminosidade"],
    price: 99.0,
    size: "50ml",
    benefit: "Tratamento para a sua rotina",
    benefits: ["Tratamento para a sua rotina"],
    indication: "Consulte a indicação e os cuidados na embalagem do produto.",
    howTo:
      "Siga as instruções da embalagem. Para ativos e tratamentos, confira os cuidados e a frequência de uso antes de começar.",
    images: ["/lset/catalog/mixsoon-mung-bean-seed-essence-30ml1.webp"],
    kbeauty: true,
    originalUrl: "https://lset7.com/produtos/mixsoon-mung-bean-seed-essence-30ml1/",
    available: true,
    bestSeller: false,
    description: "Tratamento para a sua rotina. Produto da linha Mixsoon.",
    sourceDate: "21/10/2026",
    installments: "12 x de R$10,07",
    compareAt: 150.0,
  },
  {
    id: "serum-facial-celimax-the-vita-a-retinal-shot-tightening-booster-de-15-ml",
    name: "Celimax The Vita A Retinal Shot Tightening Booster",
    brand: "Celimax",
    type: "Sérum",
    step: "tratamento",
    needs: ["firmeza"],
    price: 145.0,
    size: "15 ml",
    benefit: "Tratamento para a sua rotina",
    benefits: ["Tratamento para a sua rotina"],
    indication: "Consulte a indicação e os cuidados na embalagem do produto.",
    howTo:
      "Siga as instruções da embalagem. Para ativos e tratamentos, confira os cuidados e a frequência de uso antes de começar.",
    images: [
      "/lset/catalog/serum-facial-celimax-the-vita-a-retinal-shot-tightening-booster-de-15-ml.webp",
    ],
    kbeauty: true,
    originalUrl:
      "https://lset7.com/produtos/serum-facial-celimax-the-vita-a-retinal-shot-tightening-booster-de-15-ml/",
    available: true,
    bestSeller: false,
    description: "Tratamento para a sua rotina. Produto da linha Celimax.",
    sourceDate: "21/10/2026",
    installments: "12 x de R$14,75",
    compareAt: 220.0,
  },
  {
    id: "esfoliante-facial-beauty-of-joseon-apricot-blossom-peeling-100-ml",
    name: "Esfoliante Facial Beauty Of Joseon Apricot Blossom Peeling",
    brand: "Beauty of Joseon",
    type: "Esfoliante",
    step: "extras",
    needs: [],
    price: 164.0,
    size: "100 ml",
    benefit: "Um cuidado para complementar a rotina",
    benefits: ["Um cuidado para complementar a rotina"],
    indication: "Consulte a indicação e os cuidados na embalagem do produto.",
    howTo:
      "Siga as instruções da embalagem. Para ativos e tratamentos, confira os cuidados e a frequência de uso antes de começar.",
    images: ["/lset/catalog/esfoliante-facial-beauty-of-joseon-apricot-blossom-peeling-100-ml.webp"],
    kbeauty: true,
    originalUrl:
      "https://lset7.com/produtos/esfoliante-facial-beauty-of-joseon-apricot-blossom-peeling-100-ml/",
    available: true,
    bestSeller: false,
    description: "Um cuidado para complementar a rotina. Produto da linha Beauty of Joseon.",
    sourceDate: "21/10/2026",
    installments: "12 x de R$16,69",
    compareAt: 175.0,
  },
  {
    id: "oleo-facial-de-limpeza-light-cleasing-oil-centella-skin-1004",
    name: "Oleo Facial De Limpeza Light Cleasing Oil Centella",
    brand: "SKIN1004",
    type: "Óleo de limpeza",
    step: "limpeza",
    needs: ["primeiros-cuidados", "hidratacao"],
    price: 177.0,
    size: "",
    benefit: "O primeiro passo do seu cuidado",
    benefits: ["O primeiro passo do seu cuidado"],
    indication: "Consulte a indicação e os cuidados na embalagem do produto.",
    howTo:
      "Siga as instruções da embalagem. Para ativos e tratamentos, confira os cuidados e a frequência de uso antes de começar.",
    images: ["/lset/catalog/oleo-facial-de-limpeza-light-cleasing-oil-centella-skin-1004.webp"],
    kbeauty: true,
    originalUrl:
      "https://lset7.com/produtos/oleo-facial-de-limpeza-light-cleasing-oil-centella-skin-1004/",
    available: true,
    bestSeller: false,
    description: "O primeiro passo do seu cuidado. Produto da linha SKIN1004.",
    sourceDate: "21/10/2026",
    installments: "12 x de R$18,01",
    compareAt: 217.0,
  },
  {
    id: "balsamo-facial-de-limpeza-dr-althea-pure-grinding-cleansing-balm-de-50-ml",
    name: "Bálsamo Facial De Limpeza Dr. Althea Pure Grinding Cleansing Balm",
    brand: "Dr. Althea",
    type: "Bálsamo de limpeza",
    step: "limpeza",
    needs: ["primeiros-cuidados"],
    price: 169.0,
    size: "50 ml",
    benefit: "O primeiro passo do seu cuidado",
    benefits: ["O primeiro passo do seu cuidado"],
    indication: "Consulte a indicação e os cuidados na embalagem do produto.",
    howTo:
      "Siga as instruções da embalagem. Para ativos e tratamentos, confira os cuidados e a frequência de uso antes de começar.",
    images: [
      "/lset/catalog/balsamo-facial-de-limpeza-dr-althea-pure-grinding-cleansing-balm-de-50-ml.webp",
    ],
    kbeauty: true,
    originalUrl:
      "https://lset7.com/produtos/balsamo-facial-de-limpeza-dr-althea-pure-grinding-cleansing-balm-de-50-ml/",
    available: true,
    bestSeller: false,
    description: "O primeiro passo do seu cuidado. Produto da linha Dr. Althea.",
    sourceDate: "21/10/2026",
    installments: "12 x de R$17,20",
    compareAt: 180.0,
  },
  {
    id: "serum-facial-medicube-pdrn-pink-collagen-1a6be",
    name: "PDRN Pink Collagen 7500",
    brand: "Medicube",
    type: "Sérum",
    step: "tratamento",
    needs: ["hidratacao", "firmeza"],
    price: 165.0,
    size: "",
    benefit: "PDRN e colágeno na sua rotina",
    benefits: ["PDRN e colágeno na sua rotina"],
    indication: "Consulte a indicação e os cuidados na embalagem do produto.",
    howTo:
      "Siga as instruções da embalagem. Para ativos e tratamentos, confira os cuidados e a frequência de uso antes de começar.",
    images: ["/lset/catalog/serum-facial-medicube-pdrn-pink-collagen-1a6be.webp"],
    kbeauty: true,
    originalUrl: "https://lset7.com/produtos/serum-facial-medicube-pdrn-pink-collagen-1a6be/",
    available: true,
    bestSeller: false,
    description: "PDRN e colágeno na sua rotina. Produto da linha Medicube.",
    sourceDate: "21/10/2026",
    installments: "12 x de R$16,79",
    compareAt: 275.0,
  },
  {
    id: "medicube-age-r-booster-pro-6-em-1-rosa",
    name: "Age-R Booster Pro 6 Em 1 - Rosa",
    brand: "Medicube",
    type: "Tecnologia beauty",
    step: "extras",
    needs: ["firmeza"],
    price: 1040.0,
    size: "",
    benefit: "Tecnologia para seu ritual de beleza",
    benefits: ["Tecnologia para seu ritual de beleza"],
    indication: "Consulte a indicação e os cuidados na embalagem do produto.",
    howTo:
      "Siga as instruções da embalagem. Para ativos e tratamentos, confira os cuidados e a frequência de uso antes de começar.",
    images: ["/lset/catalog/medicube-age-r-booster-pro-6-em-1-rosa.webp"],
    kbeauty: true,
    originalUrl: "https://lset7.com/produtos/medicube-age-r-booster-pro-6-em-1-rosa/",
    available: true,
    bestSeller: false,
    description: "Tecnologia para seu ritual de beleza. Produto da linha Medicube.",
    sourceDate: "21/10/2026",
    installments: "12 x de R$105,83",
    compareAt: 1500.0,
  },
  {
    id: "kojic-acid-turmeric-vita-capsule-cream-vy68v",
    name: "Kojic Acid Turmeric Vita Capsule Cream",
    brand: "Medicube",
    type: "Creme",
    step: "hidratacao",
    needs: ["primeiros-cuidados", "luminosidade"],
    price: 154.0,
    size: "",
    benefit: "Vitamina C para o cuidado diário",
    benefits: ["Vitamina C para o cuidado diário"],
    indication: "Consulte a indicação e os cuidados na embalagem do produto.",
    howTo:
      "Siga as instruções da embalagem. Para ativos e tratamentos, confira os cuidados e a frequência de uso antes de começar.",
    images: ["/lset/catalog/kojic-acid-turmeric-vita-capsule-cream-vy68v.webp"],
    kbeauty: true,
    originalUrl: "https://lset7.com/produtos/kojic-acid-turmeric-vita-capsule-cream-vy68v/",
    available: true,
    bestSeller: false,
    description: "Vitamina C para o cuidado diário. Produto da linha Medicube.",
    sourceDate: "21/10/2026",
    installments: "12 x de R$15,67",
    compareAt: 236.0,
  },
  {
    id: "collagen-firming-sun-cream-vrpww",
    name: "Collagen Firming Sun Cream",
    brand: "Medicube",
    type: "Protetor solar",
    step: "protecao",
    needs: ["primeiros-cuidados", "hidratacao", "firmeza"],
    price: 197.0,
    size: "",
    benefit: "Proteção solar na rotina da manhã",
    benefits: ["Proteção solar na rotina da manhã"],
    indication: "Consulte a indicação e os cuidados na embalagem do produto.",
    howTo:
      "Siga as instruções da embalagem. Para ativos e tratamentos, confira os cuidados e a frequência de uso antes de começar.",
    images: ["/lset/catalog/collagen-firming-sun-cream-vrpww.webp"],
    kbeauty: true,
    originalUrl: "https://lset7.com/produtos/collagen-firming-sun-cream-vrpww/",
    available: true,
    bestSeller: false,
    description: "Proteção solar na rotina da manhã. Produto da linha Medicube.",
    sourceDate: "21/10/2026",
    installments: "12 x de R$20,05",
    compareAt: 259.0,
  },
  {
    id: "medicube-collagen-jelly-cream-110ml",
    name: "Collagen Jelly Cream",
    brand: "Medicube",
    type: "Creme",
    step: "hidratacao",
    needs: ["primeiros-cuidados", "hidratacao", "luminosidade", "firmeza"],
    price: 152.0,
    size: "110ml",
    benefit: "Cuidado e hidratação para a pele",
    benefits: ["Cuidado e hidratação para a pele"],
    indication: "Consulte a indicação e os cuidados na embalagem do produto.",
    howTo:
      "Siga as instruções da embalagem. Para ativos e tratamentos, confira os cuidados e a frequência de uso antes de começar.",
    images: ["/lset/catalog/medicube-collagen-jelly-cream-110ml.webp"],
    kbeauty: true,
    originalUrl: "https://lset7.com/produtos/medicube-collagen-jelly-cream-110ml/",
    available: true,
    bestSeller: false,
    description: "Cuidado e hidratação para a pele. Produto da linha Medicube.",
    sourceDate: "21/10/2026",
    installments: "12 x de R$15,47",
    compareAt: 190.0,
  },
  {
    id: "medicube-deep-vita-c-capsule-cream",
    name: "Deep Vita C Capsule Cream",
    brand: "Medicube",
    type: "Creme",
    step: "hidratacao",
    needs: ["primeiros-cuidados", "hidratacao", "luminosidade"],
    price: 159.0,
    size: "",
    benefit: "Vitamina C para o cuidado diário",
    benefits: ["Vitamina C para o cuidado diário"],
    indication: "Consulte a indicação e os cuidados na embalagem do produto.",
    howTo:
      "Siga as instruções da embalagem. Para ativos e tratamentos, confira os cuidados e a frequência de uso antes de começar.",
    images: ["/lset/catalog/medicube-deep-vita-c-capsule-cream.webp"],
    kbeauty: true,
    originalUrl: "https://lset7.com/produtos/medicube-deep-vita-c-capsule-cream/",
    available: true,
    bestSeller: false,
    description: "Vitamina C para o cuidado diário. Produto da linha Medicube.",
    sourceDate: "21/10/2026",
    installments: "12 x de R$16,18",
    compareAt: 250.0,
  },
  {
    id: "kojic-acid-turmeric-vita-jelly-mist-serum-jthn7",
    name: "Kojic Acid Turmeric Vita Jelly Mist Serum",
    brand: "Medicube",
    type: "Sérum",
    step: "tratamento",
    needs: ["luminosidade"],
    price: 172.0,
    size: "",
    benefit: "Cuidado para a uniformidade do tom",
    benefits: ["Cuidado para a uniformidade do tom"],
    indication: "Consulte a indicação e os cuidados na embalagem do produto.",
    howTo:
      "Siga as instruções da embalagem. Para ativos e tratamentos, confira os cuidados e a frequência de uso antes de começar.",
    images: ["/lset/catalog/kojic-acid-turmeric-vita-jelly-mist-serum-jthn7.webp"],
    kbeauty: true,
    originalUrl: "https://lset7.com/produtos/kojic-acid-turmeric-vita-jelly-mist-serum-jthn7/",
    available: true,
    bestSeller: false,
    description: "Cuidado para a uniformidade do tom. Produto da linha Medicube.",
    sourceDate: "21/10/2026",
    installments: "12 x de R$17,50",
    compareAt: 242.0,
  },
  {
    id: "zero-pore-blackhead-mud-mask-nv7oa",
    name: "Zero Pore Blackhead Mud Mask",
    brand: "Medicube",
    type: "Máscara",
    step: "extras",
    needs: [],
    price: 145.0,
    size: "",
    benefit: "Um cuidado para complementar a rotina",
    benefits: ["Um cuidado para complementar a rotina"],
    indication: "Consulte a indicação e os cuidados na embalagem do produto.",
    howTo:
      "Siga as instruções da embalagem. Para ativos e tratamentos, confira os cuidados e a frequência de uso antes de começar.",
    images: ["/lset/catalog/zero-pore-blackhead-mud-mask-nv7oa.webp"],
    kbeauty: true,
    originalUrl: "https://lset7.com/produtos/zero-pore-blackhead-mud-mask-nv7oa/",
    available: true,
    bestSeller: false,
    description: "Um cuidado para complementar a rotina. Produto da linha Medicube.",
    sourceDate: "21/10/2026",
    installments: "12 x de R$14,75",
    compareAt: 250.0,
  },
  {
    id: "tonico-facial-skin1004-madagascar-centella-toning-toner",
    name: "Tônico Facial Madagascar Centella Toning Toner",
    brand: "SKIN1004",
    type: "Tônico",
    step: "tonico",
    needs: ["hidratacao"],
    price: 158.0,
    size: "",
    benefit: "Cuidado após a limpeza",
    benefits: ["Cuidado após a limpeza"],
    indication: "Consulte a indicação e os cuidados na embalagem do produto.",
    howTo:
      "Siga as instruções da embalagem. Para ativos e tratamentos, confira os cuidados e a frequência de uso antes de começar.",
    images: ["/lset/catalog/tonico-facial-skin1004-madagascar-centella-toning-toner.webp"],
    kbeauty: true,
    originalUrl:
      "https://lset7.com/produtos/tonico-facial-skin1004-madagascar-centella-toning-toner/",
    available: true,
    bestSeller: false,
    description: "Cuidado após a limpeza. Produto da linha SKIN1004.",
    sourceDate: "21/10/2026",
    installments: "12 x de R$16,08",
    compareAt: 175.0,
  },
  {
    id: "creme-facial-centella-soothing",
    name: "Creme Facial Centella Soothing",
    brand: "Medicube",
    type: "Creme",
    step: "hidratacao",
    needs: ["primeiros-cuidados", "hidratacao"],
    price: 167.0,
    size: "",
    benefit: "Cuidado e hidratação para a pele",
    benefits: ["Cuidado e hidratação para a pele"],
    indication: "Consulte a indicação e os cuidados na embalagem do produto.",
    howTo:
      "Siga as instruções da embalagem. Para ativos e tratamentos, confira os cuidados e a frequência de uso antes de começar.",
    images: ["/lset/catalog/creme-facial-centella-soothing.webp"],
    kbeauty: true,
    originalUrl: "https://lset7.com/produtos/creme-facial-centella-soothing/",
    available: true,
    bestSeller: false,
    description: "Cuidado e hidratação para a pele. Produto da linha Medicube.",
    sourceDate: "21/10/2026",
    installments: "12 x de R$16,99",
    compareAt: 207.0,
  },
  {
    id: "espuma-de-limpeza-facial-medicube-1ag88",
    name: "Zero Pore Clearing Capsule Cleansing Foam",
    brand: "Medicube",
    type: "Espuma de limpeza",
    step: "limpeza",
    needs: ["primeiros-cuidados", "hidratacao"],
    price: 169.0,
    size: "",
    benefit: "O primeiro passo do seu cuidado",
    benefits: ["O primeiro passo do seu cuidado"],
    indication: "Consulte a indicação e os cuidados na embalagem do produto.",
    howTo:
      "Siga as instruções da embalagem. Para ativos e tratamentos, confira os cuidados e a frequência de uso antes de começar.",
    images: ["/lset/catalog/espuma-de-limpeza-facial-medicube-1ag88.webp"],
    kbeauty: true,
    originalUrl: "https://lset7.com/produtos/espuma-de-limpeza-facial-medicube-1ag88/",
    available: true,
    bestSeller: false,
    description: "O primeiro passo do seu cuidado. Produto da linha Medicube.",
    sourceDate: "21/10/2026",
    installments: "12 x de R$17,20",
    compareAt: 235.0,
  },
  {
    id: "medicube-pdrn-pink-collagen-gel-mask1unid",
    name: "PDRN Pink Collagen Gel Mask(1Unid)",
    brand: "Medicube",
    type: "Máscara",
    step: "extras",
    needs: ["hidratacao", "firmeza"],
    price: 29.0,
    size: "1 unidade",
    benefit: "PDRN e colágeno na sua rotina",
    benefits: ["PDRN e colágeno na sua rotina"],
    indication: "Consulte a indicação e os cuidados na embalagem do produto.",
    howTo:
      "Siga as instruções da embalagem. Para ativos e tratamentos, confira os cuidados e a frequência de uso antes de começar.",
    images: ["/lset/catalog/medicube-pdrn-pink-collagen-gel-mask1unid.webp"],
    kbeauty: true,
    originalUrl: "https://lset7.com/produtos/medicube-pdrn-pink-collagen-gel-mask1unid/",
    available: true,
    bestSeller: false,
    description: "PDRN e colágeno na sua rotina. Produto da linha Medicube.",
    sourceDate: "21/10/2026",
    installments: "6 x de R$5,53",
    compareAt: 45.0,
  },
  {
    id: "serum-facial-vt-cosmetics-reedle-shot-300-de-50-ml",
    name: "Reedle Shot 300",
    brand: "VT Cosmetics",
    type: "Sérum",
    step: "extras",
    needs: [],
    price: 257.0,
    size: "50 ml",
    benefit: "Cuidado específico para complementar a rotina",
    benefits: ["Cuidado específico para complementar a rotina"],
    indication:
      "Confira a indicação e as restrições de uso do fabricante. Tratamentos específicos precisam de atenção à compatibilidade com sua pele.",
    howTo:
      "Siga as instruções da embalagem e confira a frequência de uso e os cuidados recomendados pelo fabricante.",
    images: ["/lset/catalog/serum-facial-vt-cosmetics-reedle-shot-300-de-50-ml.webp"],
    kbeauty: true,
    originalUrl: "https://lset7.com/produtos/serum-facial-vt-cosmetics-reedle-shot-300-de-50-ml/",
    available: true,
    description:
      "Uma opção de cuidado específico do catálogo da LSET7. Confira os detalhes antes de combinar com outros tratamentos.",
    sourceDate: "21/10/2026",
  },
  {
    id: "creme-para-contorno-de-olhos-numbuzin-no-9-nad-retinol",
    name: "Nº 9 NAD+ Retinol — Contorno dos olhos",
    brand: "Numbuzin",
    type: "Creme",
    step: "extras",
    needs: [],
    price: 185.0,
    size: "",
    benefit: "Cuidado específico para complementar a rotina",
    benefits: ["Cuidado específico para complementar a rotina"],
    indication:
      "Confira a indicação e as restrições de uso do fabricante. Tratamentos específicos precisam de atenção à compatibilidade com sua pele.",
    howTo:
      "Siga as instruções da embalagem e confira a frequência de uso e os cuidados recomendados pelo fabricante.",
    images: ["/lset/catalog/creme-para-contorno-de-olhos-numbuzin-no-9-nad-retinol.webp"],
    kbeauty: true,
    originalUrl:
      "https://lset7.com/produtos/creme-para-contorno-de-olhos-numbuzin-no-9-nad-retinol/",
    available: true,
    description:
      "Uma opção de cuidado específico do catálogo da LSET7. Confira os detalhes antes de combinar com outros tratamentos.",
    sourceDate: "21/10/2026",
  },
  {
    id: "adesivos-para-olhos-numbuzin-n9-nad-collagen-under-eye-patches-5-unidades",
    name: "Nº 9 NAD+ Collagen Under Eye Patches",
    brand: "Numbuzin",
    type: "Máscara",
    step: "extras",
    needs: [],
    price: 149.0,
    size: "5 unidades",
    benefit: "Cuidado específico para complementar a rotina",
    benefits: ["Cuidado específico para complementar a rotina"],
    indication:
      "Confira a indicação e as restrições de uso do fabricante. Tratamentos específicos precisam de atenção à compatibilidade com sua pele.",
    howTo:
      "Siga as instruções da embalagem e confira a frequência de uso e os cuidados recomendados pelo fabricante.",
    images: [
      "/lset/catalog/adesivos-para-olhos-numbuzin-n9-nad-collagen-under-eye-patches-5-unidades.webp",
    ],
    kbeauty: true,
    originalUrl:
      "https://lset7.com/produtos/adesivos-para-olhos-numbuzin-n9-nad-collagen-under-eye-patches-5-unidades/",
    available: true,
    description:
      "Uma opção de cuidado específico do catálogo da LSET7. Confira os detalhes antes de combinar com outros tratamentos.",
    sourceDate: "21/10/2026",
  },
];

export const productDetails: Record<string, ProductDetails> = {
  "medicube-pdrn-pink-collagen-capsule-cream": {
    category: "hidratacao",
    aliases: [
      "PDRN Pink Collagen Capsule Cream",
      "Medicube",
      "creme rosa",
      "pink cream",
      "creme de capsulas",
      "medicube rosa",
      "pdrn 55g",
    ],
    verified: true,
    sources: [
      {
        label: "Ficha do fabricante",
        url: "https://medicube.us/products/pdrn-pink-collagen-capsule-cream",
      },
    ],
    skinTypes: ["Seca", "Mista"],
    periods: ["manha", "noite"],
    texture: "Gel com cápsulas",
    summary: "Hidratação com textura personalizável e acabamento luminoso.",
    amount: "Proporção ajustável entre gel e cápsulas.",
    frequency: "Manhã e noite",
    instructions: "Misture as cápsulas com o gel e aplique no rosto e pescoço após o sérum.",
    ingredients: [
      {
        name: "PDRN",
        role: "Ingrediente de cuidado da pele destacado pela Medicube.",
      },
      {
        name: "Colágeno",
        role: "Integra a proposta hidratante da fórmula.",
      },
      {
        name: "Ácido hialurônico",
        role: "Ajuda a reter umidade na pele.",
      },
      {
        name: "Niacinamida",
        role: "Compõe a proposta de cuidado com a aparência do tom da pele.",
      },
    ],
    care: [
      "Confira o rótulo da unidade recebida; fórmulas e apresentações podem variar por mercado.",
    ],
    gallery: [
      {
        src: "https://cdn.shopify.com/s/files/1/0156/3905/2336/files/pdrn_4bb18716-9e52-43c7-b477-1699ac1e4c8f.jpg?width=960",
        alt: "Medicube PDRN Pink Collagen Capsule Cream — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0156/3905/2336/files/PDRN_01_381f6402-a5bb-4648-a60f-f413c043a5fc.jpg?width=960",
        alt: "Medicube PDRN Pink Collagen Capsule Cream — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0156/3905/2336/files/PDRN_02_453e9323-ab56-47bc-bb67-b41809eb0fbf.jpg?width=960",
        alt: "Medicube PDRN Pink Collagen Capsule Cream — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0156/3905/2336/files/PDRN_03_058d09d8-4f44-4b1e-927c-e27b1738ae51.jpg?width=960",
        alt: "Medicube PDRN Pink Collagen Capsule Cream — imagem oficial",
        label: "Imagem do fabricante",
      },
    ],
    faqs: [
      {
        question: "Preciso misturar as cápsulas com o gel?",
        answer: "Sim. O fabricante orienta combinar as duas texturas antes de aplicar.",
      },
      {
        question: "Posso ajustar a textura?",
        answer:
          "Sim. Mais gel deixa a mistura mais leve; mais cápsulas deixam a textura mais rica.",
      },
      {
        question: "Uso antes ou depois do sérum?",
        answer: "A Medicube indica a aplicação após o sérum, no rosto e pescoço.",
      },
    ],
    composition:
      "Water, Glycerin, Niacinamide, Methylpropanediol, Propanediol, 1,2-Hexanediol, Dipropylene Glycol, Caprylic/Capric Triglyceride, Butylene Glycol, Glycereth-26, Arginine, Carbomer, Cetearyl Alcohol, Cetearyl Olivate, Ethylhexyl Palmitate, Sorbitan Olivate, Squalane, Ammonium Acryloyldimethyltaurate/VP Copolymer, Simethicone, Ethylhexylglycerin, Lithospermum Erythrorhizon Root Extract, Adenosine, Helianthus Annuus (Sunflower) Seed Oil, Polyacrylate-13, Sodium DNA, Disodium EDTA, Polyisobutene, Glyceryl Stearate, Hydrolyzed Sclerotium Gum, Pyrus Communis (Pear) Fruit Extract, Alkanna Tinctoria Root Extract, Rosa Damascena Flower Water, Iris Florentina Root Extract, Polysorbate 20, Cucumis Melo (Melon) Fruit Extract, Sorbitan Isostearate, Hedera Helix (Ivy) Leaf/Stem Extract, Glutathione, Sodium Hyaluronate, Octyldodecanol, Salmon Egg Extract, Hydroxypropyltrimonium Hyaluronate, Tocopherol, Hydrogenated Lecithin, Ceramide NP, Cyanocobalamin, Thioctic Acid, Sodium Acetylated Hyaluronate, Hydrolyzed Collagen Extract, Hydrolyzed Hyaluronic Acid, Acetyl Hexapeptide-8, Copper Tripeptide-1, Caprylyl Glycol, Hyaluronic Acid, Palmitoyl Pentapeptide-4, Palmitoyl Hexapeptide-12, Sodium Hyaluronate Crosspolymer, Hydrolyzed Sodium Hyaluronate, Potassium Hyaluronate",
  },
  "mixsoon-daily-mask-pack-com-7-mascaras-faciais": {
    category: "mascaras",
    aliases: ["Daily Mask Pack Com 7 Máscaras Faciais", "Mixsoon"],
    verified: false,
    sources: [],
    skinTypes: [],
    periods: [],
    texture: "",
    summary: "Um cuidado para complementar a rotina",
    amount: "",
    frequency: "",
    instructions: "",
    ingredients: [],
    care: [
      "Confira o rótulo da unidade recebida; fórmulas e apresentações podem variar por mercado.",
    ],
    gallery: [],
    faqs: [],
  },
  "medicube-txa-niacinamide-capsule-cream": {
    category: "hidratacao",
    aliases: ["TXA Niacinamide Capsule Cream", "Medicube"],
    verified: true,
    sources: [
      {
        label: "Ficha do fabricante",
        url: "https://medicube.us/products/txa-niacinamide-capsule-cream",
      },
    ],
    skinTypes: ["Seca", "Oleosa", "Mista", "Sensível"],
    periods: ["manha", "noite"],
    texture: "Gel com cápsulas",
    summary: "Cuidado hidratante voltado à aparência de tom irregular.",
    amount: "Ajuste a proporção para uma textura mais leve ou mais rica.",
    frequency: "Manhã e noite",
    instructions:
      "Combine as cápsulas vermelhas com o gel e aplique após o sérum no rosto e pescoço.",
    ingredients: [
      {
        name: "Tranexamic Acid",
        role: "Ingrediente destacado na ficha oficial desta fórmula.",
      },
      {
        name: "Niacinamide",
        role: "Ingrediente destacado na ficha oficial desta fórmula.",
      },
      {
        name: "Alpha-Arbutin",
        role: "Ingrediente destacado na ficha oficial desta fórmula.",
      },
      {
        name: "Glutathione",
        role: "Ingrediente destacado na ficha oficial desta fórmula.",
      },
    ],
    care: [
      "Confira o rótulo da unidade recebida; fórmulas e apresentações podem variar por mercado.",
    ],
    gallery: [
      {
        src: "https://cdn.shopify.com/s/files/1/0156/3905/2336/files/TXA_00_84831587-cfc2-4ab9-b4a3-c98f0964cc41.jpg?width=960",
        alt: "Medicube TXA Niacinamide Capsule Cream — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0156/3905/2336/files/TXA_01_ba813a54-a2e0-4296-a16e-a66cce4bc52c.jpg?width=960",
        alt: "Medicube TXA Niacinamide Capsule Cream — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0156/3905/2336/files/TXA_02_843dcf31-e31d-4523-989d-238d34bff519.jpg?width=960",
        alt: "Medicube TXA Niacinamide Capsule Cream — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0156/3905/2336/files/TXA_03_e54b0c33-c4dc-4185-ac30-5a95542b1167.jpg?width=960",
        alt: "Medicube TXA Niacinamide Capsule Cream — imagem oficial",
        label: "Imagem do fabricante",
      },
    ],
    faqs: [
      {
        question: "Qual é a textura?",
        answer: "Gel com cápsulas. Confira os detalhes e a composição da sua apresentação.",
      },
      {
        question: "Como este item entra nos cuidados?",
        answer:
          "Combine as cápsulas vermelhas com o gel e aplique após o sérum no rosto e pescoço.",
      },
    ],
  },
  "mixsoon-soondy-centella-asiatica-essence": {
    category: "tratamento",
    aliases: ["Soondy Centella Asiatica Essence", "Mixsoon"],
    verified: true,
    sources: [
      {
        label: "Ficha do fabricante",
        url: "https://mixsoon.us/products/mixsoon-soondy-centella-essence-100ml",
      },
    ],
    skinTypes: [],
    periods: [],
    texture: "Essência aquosa",
    summary: "Essência com centella para um cuidado calmante e hidratante.",
    amount: "Algumas gotas, conforme o fabricante.",
    frequency: "Conforme a rotina e a embalagem",
    instructions:
      "Após limpeza e tônico, distribua algumas gotas no rosto e pressione suavemente até absorver.",
    ingredients: [],
    care: [
      "Confira o rótulo da unidade recebida; fórmulas e apresentações podem variar por mercado.",
    ],
    gallery: [
      {
        src: "https://cdn.shopify.com/s/files/1/0797/3299/8445/files/9022a705161ff42b7879d88f1fd6d0e8.png?width=960",
        alt: "Mixsoon Soondy Centella Asiatica Essence — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0797/3299/8445/files/over_b3944512-10be-4dc8-8c5b-a948b8efb939.jpg?width=960",
        alt: "Mixsoon Soondy Centella Asiatica Essence — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0797/3299/8445/files/01_92aa2c4d-36f5-4483-857e-e8af19f49067.jpg?width=960",
        alt: "Mixsoon Soondy Centella Asiatica Essence — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0797/3299/8445/files/03_36fb940b-cec8-4201-9da3-76c9e49b3fc7.jpg?width=960",
        alt: "Mixsoon Soondy Centella Asiatica Essence — imagem oficial",
        label: "Imagem do fabricante",
      },
    ],
    faqs: [
      {
        question: "Qual é a textura?",
        answer: "Essência aquosa. Confira os detalhes e a composição da sua apresentação.",
      },
      {
        question: "Como este item entra nos cuidados?",
        answer:
          "Após limpeza e tônico, distribua algumas gotas no rosto e pressione suavemente até absorver.",
      },
    ],
  },
  "medicube-triple-collagen-cream-50ml": {
    category: "hidratacao",
    aliases: ["Triple Collagen Cream", "Medicube"],
    verified: true,
    sources: [
      {
        label: "Ficha do fabricante",
        url: "https://medicube.us/products/deep-erasing-cream",
      },
    ],
    skinTypes: ["Seca", "Oleosa", "Mista"],
    periods: [],
    texture: "Creme nutritivo",
    summary: "Creme com colágeno, ácido hialurônico e elastina para hidratação e elasticidade.",
    amount: "Quantidade suficiente para uma camada uniforme.",
    frequency: "Conforme o rótulo",
    instructions:
      "Na etapa final dos cuidados, distribua uma quantidade adequada no rosto, do centro para fora, e pressione suavemente.",
    ingredients: [
      {
        name: "Collagen",
        role: "Ingrediente destacado na ficha oficial desta fórmula.",
      },
      {
        name: "Hyaluronic Acid",
        role: "Ingrediente destacado na ficha oficial desta fórmula.",
      },
      {
        name: "Premium French Elastin",
        role: "Ingrediente destacado na ficha oficial desta fórmula.",
      },
    ],
    care: [
      "Confira o rótulo da unidade recebida; fórmulas e apresentações podem variar por mercado.",
    ],
    gallery: [
      {
        src: "https://cdn.shopify.com/s/files/1/0156/3905/2336/files/00_12cf51a0-cf0c-42f3-931c-1cf9f88dd6c8.jpg?width=960",
        alt: "Medicube Triple Collagen Cream — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0156/3905/2336/files/01_e8cc03d7-29ff-488f-9ad1-faa4373f07fd.jpg?width=960",
        alt: "Medicube Triple Collagen Cream — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0156/3905/2336/files/02_d235c39b-a8bd-43fc-8786-10fde25c03b0.jpg?width=960",
        alt: "Medicube Triple Collagen Cream — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0156/3905/2336/files/03_f7bce1d9-2ab2-4626-9927-1c2d04473a0b.jpg?width=960",
        alt: "Medicube Triple Collagen Cream — imagem oficial",
        label: "Imagem do fabricante",
      },
    ],
    faqs: [
      {
        question: "Qual é a textura?",
        answer: "Creme nutritivo. Confira os detalhes e a composição da sua apresentação.",
      },
      {
        question: "Como este item entra nos cuidados?",
        answer:
          "Na etapa final dos cuidados, distribua uma quantidade adequada no rosto, do centro para fora, e pressione suavemente.",
      },
    ],
    composition:
      "Water, Glycerin, Dipropylene Glycol, Cetearyl Alcohol, Cyclopentasiloxane, Caprylic/Capric Triglyceride, Triethylhexano, Hydrogenated Polydecene, 1,2-Hexanediol, Niacinamide, Hydrogenatedpoly(C6-14 Olefin), Cyclohexasiloxane, Glyceryl Stearate Se, Dioscorea Japonica Root Extract, Aesculus Hippocastanum (Horse Chestnut) Extract, Laminaria Japonica Extract, Eclipta Prostrata Leaf Extract, Collagen Extract, Hydrogenated Lecithin, Argania Spinosa Kernel Oil, Sodium Hyaluronate, Cetearyl Olivate, C12-16 Alcohols, Dimethicone, Glyceryl Stearate, Peg-100 Stearate, Microcrystalline Cellulose, Cetearyl Glucoside, Sorbitan Olivate, Fructose, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Butylene Glycol, Squalane, Palmitic Acid, Betaine, Cellulose Gum, Hydrolyzed Corn Starch, Polysorbate 60, Ethylhexylglycerin, Adenosine, Hydrogenated Polyisobutene, Beta-Glucan, Alcohol, Disodium Edta, Isononyl Isononanoate, Polyglyceryl-10 Stearate, Sorbitan Isostearate, Sucrose, Stearic Acid, Butyrospermum Parkii (Shea) Butter, Polyglyceryl-2 Dipolyhydroxystearate, Fructooligosaccharides, Inulin Lauryl Carbamate, Hydrolyzed Hyaluronic Acid, Citric Acid, Disodium Stearoyl Glutamate, Collagen, Hydrolyzed Elastin, Hyaluronic Acid, Tocopherol, Leuconostoc/Radish Root Ferment Filtrate, Fragrance, Potassium Sorbate, Linalool, Benzyl Salicylate, Limonene, Hydroxycitronellal",
  },
  "mascara-facial-skin1004-poremizing-quick-clay-stick-mask": {
    category: "mascaras",
    aliases: ["Poremizing Quick Clay Stick Mask", "SKIN1004"],
    verified: true,
    sources: [
      {
        label: "Ficha do fabricante",
        url: "https://www.skin1004.com/products/poremizing-quick-clay-stick-mask",
      },
    ],
    skinTypes: ["Oleosa", "Mista", "Normal"],
    periods: [],
    texture: "Argila em bastão",
    summary: "Máscara de argila em bastão para excesso de oleosidade e aparência dos poros.",
    amount: "Camada uniforme nas áreas desejadas.",
    frequency: "Conforme o rótulo",
    instructions:
      "Após lavar o rosto, aplique evitando olhos e boca. Enxágue bem com água morna depois de 3 a 5 minutos.",
    ingredients: [
      {
        name: "Centella Asiatica Extract",
        role: "Ingrediente destacado na ficha oficial desta fórmula.",
      },
      {
        name: "Kaolin",
        role: "Ingrediente destacado na ficha oficial desta fórmula.",
      },
      {
        name: "Bentonite",
        role: "Ingrediente destacado na ficha oficial desta fórmula.",
      },
      {
        name: "Illite",
        role: "Ingrediente destacado na ficha oficial desta fórmula.",
      },
      {
        name: "Montmorillonite",
        role: "Ingrediente destacado na ficha oficial desta fórmula.",
      },
    ],
    care: [
      "Confira o rótulo da unidade recebida; fórmulas e apresentações podem variar por mercado.",
      "Confira a orientação para esfoliação e não some etapas esfoliantes sem avaliar os demais produtos da rotina.",
    ],
    gallery: [
      {
        src: "https://cdn.shopify.com/s/files/1/0590/4538/0253/files/skin1004-mask-pad-27g-poremizing-quick-clay-stick-mask-1259546235.png?width=960",
        alt: "SKIN1004 Poremizing Quick Clay Stick Mask — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0590/4538/0253/files/skin1004-mask-pad-27g-poremizing-quick-clay-stick-mask-1246455499.png?width=960",
        alt: "SKIN1004 Poremizing Quick Clay Stick Mask — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0590/4538/0253/files/skin1004-mask-pad-27g-poremizing-quick-clay-stick-mask-1244732306.png?width=960",
        alt: "SKIN1004 Poremizing Quick Clay Stick Mask — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0590/4538/0253/files/skin1004-mask-pad-27g-poremizing-quick-clay-stick-mask-1244732309.png?width=960",
        alt: "SKIN1004 Poremizing Quick Clay Stick Mask — imagem oficial",
        label: "Imagem do fabricante",
      },
    ],
    faqs: [
      {
        question: "Qual é a textura?",
        answer: "Argila em bastão. Confira os detalhes e a composição da sua apresentação.",
      },
      {
        question: "Como este item entra nos cuidados?",
        answer:
          "Após lavar o rosto, aplique evitando olhos e boca. Enxágue bem com água morna depois de 3 a 5 minutos.",
      },
    ],
    composition:
      "Water, Kaolin, Dipropylene Glycol, Glycerin, Titanium Dioxide (CI 77891), Butylene Glycol, Sodium Stearate, Centella Asiatica Extract, 1,2-Hexanediol, Phaseolus Angularis Seed Powder, Aloe Barbadensis Leaf Extract, Cetearyl Olivate, Propanediol, Sorbitan Olivate, Dimethicone, Iron Oxides (CI 77491), Ethylhexylglycerin, Sodium Phytate, Bentonite, Illite, Mineral Salts, Montmorillonite, Calamine",
  },
  "serum-facial-skin1004-madagascar-centella-poremizing-fresh-ampoule": {
    category: "tratamento",
    aliases: ["Madagascar Centella Poremizing Fresh Ampoule", "SKIN1004"],
    verified: true,
    sources: [
      {
        label: "Ficha do fabricante",
        url: "https://www.skin1004.com/products/poremizing-fresh-ampoule",
      },
    ],
    skinTypes: ["Oleosa", "Mista", "Sensível"],
    periods: [],
    texture: "Ampola leve e aquosa",
    summary: "Ampola leve com centella e sais minerais para cuidado dos poros.",
    amount: "Quantidade adequada, sem dose fixa publicada.",
    frequency: "Conforme o rótulo",
    instructions:
      "Distribua uma quantidade adequada na pele e pressione suavemente para ajudar na absorção.",
    ingredients: [
      {
        name: "Centella Asiatica Extract",
        role: "Ingrediente destacado na ficha oficial desta fórmula.",
      },
      {
        name: "Mineral Salts",
        role: "Ingrediente destacado na ficha oficial desta fórmula.",
      },
      {
        name: "Aloe Barbadensis Leaf Extract",
        role: "Ingrediente destacado na ficha oficial desta fórmula.",
      },
    ],
    care: [
      "Confira o rótulo da unidade recebida; fórmulas e apresentações podem variar por mercado.",
    ],
    gallery: [
      {
        src: "https://cdn.shopify.com/s/files/1/0590/4538/0253/products/skin1004-ampoule-serum-100ml-poremizing-fresh-ampoule-38642870780150.png?width=960",
        alt: "SKIN1004 Madagascar Centella Poremizing Fresh Ampoule — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0590/4538/0253/products/skin1004-ampoule-serum-100ml-poremizing-fresh-ampoule-38609117708534.jpg?width=960",
        alt: "SKIN1004 Madagascar Centella Poremizing Fresh Ampoule — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0590/4538/0253/products/skin1004-ampoule-serum-100ml-coming-soon-poremizing-fresh-ampoule-37221265637622.png?width=960",
        alt: "SKIN1004 Madagascar Centella Poremizing Fresh Ampoule — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0590/4538/0253/products/skin1004-ampoule-serum-100ml-poremizing-fresh-ampoule-38409159966966.jpg?width=960",
        alt: "SKIN1004 Madagascar Centella Poremizing Fresh Ampoule — imagem oficial",
        label: "Imagem do fabricante",
      },
    ],
    faqs: [
      {
        question: "Qual é a textura?",
        answer: "Ampola leve e aquosa. Confira os detalhes e a composição da sua apresentação.",
      },
      {
        question: "Como este item entra nos cuidados?",
        answer:
          "Distribua uma quantidade adequada na pele e pressione suavemente para ajudar na absorção.",
      },
    ],
  },
  "mixsoon-mung-bean-seed-essence-30ml1": {
    category: "tratamento",
    aliases: ["Mung Bean Seed Essence", "Mixsoon"],
    verified: false,
    sources: [
      {
        label: "Ficha do fabricante",
        url: "https://mixsoon.us/products/mixsoon-mung-bean-seed-essence-100ml-copy",
      },
    ],
    skinTypes: [],
    periods: [],
    texture: "Essência aquosa",
    summary: "Essência de semente de feijão-mungo para cuidado hidratante e calmante.",
    amount: "Algumas gotas.",
    frequency: "Conforme o rótulo",
    instructions:
      "Confira o modo de uso no rótulo desta apresentação. A versão atual do fabricante tem diferenças de apresentação e não foi aplicada automaticamente a este item.",
    ingredients: [],
    care: [
      "Confira o rótulo da unidade recebida; fórmulas e apresentações podem variar por mercado.",
      "A ficha atual do fabricante pode corresponder a outra apresentação. Confirme a composição da unidade recebida.",
    ],
    gallery: [],
    faqs: [],
  },
  "serum-facial-celimax-the-vita-a-retinal-shot-tightening-booster-de-15-ml": {
    category: "tratamento",
    aliases: ["Celimax The Vita A Retinal Shot Tightening Booster", "Celimax"],
    verified: true,
    sources: [
      {
        label: "Ficha do fabricante",
        url: "https://celimax.us/products/the-vita-a-retinal-shot-tightening-booster",
      },
    ],
    skinTypes: ["Seca"],
    periods: ["noite"],
    texture: "Sérum concentrado",
    summary: "Booster com retinal para cuidados específicos com textura e firmeza.",
    amount: "Pequena quantidade nas áreas de aplicação.",
    frequency: "Noites alternadas no início, conforme o fabricante",
    instructions:
      "Se estiver começando com retinol ou retinal, o fabricante orienta noites alternadas nas duas primeiras semanas. Use pequena quantidade nas áreas desejadas; reduza quantidade e frequência em caso de irritação.",
    ingredients: [],
    care: [
      "Confira o rótulo da unidade recebida; fórmulas e apresentações podem variar por mercado.",
      "Este item contém retinal ou retinol. Não monte combinações de ativos por conta própria; confira as restrições e a frequência do fabricante.",
    ],
    gallery: [
      {
        src: "https://cdn.shopify.com/s/files/1/0400/6930/0374/files/celimax-serum-ampoule-15ml-the-vita-a-retinal-shot-tightening-booster-1234217397.jpg?width=960",
        alt: "Celimax Celimax The Vita A Retinal Shot Tightening Booster — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0400/6930/0374/files/celimax-serum-ampoule-15ml-the-vita-a-retinal-shot-tightening-booster-36863029739670.jpg?width=960",
        alt: "Celimax Celimax The Vita A Retinal Shot Tightening Booster — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0400/6930/0374/files/celimax-serum-ampoule-15ml-2ea-the-vita-a-retinal-shot-tightening-booster-1248333963.jpg?width=960",
        alt: "Celimax Celimax The Vita A Retinal Shot Tightening Booster — imagem oficial",
        label: "Imagem do fabricante",
      },
    ],
    faqs: [
      {
        question: "Qual é a textura?",
        answer: "Sérum concentrado. Confira os detalhes e a composição da sua apresentação.",
      },
      {
        question: "Como este item entra nos cuidados?",
        answer:
          "Se estiver começando com retinol ou retinal, o fabricante orienta noites alternadas nas duas primeiras semanas. Use pequena quantidade nas áreas desejadas; reduza quantidade e frequência em caso de irritação.",
      },
    ],
    composition:
      "Water, Butylene Glycol, Glycerin, Caprylic/Capric Triglyceride, Cetearyl Alcohol, Niacinamide, Diisostearyl Malate, 1,2-Hexanediol, Polypropylsilsesquioxane, Panthenol, Cetearyl Olivate, Cetearyl Glucoside, Sorbitan Olivate, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Lecithin, Carbomer, Arginine, Dimethicone/Vinyl Dimethicone Crosspolymer, Tocopherol, Retinal, Xanthan Gum, Ethylhexylglycerin, Adenosine, Sorbitan Isostearate, Sodium Lactate, Hydrolyzed Sponge, Disodium EDTA, Polysorbate 20, Ascorbic Acid, Glucose, Palmitoyl Tripeptide-1, Palmitoyl Tetrapeptide-7",
  },
  "esfoliante-facial-beauty-of-joseon-apricot-blossom-peeling-100-ml": {
    category: "esfoliacao",
    aliases: ["Esfoliante Facial Beauty Of Joseon Apricot Blossom Peeling", "Beauty of Joseon"],
    verified: true,
    sources: [
      {
        label: "Ficha do fabricante",
        url: "https://beautyofjoseon.com/products/apricot-blossom-peeling-gel",
      },
    ],
    skinTypes: [],
    periods: [],
    texture: "Gel esfoliante",
    summary: "Gel de esfoliação para aparência de textura irregular e opacidade.",
    amount: "Quantidade suficiente para distribuir sem friccionar em excesso.",
    frequency: "Conforme a orientação da embalagem",
    instructions:
      "Aplique sobre pele seca, evitando olhos e boca. Massageie suavemente e enxágue com água morna, conforme o fabricante.",
    ingredients: [
      {
        name: "Plum Blossom Water",
        role: "Ingrediente destacado na ficha oficial desta fórmula.",
      },
    ],
    care: [
      "Confira o rótulo da unidade recebida; fórmulas e apresentações podem variar por mercado.",
      "Confira a orientação para esfoliação e não some etapas esfoliantes sem avaliar os demais produtos da rotina.",
    ],
    gallery: [
      {
        src: "https://cdn.shopify.com/s/files/1/0558/4135/7989/files/apricot-blossom-peeling-gel-1-front.webp?width=960",
        alt: "Beauty of Joseon Esfoliante Facial Beauty Of Joseon Apricot Blossom Peeling — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0558/4135/7989/files/apricot-blossom-peeling-gel-3.webp?width=960",
        alt: "Beauty of Joseon Esfoliante Facial Beauty Of Joseon Apricot Blossom Peeling — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0558/4135/7989/files/apricot-blossom-peeling-gel-4.webp?width=960",
        alt: "Beauty of Joseon Esfoliante Facial Beauty Of Joseon Apricot Blossom Peeling — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0558/4135/7989/files/apricot-blossom-peeling-gel-5.webp?width=960",
        alt: "Beauty of Joseon Esfoliante Facial Beauty Of Joseon Apricot Blossom Peeling — imagem oficial",
        label: "Imagem do fabricante",
      },
    ],
    faqs: [
      {
        question: "Qual é a textura?",
        answer: "Gel esfoliante. Confira os detalhes e a composição da sua apresentação.",
      },
      {
        question: "Como este item entra nos cuidados?",
        answer:
          "Aplique sobre pele seca, evitando olhos e boca. Massageie suavemente e enxágue com água morna, conforme o fabricante.",
      },
    ],
    composition:
      "Water, Prunus Mume Flower Water, Cellulose, Methylpropanediol, 1,2-Hexanediol, Carbomer, Arginine, Ethylhexylglycerin, Allantoin, Sorbitol, Disodium EDTA, Butylene Glycol, Pyrus Malus (Apple) Fruit Extract, Camellia Sinensis Leaf Extract, Houttuynia Cordata Extract, Nelumbo Nucifera Flower Extract, Oryza Sativa (Rice) Extract, Prunus Mume Fruit Extract, Vaccinium Angustifolium (Blueberry) Fruit Extract",
  },
  "oleo-facial-de-limpeza-light-cleasing-oil-centella-skin-1004": {
    category: "limpeza",
    aliases: ["Oleo Facial De Limpeza Light Cleasing Oil Centella", "SKIN1004"],
    verified: true,
    sources: [
      {
        label: "Ficha do fabricante",
        url: "https://www.skin1004.com/products/skin1004-madagascar-centella-light-cleansing-oil",
      },
    ],
    skinTypes: ["Seca", "Mista", "Normal"],
    periods: [],
    texture: "Óleo de limpeza",
    summary: "Óleo de limpeza com centella para remover maquiagem, protetor e resíduos.",
    amount: "Quantidade adequada indicada no rótulo.",
    frequency: "Na etapa de limpeza, conforme o rótulo",
    instructions:
      "Com mãos e rosto secos, massageie o óleo na pele. Acrescente água para emulsificar e enxágue bem.",
    ingredients: [
      {
        name: "Centella Asiatica Extract",
        role: "Ingrediente destacado na ficha oficial desta fórmula.",
      },
      {
        name: "Citrus Aurantium Bergamia (Bergamot) Fruit Oil",
        role: "Ingrediente destacado na ficha oficial desta fórmula.",
      },
      {
        name: "Helianthus Annuus (Sunflower) Seed Oil",
        role: "Ingrediente destacado na ficha oficial desta fórmula.",
      },
      {
        name: "Olea Europaea (Olive) Fruit Oil",
        role: "Ingrediente destacado na ficha oficial desta fórmula.",
      },
      {
        name: "Simmondsia Chinensis (Jojoba) Seed Oil",
        role: "Ingrediente destacado na ficha oficial desta fórmula.",
      },
    ],
    care: [
      "Confira o rótulo da unidade recebida; fórmulas e apresentações podem variar por mercado.",
    ],
    gallery: [
      {
        src: "https://cdn.shopify.com/s/files/1/0590/4538/0253/files/skin1004-cleanser-centella-light-cleansing-oil-1259546240.png?width=960",
        alt: "SKIN1004 Oleo Facial De Limpeza Light Cleasing Oil Centella — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0590/4538/0253/products/skin1004-cleanser-madagascar-centella-light-cleansing-oil-30259218743453.gif?width=960",
        alt: "SKIN1004 Oleo Facial De Limpeza Light Cleasing Oil Centella — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0590/4538/0253/products/skin1004-cleanser-centella-light-cleansing-oil-38409133490422.jpg?width=960",
        alt: "SKIN1004 Oleo Facial De Limpeza Light Cleasing Oil Centella — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0590/4538/0253/products/skin1004-cleanser-centella-light-cleansing-oil-38409133654262.jpg?width=960",
        alt: "SKIN1004 Oleo Facial De Limpeza Light Cleasing Oil Centella — imagem oficial",
        label: "Imagem do fabricante",
      },
    ],
    faqs: [
      {
        question: "Qual é a textura?",
        answer: "Óleo de limpeza. Confira os detalhes e a composição da sua apresentação.",
      },
      {
        question: "Como este item entra nos cuidados?",
        answer:
          "Com mãos e rosto secos, massageie o óleo na pele. Acrescente água para emulsificar e enxágue bem.",
      },
    ],
  },
  "balsamo-facial-de-limpeza-dr-althea-pure-grinding-cleansing-balm-de-50-ml": {
    category: "limpeza",
    aliases: ["Bálsamo Facial De Limpeza Dr. Althea Pure Grinding Cleansing Balm", "Dr. Althea"],
    verified: false,
    sources: [],
    skinTypes: [],
    periods: [],
    texture: "",
    summary: "O primeiro passo do seu cuidado",
    amount: "",
    frequency: "",
    instructions: "",
    ingredients: [],
    care: [
      "Confira o rótulo da unidade recebida; fórmulas e apresentações podem variar por mercado.",
    ],
    gallery: [],
    faqs: [],
  },
  "serum-facial-medicube-pdrn-pink-collagen-1a6be": {
    category: "tratamento",
    aliases: ["PDRN Pink Collagen 7500", "Medicube"],
    verified: false,
    sources: [],
    skinTypes: [],
    periods: [],
    texture: "",
    summary: "PDRN e colágeno na sua rotina",
    amount: "",
    frequency: "",
    instructions: "",
    ingredients: [],
    care: [
      "Confira o rótulo da unidade recebida; fórmulas e apresentações podem variar por mercado.",
    ],
    gallery: [],
    faqs: [],
  },
  "medicube-age-r-booster-pro-6-em-1-rosa": {
    category: "tecnologia",
    aliases: ["Age-R Booster Pro 6 Em 1 - Rosa", "Medicube"],
    verified: true,
    sources: [
      {
        label: "Ficha do fabricante",
        url: "https://medicube.us/products/age-r-booster-pro",
      },
    ],
    skinTypes: ["Seca", "Oleosa", "Mista", "Sensível"],
    periods: [],
    texture: "Dispositivo",
    summary: "Dispositivo de cuidados com a pele com orientações próprias para cada modo.",
    amount: "Não se aplica a um cosmético.",
    frequency: "Varia conforme o modo",
    instructions:
      "Consulte o manual oficial do Booster Pro para escolher modo, frequência e intensidade. Os modos têm preparos e movimentos diferentes.",
    ingredients: [],
    care: [
      "Confira o rótulo da unidade recebida; fórmulas e apresentações podem variar por mercado.",
      "O dispositivo não entra automaticamente em rotinas. Consulte os modos e restrições no manual oficial.",
    ],
    gallery: [
      {
        src: "https://cdn.shopify.com/s/files/1/0156/3905/2336/files/250820_BoosterPro01_1.jpg?width=960",
        alt: "Medicube Age-R Booster Pro 6 Em 1 - Rosa — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0156/3905/2336/files/250820_BoosterPro03_20289f26-070e-4ead-95a3-b3e3164bb0c1.jpg?width=960",
        alt: "Medicube Age-R Booster Pro 6 Em 1 - Rosa — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0156/3905/2336/files/250820_BoosterPro02_2b226509-fa9a-4326-b2ad-6097bb47762c.jpg?width=960",
        alt: "Medicube Age-R Booster Pro 6 Em 1 - Rosa — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0156/3905/2336/files/250820_BoosterPro05_edc2b124-f9b1-4b4b-bde2-3c7ac032c0e0.jpg?width=960",
        alt: "Medicube Age-R Booster Pro 6 Em 1 - Rosa — imagem oficial",
        label: "Imagem do fabricante",
      },
    ],
    faqs: [
      {
        question: "Qual é a textura?",
        answer: "Dispositivo. Confira os detalhes e a composição da sua apresentação.",
      },
      {
        question: "Como este item entra nos cuidados?",
        answer:
          "Consulte o manual oficial do Booster Pro para escolher modo, frequência e intensidade. Os modos têm preparos e movimentos diferentes.",
      },
    ],
  },
  "kojic-acid-turmeric-vita-capsule-cream-vy68v": {
    category: "hidratacao",
    aliases: ["Kojic Acid Turmeric Vita Capsule Cream", "Medicube"],
    verified: true,
    sources: [
      {
        label: "Ficha do fabricante",
        url: "https://medicube.us/products/kojic-acid-turmeric-vita-capsule-cream",
      },
    ],
    skinTypes: ["Seca", "Mista", "Sensível"],
    periods: [],
    texture: "Gel com cápsulas",
    summary: "Creme com cápsulas voltado à aparência do tom irregular e hidratação.",
    amount: "Proporção ajustável; siga o guia oficial.",
    frequency: "Conforme o rótulo",
    instructions:
      "Misture gel e cápsulas conforme a textura desejada. O fabricante orienta ajustar a mistura para áreas mais oleosas ou mais secas.",
    ingredients: [
      {
        name: "Kojic Acid",
        role: "Ingrediente destacado na ficha oficial desta fórmula.",
      },
      {
        name: "Turmeric",
        role: "Ingrediente destacado na ficha oficial desta fórmula.",
      },
      {
        name: "Vita C",
        role: "Ingrediente destacado na ficha oficial desta fórmula.",
      },
    ],
    care: [
      "Confira o rótulo da unidade recebida; fórmulas e apresentações podem variar por mercado.",
    ],
    gallery: [
      {
        src: "https://cdn.shopify.com/s/files/1/0156/3905/2336/files/00_19d8c4ec-98ef-4dce-acc1-cb44cbf174ee.jpg?width=960",
        alt: "Medicube Kojic Acid Turmeric Vita Capsule Cream — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0156/3905/2336/files/01_785c0338-991d-498e-8d6e-c6a12f44909d.jpg?width=960",
        alt: "Medicube Kojic Acid Turmeric Vita Capsule Cream — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0156/3905/2336/files/02_7dee0cca-c748-40f5-8f17-b552bee513a4.jpg?width=960",
        alt: "Medicube Kojic Acid Turmeric Vita Capsule Cream — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0156/3905/2336/files/03_2b626701-fc6c-4702-9e96-a2157a4f7f9d.jpg?width=960",
        alt: "Medicube Kojic Acid Turmeric Vita Capsule Cream — imagem oficial",
        label: "Imagem do fabricante",
      },
    ],
    faqs: [
      {
        question: "Qual é a textura?",
        answer: "Gel com cápsulas. Confira os detalhes e a composição da sua apresentação.",
      },
      {
        question: "Como este item entra nos cuidados?",
        answer:
          "Misture gel e cápsulas conforme a textura desejada. O fabricante orienta ajustar a mistura para áreas mais oleosas ou mais secas.",
      },
    ],
    composition:
      "Water, Butylene Glycol, Niacinamide, Glycerin, 1,2-Hexanediol, Caprylic/Capric Triglyceride, Diethoxyethyl Succinate, Arginine, Cetearyl Alcohol, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Coptis Japonica Root Extract, Cetearyl Olivate, Caesalpinia Spinosa Gum, Coco-Caprylate/Caprate, Cetearyl Glucoside, Sorbitan Olivate, Curcuma Longa (Turmeric) Root Extract, Xanthan Gum, Carbomer, Simethicone, Ethylhexylglycerin, Adenosine, Dilinoleic Acid/Butanediol Copolymer, C9-12 Alkane, Kojic Acid, Cyanocobalamin, Castor Oil/IPDI Copolymer, Ascorbic Acid, Castanea Crenata (Chestnut) Shell Extract, Citrus Junos Peel Extract, Fragaria Ananassa (Strawberry) Fruit Extract, Tocopherol, Allantoin, Alpha-Arbutin, Caffeine, Ferulic Acid, Retinol, Undecane, Octyldodecanol, Tridecane, Hydrogenated Lecithin, Ceramide NP, Sodium Hyaluronate, Caprylyl Glycol, Hydroxypropyltrimonium Hyaluronate, Acetyl Hexapeptide-8, Copper Tripeptide-1, Palmitoyl Pentapeptide-4, Hydrolyzed Hyaluronic Acid, Palmitoyl Hexapeptide-12, Sodium Acetylated Hyaluronate, Hyaluronic Acid, Hydrolyzed Sodium Hyaluronate, Sodium Hyaluronate Crosspolymer, Potassium Hyaluronate",
  },
  "collagen-firming-sun-cream-vrpww": {
    category: "protecao",
    aliases: ["Collagen Firming Sun Cream", "Medicube"],
    verified: false,
    sources: [],
    skinTypes: [],
    periods: [],
    texture: "",
    summary: "Proteção solar na rotina da manhã",
    amount: "",
    frequency: "",
    instructions: "",
    ingredients: [],
    care: [
      "Confira o rótulo da unidade recebida; fórmulas e apresentações podem variar por mercado.",
    ],
    gallery: [],
    faqs: [],
  },
  "medicube-collagen-jelly-cream-110ml": {
    category: "hidratacao",
    aliases: ["Collagen Jelly Cream", "Medicube"],
    verified: false,
    sources: [
      {
        label: "Ficha do fabricante",
        url: "https://medicube.us/products/collagen-niacinamide-jelly-cream",
      },
    ],
    skinTypes: [],
    periods: ["manha", "noite"],
    texture: "Gel-creme",
    summary: "Hidratante em textura jelly com colágeno e niacinamida.",
    amount: "Quantidade moderada, conforme o guia oficial.",
    frequency: "Manhã e noite",
    instructions:
      "Confira o modo de uso no rótulo desta apresentação. A versão atual do fabricante tem diferenças de apresentação e não foi aplicada automaticamente a este item.",
    ingredients: [],
    care: [
      "Confira o rótulo da unidade recebida; fórmulas e apresentações podem variar por mercado.",
      "A ficha atual do fabricante pode corresponder a outra apresentação. Confirme a composição da unidade recebida.",
    ],
    gallery: [],
    faqs: [],
  },
  "medicube-deep-vita-c-capsule-cream": {
    category: "hidratacao",
    aliases: ["Deep Vita C Capsule Cream", "Medicube"],
    verified: true,
    sources: [
      {
        label: "Ficha do fabricante",
        url: "https://medicube.us/products/deep-vita-c-capsule-cream",
      },
    ],
    skinTypes: ["Seca", "Oleosa", "Mista", "Sensível"],
    periods: [],
    texture: "Gel com cápsulas",
    summary: "Creme em cápsulas para cuidado com luminosidade e hidratação.",
    amount: "Quantidade e proporção conforme o rótulo.",
    frequency: "Conforme a embalagem",
    instructions:
      "Confira no guia oficial a mistura das cápsulas com o gel e a aplicação indicada para a sua apresentação.",
    ingredients: [
      {
        name: "Vitamin C & E",
        role: "Ingrediente destacado na ficha oficial desta fórmula.",
      },
      {
        name: "Alpha Arbutin",
        role: "Ingrediente destacado na ficha oficial desta fórmula.",
      },
      {
        name: "Niacinamide",
        role: "Ingrediente destacado na ficha oficial desta fórmula.",
      },
    ],
    care: [
      "Confira o rótulo da unidade recebida; fórmulas e apresentações podem variar por mercado.",
    ],
    gallery: [
      {
        src: "https://cdn.shopify.com/s/files/1/0156/3905/2336/files/c096afcff419378df8afcb96182a4365.jpg?width=960",
        alt: "Medicube Deep Vita C Capsule Cream — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0156/3905/2336/files/8_e377afc1-de40-4d99-a1bf-4d84b539fa91.jpg?width=960",
        alt: "Medicube Deep Vita C Capsule Cream — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0156/3905/2336/files/01-_ai.jpg?width=960",
        alt: "Medicube Deep Vita C Capsule Cream — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0156/3905/2336/files/05_9d79f177-d5b5-4808-97b5-68aa657cd7f4.jpg?width=960",
        alt: "Medicube Deep Vita C Capsule Cream — imagem oficial",
        label: "Imagem do fabricante",
      },
    ],
    faqs: [
      {
        question: "Qual é a textura?",
        answer: "Gel com cápsulas. Confira os detalhes e a composição da sua apresentação.",
      },
      {
        question: "Como este item entra nos cuidados?",
        answer:
          "Confira no guia oficial a mistura das cápsulas com o gel e a aplicação indicada para a sua apresentação.",
      },
    ],
    composition:
      "Water, Glycerin, Water, Niacinamide, Methylpropanediol, Propanediol, 1,2-Hexanediol, Butylene Glycol, Dipropylene Glycol, Caprylic/Capric Triglyceride, Glycereth-26, Ethylhexyl Palmitate, Cetearyl Alcohol, Arginine, Carbomer, Ammonium Acryloyldimethyltaurate/VP Copolymer, Cetearyl Olivate, Helianthus Annuus (Sunflower) Seed Oil, Sorbitan Olivate, Simethicone, Polyglyceryl-10 Laurate, Ethylhexylglycerin, Adenosine, Fragrance, Polyacrylate-13, Glycine Soja (Soybean) Oil, Disodium EDTA, Polyisobutene, Hydrolyzed Sclerotium Gum, Glyceryl Stearate, Gluconolactone, Polysorbate 20, Sorbitan Isostearate, Hydrogenated Lecithin, Bixa Orellana Seed Oil, Polyglyceryl-10 Stearate, Alpha-Arbutin, Panthenol, Sodium Ascorbyl Phosphate, Pentylene Glycol, Ferulic acid, Tocopherol, Ascorbyl Glucoside, 3-O-Ethyl Ascorbic Acid, Bisabolol, Ascorbic Acid, Hydroxyphenyl Propamidobenzoic Acid, Pyridoxine, Ubiquinone, Biotin, Folic Acid, Sodium Hyaluronate, Ascorbyl Propyl Hyaluronate, Ascorbyl Palmitate, Cyanocobalamin, Thiamine HCl, Riboflavin, Linoleic Acid, Beta-Carotene, Rutin, Hydroxycinnamic Acid",
  },
  "kojic-acid-turmeric-vita-jelly-mist-serum-jthn7": {
    category: "tratamento",
    aliases: ["Kojic Acid Turmeric Vita Jelly Mist Serum", "Medicube"],
    verified: true,
    sources: [
      {
        label: "Ficha do fabricante",
        url: "https://medicube.us/products/turmeric-vitamin-gold-jelly-mist-serum",
      },
    ],
    skinTypes: ["Seca", "Oleosa", "Mista", "Sensível"],
    periods: [],
    texture: "Bruma em sérum",
    summary: "Sérum em spray com duas texturas, para hidratação e luminosidade.",
    amount: "Borrifadas conforme o uso indicado pelo fabricante.",
    frequency: "Conforme o rótulo",
    instructions:
      "Agite para misturar as fases. Para efeito de bruma, o fabricante orienta borrifar de 10 a 20 cm; confira o rótulo e evite olhos e inalação.",
    ingredients: [
      {
        name: "Kojic Acid",
        role: "Ingrediente destacado na ficha oficial desta fórmula.",
      },
      {
        name: "Turmeric",
        role: "Ingrediente destacado na ficha oficial desta fórmula.",
      },
      {
        name: "Vitamin C",
        role: "Ingrediente destacado na ficha oficial desta fórmula.",
      },
      {
        name: "Panthenol",
        role: "Ingrediente destacado na ficha oficial desta fórmula.",
      },
    ],
    care: [
      "Confira o rótulo da unidade recebida; fórmulas e apresentações podem variar por mercado.",
    ],
    gallery: [
      {
        src: "https://cdn.shopify.com/s/files/1/0156/3905/2336/files/00_4a4a0fc0-010f-4474-a437-27506a0cd9a6.jpg?width=960",
        alt: "Medicube Kojic Acid Turmeric Vita Jelly Mist Serum — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0156/3905/2336/files/01_3b879f5d-3a9f-425c-8b96-30de324d9f93.jpg?width=960",
        alt: "Medicube Kojic Acid Turmeric Vita Jelly Mist Serum — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0156/3905/2336/files/02_311c08a2-fcd1-4735-8a1e-2eb8f9ce1096.jpg?width=960",
        alt: "Medicube Kojic Acid Turmeric Vita Jelly Mist Serum — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0156/3905/2336/files/03_dc9cd19e-4e57-49d3-9b66-c7762e8a63f1.jpg?width=960",
        alt: "Medicube Kojic Acid Turmeric Vita Jelly Mist Serum — imagem oficial",
        label: "Imagem do fabricante",
      },
    ],
    faqs: [
      {
        question: "Qual é a textura?",
        answer: "Bruma em sérum. Confira os detalhes e a composição da sua apresentação.",
      },
      {
        question: "Como este item entra nos cuidados?",
        answer:
          "Agite para misturar as fases. Para efeito de bruma, o fabricante orienta borrifar de 10 a 20 cm; confira o rótulo e evite olhos e inalação.",
      },
    ],
  },
  "zero-pore-blackhead-mud-mask-nv7oa": {
    category: "mascaras",
    aliases: ["Zero Pore Blackhead Mud Mask", "Medicube"],
    verified: true,
    sources: [
      {
        label: "Ficha do fabricante",
        url: "https://medicube.us/products/zero-pore-blackhead-mud-mask",
      },
    ],
    skinTypes: ["Seca", "Oleosa", "Mista"],
    periods: [],
    texture: "Máscara de argila",
    summary: "Máscara de argila para limpeza e cuidado com excesso de oleosidade.",
    amount: "Quantidade suficiente para cobrir as áreas desejadas.",
    frequency: "Conforme o rótulo",
    instructions:
      "Depois da limpeza, com a pele seca, distribua evitando olhos e boca. Enxágue com água morna após 3 a 5 minutos, conforme o fabricante.",
    ingredients: [
      {
        name: "Bentonite",
        role: "Ingrediente destacado na ficha oficial desta fórmula.",
      },
      {
        name: "Kaolin",
        role: "Ingrediente destacado na ficha oficial desta fórmula.",
      },
    ],
    care: [
      "Confira o rótulo da unidade recebida; fórmulas e apresentações podem variar por mercado.",
      "Confira a orientação para esfoliação e não some etapas esfoliantes sem avaliar os demais produtos da rotina.",
    ],
    gallery: [
      {
        src: "https://cdn.shopify.com/s/files/1/0156/3905/2336/files/00_2ddf4c5b-f021-4196-a560-5f52d5c59b89.jpg?width=960",
        alt: "Medicube Zero Pore Blackhead Mud Mask — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0156/3905/2336/files/02_c3ebcd93-9c9f-4500-bd35-c0025a4ee41d.jpg?width=960",
        alt: "Medicube Zero Pore Blackhead Mud Mask — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0156/3905/2336/files/03_397aed9c-38db-4b4d-9440-7cae6c71f8db.jpg?width=960",
        alt: "Medicube Zero Pore Blackhead Mud Mask — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0156/3905/2336/files/04_867c0459-a94e-40d3-bd9a-70400edabe8d.jpg?width=960",
        alt: "Medicube Zero Pore Blackhead Mud Mask — imagem oficial",
        label: "Imagem do fabricante",
      },
    ],
    faqs: [
      {
        question: "Qual é a textura?",
        answer: "Máscara de argila. Confira os detalhes e a composição da sua apresentação.",
      },
      {
        question: "Como este item entra nos cuidados?",
        answer:
          "Depois da limpeza, com a pele seca, distribua evitando olhos e boca. Enxágue com água morna após 3 a 5 minutos, conforme o fabricante.",
      },
    ],
    composition:
      "Water, Kaolin (CI 77004), Bentonite, Methylpropanediol, 1,2-Hexanediol, Sodium Hyaluronate, Chlorella Vulgaris Extract, Citrus Aurantium Bergamia (Bergamot) Fruit Oil, Citrus Limon (Lemon) Peel Oil, Citrus Aurantium Dulcis (Orange) Peel Oil, Cynanchum Atratum Extract, Althaea Rosea Flower Extract, Oenothera Biennis (Evening Primrose) Flower Extract, Pinus Palustris Leaf Extract, Pueraria Lobata Root Extract, Ulmus Davidiana Root Extract, Diospyros Kaki Leaf Extract, Vitis Vinifera (Grape) Fruit Extract, Carthamus Tinctorius (Safflower) Flower Extract, Coffea Arabica (Coffee) Seed Extract, Polygonum Cuspidatum Root Extract, Camellia Sinensis Leaf Extract, Castanea Crenata (Chestnut) Shell Extract, Zanthoxylum Piperitum Fruit Extract, Tetrasodium Pyrophosphate, Magnesium Aluminum Silicate, Caprylyl Glycol, Cellulose, Glucose, Butylene Glycol, Allantoin, Fructooligosaccharides, Fructose, Ethylhexylglycerin, Sodium Phytate, Tocopherol, Canadian Colloidal Clay, Gluconolactone, Salicylic Acid, Glycolic Acid, Pentylene Glycol, Montmorillonite, Illite, Methyl Diisopropyl Propionamide, Copper Tripeptide-1, Xanthan Gum, Caffeine, Limonene, Ferric Ammonium Ferrocyanide (CI 77510), Guaiazulene",
  },
  "tonico-facial-skin1004-madagascar-centella-toning-toner": {
    category: "tonico",
    aliases: ["Tônico Facial Madagascar Centella Toning Toner", "SKIN1004"],
    verified: true,
    sources: [
      {
        label: "Ficha do fabricante",
        url: "https://www.skin1004.com/products/skin1004-madagascar-centella-toning-toner",
      },
    ],
    skinTypes: ["Normal", "Sensível"],
    periods: [],
    texture: "Tônico aquoso",
    summary: "Tônico com centella e PHA para esfoliação suave e cuidado calmante.",
    amount: "Quantidade adequada para distribuir na pele.",
    frequency: "Conforme o rótulo",
    instructions:
      "Aplique uma quantidade adequada na palma ou em algodão e pressione delicadamente na pele para absorver.",
    ingredients: [
      {
        name: "Centella Asiatica Extract",
        role: "Ingrediente destacado na ficha oficial desta fórmula.",
      },
      {
        name: "Gluconolactone",
        role: "Ingrediente destacado na ficha oficial desta fórmula.",
      },
      {
        name: "Betaine",
        role: "Ingrediente destacado na ficha oficial desta fórmula.",
      },
    ],
    care: [
      "Confira o rótulo da unidade recebida; fórmulas e apresentações podem variar por mercado.",
      "Confira a orientação para esfoliação e não some etapas esfoliantes sem avaliar os demais produtos da rotina.",
    ],
    gallery: [
      {
        src: "https://cdn.shopify.com/s/files/1/0590/4538/0253/products/skin1004-toner-centella-toning-toner-38642837750006.png?width=960",
        alt: "SKIN1004 Tônico Facial Madagascar Centella Toning Toner — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0590/4538/0253/products/skin1004-tonner-madagascar-centella-toning-toner-30259313770653.gif?width=960",
        alt: "SKIN1004 Tônico Facial Madagascar Centella Toning Toner — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0590/4538/0253/files/skin1004-toner-30ml-centella-toning-toner-40739326460150.png?width=960",
        alt: "SKIN1004 Tônico Facial Madagascar Centella Toning Toner — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0590/4538/0253/files/skin1004-toner-400ml-centella-toning-toner-40739326492918.png?width=960",
        alt: "SKIN1004 Tônico Facial Madagascar Centella Toning Toner — imagem oficial",
        label: "Imagem do fabricante",
      },
    ],
    faqs: [
      {
        question: "Qual é a textura?",
        answer: "Tônico aquoso. Confira os detalhes e a composição da sua apresentação.",
      },
      {
        question: "Como este item entra nos cuidados?",
        answer:
          "Aplique uma quantidade adequada na palma ou em algodão e pressione delicadamente na pele para absorver.",
      },
    ],
    composition:
      "Water, Dipropylene Glycol, Centella Asiatica Extract, 1,2-Hexanediol, Niacinamide, Sodium Citrate, Gluconolactone, Ethylhexylglycerin, Adenosine, Disodium EDTA, Dipotassium Glycyrrhizate, Betaine, Hyaluronic Acid, Carbomer, Tromethamine",
  },
  "creme-facial-centella-soothing": {
    category: "hidratacao",
    aliases: ["Creme Facial Centella Soothing", "Medicube"],
    verified: true,
    sources: [
      {
        label: "Ficha do fabricante",
        url: "https://www.skin1004.com/products/skin1004-madagascar-centella-soothing-cream",
      },
    ],
    skinTypes: ["Normal", "Sensível"],
    periods: [],
    texture: "Gel-creme",
    summary: "Gel-creme não pegajoso com centella para hidratação e conforto.",
    amount: "Quantidade adequada para distribuir no rosto.",
    frequency: "Conforme o rótulo",
    instructions:
      "Distribua uma quantidade adequada no rosto e pressione com as palmas. Use como etapa final dos cuidados, segundo o fabricante.",
    ingredients: [
      {
        name: "Centella Asiatica Extract",
        role: "Ingrediente destacado na ficha oficial desta fórmula.",
      },
      {
        name: "Trehalose",
        role: "Ingrediente destacado na ficha oficial desta fórmula.",
      },
      {
        name: "Sodium Hyaluronate",
        role: "Ingrediente destacado na ficha oficial desta fórmula.",
      },
      {
        name: "Ceramide NP",
        role: "Ingrediente destacado na ficha oficial desta fórmula.",
      },
      {
        name: "Cholesterol",
        role: "Ingrediente destacado na ficha oficial desta fórmula.",
      },
    ],
    care: [
      "Confira o rótulo da unidade recebida; fórmulas e apresentações podem variar por mercado.",
    ],
    gallery: [
      {
        src: "https://cdn.shopify.com/s/files/1/0590/4538/0253/files/skin1004-cream-centella-soothing-cream-1259546233.png?width=960",
        alt: "Medicube Creme Facial Centella Soothing — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0590/4538/0253/products/skin1004-cream-madagascar-centella-soothing-cream-30259271991453.gif?width=960",
        alt: "Medicube Creme Facial Centella Soothing — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0590/4538/0253/products/skin1004-cream-centella-soothing-cream-38642833588470.png?width=960",
        alt: "Medicube Creme Facial Centella Soothing — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0590/4538/0253/products/skin1004-cream-centella-soothing-cream-38409109831926.jpg?width=960",
        alt: "Medicube Creme Facial Centella Soothing — imagem oficial",
        label: "Imagem do fabricante",
      },
    ],
    faqs: [
      {
        question: "Qual é a textura?",
        answer: "Gel-creme. Confira os detalhes e a composição da sua apresentação.",
      },
      {
        question: "Como este item entra nos cuidados?",
        answer:
          "Distribua uma quantidade adequada no rosto e pressione com as palmas. Use como etapa final dos cuidados, segundo o fabricante.",
      },
    ],
    composition:
      "Water, Glycerin, Propanediol, Dipropylene Glycol, Cyclopentasiloxane, Centella Asiatica Extract, 1,2-Hexanediol, Cyclohexasiloxane, Trehalose, Caprylyl Methicone, C12-14 Pareth-12, Carbomer, Tromethamine, C30-45 Alkyl Cetearyl Dimethicone Crosspolymer, Ammonium Acryloyldimethyltaurate/VP Copolymer, Butylene Glycol, Xanthan Gum, Zingiber Officinale (Ginger) Root Extract, Mentha Piperita (Peppermint) Leaf Extract, Ethylhexylglycerin, Dipotassium Glycyrrhizate, Tranexamic Acid, Dextrin, Theobroma Cacao (Cocoa) Seed Extract, Leuconostoc/Radish Root Ferment Filtrate, Biosaccharide Gum-1, Disodium EDTA, Sodium Hyaluronate, Beta-Glucan, Hydrogenated Lecithin, Coptis Chinensis Root Extract, Cetearyl Alcohol, Stearic Acid, Ceramide NP, Ceramide NG, Cholesterol, Phytosphingosine, Ceramide AS, Ceramide AP, Ceramide EOP",
  },
  "espuma-de-limpeza-facial-medicube-1ag88": {
    category: "limpeza",
    aliases: ["Zero Pore Clearing Capsule Cleansing Foam", "Medicube"],
    verified: true,
    sources: [
      {
        label: "Ficha do fabricante",
        url: "https://medicube.us/products/zero-pore-clear-blue-capsule-facial-deep-cleanser",
      },
    ],
    skinTypes: ["Seca", "Oleosa", "Mista"],
    periods: [],
    texture: "Espuma de limpeza",
    summary: "Espuma de limpeza com cápsulas para resíduos e aparência dos poros.",
    amount: "Quantidade adequada para formar espuma.",
    frequency: "Na etapa de limpeza, conforme o rótulo",
    instructions:
      "Coloque uma quantidade adequada na palma, misture com água para formar espuma, massageie suavemente e enxágue com água morna.",
    ingredients: [
      {
        name: "Salicylic Acid",
        role: "Ingrediente destacado na ficha oficial desta fórmula.",
      },
    ],
    care: [
      "Confira o rótulo da unidade recebida; fórmulas e apresentações podem variar por mercado.",
      "Confira a orientação para esfoliação e não some etapas esfoliantes sem avaliar os demais produtos da rotina.",
    ],
    gallery: [
      {
        src: "https://cdn.shopify.com/s/files/1/0156/3905/2336/files/00_08df4f44-ef16-4bd2-813d-79be14eca8f8.jpg?width=960",
        alt: "Medicube Zero Pore Clearing Capsule Cleansing Foam — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0156/3905/2336/files/01_b32a404e-873b-46c8-88bb-425e9c227765.jpg?width=960",
        alt: "Medicube Zero Pore Clearing Capsule Cleansing Foam — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0156/3905/2336/files/02_c1fb9dfb-86c5-4038-8ff8-490d1006276c.jpg?width=960",
        alt: "Medicube Zero Pore Clearing Capsule Cleansing Foam — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0156/3905/2336/files/03_be276de8-f1c9-4cc4-b9b3-e6d01afcc12e.jpg?width=960",
        alt: "Medicube Zero Pore Clearing Capsule Cleansing Foam — imagem oficial",
        label: "Imagem do fabricante",
      },
    ],
    faqs: [
      {
        question: "Qual é a textura?",
        answer: "Espuma de limpeza. Confira os detalhes e a composição da sua apresentação.",
      },
      {
        question: "Como este item entra nos cuidados?",
        answer:
          "Coloque uma quantidade adequada na palma, misture com água para formar espuma, massageie suavemente e enxágue com água morna.",
      },
    ],
    composition:
      "Water, Glycerin, Sodium Cocoyl Glycinate, Sodium Lauroyl Glutamate, Lauryl Hydroxysultaine, Coco-Glucoside, Decyl Glucoside, 1,2-Hexanediol, Salicylic Acid, Sodium Chloride, Caprylyl Glycol, Hydroxypropyl Starch Phosphate, Silica, Fragrance, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Citric Acid, Polyquaternium-67, Dextrin, Zea Mays (Corn) Starch, Microcrystalline Cellulose, Mannitol, Disodium EDTA, Sucrose, Gardenia Florida Fruit Extract, Sodium Acetate, Ultramarines (CI 77007), Tocopheryl Acetate, Isopropyl Alcohol, Butylene Glycol, Gluconolactone, Mandelic Acid, Salix Alba (Willow) Bark Extract, Centella Asiatica Leaf Vesicles, Centella Asiatica Leaf Extract, Cladosiphon Okamuranus Extract, Camellia Sinensis Leaf Extract, Houttuynia Cordata Extract, Coffea Arabica (Coffee) Seed Extract, Pueraria Lobata Root Extract, Pinus Palustris Leaf Extract, Oenothera Biennis (Evening Primrose) Flower Extract, Ulmus Davidiana Root Extract, Citrus Aurantium Bergamia (Bergamot) Leaf Extract, Pinus Densiflora Leaf Extract",
  },
  "medicube-pdrn-pink-collagen-gel-mask1unid": {
    category: "mascaras",
    aliases: ["PDRN Pink Collagen Gel Mask(1Unid)", "Medicube"],
    verified: true,
    sources: [
      {
        label: "Ficha do fabricante",
        url: "https://medicube.us/products/pdrn-pink-collagen-gel-mask",
      },
    ],
    skinTypes: ["Seca", "Oleosa", "Mista"],
    periods: [],
    texture: "Máscara em hidrogel",
    summary: "Máscara em hidrogel com PDRN e colágeno para um cuidado complementar.",
    amount: "Uma máscara por aplicação.",
    frequency: "Conforme a embalagem",
    instructions:
      "Siga o tempo de uso da sua embalagem. O guia oficial descreve aplicação após tônico ou sérum e remoção conforme a orientação da máscara.",
    ingredients: [
      {
        name: "Salmon PDRN",
        role: "Ingrediente destacado na ficha oficial desta fórmula.",
      },
      {
        name: "Hydrolyzed Collagen",
        role: "Ingrediente destacado na ficha oficial desta fórmula.",
      },
      {
        name: "Niacinamide",
        role: "Ingrediente destacado na ficha oficial desta fórmula.",
      },
      {
        name: "Peptide",
        role: "Ingrediente destacado na ficha oficial desta fórmula.",
      },
    ],
    care: [
      "Confira o rótulo da unidade recebida; fórmulas e apresentações podem variar por mercado.",
    ],
    gallery: [
      {
        src: "https://cdn.shopify.com/s/files/1/0156/3905/2336/files/mask.jpg?width=960",
        alt: "Medicube PDRN Pink Collagen Gel Mask(1Unid) — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0156/3905/2336/files/PDRN_03.jpg?width=960",
        alt: "Medicube PDRN Pink Collagen Gel Mask(1Unid) — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0156/3905/2336/files/PDRN_01_e5237609-fd8c-4108-ba2b-bd101a8bd202.jpg?width=960",
        alt: "Medicube PDRN Pink Collagen Gel Mask(1Unid) — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0156/3905/2336/files/PDRN_02_509768ff-5346-4248-aaf8-443cbd24cd28.jpg?width=960",
        alt: "Medicube PDRN Pink Collagen Gel Mask(1Unid) — imagem oficial",
        label: "Imagem do fabricante",
      },
    ],
    faqs: [
      {
        question: "Qual é a textura?",
        answer: "Máscara em hidrogel. Confira os detalhes e a composição da sua apresentação.",
      },
      {
        question: "Como este item entra nos cuidados?",
        answer:
          "Siga o tempo de uso da sua embalagem. O guia oficial descreve aplicação após tônico ou sérum e remoção conforme a orientação da máscara.",
      },
    ],
  },
  "serum-facial-vt-cosmetics-reedle-shot-300-de-50-ml": {
    category: "extras",
    aliases: ["Reedle Shot 300", "VT Cosmetics"],
    verified: false,
    sources: [],
    skinTypes: [],
    periods: [],
    texture: "",
    summary: "Cuidado específico para complementar a rotina",
    amount: "",
    frequency: "",
    instructions: "",
    ingredients: [],
    care: [
      "Confira o rótulo da unidade recebida; fórmulas e apresentações podem variar por mercado.",
    ],
    gallery: [],
    faqs: [],
  },
  "creme-para-contorno-de-olhos-numbuzin-no-9-nad-retinol": {
    category: "olhos",
    aliases: ["Nº 9 NAD+ Retinol — Contorno dos olhos", "Numbuzin"],
    verified: true,
    sources: [
      {
        label: "Ficha do fabricante",
        url: "https://us.numbuzin.com/products/no-9-nad-retinol-volumetox-eye-cream",
      },
    ],
    skinTypes: [],
    periods: [],
    texture: "Creme para os olhos",
    summary: "Creme para cuidados específicos com a aparência do contorno dos olhos.",
    amount: "Quantidade específica para a área dos olhos.",
    frequency: "Conforme o guia oficial",
    instructions:
      "Aplique conforme o rótulo do contorno dos olhos. Por conter retinol, confira frequência e cuidados no guia oficial antes de combinar com outros tratamentos.",
    ingredients: [],
    care: [
      "Confira o rótulo da unidade recebida; fórmulas e apresentações podem variar por mercado.",
      "Este item contém retinal ou retinol. Não monte combinações de ativos por conta própria; confira as restrições e a frequência do fabricante.",
    ],
    gallery: [
      {
        src: "https://cdn.shopify.com/s/files/1/0573/3793/8117/files/15.jpg?width=960",
        alt: "Numbuzin Nº 9 NAD+ Retinol — Contorno dos olhos — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0573/3793/8117/files/260529_________04_1c3d3222-de0f-4643-9654-84785dac4dbe.jpg?width=960",
        alt: "Numbuzin Nº 9 NAD+ Retinol — Contorno dos olhos — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0573/3793/8117/files/260716_________9_10ml__01.jpg?width=960",
        alt: "Numbuzin Nº 9 NAD+ Retinol — Contorno dos olhos — imagem oficial",
        label: "Imagem do fabricante",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0573/3793/8117/files/260716_________9_10ml__02.jpg?width=960",
        alt: "Numbuzin Nº 9 NAD+ Retinol — Contorno dos olhos — imagem oficial",
        label: "Imagem do fabricante",
      },
    ],
    faqs: [
      {
        question: "Qual é a textura?",
        answer: "Creme para os olhos. Confira os detalhes e a composição da sua apresentação.",
      },
      {
        question: "Como este item entra nos cuidados?",
        answer:
          "Aplique conforme o rótulo do contorno dos olhos. Por conter retinol, confira frequência e cuidados no guia oficial antes de combinar com outros tratamentos.",
      },
    ],
    composition:
      "Water, Butylene Glycol, Glycerin, Propanediol, Macadamia Integrifolia Seed Oil, Niacinamide, Olea Europaea (Olive) Fruit Oil, Cetyl Ethylhexanoate, Methylpropanediol, Butyrospermum Parkii (Shea) Butter, Methyl Hydrogenated Rosinate, Polysorbate 60, Cyclopentasiloxane, 1,2-Hexanediol, Cetyl Alcohol, Stearic Acid, Glycereth-26, Glyceryl Stearate, Dimethicone, PEG-100 Stearate, Cyclohexasiloxane, Hydrogenated Lecithin, Ammonium Acryloyldimethyltaurate/VP Copolymer, Sorbitan Stearate, Behenic Acid, Cocos Nucifera (Coconut) Oil, Hydroxyacetophenone, Polyacrylate-13, Vinyl Dimethicone, Batyl Alcohol, Dimethicone/Vinyl Dimethicone Crosspolymer, Phytosteryl Isostearate, Polyisobutene, Ceramide NP, Nicotinamide Adenine Dinucleotide, Caprylic/Capric Triglyceride, Macadamia Ternifolia Seed Oil, Citric Acid, Retinol, Ethylhexylglycerin, Polyglyceryl-4 Oleate, Adenosine, Hydrolyzed Gardenia Florida Extract, Hydrolyzed Malt Extract, Hydrolyzed Viola Tricolor Extract, Theobroma Cacao (Cocoa) Seed Extract, Brassica Campestris (Rapeseed) Sterols, Polysorbate 20, Disodium EDTA, Sorbitan Isostearate, Dextran, Cholesterol, Polyglyceryl-10 Laurate, Ammonium Polyacryloyldimethyl Taurate, Hyaluronic Acid, Hydrolyzed Hyaluronic Acid, Sodium Hyaluronic Add, Phytosteryl/Behenyl/Octyldodecyl Lauroyl Glutamate, Aluminum/Magnesium Hydroxide Stearate, Pentaerythrityl Tetra-di-t-butyl Hydroxyhydrocinnamate, Potassium Cetyl Phosphate, Hydroxypropyl Cyclodextrin, Chitosan, Tris(Tetramethylhydroxypiperidinol) Citrate, Acetyl Tetrapeptide-5, Resveratrol, Acetyl Dipeptide-1 Cetyl Ester, Acetyl Hexapeptide-1, Acetyl Hexapeptide-8, Acetyl Octapeptide-3, Acetyl Tetrapeptide-2, Acetyl Tetrapeptide-3, Acetyl Tetrapeptide-9, Arginine/Lysine Polypeptide, Biotinoyl Tripeptide-1, Copper Tripeptide-1, Dipeptide Diaminobutyroyl Benzylamide Diacetate, Dipeptide-2, Dipeptide-4, Hexapeptide-11, Hexapeptide-12, Hexapeptide-9, Myristoyl Pentapeptide-17, Nicotinoyl Dipeptide-23, Nicotinoyl Tripeptide-1, Nicotinoyl Tripeptide-35, Nonapeptide-1, Oligopeptide-29, Oligopeptide-32, Palmitoyl Hexapeptide-12, Palmitoyl Pentapeptide-4, Palmitoyl Pentapeptide-5, Palmitoyl Tetrapeptide-10, Palmitoyl Tetrapeptide-7, Palmitoyl Tripeptide-1, Palmitoyl Tripeptide-29, Palmitoyl Tripeptide-38, Palmitoyl Tripeptide-5, Palmitoyl Tripeptide-8, sh-Decapeptide-7, sh-Octapeptide-4, sh-Oligopeptide-1, sh-Oligopeptide-2, sh-Polypeptide-1, sh-Polypeptide-11, sh-Polypeptide-16, sh-Polypeptide-22, sh-Polypeptide-3, sh-Polypeptide-62, sh-Polypeptide-9, sr-(Oligopeptide-91 Clostridium Botulinum Polypeptide-1), Tetrapeptide-30, Tripeptide-1, Tripeptide-10 Citrulline, Tripeptide-29",
  },
  "adesivos-para-olhos-numbuzin-n9-nad-collagen-under-eye-patches-5-unidades": {
    category: "olhos",
    aliases: ["Nº 9 NAD+ Collagen Under Eye Patches", "Numbuzin"],
    verified: false,
    sources: [
      {
        label: "Ficha do fabricante",
        url: "https://us.numbuzin.com/products/no-9-nad-collagen-under-eye-patches-5ea",
      },
    ],
    skinTypes: [],
    periods: [],
    texture: "Patches em hidrogel",
    summary: "Patches para um cuidado localizado na região dos olhos.",
    amount: "Um par por aplicação, conforme a embalagem.",
    frequency: "Conforme o rótulo",
    instructions:
      "Confira o modo de uso no rótulo desta apresentação. A versão atual do fabricante tem diferenças de apresentação e não foi aplicada automaticamente a este item.",
    ingredients: [],
    care: [
      "Confira o rótulo da unidade recebida; fórmulas e apresentações podem variar por mercado.",
      "A ficha atual do fabricante pode corresponder a outra apresentação. Confirme a composição da unidade recebida.",
    ],
    gallery: [],
    faqs: [],
  },
};
products.forEach((product) => {
  const detail = productDetails[product.id];
  if (!detail) return;
  product.details = detail;
  product.description = detail.summary;
  if (detail.instructions) product.howTo = detail.instructions;
  if (detail.composition) product.composition = detail.composition;
  if (!product.usageGuide && detail.verified) {
    product.usageGuide = {
      intro: detail.summary,
      steps: [
        {
          title: "Confira antes de começar",
          text: `Quantidade: ${detail.amount} Frequência: ${detail.frequency}`,
        },
        { title: "Aplique conforme o fabricante", text: detail.instructions },
        { title: "Cuidados e continuidade", text: detail.care.join(" ") },
      ],
      amount: detail.amount,
      frequency: detail.frequency,
      notes:
        "Orientações resumidas da ficha do fabricante. O rótulo da unidade recebida tem prioridade.",
      sourceUrl: detail.sources[0]!.url,
      sourceLabel: "Consultar fabricante",
    };
  }
});

export const brands = Array.from(new Set(products.map((p) => p.brand))).sort();
export const getProduct = (id: string) => products.find((p) => p.id === id);
export const stepLabel = (id: StepId) => steps.find((s) => s.id === id)?.label ?? id;
export const needLabel = (id: string) => needs.find((n) => n.id === id)?.label ?? id;
export const brl = (v: number) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
export const normalize = (v: string) =>
  v
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
export const featuredIds = [
  "medicube-pdrn-pink-collagen-capsule-cream",
  "serum-facial-skin1004-madagascar-centella-poremizing-fresh-ampoule",
  "mixsoon-soondy-centella-asiatica-essence",
  "medicube-txa-niacinamide-capsule-cream",
];
export const discoveryIds = [
  "collagen-firming-sun-cream-vrpww",
  "kojic-acid-turmeric-vita-capsule-cream-vy68v",
  "zero-pore-blackhead-mud-mask-nv7oa",
  "medicube-age-r-booster-pro-6-em-1-rosa",
];
export const essentialRoutine = {
  title: "Seu começo em 3 passos",
  description:
    "Limpeza, hidratação e proteção. Uma seleção de itens individuais para a rotina da manhã.",
  productIds: [
    "espuma-de-limpeza-facial-medicube-1ag88",
    "medicube-triple-collagen-cream-50ml",
    "collagen-firming-sun-cream-vrpww",
  ],
};
export const categories = [
  { label: "Limpeza", step: "limpeza", caption: "Comece por aqui" },
  { label: "Séruns & essências", step: "tratamento", caption: "Seu foco de cuidado" },
  { label: "Hidratantes", step: "hidratacao", caption: "Conforto para a pele" },
  { label: "Proteção solar", step: "protecao", caption: "Para todos os dias" },
  { label: "Tônicos", step: "tonico", caption: "Um passo a mais" },
  { label: "Máscaras & extras", step: "extras", caption: "Seu momento de cuidado" },
] as const;
export const budgets = [
  { id: "ate-500", label: "Até R$ 500", max: 500 },
  { id: "500-800", label: "Até R$ 800", max: 800 },
  { id: "sem-limite", label: "Sem limite definido", max: Infinity },
] as const;
export type BudgetId = (typeof budgets)[number]["id"];
export const routineRules: Record<NeedId, StepId[]> = {
  "primeiros-cuidados": ["limpeza", "hidratacao", "protecao"],
  hidratacao: ["limpeza", "tratamento", "hidratacao", "protecao"],
  luminosidade: ["limpeza", "tratamento", "hidratacao", "protecao"],
  firmeza: ["limpeza", "tratamento", "hidratacao", "protecao"],
};
export function candidatesFor(step: StepId, need: NeedId) {
  return products
    .filter((p) => p.step === step && p.available)
    .sort(
      (a, b) =>
        Number(b.needs.includes(need)) - Number(a.needs.includes(need)) || a.price - b.price,
    );
}
export function suggestRoutine(need: NeedId, budget: BudgetId): Product[] {
  const max = budgets.find((b) => b.id === budget)?.max ?? Infinity;
  const selected = routineRules[need].flatMap((step) => {
    const all = candidatesFor(step, need);
    const matching = all.filter((p) => p.needs.includes(need));
    const pool = matching.length ? matching : all;
    const p = [...pool].sort((a, b) => a.price - b.price)[0];
    return p ? [p] : [];
  });
  for (const optional of ["tonico", "tratamento"] as StepId[]) {
    if (selected.reduce((s, p) => s + p.price, 0) <= max) break;
    const i = selected.findIndex((p) => p.step === optional);
    if (i >= 0) selected.splice(i, 1);
  }
  return selected;
}

const mediaUrl = (path: string) =>
  new URL(path, "https://image-rich-layout-studio.lovable.app").href;
export const visualBands = {
  video: {
    src: mediaUrl(faixaVideo.url),
    webm: mediaUrl(faixaWebm.url),
    poster: mediaUrl(faixaPoster.url),
    eyebrow: "Um tempo para você",
    title: "O cuidado também é uma pausa.",
    text: "Encontre texturas, marcas e pequenos rituais para o seu dia.",
    cta: "Descubra seu próximo cuidado",
  },
  tiles: [
    {
      title: "O seu primeiro ritual",
      text: "Encontre os passos para começar.",
      need: "primeiros-cuidados",
      productId: essentialRoutine.productIds[0]!,
    },
    {
      title: "Um toque de hidratação",
      text: "Explore cremes e texturas.",
      need: "hidratacao",
      productId: featuredIds[0]!,
    },
    {
      title: "Mais viço, no seu ritmo",
      text: "Conheça a seleção de luminosidade.",
      need: "luminosidade",
      productId: featuredIds[3]!,
    },
  ] as const,
};

// Adicione usageGuide no produto para publicar instruções específicas revisadas.
// Para vídeo, use uma URL pública do arquivo original (MP4/WebM), poster e,
// opcionalmente, downloadUrl e captionsUrl. Hospede no mesmo domínio ou com CORS
// para permitir o download direto. Um MP4 vertical 9:16 pode ser reutilizado nas redes.
export function getUsageGuide(product: Product): UsageGuide {
  return (
    product.usageGuide ?? {
      intro:
        "Antes de começar, conheça a etapa deste cuidado e confira as orientações da embalagem.",
      steps: [
        {
          title: "Conheça o seu produto",
          text: `Confira a indicação e as instruções do ${product.name} na embalagem. Quantidade e frequência devem seguir a orientação do fabricante.`,
        },
        {
          title: "Veja onde ele entra",
          text: `Este produto está na etapa de ${stepLabel(product.step).toLowerCase()}. ${steps.find((step) => step.id === product.step)?.text ?? ""}`,
        },
        { title: "Siga o modo de uso", text: product.howTo },
      ],
      notes:
        "Para combinar tratamentos ou esclarecer dúvidas sobre o produto, fale com a Luyse. As instruções específicas do fabricante têm prioridade.",
      socialCaption: `Um cuidado para conhecer: ${product.name}, da ${product.brand}. Confira os detalhes e o modo de uso na LSET7. ${product.originalUrl}`,
    }
  );
}

export const catalogCategories = [
  { id: "limpeza", label: "Limpeza" },
  { id: "tratamento", label: "Séruns e essências" },
  { id: "hidratacao", label: "Hidratantes" },
  { id: "protecao", label: "Proteção solar" },
  { id: "tonico", label: "Tônicos" },
  { id: "mascaras", label: "Máscaras" },
  { id: "olhos", label: "Região dos olhos" },
  { id: "tecnologia", label: "Tecnologia beauty" },
  { id: "esfoliacao", label: "Esfoliantes" },
];
export const selections = [
  {
    id: "comecar",
    label: "Para começar",
    description: "Limpeza, hidratação e proteção para explorar os passos básicos.",
  },
  {
    id: "mascaras",
    label: "Máscaras para conhecer",
    description: "Máscaras de argila e hidrogel: confira os usos específicos.",
  },
  {
    id: "centella",
    label: "Cuidados com centella",
    description: "Produtos com centella identificada na ficha do fabricante.",
  },
  {
    id: "ate100",
    label: "Até R$ 100",
    description: "Produtos com preço de catálogo de até R$ 100.",
  },
];
export function matchesSelection(p: Product, id?: string) {
  if (!id) return true;
  if (id === "descobertas") return discoveryIds.includes(p.id);
  if (id === "comecar") return ["limpeza", "hidratacao", "protecao"].includes(p.step);
  if (id === "mascaras") return p.details?.category === "mascaras";
  if (id === "centella")
    return /centella|centela/i.test(p.name + JSON.stringify(p.details?.ingredients));
  if (id === "ate100") return p.price <= 100;
  return true;
}
export function matchesQuery(p: Product, query: string) {
  const clean = normalize(query).replace(/skin\s+1004/g, "skin1004");
  const tokens = clean
    .split(/\s+/)
    .filter(
      (t) => t && !["da", "de", "do", "a", "o", "um", "uma", "para", "com", "quero"].includes(t),
    );
  const text = normalize(
    [p.name, p.brand, p.type, p.benefit, p.details?.summary, ...(p.details?.aliases || [])].join(
      " ",
    ),
  );
  return tokens.every((t) => text.includes(t));
}
export function productWhatsappLink(p: Product) {
  return `https://wa.me/${storeConfig.whatsappNumber}?text=${encodeURIComponent(`Olá, Luyse! Tenho uma dúvida sobre ${p.brand} ${p.name}. ${p.originalUrl}`)}`;
}
export const policyContent = {
  entrega: {
    title: "Entrega e frete",
    intro: "Consulte as condições antes de concluir sua compra.",
    paragraphs: [
      "Na loja atual, o frete é calculado para o CEP informado. O catálogo consultado anuncia frete grátis a partir de R$ 500; confirme a condição vigente no fechamento da compra.",
      "Esta prévia não calcula frete nem prazo. A disponibilidade de entrega e o prazo final devem ser confirmados na loja atual ou com o atendimento.",
    ],
  },
  pagamento: {
    title: "Pagamento",
    intro: "Confira valores e formas de pagamento com clareza.",
    paragraphs: [
      "Os preços desta prévia são uma consulta do catálogo da LSET7. Quando informado, o parcelamento corresponde à condição exibida na loja atual na consulta.",
      "Não há processamento de pagamento nem registro de pedido nesta prévia. Confirme preço, parcelas, eventuais juros e condições na loja atual antes de comprar.",
    ],
  },
  trocas: {
    title: "Trocas e devoluções",
    intro: "Atendimento para orientar cada solicitação.",
    paragraphs: [
      "A LSET7 informa na loja atual que é possível solicitar troca ou devolução. Os prazos, procedimentos e condições específicos ainda precisam ser consolidados para a nova loja.",
      "Para consultar as condições ou tratar uma compra existente, fale com a Luyse e tenha o número do pedido em mãos. Esta página não substitui a política completa a ser publicada antes do lançamento.",
    ],
  },
};

// Imagens oficiais armazenadas localmente para uma apresentação consistente.
const cleanPhotoIds = [
  "medicube-pdrn-pink-collagen-capsule-cream",
  "medicube-txa-niacinamide-capsule-cream",
  "mixsoon-soondy-centella-asiatica-essence",
  "medicube-triple-collagen-cream-50ml",
  "mascara-facial-skin1004-poremizing-quick-clay-stick-mask",
  "serum-facial-skin1004-madagascar-centella-poremizing-fresh-ampoule",
  "serum-facial-celimax-the-vita-a-retinal-shot-tightening-booster-de-15-ml",
  "esfoliante-facial-beauty-of-joseon-apricot-blossom-peeling-100-ml",
  "oleo-facial-de-limpeza-light-cleasing-oil-centella-skin-1004",
  "medicube-age-r-booster-pro-6-em-1-rosa",
  "kojic-acid-turmeric-vita-capsule-cream-vy68v",
  "medicube-deep-vita-c-capsule-cream",
  "kojic-acid-turmeric-vita-jelly-mist-serum-jthn7",
  "zero-pore-blackhead-mud-mask-nv7oa",
  "tonico-facial-skin1004-madagascar-centella-toning-toner",
  "espuma-de-limpeza-facial-medicube-1ag88",
  "medicube-pdrn-pink-collagen-gel-mask1unid",
  "creme-para-contorno-de-olhos-numbuzin-no-9-nad-retinol",
];
export const productImage = (p: Product) =>
  cleanPhotoIds.includes(p.id) ? `/lset/catalog/clean/${p.id}.webp` : p.images[0]!;
export const isMaskCollection = (p: Product) =>
  p.id === "mixsoon-daily-mask-pack-com-7-mascaras-faciais";

export const categoryPresentation: Record<
  string,
  { description: string; tone: string; productId?: string }
> = {
  limpeza: {
    description: "O primeiro passo do cuidado",
    tone: "sage",
    productId: "espuma-de-limpeza-facial-medicube-1ag88",
  },
  tratamento: {
    description: "Um foco para a sua rotina",
    tone: "rose",
    productId: "mixsoon-soondy-centella-asiatica-essence",
  },
  hidratacao: {
    description: "Texturas para acolher a pele",
    tone: "rose",
    productId: "medicube-pdrn-pink-collagen-capsule-cream",
  },
  protecao: { description: "Seu cuidado para o dia", tone: "peach" },
  tonico: { description: "Entre a limpeza e o cuidado", tone: "sage" },
  mascaras: {
    description: "Uma pausa só sua",
    tone: "rose",
    productId: "medicube-pdrn-pink-collagen-gel-mask1unid",
  },
  olhos: { description: "Atenção aos pequenos detalhes", tone: "lilac" },
  tecnologia: { description: "Descubra novas possibilidades", tone: "lilac" },
  esfoliacao: { description: "Conheça este passo extra", tone: "peach" },
};
