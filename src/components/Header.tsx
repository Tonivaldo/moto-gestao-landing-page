
import React, { useState } from 'react';
import { Menu, X, Bike } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-primary p-2 rounded-lg">
              <Bike className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">MotoGestão</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('funcionalidades')}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Funcionalidades
            </button>
            <button 
              onClick={() => scrollToSection('depoimentos')}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Depoimentos
            </button>
            <button 
              onClick={() => scrollToSection('planos')}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Planos
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <button 
            onClick={() => scrollToSection('contato')}
            className="hidden md:block bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Experimente Grátis
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('funcionalidades')}
                className="text-gray-600 hover:text-primary transition-colors text-left"
              >
                Funcionalidades
              </button>
              <button 
                onClick={() => scrollToSection('depoimentos')}
                className="text-gray-600 hover:text-primary transition-colors text-left"
              >
                Depoimentos
              </button>
              <button 
                onClick={() => scrollToSection('planos')}
                className="text-gray-600 hover:text-primary transition-colors text-left"
              >
                Planos
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-gray-600 hover:text-primary transition-colors text-left"
              >
                Contato
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-lg font-semibold transition-colors w-full mt-4"
              >
                Experimente Grátis
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
