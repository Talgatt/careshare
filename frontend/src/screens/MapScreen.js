import React, { useEffect, useRef, useState } from "react";
import {
  LoadScript,
  GoogleMap,
  StandaloneSearchBox,
  Marker,
} from "@react-google-maps/api";
import axios from "axios";
const libs = ["places"];
const defaultLocation = { lat: 45.515, lng: -72.45 };
export default function MapScreen(props) {
  const [googleApiKey, setGoogleApiKey] = useState("");
  const [center, setCenter] = useState(defaultLocation);
  const [location, setLocation] = useState(center);
  const addressPO = props.addressPO;

  const mapRef = useRef(null);
  const placeRef = useRef(null);
  const markerRef = useRef(null);

  const onLoad = (map) => {
    mapRef.current = map;
  };

  const onMarkerLoad = (marker) => {
    markerRef.current = marker;
  };

  const onLoadPlaces = (place) => {
    placeRef.current = place;
  };

  const onIdle = () => {
    setLocation({
      lat: mapRef.current.center.lat(),
      lng: mapRef.current.center.lng(),
    });
  };

  const onPlacesChanged = () => {
    const place = placeRef.current.getPlaces()[0].geometry.location;
    setCenter({ lat: place.lat(), lng: place.lng() });
    setLocation({ lat: place.lat(), lng: place.lng() });
  };

  const onConfirm = () => {
    const places = placeRef.current.getPlaces();
    if (places && places.length === 1) {
      //dispatch select action
      alert("location selected successfully.");
    } else {
      alert("Please enter your address");
    }
  };

  const getUserCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by this browser");
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  };

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get("/api/config/google");
      const loc = await axios.get(`/api/config/geolocation/${addressPO}`);

      console.log("api key", loc.data);
      setCenter(loc.data);
      setGoogleApiKey(data);
      //getUserCurrentLocation();
    };

    fetch();
  }, []);
  return (
    <div className="parent-height">
      testing
      {googleApiKey && (
        <div className="full-container">
          <LoadScript libraries={libs} googleMapsApiKey={googleApiKey}>
            <GoogleMap
              id="smaple-map"
              mapContainerStyle={{ height: "100%", width: "100%" }}
              center={center}
              zoom={12}
              onLoad={onLoad}
              onIdle={onIdle}
            >
              <Marker position={location} onLoad={onMarkerLoad}></Marker>
            </GoogleMap>
          </LoadScript>
        </div>
      )}
    </div>
  );
}
