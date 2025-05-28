
import React from 'react';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "97",
      description: "Ideal para locadoras iniciantes",
      features: [
        "Até 25 motos na frota",
        "Gestão básica de clientes",
        "Controle de agendamentos",
        "Relatórios essenciais",
        "Suporte por email"
      ],
      isPopular: false
    },
    {
      name: "Professional",
      price: "197",
      description: "Para locadoras em crescimento",
      features: [
        "Até 100 motos na frota",
        "Gestão completa de clientes",
        "Controle financeiro avançado",
        "Relatórios personalizados",
        "App mobile incluído",
        "Suporte prioritário",
        "Integração com WhatsApp"
      ],
      isPopular: true
    },
    {
      name: "Enterprise",
      price: "397",
      description: "Para grandes operações",
      features: [
        "Frota ilimitada",
        "Multi-lojas/filiais",
        "API para integrações",
        "Relatórios avançados + BI",
        "Treinamento personalizado",
        "Suporte 24/7",
        "Manager dedicado"
      ],
      isPopular: false
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="planos" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Planos que <span className="text-primary">cabem no seu bolso</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para o tamanho da sua operação. 
            Todos incluem 7 dias grátis e podem ser cancelados a qualquer momento.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 animate-fade-in ${
                plan.isPopular 
                  ? 'border-primary shadow-xl bg-gradient-to-br from-primary/5 to-white' 
                  : 'border-gray-200 hover:border-primary/50 shadow-lg hover:shadow-xl'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="h-4 w-4 fill-current" />
                    Mais Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">R$ {plan.price}</span>
                  <span className="text-gray-600">/mês</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={scrollToContact}
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.isPopular
                    ? 'bg-primary hover:bg-primary-hover text-white'
                    : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                }`}
              >
                Começar Teste Grátis
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            ✅ 7 dias grátis • ✅ Sem compromisso • ✅ Cancele quando quiser
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
