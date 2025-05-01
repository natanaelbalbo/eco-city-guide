
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin } from 'lucide-react';
import { CollectionPoint } from '@/data/collectionPoints';
import { Button } from '../ui/button';

interface MapComponentProps {
  points: CollectionPoint[];
}

const MapComponent: React.FC<MapComponentProps> = ({ points }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);
  const [selectedPoint, setSelectedPoint] = useState<CollectionPoint | null>(null);
  
  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-51.9380, -23.4210], // Centro de Maringá-PR
      zoom: 12,
    });

    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    map.current.on('load', () => {
      setMapLoaded(true);
      addMarkers();
    });

    return () => {
      map.current?.remove();
    };
  };

  const addMarkers = () => {
    if (!map.current || !mapLoaded) return;
    
    // Limpar marcadores anteriores
    const existingMarkers = document.querySelectorAll('.mapboxgl-marker');
    existingMarkers.forEach(marker => marker.remove());
    
    points.forEach((point) => {
      // Criar elemento customizado para o marcador
      const markerElement = document.createElement('div');
      markerElement.className = 'custom-marker';
      markerElement.innerHTML = `<div class="bg-eco-green rounded-full p-1.5 shadow-lg cursor-pointer hover:scale-110 transition-transform">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
      </div>`;
      
      markerElement.addEventListener('click', () => {
        setSelectedPoint(point);
        
        // Centralizar o mapa no ponto selecionado
        map.current?.flyTo({
          center: [point.coordinates.lng, point.coordinates.lat],
          zoom: 14,
          essential: true
        });
      });

      // Adicionar marcador ao mapa
      new mapboxgl.Marker(markerElement)
        .setLngLat([point.coordinates.lng, point.coordinates.lat])
        .addTo(map.current as mapboxgl.Map);
    });
  };

  // Efeito para adicionar marcadores quando o mapa é carregado ou os pontos mudam
  useEffect(() => {
    if (mapLoaded) {
      addMarkers();
    }
  }, [points, mapLoaded]);

  // Efeito para inicializar o mapa quando o token é definido
  useEffect(() => {
    if (mapboxToken) {
      initializeMap();
    }
  }, [mapboxToken]);

  return (
    <div className="relative min-h-[500px] bg-muted rounded-lg border border-border flex flex-col">
      {!mapboxToken ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10 bg-card/95">
          <h3 className="text-lg font-medium mb-4 text-center">Para carregar o mapa interativo, é necessário inserir um token do Mapbox</h3>
          <p className="text-sm text-muted-foreground mb-4 text-center">
            O Mapbox oferece um plano gratuito generoso. Crie uma conta em <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-eco-green hover:underline">mapbox.com</a>, 
            copie seu token público e cole abaixo:
          </p>
          <div className="flex flex-col w-full max-w-md gap-2">
            <input
              type="text"
              className="p-2 border rounded-md w-full"
              placeholder="Cole seu token público do Mapbox aqui"
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
            />
            <Button 
              className="bg-eco-green hover:bg-eco-green-dark"
              onClick={initializeMap}
            >
              Carregar Mapa
            </Button>
          </div>
        </div>
      ) : null}
      
      <div className="p-4 flex items-center justify-between bg-card border-b border-border">
        <h2 className="text-lg font-medium">Pontos de Coleta em Maringá-PR</h2>
      </div>
      
      <div ref={mapContainer} className="flex-1" />
      
      {selectedPoint && (
        <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 bg-white p-4 rounded-lg shadow-lg z-10">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-lg">{selectedPoint.name}</h3>
            <button 
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setSelectedPoint(null)}
            >
              ×
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-1">{selectedPoint.address}, {selectedPoint.neighborhood}</p>
          <p className="text-sm font-medium mt-2">Horário: {selectedPoint.hours}</p>
          <div className="mt-2">
            <p className="text-xs font-medium mb-1">Materiais aceitos:</p>
            <div className="flex flex-wrap gap-1">
              {selectedPoint.materials.map((material, index) => (
                <span 
                  key={index} 
                  className="bg-eco-green-light text-eco-green-dark text-xs px-2 py-0.5 rounded"
                >
                  {material}
                </span>
              ))}
            </div>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full mt-3"
            onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${selectedPoint.coordinates.lat},${selectedPoint.coordinates.lng}`, '_blank')}
          >
            Ver no Google Maps
          </Button>
        </div>
      )}
      
      {!mapLoaded && mapboxToken && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-10">
          <div className="text-center">
            <p className="mb-2">Carregando mapa...</p>
            <div className="w-8 h-8 border-4 border-eco-green border-t-transparent rounded-full animate-spin mx-auto"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapComponent;
