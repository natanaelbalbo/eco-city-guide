
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const materialCategories = [
  {
    id: 'plastico',
    name: 'Plástico',
    color: 'bg-red-100 text-red-700',
    icon: '🥤',
    description: 'Produtos feitos de polímeros sintéticos',
    materials: [
      {
        name: 'PET (Polietileno Tereftalato)',
        examples: 'Garrafas de refrigerante, água, recipientes de alimentos',
        howTo: 'Enxágue, remova rótulos e tampas quando possível, comprima para reduzir volume',
      },
      {
        name: 'PEAD (Polietileno de Alta Densidade)',
        examples: 'Embalagens de produtos de limpeza, frascos de shampoo, galões',
        howTo: 'Enxágue, escorra e mantenha tampas quando do mesmo material',
      },
      {
        name: 'PVC (Policloreto de Vinila)',
        examples: 'Tubos, conexões hidráulicas, embalagens rígidas',
        howTo: 'Separe de outros plásticos, confira se sua cooperativa recebe este material',
      },
      {
        name: 'PEBD (Polietileno de Baixa Densidade)',
        examples: 'Sacos plásticos, sacolas de supermercado, embalagens flexíveis',
        howTo: 'Certifique-se de que estão limpos e secos, junte vários para facilitar a coleta',
      },
    ],
  },
  {
    id: 'papel',
    name: 'Papel',
    color: 'bg-blue-100 text-blue-700',
    icon: '📄',
    description: 'Materiais feitos de fibras de celulose',
    materials: [
      {
        name: 'Papel Branco',
        examples: 'Documentos, folhas de caderno, papel de impressão',
        howTo: 'Remova grampos, clipes e fitas adesivas, mantenha seco',
      },
      {
        name: 'Papelão',
        examples: 'Caixas de embalagens, caixas de transporte',
        howTo: 'Desmonte as caixas para economizar espaço, remova fitas adesivas',
      },
      {
        name: 'Jornais e Revistas',
        examples: 'Jornais, revistas, catálogos',
        howTo: 'Empilhe e amarre em maços, mantenha secos',
      },
      {
        name: 'Papel Misto',
        examples: 'Envelopes, papel colorido, folhetos',
        howTo: 'Separe de papéis brancos, remova plásticos e metais',
      },
    ],
  },
  {
    id: 'vidro',
    name: 'Vidro',
    color: 'bg-green-100 text-green-700',
    icon: '🍶',
    description: 'Material transparente e reciclável infinitamente',
    materials: [
      {
        name: 'Garrafas de Vidro',
        examples: 'Garrafas de bebidas, molhos, conservas',
        howTo: 'Enxágue, remova tampas metálicas ou plásticas, não é necessário remover rótulos',
      },
      {
        name: 'Potes de Vidro',
        examples: 'Potes de alimentos, conservas, cosméticos',
        howTo: 'Enxágue, remova tampas e separe-as por material',
      },
      {
        name: 'Vidro Plano',
        examples: 'Janelas, espelhos, vidraças',
        howTo: 'Verifique se sua cooperativa aceita este tipo de vidro, manuseie com cuidado',
      },
      {
        name: 'Vidros Especiais',
        examples: 'Vidros temperados, lâmpadas, vidros de carros',
        howTo: 'Geralmente não são aceitos na coleta seletiva comum, busque pontos especiais',
      },
    ],
  },
  {
    id: 'metal',
    name: 'Metal',
    color: 'bg-yellow-100 text-yellow-700',
    icon: '🥫',
    description: 'Materiais metálicos diversos',
    materials: [
      {
        name: 'Alumínio',
        examples: 'Latas de bebidas, papel alumínio limpo, bandejas',
        howTo: 'Enxágue, amasse para reduzir volume, não é necessário remover rótulos',
      },
      {
        name: 'Aço',
        examples: 'Latas de alimentos, latas de aerossóis vazias',
        howTo: 'Enxágue, remova restos de alimentos, não é necessário remover rótulos',
      },
      {
        name: 'Metais Não Ferrosos',
        examples: 'Cobre, bronze, latão',
        howTo: 'Separe por tipo de metal, não misture com outros materiais',
      },
      {
        name: 'Tampas Metálicas',
        examples: 'Tampas de garrafas, tampas de potes',
        howTo: 'Junte em um recipiente menor, podem ser recicladas junto com outras embalagens metálicas',
      },
    ],
  },
  {
    id: 'eletronicos',
    name: 'Eletrônicos',
    color: 'bg-purple-100 text-purple-700',
    icon: '📱',
    description: 'Equipamentos elétricos e eletrônicos',
    materials: [
      {
        name: 'Pequenos Eletrônicos',
        examples: 'Celulares, calculadoras, rádios portáteis',
        howTo: 'Remova baterias quando possível, entregue em pontos de coleta específicos',
      },
      {
        name: 'Equipamentos de Informática',
        examples: 'Computadores, monitores, impressoras',
        howTo: 'Apague dados pessoais, entregue preferencialmente completos',
      },
      {
        name: 'Cabos e Carregadores',
        examples: 'Cabos USB, carregadores, fios',
        howTo: 'Enrole organizadamente, não corte os cabos',
      },
      {
        name: 'Pilhas e Baterias',
        examples: 'Pilhas alcalinas, baterias recarregáveis, baterias de celular',
        howTo: 'Nunca descarte no lixo comum, utilize pontos de coleta específicos',
      },
    ],
  },
];

const MaterialsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredMaterials = searchTerm 
    ? materialCategories.map(category => {
        const filteredItems = category.materials.filter(material => 
          material.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
          material.examples.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return {
          ...category,
          materials: filteredItems,
          hasMatches: filteredItems.length > 0
        };
      }).filter(category => category.hasMatches)
    : materialCategories;

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">Guia de Materiais Recicláveis</h1>
        
        <div className="mb-8">
          <p className="text-lg text-foreground/80 mb-6">
            Aprenda como identificar e preparar corretamente diferentes tipos de materiais para reciclagem.
            Uma separação adequada é fundamental para tornar o processo de reciclagem mais eficiente.
          </p>
          
          <div className="relative max-w-lg">
            <Input
              type="search"
              placeholder="Buscar materiais (ex: garrafa PET, papel, latas...)"
              className="pr-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-0 top-0 h-full"
              onClick={() => setSearchTerm('')}
              disabled={!searchTerm}
            >
              {searchTerm ? "✕" : "🔍"}
            </Button>
          </div>
        </div>
        
        {searchTerm && filteredMaterials.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl font-medium">Nenhum material encontrado para "{searchTerm}"</p>
            <p className="text-muted-foreground mt-2">Tente outro termo ou explore as categorias abaixo</p>
            <Button 
              variant="outline" 
              onClick={() => setSearchTerm('')} 
              className="mt-4"
            >
              Limpar pesquisa
            </Button>
          </div>
        ) : (
          <Tabs defaultValue={materialCategories[0].id} className="space-y-6">
            <TabsList className="flex flex-wrap h-auto gap-2 bg-muted/50 p-2">
              {materialCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className={`flex items-center gap-2 px-4 py-2 ${searchTerm && !filteredMaterials.some(c => c.id === category.id) ? 'opacity-50' : ''}`}
                  disabled={searchTerm && !filteredMaterials.some(c => c.id === category.id)}
                >
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {materialCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-6">
                <Card>
                  <CardHeader className={`${category.color} rounded-t-lg`}>
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{category.icon}</span>
                      <div>
                        <CardTitle className="text-2xl">{category.name}</CardTitle>
                        <CardDescription className="text-foreground/70">{category.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    {(searchTerm ? filteredMaterials.find(c => c.id === category.id)?.materials : category.materials)?.map((material, index) => (
                      <div key={index} className={`p-4 ${index % 2 === 0 ? 'bg-muted/30' : 'bg-transparent'} rounded-lg mb-4`}>
                        <h3 className="text-lg font-semibold mb-2">{material.name}</h3>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">Exemplos:</p>
                            <p>{material.examples}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">Como preparar para reciclagem:</p>
                            <p>{material.howTo}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                
                <div className="bg-eco-green-light p-6 rounded-lg border border-eco-green/30">
                  <h3 className="text-lg font-semibold text-eco-green-dark mb-2">Dica importante</h3>
                  <p>
                    Sempre verifique com sua cooperativa local ou serviço de coleta quais são os materiais aceitos 
                    em sua região. Alguns locais têm restrições específicas ou exigem preparações diferentes.
                  </p>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        )}
      </div>
    </Layout>
  );
};

export default MaterialsPage;
