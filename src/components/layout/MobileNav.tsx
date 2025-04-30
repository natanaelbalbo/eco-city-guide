
import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon" className="text-foreground">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Abrir menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="pr-0 sm:max-w-xs">
        <div className="px-2">
          <div className="flex items-center justify-between pb-4">
            <Link to="/" className="font-bold text-xl text-eco-green-dark" onClick={() => setOpen(false)}>
              Eco-City Guide
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-6 w-6" />
              <span className="sr-only">Fechar menu</span>
            </Button>
          </div>
          <nav className="flex flex-col gap-4">
            <Link 
              to="/" 
              className="flex items-center py-2 text-lg font-medium hover:text-eco-green"
              onClick={() => setOpen(false)}
            >
              Início
            </Link>
            <Link 
              to="/mapa" 
              className="flex items-center py-2 text-lg font-medium hover:text-eco-green"
              onClick={() => setOpen(false)}
            >
              Mapa
            </Link>
            <Link 
              to="/materiais" 
              className="flex items-center py-2 text-lg font-medium hover:text-eco-green"
              onClick={() => setOpen(false)}
            >
              Materiais
            </Link>
            <Link 
              to="/dicas" 
              className="flex items-center py-2 text-lg font-medium hover:text-eco-green"
              onClick={() => setOpen(false)}
            >
              Dicas
            </Link>
            <Button className="mt-4 bg-eco-green hover:bg-eco-green-dark">
              Contribuir
            </Button>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
