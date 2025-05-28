
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Mendes",
      company: "Moto Rental SP",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      text: "O MotoGestão revolucionou nossa operação. Conseguimos aumentar nossa receita em 40% no primeiro ano apenas com a organização que o sistema trouxe.",
      rating: 5
    },
    {
      name: "Ana Paula Silva",
      company: "Fast Motos RJ",
      image: "https://images.unsplash.com/photo-1494790108755-2616b86d8a94?w=400&h=400&fit=crop&crop=face",
      text: "Antes perdíamos muito tempo com controle manual. Agora tudo é automatizado e conseguimos focar no que realmente importa: atender bem nossos clientes.",
      rating: 5
    },
    {
      name: "Roberto Oliveira",
      company: "Moto Express BH",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      text: "Sistema muito intuitivo e completo. O suporte é excepcional, sempre prontos para ajudar. Recomendo para qualquer locadora que quer crescer.",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O que nossos <span className="text-primary">clientes dizem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 500 locadoras confiam no MotoGestão para gerenciar seus negócios 
            e alcançar resultados extraordinários.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Quote className="h-8 w-8 text-primary mb-4" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-primary text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
