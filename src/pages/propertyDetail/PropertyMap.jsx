import { Marker, Popup } from "react-leaflet";
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import "leaflet/dist/leaflet.css"

const PropertyMap = ({ mapLocation }) => {
    return (
        <MapContainer center={[51.505, -0.09]} zoom={30} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                    {mapLocation}

                </Popup>
            </Marker>
        </MapContainer>
    )
};

export default PropertyMap;
