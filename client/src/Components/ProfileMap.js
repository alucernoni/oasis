import React, {useState} from 'react'
import ReactMapGL from 'react-map-gl'

function ProfileMap() {

    const [viewport, setViewport] = useState({
        latitude: 47.6062,
        longitude: -122.3321,
        zoom: 8,
        width: 500,
        height: 500
    })

  return (
    <ReactMapGL
        mapStyle={'mapbox://styles/alucernoni/cl6ab508l000d14n5x7f239zp'}
        mapboxApiAccessToken={"pk.eyJ1IjoiYWx1Y2Vybm9uaSIsImEiOiJjbDZhNnc3d2MxOWI1M2ttbGFuaHNoc2RiIn0.-bwmSlrtfGOKvTqHvooeIQ"}
        {...viewport}
        onViewportChange={(newView) => setViewport(newView)}
    />
  )
}

export default ProfileMap