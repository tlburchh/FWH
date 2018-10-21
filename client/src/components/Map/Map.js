import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Map extends Component {
  static defaultProps = {
    center: {
      lat: 35.994034,
      lng: -78.898621
    },
    zoom: 10
  };
 


  render() {
    return (
    
      // Important! Always set the container height explicitly
      <div style={{ height: '500px', width: '100%' }}>
    
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAyyAh4A8PqnQBj9amUHW_5kUUPbkIzXGQ' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={35.994034}
            lng={-78.898621}
            text={'Durham'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;