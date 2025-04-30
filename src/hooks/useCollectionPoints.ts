
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
        // Simplificação: considera apenas pontos 24h como "aberto agora"
        if (!point.isOpen24h) return false;
      }

      // Filtro de funciona nos fins de semana
      if (filters.openOnWeekends && !point.openOnWeekends) {
        return false;
      }

      return true;
    });
  }, [filters]);

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
