
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
      description: "Controle completo de reservas, locações e devoluções com calendário intuitivo e notificações automáticas."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-primary" />,
      title: "Controle Financeiro",
      description: "Acompanhe receitas, despesas, inadimplência e gere relatórios financeiros detalhados em tempo real."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Cadastro de Clientes",
      description: "Base completa de clientes com histórico de locações, documentos digitalizados e sistema de pontuação."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Relatórios Inteligentes",
      description: "Dashboard com métricas importantes e relatórios personalizáveis para tomada de decisões estratégicas."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Controle de Frota",
      description: "Monitore manutenções, documentação, quilometragem e status de cada veículo da sua frota."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "App Mobile",
      description: "Acesse o sistema de qualquer lugar com nosso aplicativo mobile otimizado para gestores e clientes."
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

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 border border-gray-200 rounded-xl hover:border-primary hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
