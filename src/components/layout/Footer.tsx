
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-muted/50 py-8">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="mb-3 text-lg font-medium">Eco-City Guide</h3>
          <p className="text-sm text-muted-foreground">
            Promovendo a sustentabilidade e reciclagem para cidades mais limpas e conscientes.
          </p>
        </div>
        <div>
          <h3 className="mb-3 text-lg font-medium">Links Rápidos</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Início
              </Link>
            </li>
            <li>
              <Link to="/mapa" className="text-muted-foreground hover:text-foreground transition-colors">
                Mapa de Coleta
              </Link>
            </li>
            <li>
              <Link to="/materiais" className="text-muted-foreground hover:text-foreground transition-colors">
                Guia de Materiais
              </Link>
            </li>
            <li>
              <Link to="/dicas" className="text-muted-foreground hover:text-foreground transition-colors">
                Dicas de Reciclagem
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-lg font-medium">Sustentabilidade</h3>
          <ul className="space-y-2 text-sm">
            <li className="text-muted-foreground">ODS 11 - Cidades Sustentáveis</li>
            <li className="text-muted-foreground">Redução de Resíduos</li>
            <li className="text-muted-foreground">Economia Circular</li>
            <li className="text-muted-foreground">Educação Ambiental</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-lg font-medium">Contato</h3>
          <ul className="space-y-2 text-sm">
            <li className="text-muted-foreground">contato@ecocityguide.com</li>
            <li className="text-muted-foreground">+55 (11) 9999-9999</li>
            <li className="text-muted-foreground">Cadastre seu ponto de coleta</li>
            <li className="text-muted-foreground">Reporte um problema</li>
          </ul>
        </div>
      </div>
      <div className="container mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Eco-City Guide. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
