
import React from 'react';

const stats = [
  {
    value: "97%",
    label: "Reduções de impacto ambiental com a reciclagem correta",
  },
  {
    value: "76%",
    label: "Dos resíduos podem ser reciclados ou reutilizados",
  },
  {
    value: "500k",
    label: "Toneladas de lixo reciclável são descartadas incorretamente por ano",
  },
  {
    value: "48%",
    label: "Redução de custos municipais com coleta seletiva eficiente",
  },
];

const Stats = () => {
  return (
    <section className="py-16 md:py-24 border-y border-border/60 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
          Por que a Reciclagem é Importante
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl font-bold text-eco-green-dark mb-2">{stat.value}</p>
              <p className="text-sm text-foreground/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
