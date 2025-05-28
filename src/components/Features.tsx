
import React from 'react';
import { 
  Calendar, 
  DollarSign, 
  Users, 
  BarChart3, 
  Shield, 
  Smartphone,
  Clock,
  FileText
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Gestão de Agendamentos",
      description: "Controle completo de reservas, locações e devoluções com calendário intuitivo e notificações automáticas.",
      image: "/lovable-uploads/c3dd7fb4-790f-43ba-8a8c-dcea5579c2fb.png"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-primary" />,
      title: "Controle Financeiro",
      description: "Acompanhe receitas, despesas, inadimplência e gere relatórios financeiros detalhados em tempo real.",
      image: "/lovable-uploads/9a258b84-d272-46d9-a724-34750aa96e46.png"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Cadastro de Clientes",
      description: "Base completa de clientes com histórico de locações, documentos digitalizados e sistema de pontuação.",
      image: "/lovable-uploads/7e9a2eea-2dcb-4b20-90cf-af93c84d60e8.png"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Relatórios Inteligentes",
      description: "Dashboard com métricas importantes e relatórios personalizáveis para tomada de decisões estratégicas.",
      image: "/lovable-uploads/fd6fdb71-139c-4483-8e6c-763f3bda14c2.png"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Controle de Frota",
      description: "Monitore manutenções, documentação, quilometragem e status de cada veículo da sua frota.",
      image: "/lovable-uploads/176c2753-e2be-464e-8704-a37760cc1b1b.png"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "App Mobile",
      description: "Acesse o sistema de qualquer lugar com nosso aplicativo mobile otimizado para gestores e clientes.",
      image: "/lovable-uploads/f992e683-d611-4281-bcd1-9d4facbeba0a.png"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Notificações Automáticas",
      description: "Receba alertas sobre vencimentos, manutenções, devoluções e outras atividades importantes."
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Contratos Digitais",
      description: "Gere contratos profissionais automaticamente com assinatura digital e armazenamento seguro."
    }
  ];

  return (
    <section id="funcionalidades" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tudo que sua <span className="text-primary">locadora precisa</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sistema completo para gestão de frota automotiva com funcionalidades 
            desenvolvidas especificamente para o mercado de locação de motos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 border border-gray-200 rounded-xl hover:border-primary hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  {feature.image && (
                    <img 
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
