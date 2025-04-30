
import React from 'react';
import { MapPin } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Mock data for collection points
const collectionPoints = [
  {
    id: 1,
    name: 'Ecoponto Vila Mariana',
    address: 'Av. Prof. Noé Azevedo, 301',
    coordinates: { lat: -23.5868, lng: -46.6393 },
    materials: ['Plástico', 'Papel', 'Vidro', 'Metal'],
    hours: '8h às 19h - Todos os dias',
  },
  {
    id: 2,
    name: 'Ecoponto Lapa',
    address: 'R. Monteiro de Melo, 300',
    coordinates: { lat: -23.5274, lng: -46.7013 },
    materials: ['Plástico', 'Metal', 'Eletrônicos'],
    hours: '8h às 19h - Seg a Sáb',
  },
  {
    id: 3,
    name: 'Cooperativa Recicla SP',
    address: 'Rua dos Recicladores, 45',
    coordinates: { lat: -23.5458, lng: -46.6335 },
    materials: ['Papel', 'Papelão', 'Plástico', 'Metal'],
    hours: '9h às 17h - Seg a Sex',
  },
  {
    id: 4,
    name: 'Ponto de Coleta Pinheiros',
    address: 'Rua Padre Carvalho, 100',
    coordinates: { lat: -23.5664, lng: -46.6995 },
    materials: ['Vidro', 'Metal', 'Baterias'],
    hours: '8h às 18h - Todos os dias',
  },
];

const MapPage = () => {
  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-8">Mapa de Pontos de Coleta</h1>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            {/* Map placeholder - In a real app, this would be an interactive map */}
            <div className="relative min-h-[500px] bg-muted rounded-lg border border-border flex items-center justify-center">
              <div className="text-center p-6">
                <p className="mb-4 text-lg text-muted-foreground">
                  Mapa interativo de pontos de coleta
                </p>
                <Button className="bg-eco-blue hover:bg-eco-blue-dark">
                  Carregar Mapa Interativo
                </Button>
              </div>
              
              {/* Pins to simulate map markers */}
              <div className="absolute top-1/4 left-1/4">
                <MapPin className="h-8 w-8 text-eco-green" />
              </div>
              <div className="absolute top-1/3 left-2/3">
                <MapPin className="h-8 w-8 text-eco-green" />
              </div>
              <div className="absolute bottom-1/4 right-1/4">
                <MapPin className="h-8 w-8 text-eco-green" />
              </div>
              <div className="absolute bottom-1/3 left-1/3">
                <MapPin className="h-8 w-8 text-eco-green" />
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Filtros</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Tipos de Materiais</label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="outline">Plástico</Badge>
                      <Badge variant="outline">Papel</Badge>
                      <Badge variant="outline">Vidro</Badge>
                      <Badge variant="outline">Metal</Badge>
                      <Badge variant="outline">Eletrônicos</Badge>
                      <Badge variant="outline">Pilhas</Badge>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Distância</label>
                    <select className="w-full mt-1 rounded-md border border-input bg-background px-3 py-2">
                      <option>Até 1km</option>
                      <option>Até 3km</option>
                      <option>Até 5km</option>
                      <option>Até 10km</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Horário de Funcionamento</label>
                    <select className="w-full mt-1 rounded-md border border-input bg-background px-3 py-2">
                      <option>Todos</option>
                      <option>Aberto agora</option>
                      <option>Fins de semana</option>
                    </select>
                  </div>
                  
                  <Button className="w-full bg-eco-green hover:bg-eco-green-dark">
                    Aplicar Filtros
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Como Usar</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="bg-eco-green-light text-eco-green-dark rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">1</span>
                    <span>Selecione os tipos de materiais que deseja descartar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-eco-green-light text-eco-green-dark rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">2</span>
                    <span>Ajuste os filtros de distância e horários conforme sua necessidade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-eco-green-light text-eco-green-dark rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">3</span>
                    <span>Clique nos pontos do mapa para ver detalhes e direções</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold">Pontos de Coleta</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {collectionPoints.map((point) => (
              <Card key={point.id}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{point.name}</h3>
                  <p className="text-muted-foreground mb-2">{point.address}</p>
                  <p className="text-sm text-muted-foreground mb-4">{point.hours}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-1">Materiais aceitos:</p>
                    <div className="flex flex-wrap gap-1">
                      {point.materials.map((material, index) => (
                        <Badge key={index} variant="secondary" className="bg-eco-green-light text-eco-green-dark">
                          {material}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full">Ver Detalhes</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MapPage;
