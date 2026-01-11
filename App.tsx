import React from 'react';
import { MessageCircle, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { Header } from './components/Header';
import { PriceRow } from './components/PriceRow';
import { PRICE_LIST, WHATSAPP_LINK, PROFILE_IMAGE_URL } from './constants';

const SERVICE_IMAGES = [
  "https://i.ibb.co/ksNzMLWL/dep1.jpg",
  "https://i.ibb.co/6cqZQhN7/dep2.jpg",
  "https://i.ibb.co/x8z36vjp/depi3.webp"
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-slate-800 text-white py-12 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://picsum.photos/1920/1080')] bg-cover bg-center"></div>
          <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
            
            {/* Profile Image Highlight */}
            <div className="mb-6 relative group">
              <div className="absolute inset-0 bg-teal-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <img 
                src={PROFILE_IMAGE_URL} 
                alt="Cle Cle Especialista" 
                className="relative w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-white shadow-2xl object-cover transform transition-transform duration-300 hover:scale-105"
              />
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Especialista em Depilação <br />
              <span className="text-teal-400">Íntima Masculina</span>
            </h2>
            <p className="text-slate-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Atendimento profissional, discreto e especializado desde 2002. 
              Sinta-se bem com seu corpo.
            </p>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg"
            >
              <MessageCircle className="w-6 h-6" />
              Agendar Horário
            </a>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-10 bg-white shadow-sm">
          <div className="container mx-auto px-4 flex flex-wrap justify-center gap-6 md:gap-12">
            <div className="flex items-center gap-3 text-slate-700">
              <CheckCircle2 className="text-teal-500 w-6 h-6" />
              <span className="font-semibold">Higiene Absoluta</span>
            </div>
            <div className="flex items-center gap-3 text-slate-700">
              <CheckCircle2 className="text-teal-500 w-6 h-6" />
              <span className="font-semibold">Material Descartável</span>
            </div>
            <div className="flex items-center gap-3 text-slate-700">
              <CheckCircle2 className="text-teal-500 w-6 h-6" />
              <span className="font-semibold">Ambiente Discreto</span>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-12 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">Demonstração de Serviço</h3>
              <div className="w-24 h-1 bg-teal-500 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {SERVICE_IMAGES.map((img, idx) => (
                <div key={idx} className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                  <img 
                    src={img} 
                    alt={`Demonstração de serviço ${idx + 1}`} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Price List Section */}
        <section className="py-16 bg-white" id="precos">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-slate-800 mb-2">Tabela de Preços</h3>
              <div className="w-24 h-1 bg-teal-500 mx-auto rounded-full"></div>
            </div>

            <div className="bg-slate-50 p-6 md:p-8 rounded-2xl shadow-xl border border-slate-200">
              <div className="grid gap-1">
                {PRICE_LIST.map((item, index) => (
                  <PriceRow key={index} item={item} />
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-slate-200 text-center text-slate-500 text-sm italic">
                * Preços sujeitos a alteração sem aviso prévio. Aceitamos cartões e PIX.
              </div>
            </div>
          </div>
        </section>

        {/* Info / Footer Section */}
        <footer className="bg-slate-900 text-slate-300 py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
              <div>
                <h4 className="text-white text-xl font-bold mb-4">Cle Cle Depilações</h4>
                <p className="mb-4 text-slate-400">
                  Referência em depilação masculina na região. 
                  Sua satisfação e conforto são nossa prioridade.
                </p>
              </div>
              <div className="flex flex-col items-center md:items-end gap-4">
                 <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-teal-500" />
                  <span>Segunda a Sábado (com agendamento)</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-teal-500" />
                  <span>Atendimento em local privado</span>
                </div>
                <a 
                  href={WHATSAPP_LINK} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 font-semibold flex items-center gap-2 mt-2 text-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  (85) 98940-4898
                </a>
              </div>
            </div>
            <div className="border-t border-slate-800 mt-10 pt-6 text-center text-xs text-slate-600">
              &copy; {new Date().getFullYear()} Cle Cle Depilações. Todos os direitos reservados.
            </div>
          </div>
        </footer>
      </main>

      {/* Floating Action Button for Mobile */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition-transform hover:scale-110 flex items-center justify-center"
        aria-label="Contatar pelo WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
};

export default App;