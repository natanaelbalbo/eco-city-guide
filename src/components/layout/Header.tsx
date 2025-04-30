
import React from 'react';
import { Link } from 'react-router-dom';
import { Recycle } from 'lucide-react';
import { MobileNav } from './MobileNav';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Recycle className="h-8 w-8 text-eco-green" />
          <Link to="/" className="font-bold text-xl text-eco-green-dark">
            Eco-City Guide
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
            Início
          </Link>
          <Link to="/mapa" className="text-foreground/80 hover:text-foreground transition-colors">
            Mapa
          </Link>
          <Link to="/materiais" className="text-foreground/80 hover:text-foreground transition-colors">
            Materiais
          </Link>
          <Link to="/dicas" className="text-foreground/80 hover:text-foreground transition-colors">
            Dicas
          </Link>
          <Button variant="default" className="bg-eco-green hover:bg-eco-green-dark">
            Contribuir
          </Button>
        </nav>
        
        {/* Mobile Navigation */}
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
