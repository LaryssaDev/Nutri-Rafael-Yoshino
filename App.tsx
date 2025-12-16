import React, { useState } from 'react';
import { MapPin, Instagram, ChevronDown, Trophy, ShieldCheck, Check } from 'lucide-react';
import { EXPERT_INFO, HERO_IMAGE, ABOUT_IMAGE, HOBBY_IMAGE, SOCIAL_PROOF_IMAGES, FEATURES, STEPS, BIO_BULLETS } from './constants';
import Button from './components/Button';
import Lightbox from './components/Lightbox';
import { GalleryImage } from './types';

const App: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <div className="min-h-screen bg-background text-zinc-100 font-sans selection:bg-primary selection:text-white pb-20 md:pb-0">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-transparent z-10" />
          <img 
            src={HERO_IMAGE} 
            alt="Rafael Yoshino" 
            className="w-full h-full object-cover object-top opacity-90"
          />
        </div>

        <div className="relative z-20 container mx-auto px-6 pb-12 pt-32 max-w-2xl md:ml-0 md:pl-12 lg:pl-24">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-md">
            <Trophy size={14} />
            Nutrição Esportiva
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.1] mb-4 text-white">
            EU SOU <br />
            <span className="text-primary">RAFAEL YOSHINO</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-300 mb-8 font-light max-w-md">
            Nutricionista focado em <strong>Alta Performance</strong>. Ajudo você a ter mais massa e energia nos treinos comendo de tudo.
          </p>

          <div className="flex flex-col gap-3 max-w-md">
            <Button href={EXPERT_INFO.whatsappUrl} fullWidth>
              AGENDAR 1ª CONSULTA GRATUITA
            </Button>
            <p className="text-center text-xs text-zinc-500 flex items-center justify-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Resposta rápida • Sem compromisso
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 animate-bounce text-zinc-500 hidden md:block">
          <ChevronDown />
        </div>
      </section>

      {/* --- WHO AM I --- */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-xl"></div>
              <img 
                src={ABOUT_IMAGE} 
                alt="Rafael Yoshino Nutricionista" 
                className="relative rounded-2xl shadow-2xl border border-zinc-800 w-full rotate-2 hover:rotate-0 transition-transform duration-500"
              />
            </div>
            
            <div className="w-full md:w-1/2">
              <h2 className="font-display text-3xl font-bold mb-6 text-white border-l-4 border-primary pl-4">
                QUEM SOU EU?
              </h2>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                Desde pequeno, sempre fui movido pelo esporte. Com 16 anos e apenas 50kg, entrei na musculação e descobri na <strong>ALIMENTAÇÃO</strong> a chave para a força e performance.
              </p>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                Troquei a economia pela Nutrição e nunca olhei para trás. Hoje, uno ciência e prática para mostrar que é possível ter saúde e um corpo estético sem sofrimento.
              </p>

              <ul className="space-y-3 mb-8">
                {BIO_BULLETS.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                    <Check className="text-primary shrink-0 mt-0.5" size={18} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- RESULTS GALLERY --- */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
              RESULTADOS REAIS
            </h2>
            <p className="text-zinc-400">Pessoas reais. Atletas reais. Resultados definitivos.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {SOCIAL_PROOF_IMAGES.map((img) => (
              <div 
                key={img.id} 
                className="group relative aspect-square overflow-hidden rounded-xl bg-zinc-800 cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img.url} 
                  alt="Resultado Antes e Depois" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-xs font-bold uppercase tracking-wider border border-white/30 px-3 py-1 rounded-full backdrop-blur-sm">
                    Ver resultado
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center text-xs text-zinc-600 mt-6 italic">
            * Resultados podem variar de acordo com o metabolismo e dedicação de cada paciente.
          </p>
        </div>
      </section>

      {/* --- WHY TRUST ME (FEATURES) --- */}
      <section className="py-20 bg-zinc-900 border-y border-zinc-800">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="font-display text-3xl font-bold text-center mb-12">
            POR QUE CONFIAR EM MIM?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 hover:border-primary/50 transition-colors flex flex-col items-center text-center gap-4 group">
                <div className="w-14 h-14 bg-zinc-900 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/50">
                  <feature.icon size={28} />
                </div>
                <h3 className="font-bold text-lg text-white">{feature.title}</h3>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
             <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-2xl max-w-3xl w-full flex flex-col md:flex-row items-center gap-8 shadow-2xl">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold text-white mb-2">Ainda na dúvida?</h3>
                  <p className="text-zinc-400 text-sm">
                    A primeira consulta é 100% gratuita para nos conhecermos e eu explicar exatamente como posso te ajudar. Sem letras miúdas.
                  </p>
                </div>
                <Button href={EXPERT_INFO.whatsappUrl} className="shrink-0 w-full md:w-auto">
                   QUERO MINHA AVALIAÇÃO
                </Button>
             </div>
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS --- */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            COMO FUNCIONA?
          </h2>
          <p className="text-center text-zinc-400 mb-12">
            Do agendamento ao resultado em 5 passos simples
          </p>

          <div className="space-y-8 md:space-y-12 relative before:absolute before:left-[19px] before:top-4 before:bottom-4 before:w-[2px] before:bg-zinc-800">
            {STEPS.map((step, idx) => (
              <div key={idx} className="relative pl-12 md:pl-16">
                <div className="absolute left-0 top-1 w-10 h-10 bg-zinc-900 border-2 border-primary rounded-full flex items-center justify-center font-display font-bold text-primary shadow-lg z-10">
                  {step.number}
                </div>
                <div className="bg-zinc-900/50 border border-zinc-800/50 p-6 rounded-xl hover:bg-zinc-900 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- HOBBY / LIFESTYLE --- */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
             <div className="w-full md:w-1/2">
                <img 
                  src={HOBBY_IMAGE} 
                  alt="Rafael Yoshino Hobbies" 
                  className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 w-full"
                />
             </div>
             <div className="w-full md:w-1/2">
                <div className="inline-flex items-center gap-2 text-primary mb-4 font-bold uppercase tracking-wider text-sm">
                   <ShieldCheck size={18} />
                   Eu vivo o que prego
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">
                  ATLETA PARA ATLETA
                </h2>
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  Não sou um nutricionista de escritório que só lê livros. Eu amo <strong>futevôlei, musculação e jiu-jitsu</strong>. 
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  Eu sei exatamente como é a rotina de treinos, a necessidade de energia e a dificuldade de manter a dieta. Por isso meu método funciona: ele é real, testado na prática.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 bg-gradient-to-b from-background to-zinc-900 text-center px-6">
        <div className="container mx-auto max-w-2xl">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
            PRONTO PARA MUDAR SEU CORPO?
          </h2>
          <p className="text-zinc-400 text-lg mb-10">
            A primeira consulta é gratuita. Você não tem nada a perder e uma performance incrível a ganhar.
          </p>
          <div className="flex flex-col items-center gap-4">
             <Button href={EXPERT_INFO.whatsappUrl} className="text-xl py-5 px-8 w-full md:w-auto hover:scale-105">
                AGENDAR AGORA NO WHATSAPP
             </Button>
             <p className="text-zinc-500 text-sm mt-2">
               Não deixe para depois. Vagas limitadas para este mês.
             </p>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 bg-black text-zinc-500 text-sm border-t border-zinc-900">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-white font-display font-bold text-xl mb-2">{EXPERT_INFO.name}</h3>
          <p className="mb-6">{EXPERT_INFO.role}</p>
          
          <div className="flex flex-col items-center gap-2 mb-8">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{EXPERT_INFO.address}</span>
            </div>
            <a 
              href={EXPERT_INFO.instagramUrl} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors mt-2"
            >
              <Instagram size={16} />
              <span>@rafayoshinonutri</span>
            </a>
          </div>

          <p className="opacity-50 text-xs">
            © {new Date().getFullYear()} Rafael Yoshino. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* --- STICKY MOBILE CTA --- */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-md border-t border-zinc-800 md:hidden z-40">
        <Button href={EXPERT_INFO.whatsappUrl} fullWidth className="py-3 text-base shadow-none">
          AGENDAR GRÁTIS
        </Button>
      </div>

      {/* --- LIGHTBOX MODAL --- */}
      <Lightbox 
        image={selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />
    </div>
  );
}

export default App;