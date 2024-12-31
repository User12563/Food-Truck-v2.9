import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

const FOOD_TRUCK_POSITION: [number, number] = [48.897324, 2.252852]; // Courbevoie coordinates

const customIcon = new Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export function Map() {
  return (
    <div className="h-[300px] w-full">
      <MapContainer
        center={FOOD_TRUCK_POSITION}
        zoom={15}
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={FOOD_TRUCK_POSITION} icon={customIcon}>
          <Popup>
            <div className="text-center">
              <h3 className="font-bold">FUSION TRUCK</h3>
              <p className="text-sm">Ouvert de 11h30 à 14h30</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}