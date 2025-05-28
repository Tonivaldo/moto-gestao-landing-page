
import React from 'react';
import { Bot, MessageCircle, Lightbulb, HelpCircle, Zap } from 'lucide-react';

const AIAgent = () => {
  const features = [
    {
      icon: <MessageCircle className="h-6 w-6 text-primary" />,
      title: "Suporte 24/7",
      description: "Tire dúvidas sobre o sistema a qualquer hora do dia"
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      title: "Dicas Personalizadas",
      description: "Receba sugestões para otimizar sua operação"
    },
    {
      icon: <HelpCircle className="h-6 w-6 text-primary" />,
      title: "Treinamento Inteligente",
      description: "Aprenda a usar o sistema de forma interativa"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary p-3 rounded-xl">
                <Bot className="h-8 w-8 text-white" />
              </div>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                Exclusivo para Locadoras
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Primeiro Sistema com{' '}
              <span className="text-primary">Agente de IA Integrado</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              O MotoGestão é pioneiro: o primeiro sistema exclusivo para gestão de locadoras 
              de motos com inteligência artificial integrada. Nosso agente IA está sempre 
              disponível para ajudar sua equipe.
            </p>

            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-primary/20">
              <Zap className="h-6 w-6 text-primary" />
              <p className="text-gray-700">
                <strong>Exclusivo:</strong> Desenvolvido especificamente para o mercado de locação de motos
              </p>
            </div>
          </div>

          {/* AI Agent Illustration */}
          <div className="animate-scale-in">
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-primary-hover p-8 rounded-3xl shadow-2xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <Bot className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-white font-semibold">MotoIA Assistant</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                      <p className="text-white text-sm">
                        💡 Dica: Suas motos Honda CB 600F estão com alta demanda. 
                        Considere aumentar a tarifa em 15%.
                      </p>
                    </div>
                    
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                      <p className="text-white text-sm">
                        ⚠️ Lembrete: 3 motos precisam de revisão esta semana.
                      </p>
                    </div>
                    
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                      <p className="text-white text-sm">
                        📊 Seu ROI médio subiu 12% este mês. Parabéns!
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white text-sm">Online 24/7</span>
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

export default AIAgent;
