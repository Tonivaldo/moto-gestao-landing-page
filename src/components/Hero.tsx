
import React from 'react';
import { Play, CheckCircle, BarChart3, Users, Calendar } from 'lucide-react';

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

          {/* Dashboard Preview */}
          <div className="animate-scale-in">
            <div className="bg-white rounded-2xl shadow-2xl p-6 border">
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Dashboard MotoGestão</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg border">
                    <BarChart3 className="h-8 w-8 text-primary mb-2" />
                    <p className="text-sm text-gray-600">Receita Mensal</p>
                    <p className="text-xl font-bold text-gray-900">R$ 45.280</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <Users className="h-8 w-8 text-blue-500 mb-2" />
                    <p className="text-sm text-gray-600">Clientes Ativos</p>
                    <p className="text-xl font-bold text-gray-900">156</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <Calendar className="h-8 w-8 text-green-500 mb-2" />
                    <p className="text-sm text-gray-600">Locações Hoje</p>
                    <p className="text-xl font-bold text-gray-900">23</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg border p-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Status da Frota</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Honda CB 600F</span>
                      <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Disponível</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Yamaha MT-07</span>
                      <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">Locada</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">BMW G 310 GS</span>
                      <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Manutenção</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
