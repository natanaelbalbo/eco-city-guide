
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { CollectionPoint } from '@/data/collectionPoints';
import { Button } from '../ui/button';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Corrigir ícone do Leaflet
// Problema comum com Webpack/Vite onde os caminhos dos ícones são quebrados
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

interface MapComponentProps {
  points: CollectionPoint[];
}

// Componente de mapa usando react-leaflet
const MapComponent: React.FC<MapComponentProps> = ({ points }) => {
  const [selectedPoint, setSelectedPoint] = useState<CollectionPoint | null>(null);
  const maringaCenter = [-23.4210, -51.9380]; // Coordenadas centrais de Maringá
  
  return (
    <div className="relative min-h-[500px] bg-muted rounded-lg border border-border flex flex-col">
      <div className="p-4 flex items-center justify-between bg-card border-b border-border">
        <h2 className="text-lg font-medium">Pontos de Coleta em Maringá-PR</h2>
      </div>
      
      <div className="flex-1">
        <MapContainer 
          center={maringaCenter as [number, number]} 
          zoom={13} 
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {points.map((point) => (
            <Marker 
              key={point.id}
              position={[point.coordinates.lat, point.coordinates.lng]}
              eventHandlers={{
                click: () => {
                  setSelectedPoint(point);
                },
              }}
            >
              <Popup>
                <div className="text-sm">
                  <h3 className="font-semibold">{point.name}</h3>
                  <p className="text-xs text-muted-foreground">{point.address}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      
      {selectedPoint && (
        <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 bg-white p-4 rounded-lg shadow-lg z-[1000]">
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
    </div>
  );
};

export default MapComponent;
