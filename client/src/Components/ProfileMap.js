import React, {useRef, useState, useCallback} from 'react'
import ReactMapGL, { GeolocateControl, NavigationControl } from 'react-map-gl'
import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import Geocoder from 'react-map-gl-geocoder'
import { Stack, Button} from '@chakra-ui/react';




function ProfileMap() {

    const [viewport, setViewport] = useState({
        latitude: 37.7749,
        longitude: -122.4194,
        zoom: 10,
        width: 500,
        height: 500
    })

    const mapboxToken = "pk.eyJ1IjoiYWx1Y2Vybm9uaSIsImEiOiJjbDZhNnc3d2MxOWI1M2ttbGFuaHNoc2RiIn0.-bwmSlrtfGOKvTqHvooeIQ"

    const myMap = useRef()

    const handleViewportChange = useCallback(
        (newViewport) => setViewport(newViewport),
        []
      );

      const handleGeocoderViewportChange = useCallback(
        (newViewport) => {
          const geocoderDefaultOverrides = { transitionDuration: 1000 };
    
          return handleViewportChange({
            ...newViewport,
            ...geocoderDefaultOverrides
          });
        },
        [handleViewportChange]
      );

      const setUserLocation = () => {
        navigator.geolocation.getCurrentPosition(position => {
            let newViewport = {
                height: 500,
                width: 500,
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                zoom: 12
            }
            setViewport(newViewport)
            })
        }
    

  return (
    <Stack mb="50px" pb="50px" justifyContent="center">
    <Button onClick={setUserLocation}>Jump to my location</Button>
    <div style={{justifyContent: "center", display:'flex'}}>
    <ReactMapGL
        ref={myMap}
        mapStyle={'mapbox://styles/alucernoni/cl6ab508l000d14n5x7f239zp'}
        mapboxApiAccessToken={mapboxToken}
        {...viewport}
        onViewportChange={handleViewportChange}
    >
        {/* <Button onClick={setUserLocation} position="top-left">Jump to my location</Button> */}
        <Geocoder 
            mapboxApiAccessToken={mapboxToken}
            mapRef={myMap}
            onViewportChange={handleGeocoderViewportChange}
            // position="top-left"
            countries="us"
        />
        <GeolocateControl
            trackUserLocation={true}
            positionOptions={{enableHighAccuracy: true}}
            type= "poi"
            // bbox={viewport.latitude, viewport.longitude}
        />
        <NavigationControl/>
    </ReactMapGL>
    </div>
    </Stack>
  )
}

export default ProfileMap