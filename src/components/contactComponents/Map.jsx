import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import LM from '../../images/locate-icon.png';

function Map() {
  const [viewport, setViewport] = useState({
    latitude: 39.7294,
    longitude: -104.8319,
    height: "100%",
    width: "100%",
    zoom: 10
  })

  return(
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken="pk.eyJ1IjoidjhpbnRlZ3JhIiwiYSI6ImNrdDN4NGxyeTBiOHgydmxsNzBiY281NHgifQ.E_C2UilogNDm8O2ZdpmPcw"
      mapStyle="mapbox://styles/v8integra/ckt6okhae34eu17oa3z6k8vjl"
      onViewportChange={viewport => {
        setViewport(viewport);
      }}
    >
      <Marker latitude={viewport.latitude} longitude={viewport.longitude}>
      </Marker>
    </ReactMapGL>
  );
}

export default Map;