import React,{useEffect, useState} from 'react';
import ReactMapGL,{Marker} from 'react-map-gl';
import RoomIcon from '@material-ui/icons/Room';
import  Button  from '@material-ui/core/Button';
import Login from './Login';

const Home=()=>{
  const [log,setLog]=useState(true);
  const [viewport,setViewport]=useState({
      latitude:51.51360453289117, 
      longitude: -0.12975832323799438,
      width:'100vw',
      height:'100vh',
      zoom:20
  })
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos => {
  
      setViewport({
        ...viewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude
      });
    });
  },[]);

  function handleLogout(){
    setLog(!log);
  }
  return(
    <div style={{position:'relative'}} >
      
        {log?<ReactMapGL 
        {...viewport} 
        mapboxApiAccessToken='pk.eyJ1IjoiYWtzaGF5b25lOCIsImEiOiJja3JkZXFwa3owMjdqMm9saDFhb3RnZjVjIn0.LdsTB18K84OSO_LEup325w'
        mapStyle='mapbox://styles/mapbox/streets-v11'
        onViewportChange={viewport=>{
          setViewport(viewport)
        }}
        >
        <Button color='primary' variant='contained' style={{position:'absolute',top:'10px',right:'10px'}} onClick={handleLogout}>Logout</Button>
          <Marker 
          latitude={viewport.latitude}
          longitude={viewport.longitude}
          >
             <RoomIcon  style={{fontSize:'40px',color:'#D86258'}}/>
          </Marker>
        </ReactMapGL>:<Login/>}
    </div>
  )
}

export default Home;