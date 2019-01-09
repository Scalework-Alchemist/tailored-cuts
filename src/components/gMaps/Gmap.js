import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

class Gmap extends Component {
   render() {
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 27.253595, lng: -80.375224 } }
        defaultZoom = { 15 }
      >
      </GoogleMap>
   ));
   return(
      <div>
        <GoogleMapExample
          containerElement={ <div style={{ height: `500px`, width: '90%' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};
export default Gmap;