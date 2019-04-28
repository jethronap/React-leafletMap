import React from 'react';
import './App.css';
import Place from './components/place';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      places: [],
    };
  }

  componentDidMount() {
    // fake url to mock an api:
    const endpoint = "https://raw.githubusercontent.com/jethronap/ReactEg/master/places.json";

    fetch(endpoint) // AJAX request
      .then(response => response.json())
      .then((data) => {
        this.setState({
          places: data
        });
      })
  }


  render() {

    const center = [39.98, -28.05];

    return (

      <div className="app">
        <div className="main">
          <div className="search">
          </div>
          {/* use map to iterate through the places array */}
          <div className="places" >
            {this.state.places.map((place) => {
              return <Place key={place.id} place={place} />
            })}
          </div>
            <LeafletMap className="map"
              center={center}
              zoom={2}
              maxZoom={15}
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
              {this.state.places.map((place) => {
                return <Marker key={place.id} position={[place.lat, place.lng]}>
                  <Popup>
                    hello from {place.name}
                  </Popup>
                </Marker>
              })}
            </LeafletMap>
        </div>
      </div>

    );
  }
}

export default App;
