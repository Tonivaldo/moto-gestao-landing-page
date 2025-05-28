
import React from 'react';
import { ChevronDown, Users, Database, Building2 } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      question: "Estou começando agora, tenho uma frota pequena, como o Moto Gestão pode me ajudar?",
      answer: "O Moto Gestão é perfeito para quem está começando! A gestão profissional desde o início é fundamental para o sucesso do seu negócio. Com nosso sistema, você terá controle total sobre sua frota, financeiro e operações desde o primeiro dia. Além disso, nosso agente de IA exclusivo oferece conteúdo didático personalizado, ensinando as melhores práticas do mercado de locação de motos. Quanto menor sua frota, mais importante é cada decisão - e o Moto Gestão garante que você tome as decisões certas baseadas em dados reais."
    },
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      question: "Como funciona a migração dos meus dados atuais?",
      answer: "Se você usa planilhas, outro sistema ou ainda faz anotações manuais, não se preocupe! Nossa equipe especializada cuida de toda a migração dos seus dados para o Moto Gestão. Cadastramos todas as informações da sua frota, clientes, contratos e histórico financeiro, garantindo que você não perca nenhum dado importante. O processo é rápido, seguro e totalmente gratuito, permitindo que você aproveite todos os benefícios do Moto Gestão desde o primeiro dia de uso."
    },
    {
      icon: <Building2 className="h-6 w-6 text-primary" />,
      question: "Posso usar o Moto Gestão com a minha marca para modelos de franquia?",
      answer: "Sim! O Moto Gestão oferece personalização completa com a marca da sua empresa. Você pode aplicar seu logotipo, cores e identidade visual em todo o sistema, criando uma experiência única para sua rede de franquias. Todos os recursos do sistema ficam disponíveis com sua marca, permitindo que você mantenha a consistência visual do seu negócio e fortaleça sua presença no mercado de franquias."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tire suas dúvidas sobre o Moto Gestão e descubra como podemos 
            revolucionar a gestão da sua locadora de motos
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-xl shadow-sm border border-gray-200 px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                      {faq.icon}
                    </div>
                    <span className="font-semibold text-gray-900 text-lg">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="ml-16">
                    <p className="text-gray-600 leading-relaxed text-base">
                      {faq.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ainda tem dúvidas? Nossa equipe está pronta para ajudar!
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contato');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Fale Conosco
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
