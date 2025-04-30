
export type MaterialType = 'Plástico' | 'Papel' | 'Vidro' | 'Metal' | 'Eletrônicos' | 'Pilhas' | 'Óleo' | 'Orgânicos';

export type CollectionPoint = {
  id: number;
  name: string;
  address: string;
  neighborhood: string;
  coordinates: { lat: number; lng: number };
  materials: MaterialType[];
  hours: string;
  isOpen24h: boolean;
  openOnWeekends: boolean;
};

export const materialTypes: MaterialType[] = [
  'Plástico', 
  'Papel', 
  'Vidro', 
  'Metal', 
  'Eletrônicos', 
  'Pilhas',
  'Óleo',
  'Orgânicos'
];

// Pontos de coleta em Maringá-PR
export const maringaCollectionPoints: CollectionPoint[] = [
  {
    id: 1,
    name: 'Ecoponto Jardim Alvorada',
    address: 'Av. Guedner, 1525',
    neighborhood: 'Jardim Alvorada',
    coordinates: { lat: -23.4045, lng: -51.9427 },
    materials: ['Plástico', 'Papel', 'Vidro', 'Metal'],
    hours: '8h às 17h - Segunda a Sábado',
    isOpen24h: false,
    openOnWeekends: true
  },
  {
    id: 2,
    name: 'Cooperativa COOPERMARINGÁ',
    address: 'Av. Tuiuti, 2425',
    neighborhood: 'Zona 7',
    coordinates: { lat: -23.4197, lng: -51.9314 },
    materials: ['Plástico', 'Papel', 'Metal', 'Eletrônicos'],
    hours: '8h às 18h - Segunda a Sexta',
    isOpen24h: false,
    openOnWeekends: false
  },
  {
    id: 3,
    name: 'Ecoponto Parque das Grevíleas',
    address: 'Rua Pintassilgo, 290',
    neighborhood: 'Parque das Grevíleas',
    coordinates: { lat: -23.3913, lng: -51.9620 },
    materials: ['Plástico', 'Papel', 'Vidro', 'Metal', 'Pilhas'],
    hours: '8h às 19h - Todos os dias',
    isOpen24h: false,
    openOnWeekends: true
  },
  {
    id: 4,
    name: 'Ponto de Coleta Shopping Catuaí',
    address: 'Av. Colombo, 9161',
    neighborhood: 'Zona 5',
    coordinates: { lat: -23.4194, lng: -51.9949 },
    materials: ['Pilhas', 'Eletrônicos', 'Óleo'],
    hours: '10h às 22h - Todos os dias',
    isOpen24h: false,
    openOnWeekends: true
  },
  {
    id: 5,
    name: 'Ecoponto Zona 10',
    address: 'Av. Brasil, 4312',
    neighborhood: 'Zona 10',
    coordinates: { lat: -23.4289, lng: -51.9339 },
    materials: ['Plástico', 'Papel', 'Vidro', 'Metal', 'Óleo'],
    hours: '8h às 17h - Segunda a Sexta',
    isOpen24h: false,
    openOnWeekends: false
  },
  {
    id: 6,
    name: 'Ponto Verde Maringá Parque',
    address: 'Av. Mandacaru, 2200',
    neighborhood: 'Maringá Parque',
    coordinates: { lat: -23.3858, lng: -51.9506 },
    materials: ['Plástico', 'Papel', 'Vidro', 'Metal', 'Orgânicos'],
    hours: '24 horas - Todos os dias',
    isOpen24h: true,
    openOnWeekends: true
  },
  {
    id: 7,
    name: 'Recicla Mais Maringá',
    address: 'Rua Santos Dumont, 2815',
    neighborhood: 'Zona 1',
    coordinates: { lat: -23.4222, lng: -51.9372 },
    materials: ['Plástico', 'Metal', 'Eletrônicos', 'Pilhas'],
    hours: '9h às 18h - Segunda a Sábado',
    isOpen24h: false,
    openOnWeekends: true
  },
  {
    id: 8,
    name: 'Ecoponto Jardim Diamante',
    address: 'Rua das Esmeraldas, 450',
    neighborhood: 'Jardim Diamante',
    coordinates: { lat: -23.4375, lng: -51.9487 },
    materials: ['Plástico', 'Papel', 'Vidro', 'Óleo', 'Orgânicos'],
    hours: '8h às 19h - Todos os dias',
    isOpen24h: false,
    openOnWeekends: true
  }
];
