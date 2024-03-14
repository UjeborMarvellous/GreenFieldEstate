import React from 'react'
import "./Map.scss"
import { MapContainer, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import Pin from '../pin/Pin';

function Map({ items }) {
    return (
        <MapContainer center={[6.241812, 6.212438]} zoom={13} scrollWheelZoom={false} className='Map'>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {items.map(item => (
                <Pin item={item} key={item.id}/>
            ))}
        </MapContainer>
    )
}

export default Map