
import React, { useState } from 'react';
import { Bike, Mail, Phone, MapPin, Shield, Award, Clock } from 'lucide-react';
import { toast } from 'sonner';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simula envio do formulário
    setTimeout(() => {
      toast.success('Obrigado! Entraremos em contato em breve.');
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <footer id="contato" className="bg-gray-900 text-white">
      {/* Lead Form Section */}
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para revolucionar sua locadora?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Deixe seus dados e receba uma demonstração personalizada do MotoGestão
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu melhor email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Enviando...' : 'Quero uma Demo'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-primary p-2 rounded-lg">
                  <Bike className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">MotoGestão</span>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                O sistema mais completo para gestão de locadoras de motos. 
                Simplifique sua operação e maximize seus resultados.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-gray-300">(11) 9 9999-9999</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-gray-300">contato@motogestao.com.br</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-gray-300">São Paulo, SP</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Links Rápidos</h3>
              <ul className="space-y-3">
                <li><a href="#funcionalidades" className="text-gray-400 hover:text-primary transition-colors">Funcionalidades</a></li>
                <li><a href="#depoimentos" className="text-gray-400 hover:text-primary transition-colors">Depoimentos</a></li>
                <li><a href="#planos" className="text-gray-400 hover:text-primary transition-colors">Planos e Preços</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Central de Ajuda</a></li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Soluções</h3>
              <ul className="space-y-3">
                <li><span className="text-gray-400">Gestão de Frota</span></li>
                <li><span className="text-gray-400">Controle Financeiro</span></li>
                <li><span className="text-gray-400">App Mobile</span></li>
                <li><span className="text-gray-400">Relatórios</span></li>
                <li><span className="text-gray-400">Integrações</span></li>
              </ul>
            </div>

            {/* Trust Badges */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Segurança & Confiança</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Shield className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">SSL 256-bit</p>
                    <p className="text-sm text-gray-400">Dados criptografados</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Award className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">ISO 27001</p>
                    <p className="text-sm text-gray-400">Segurança certificada</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Clock className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">99.9% Uptime</p>
                    <p className="text-sm text-gray-400">Disponibilidade garantida</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 MotoGestão. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
                LGPD
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
