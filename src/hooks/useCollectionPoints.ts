
import { useState, useMemo } from 'react';
import { CollectionPoint, MaterialType, maringaCollectionPoints } from '@/data/collectionPoints';

type FilterOptions = {
  materials: MaterialType[];
  distance: string;
  openNow: boolean;
  openOnWeekends: boolean;
};

export function useCollectionPoints() {
  const [filters, setFilters] = useState<FilterOptions>({
    materials: [],
    distance: 'all',
    openNow: false,
    openOnWeekends: false,
  });

  const filteredPoints = useMemo(() => {
    return maringaCollectionPoints.filter(point => {
      // Filtra por materiais
      if (filters.materials.length > 0) {
        const hasSelectedMaterial = filters.materials.some(material => 
          point.materials.includes(material)
        );
        if (!hasSelectedMaterial) return false;
      }

      // Filtro de aberto agora
      if (filters.openNow) {
        const now = new Date();
        const day = now.getDay(); // 0 = domingo, 6 = sábado
        const hour = now.getHours();
        
        // Se estamos em um fim de semana e o ponto não funciona nos fins de semana
        if ((day === 0 || day === 6) && !point.openOnWeekends) {
          return false;
        }
        
        // Para simplificar, consideramos apenas pontos 24h ou que ainda estejam no horário de funcionamento
        // Essa lógica pode ser refinada para verificar horários específicos
        if (!point.isOpen24h) {
          // Verificação simplificada - assumindo que os pontos que não são 24h fecham às 18h
          if (hour < 8 || hour >= 18) {
            return false;
          }
        }
      }

      // Filtro de funciona nos fins de semana
      if (filters.openOnWeekends && !point.openOnWeekends) {
        return false;
      }

      // Implementação básica do filtro de distância
      // Em uma aplicação real, calcularia a distância real entre o usuário e o ponto
      if (filters.distance !== 'all') {
        // Como não temos a localização do usuário, essa é apenas uma simulação
        // baseada em um ponto central de Maringá
        const centerLat = -23.4210;
        const centerLng = -51.9380;
        
        const distanceKm = calculateDistance(
          centerLat, centerLng,
          point.coordinates.lat, point.coordinates.lng
        );
        
        const maxDistance = parseInt(filters.distance);
        if (distanceKm > maxDistance) {
          return false;
        }
      }

      return true;
    });
  }, [filters]);

  // Função para calcular a distância em km entre dois pontos geográficos
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const R = 6371; // Raio da Terra em km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2); 
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    const distance = R * c; // Distância em km
    return distance;
  };

  const deg2rad = (deg: number): number => {
    return deg * (Math.PI/180);
  };

  const toggleMaterialFilter = (material: MaterialType) => {
    setFilters(prev => {
      if (prev.materials.includes(material)) {
        return {
          ...prev,
          materials: prev.materials.filter(m => m !== material)
        };
      } else {
        return {
          ...prev,
          materials: [...prev.materials, material]
        };
      }
    });
  };

  const updateDistanceFilter = (distance: string) => {
    setFilters(prev => ({ ...prev, distance }));
  };

  const toggleOpenNowFilter = () => {
    setFilters(prev => ({ ...prev, openNow: !prev.openNow }));
  };

  const toggleWeekendFilter = () => {
    setFilters(prev => ({ ...prev, openOnWeekends: !prev.openOnWeekends }));
  };

  const resetFilters = () => {
    setFilters({
      materials: [],
      distance: 'all',
      openNow: false,
      openOnWeekends: false,
    });
  };

  return {
    filters,
    filteredPoints,
    toggleMaterialFilter,
    updateDistanceFilter,
    toggleOpenNowFilter,
    toggleWeekendFilter,
    resetFilters,
  };
}
