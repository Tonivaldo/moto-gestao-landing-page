
import React from 'react';
import { Play, CheckCircle } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Sistema Completo para sua{' '}
              <span className="text-primary">Locadora de Motos</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Gerencie sua frota automotiva com eficiência. Controle agendamentos, 
              financeiro, clientes e muito mais em uma única plataforma.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
              >
                Experimente Grátis por 7 dias
              </button>
              
              <button className="flex items-center justify-center gap-2 border border-gray-300 hover:border-primary text-gray-700 hover:text-primary px-8 py-4 rounded-lg font-semibold transition-colors">
                <Play className="h-5 w-5" />
                Ver Demonstração
              </button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Setup em 5 minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Sem taxa de setup</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Suporte incluído</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="animate-scale-in">
            <img 
              src="/lovable-uploads/fd6fdb71-139c-4483-8e6c-763f3bda14c2.png"
              alt="Gestor de locadora usando tablet com dashboard do MotoGestão"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
