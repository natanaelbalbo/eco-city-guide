
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative py-20 md:py-28 eco-gradient">
      <div className="container grid gap-8 md:grid-cols-2 md:items-center">
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Guia de Reciclagem e Destinação de Resíduos
            </h1>
            <p className="mt-4 text-xl text-foreground/80">
              Promovendo a sustentabilidade urbana através da conscientização sobre a correta destinação dos resíduos sólidos.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="bg-eco-green hover:bg-eco-green-dark">
              <Link to="/mapa">Encontrar Pontos de Coleta</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/materiais">Guia de Materiais</Link>
            </Button>
          </div>
        </div>
        <div className="relative h-[300px] sm:h-[400px] md:h-full min-h-[300px] rounded-lg overflow-hidden shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Coleta seletiva de resíduos" 
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
