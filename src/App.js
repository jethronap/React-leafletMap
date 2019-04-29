import React from 'react';
import './App.css';
import Place from './components/place';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      places: [], // this is the filter
      allPlaces: [], // this never changes
      selectedPlace: null,
      search: "",
    };
  }

  componentDidMount() {
    // fake url to mock an api:
    const endpoint = "https://raw.githubusercontent.com/jethronap/ReactEg/master/places.json";

    fetch(endpoint) // AJAX request
      .then(response => response.json())
      .then((data) => {
        this.setState({
          places: data,
          allPlaces: data,
        });
      })
  }

  selectPlace = (place) => {
    // here we want to change the state of the map: we gave the key selectedPlace
    console.log(place);
    this.setState({
      selectedPlace: place
    })
  }

  handleSearch = (event) => {
    console.log(event);
    // change the state when i type sth in search:
    this.setState({
      search: event.target.value,
      // we pass allPlaces here so as to have all places when i backspace or enter nothing in searchbar:
      places: this.state.allPlaces.filter((place) => new RegExp(event.target.value, "i").exec(place.name))
    });
  }

  render() {

    // we change the center from constant to variable with let:
    let center = [39.98, -28.05];
    let zoom = 2;
    // change the center according to state:
    if (this.state.selectedPlace) {
      center = [this.state.selectedPlace.lat, this.state.selectedPlace.lng];
      zoom = 11;
    }

    return (

      <div className="app">
        <div className="main">
          <div className="search">
            <input
              type="text"
              placeholder="Search..."
              value={this.state.search}
              onChange={this.handleSearch} />
          </div>
          {/* use map to iterate through the places array */}
          <div className="places" >
            {this.state.places.map((place) => {
              return <Place
                key={place.id}
                place={place}
                selectPlace={this.selectPlace} />
            })}
          </div>
        </div>
        <LeafletMap className="map"
            center={center}
            zoom={zoom}
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

    );
  }
}

export default App;
