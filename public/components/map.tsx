"use client";

import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "330px",
};

const center = {
  lat: 6.452387193732742,
  lng: 3.4729523067131267,
};


const GoogleMapComponent: React.FC = () => {
  return (
    <LoadScript
      googleMapsApiKey={`${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}`}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      ></GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;