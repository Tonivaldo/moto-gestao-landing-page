
import React from 'react';
import { Calculator, TrendingUp, FileText, Target, CheckCircle } from 'lucide-react';

const AutoCalculation = () => {
  const calculations = [
    {
      icon: <Calculator className="h-8 w-8 text-primary" />,
      title: "Depreciação Automática",
      description: "Cálculo preciso baseado na tabela FIPE atualizada mensalmente",
      value: "Tabela FIPE"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "ROI em Tempo Real",
      description: "Acompanhe o retorno sobre investimento de cada moto da frota",
      value: "ROI Calculado"
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Análise de Rentabilidade",
      description: "Identifique quais motos geram mais lucro para sua operação",
      value: "Relatórios"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Calculator className="h-4 w-4" />
            Cálculos Automáticos
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            <span className="text-primary">Depreciação FIPE</span> e ROI{' '}
            <br className="hidden md:block" />
            Calculados Automaticamente
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Primeiro sistema que calcula automaticamente a depreciação das suas motos 
            com base na tabela FIPE e gera relatórios completos de ROI para cada veículo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Calculation Demo */}
          <div className="animate-scale-in">
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-xl border">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Relatório Automático - Honda CB 600F
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white rounded-lg border">
                  <span className="text-gray-600">Valor de Compra (FIPE)</span>
                  <span className="font-bold text-gray-900">R$ 35.000</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-white rounded-lg border">
                  <span className="text-gray-600">Valor Atual (FIPE)</span>
                  <span className="font-bold text-gray-900">R$ 32.500</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <span className="text-gray-600">Depreciação Calculada</span>
                  <span className="font-bold text-primary">-R$ 2.500 (-7,1%)</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border border-green-200">
                  <span className="text-gray-600">Receita Total</span>
                  <span className="font-bold text-green-600">R$ 18.400</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <span className="text-gray-600">ROI Atual</span>
                  <span className="font-bold text-blue-600">+45,2%</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Recomendação IA:</strong> Moto com excelente ROI. 
                  Considere manter na frota por mais 18 meses.
                </p>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="animate-fade-in">
            <div className="space-y-8">
              {calculations.map((calc, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 bg-primary/10 p-4 rounded-xl">
                    {calc.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {calc.title}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {calc.description}
                    </p>
                    <div className="inline-flex items-center gap-2 bg-primary/5 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      <CheckCircle className="h-4 w-4" />
                      {calc.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-transparent rounded-xl">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calculator className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Cálculos Precisos
            </h3>
            <p className="text-gray-600">
              Base de dados FIPE atualizada automaticamente todos os meses
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-transparent rounded-xl">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              ROI em Tempo Real
            </h3>
            <p className="text-gray-600">
              Acompanhe a rentabilidade de cada moto instantaneamente
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-transparent rounded-xl">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Decisões Inteligentes
            </h3>
            <p className="text-gray-600">
              Saiba quando comprar, vender ou manter cada veículo da frota
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutoCalculation;
