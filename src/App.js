import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Place from './components/place'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      places: []
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

    return (

      <div className="app">
        <div className="main">
          <div className="search">
          </div>
          {/* use map to iterate through the places array */}
          <div className="places">
            {this.state.places.map((place) => {
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
