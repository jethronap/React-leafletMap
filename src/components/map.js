import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import "./map.css";

class Map extends React.Component {
    render() {
        
        return (
            <LeafletMap
                center={[-4.32758, 15.31357]}
                zoom={11}
                maxZoom={14}
                attributionControl={true}
                zoomControl={true}
                doubleClickZoom={true}
                scrollWheelZoom={true}
                dragging={true}
                animate={true}
                easeLinearity={0.35}
            >
                <TileLayer
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                <Marker position={[-4.32758, 15.31357]}>
                    <Popup>
                        halo from nowhere { console.log(this.props.place)};
                        
                    </Popup>
                </Marker>
            </LeafletMap>
        );
    }
}

export default Map