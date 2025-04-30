
import React from 'react';
import { MapPin, Recycle, Info } from 'lucide-react';

const features = [
  {
    title: "Mapa Interativo",
    description: "Localize os pontos de coleta mais próximos de você para cada tipo de material.",
    icon: MapPin,
  },
  {
    title: "Guia de Materiais",
    description: "Aprenda como separar corretamente os diferentes tipos de resíduos recicláveis.",
    icon: Recycle,
  },
  {
    title: "Dicas Práticas",
    description: "Conheça dicas e técnicas para reduzir a geração de resíduos no seu dia a dia.",
    icon: Info,
  },
];

const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Como Podemos Ajudar</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 bg-background rounded-lg border border-border/60 shadow-sm"
            >
              <div className="h-14 w-14 rounded-full bg-eco-green-light flex items-center justify-center mb-4">
                <feature.icon className="h-7 w-7 text-eco-green-dark" />
              </div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
