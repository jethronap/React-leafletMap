import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Place from './components/place'


class App extends React.Component {

  render() {
    const place = {
      "id": 148,
      "name": "The Maunsell Sea Forts, England",
      "imageUrl": "https://static.boredpanda.com/blog/wp-content/uuuploads/abandoned-places/abandoned-places-4.jpg",
      "date": 1950,
      "lat": 51.51276111,
      "lng": 1.08916667
    };

    const places = [place, place, place];

    return (

      <div className="app">
        <div className="main">
          <div className="search">
          </div>
          {/* use map to iterate through the places array */}
          <div className="places">
            {places.map((place) => {
              return <Place place={place} />
            })}
          </div>
          <div className="map"></div>
        </div>
      </div>

    );
  }
}

export default App;
