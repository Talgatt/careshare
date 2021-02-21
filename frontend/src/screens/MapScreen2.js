import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

export default function MapScreen2(props) {
  const mapStyles = {
    width: "100%",
    height: "100%",
  };

  return (
    <Map
      google={props.google}
      zoom={8}
      style={mapStyles}
      initialCenter={{ lat: 47.444, lng: -122.176 }}
    >
      <Marker position={{ lat: 48.0, lng: -122.0 }} />
    </Map>
  );
}
