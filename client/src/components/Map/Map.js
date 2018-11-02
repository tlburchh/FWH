import "mapbox-gl/dist/mapbox-gl.css";
import React, { Component } from "react";
import { render } from "react-dom";
import MapGL from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";

// Please be a decent human and don't abuse my Mapbox API token.
// If you fork this sandbox, replace my API token with your own.
// Ways to set Mapbox token: https://uber.github.io/react-map-gl/#/Documentation/getting-started/about-mapbox-tokens
const MAPBOX_TOKEN = 'pk.eyJ1Ijoic21peWFrYXdhIiwiYSI6ImNpcW1zZDQxcTAwdW9meW5uYjNlcnNlaWsifQ.Ow__TW4Z7kpIA2IS1LSbUg';

class App extends Component {
  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    }
  };

  mapRef = React.createRef();

  componentDidMount() {
    window.addEventListener("resize", this._resize.bind(this));
    this._resize();
  }

  _resize() {
    this._onViewportChange({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  _onViewportChange = viewport => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    });
  };

  render() {
    return (
      <MapGL
        ref={this.mapRef}
        {...this.state.viewport}
        onViewportChange={this._onViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Geocoder mapRef={this.mapRef} onViewportChange={this._onViewportChange} mapboxApiAccessToken={MAPBOX_TOKEN} />
      </MapGL>
    );
  }
}

render(<App />, document.getElementById("root"));
