
import React from 'react';
import { MapPin, Filter } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCollectionPoints } from '@/hooks/useCollectionPoints';
import { materialTypes } from '@/data/collectionPoints';
import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';

const MapPage = () => {
  const {
    filters,
    filteredPoints,
    toggleMaterialFilter,
    updateDistanceFilter,
    toggleOpenNowFilter,
    toggleWeekendFilter,
    resetFilters,
  } = useCollectionPoints();

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-8">Mapa de Pontos de Coleta em Maringá-PR</h1>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            {/* Map placeholder - Em uma aplicação real, seria um mapa interativo */}
            <div className="relative min-h-[500px] bg-muted rounded-lg border border-border flex flex-col">
              <div className="p-4 flex items-center justify-between bg-card border-b border-border">
                <h2 className="text-lg font-medium">Pontos de Coleta</h2>
                
                <div className="flex items-center gap-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Filter size={16} />
                        Filtros Rápidos
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80 p-4">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium mb-2">Status</h4>
                          <div className="flex flex-wrap gap-2">
                            <Toggle 
                              variant="outline" 
                              pressed={filters.openNow}
                              onPressedChange={toggleOpenNowFilter}
                              className="text-xs h-8"
                            >
                              Aberto Agora
                            </Toggle>
                            <Toggle 
                              variant="outline" 
                              pressed={filters.openOnWeekends}
                              onPressedChange={toggleWeekendFilter}
                              className="text-xs h-8"
                            >
                              Aberto Fins de Semana
                            </Toggle>
                          </div>
                        </div>
                        <Button size="sm" variant="secondary" onClick={resetFilters}>Limpar Filtros</Button>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              
              <div className="relative flex-1 flex items-center justify-center">
                <div className="text-center p-6">
                  <p className="mb-4 text-lg text-muted-foreground">
                    Mapa interativo de pontos de coleta
                  </p>
                  <Button className="bg-eco-green hover:bg-eco-green-dark">
                    Carregar Mapa Interativo
                  </Button>
                </div>
                
                {/* Pins para simular marcadores no mapa */}
                {filteredPoints.map((point, index) => {
                  // Cálculo simples para distribuir os pontos pelo mapa
                  const posX = 10 + (index % 4) * 25;
                  const posY = 10 + Math.floor(index / 4) * 25;
                  
                  return (
                    <div 
                      key={point.id}
                      className="absolute cursor-pointer hover:z-10"
                      style={{ 
                        left: `${posX}%`, 
                        top: `${posY}%` 
                      }}
                    >
                      <div className="relative group">
                        <MapPin className="h-8 w-8 text-eco-green" />
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-white p-2 rounded-md shadow-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity z-10">
                          <p className="font-bold">{point.name}</p>
                          <p>{point.address}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Filtros
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={resetFilters}
                    className="text-xs"
                  >
                    Limpar
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Tipos de Materiais</label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {materialTypes.map((material) => (
                        <Badge 
                          key={material}
                          variant={filters.materials.includes(material) ? "default" : "outline"}
                          className={filters.materials.includes(material) 
                            ? "bg-eco-green hover:bg-eco-green-dark cursor-pointer" 
                            : "cursor-pointer hover:bg-muted"}
                          onClick={() => toggleMaterialFilter(material)}
                        >
                          {material}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Distância</label>
                    <Select 
                      value={filters.distance} 
                      onValueChange={updateDistanceFilter}
                    >
                      <SelectTrigger className="w-full mt-1">
                        <SelectValue placeholder="Selecione a distância" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todas as distâncias</SelectItem>
                        <SelectItem value="1">Até 1km</SelectItem>
                        <SelectItem value="3">Até 3km</SelectItem>
                        <SelectItem value="5">Até 5km</SelectItem>
                        <SelectItem value="10">Até 10km</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Horário de Funcionamento</label>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="openNow" 
                          checked={filters.openNow} 
                          onCheckedChange={toggleOpenNowFilter} 
                        />
                        <label 
                          htmlFor="openNow" 
                          className="text-sm cursor-pointer"
                        >
                          Aberto agora
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="openWeekends" 
                          checked={filters.openOnWeekends} 
                          onCheckedChange={toggleWeekendFilter} 
                        />
                        <label 
                          htmlFor="openWeekends" 
                          className="text-sm cursor-pointer"
                        >
                          Funciona nos fins de semana
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-eco-green hover:bg-eco-green-dark"
                  >
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
            {filteredPoints.map((point) => (
              <Card key={point.id}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{point.name}</h3>
                  <p className="text-muted-foreground mb-1">{point.address}</p>
                  <p className="text-muted-foreground mb-2">{point.neighborhood}</p>
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
          
          {filteredPoints.length === 0 && (
            <div className="text-center p-10 bg-muted rounded-lg">
              <p className="text-lg text-muted-foreground">
                Nenhum ponto de coleta encontrado com os filtros selecionados.
              </p>
              <Button 
                variant="outline" 
                onClick={resetFilters} 
                className="mt-4"
              >
                Limpar Filtros
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default MapPage;
