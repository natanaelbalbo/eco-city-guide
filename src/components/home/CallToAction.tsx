
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="rounded-2xl bg-eco-green-light p-8 md:p-12 lg:px-16 lg:py-14">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-eco-green-dark sm:text-4xl">
                Juntos por uma cidade mais sustentável
              </h2>
              <p className="mt-4 text-lg text-foreground/70 max-w-xl">
                Contribua para a construção de uma cidade mais limpa e sustentável. 
                Aprenda a separar seus resíduos e encontre os pontos de coleta mais próximos.
              </p>
            </div>
            <div className="flex flex-shrink-0">
              <Button asChild size="lg" className="bg-eco-green hover:bg-eco-green-dark">
                <Link to="/mapa">Encontrar Pontos de Coleta</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
