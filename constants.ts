import { Target, TrendingUp, HeartPulse, Trophy, CheckCircle, ShieldCheck } from 'lucide-react';
import { ExpertData, Feature, GalleryImage, Step } from './types';

export const EXPERT_INFO: ExpertData = {
  name: "Rafael Yoshino",
  role: "Nutricionista de Alta Performance",
  whatsappUrl: "https://api.whatsapp.com/send/?phone=5511941494396&text=Ol%C3%A1%2C+quero+saber+mais+sobre+a+consulta%21&type=phone_number&app_absent=0",
  instagramUrl: "https://www.instagram.com/rafayoshinonutri/",
  address: "Rua Tabapuã, 888 - Itaim Bibi, São Paulo - SP"
};

export const HERO_IMAGE = "https://i.imgur.com/sc0du3T.png";
export const ABOUT_IMAGE = "https://i.imgur.com/XWr9ECU.png";
export const HOBBY_IMAGE = "https://i.imgur.com/3sdFL5q.png";

export const SOCIAL_PROOF_IMAGES: GalleryImage[] = [
  { id: '1', url: "https://i.imgur.com/E0C7JtB.png" },
  { id: '2', url: "https://i.imgur.com/4b0wKcd.png" },
  { id: '3', url: "https://i.imgur.com/GlJ9t19.png" },
  { id: '4', url: "https://i.imgur.com/YhT2Pia.png" },
  { id: '5', url: "https://i.imgur.com/DhJHtex.png" },
  { id: '6', url: "https://i.imgur.com/fKbEk61.png" },
  { id: '7', url: "https://i.imgur.com/ny5Z8JW.png" },
  { id: '8', url: "https://i.imgur.com/xFmWY6k.png" },
  { id: '9', url: "https://i.imgur.com/KktjFu7.png" },
];

export const FEATURES: Feature[] = [
  { title: "Alta performance comendo de tudo", icon: TrendingUp },
  { title: "Mais massa e energia nos treinos", icon: Target },
  { title: "Especialista em Futebol & Beach Sports", icon: Trophy },
  { title: "+100 atletas atendidos", icon: CheckCircle },
  { title: "Avaliação honesta e direta", icon: ShieldCheck },
  { title: "Saúde sem neura", icon: HeartPulse },
];

export const STEPS: Step[] = [
  {
    number: "01",
    title: "Avaliação Física Completa",
    description: "Análise detalhada com adipômetro, circunferência, fotos e bioimpedância. Opção online com guia de medidas."
  },
  {
    number: "02",
    title: "Planejamento Personalizado",
    description: "Plano alimentar criado para seus objetivos, hábitos e gostos. Dieta leve e agradável."
  },
  {
    number: "03",
    title: "Suplementação Estratégica",
    description: "Indicação dos melhores suplementos ou manipulados apenas se necessário para potencializar resultados."
  },
  {
    number: "04",
    title: "45 Dias de Acompanhamento",
    description: "Suporte contínuo via aplicativo para ajustes e dúvidas sempre que precisar."
  },
  {
    number: "05",
    title: "Materiais de Apoio",
    description: "Dicas de organização, lista de compras e preparo dos alimentos para manter o foco."
  }
];

export const BIO_BULLETS = [
  "Atleta por natureza, nutricionista por vocação.",
  "Ex-estagiário Hospital São Camilo Pompéia.",
  "Especializando em Nutrição Esportiva e Estética (Plenitude).",
  "Foco em performance sem abrir mão do que você gosta."
];