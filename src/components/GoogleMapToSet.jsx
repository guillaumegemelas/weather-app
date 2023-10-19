import React from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";

//crétion d'un composant pour afficher Googlemap réutilisable:

export default function GoogleMapToSet(props) {
  return (
    <div>
      <GoogleMap
        //initailement positionné à 10
        zoom={12}
        center={{
          lat: props.lat,
          lng: props.lng,
        }}
        mapContainerClassName="map-container"
      >
        {/* utilisation de MarkerF à la place de Marker car incompatibilité avec React>18 pour MArker */}
        <MarkerF
          position={{
            lat: props.lat,
            lng: props.lng,
          }}
        />
      </GoogleMap>
    </div>
  );
}
