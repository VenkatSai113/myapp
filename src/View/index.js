import {Entity, Scene} from 'aframe-react';
import { useEffect, useState } from 'react';
import axios from "axios"
import hotspotImage from "./next.png"
import "./index.css"
import { useLocation } from 'react-router-dom'
import { Redirect } from 'react-router-dom';

const  Viewer =()=>{
  const location = useLocation();
  const [singleScene,setSingleScene]=useState("");
    const [hotspots,setHotspots]=useState([]);
    console.log(hotspots);

    useEffect(() => {
      const currentUrl=window.location.pathname
      console.group(currentUrl)
      const pathUrl=location.pathname
      console.log(pathUrl,"kjghfbv")
      const pathUrlSplit=pathUrl.split(":")
      const parseTourId=pathUrlSplit[1]
        const fetchData = async () => {
          try {
            const localtourId={parseTourId:"tour"}
            const apiUrl="http://localhost:9000/viewer"
            const formData=new FormData();
            formData.append("parseTourId",parseTourId);
            formData.append("tour","tour");
            axios.post(apiUrl,formData).then(response=>{
                setSingleScene(response.data[0])
                setHotspots(response.data[1])
            })
            // hotspots.map(eachObj=>
            //     console.log("eachObj"))
        
           } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);
      const hotspotPosition=hotspots[0]
      console.log(hotspotPosition)
     
      const hello=(event)=>{
        const hotspotId=event.target.id
        console.log(hotspotId,"Hello")
        const hotspotIds={hotspotId,hello:"hello"}
          const apiUrl="http://localhost:9000/moveingScenes"
            const formData=new FormData();
            formData.append("hotspotId",hotspotId);
            formData.append("hello",hello);
            axios.post(apiUrl,formData).then(response=>{
                setSingleScene(response.data[0])
                setHotspots(response.data[1])
            }) 
      }
        return(
            <div className="viewer-div"> 
             <Scene cursor="rayOrigin:mouse"embedded={true}  vr-mode-ui="enterARButton: #myEnterARButton">
             
  <a id="myEnterARButton" href="#"></a>
              
            <a-camera  id="camera" look-controls="enabled: true" >
                  <a-entity cursor="fuse:true;fuseTimeout:2000" 
                  
            position="0 0 -1"
            geometry="primitive: ring; radiusInner: 0.012; radiusOuter: 0.020"
            material="color: red; shader: flat"
            className="cursor-style"
            animation__mouseenter="property:scale;to:1 1 1;startEvents:mouseenter;endEvents:mouseleave;dir:reverse;dur:2000;loop:2"
            >
  </a-entity>
                </a-camera>
                {/* <a-image src={hotspotImage}  width="3" position="-1 0.5 -3" id="1751" onClick={hello} height="1.5"></a-image>
                <Entity  position={{x:1 ,y:0.75 ,z:-3}} look-at="#camera"  id="1751" className="clickable"   begin="fusing" events={{click:hello}} height="0.5"  width="0.5" primitive='a-image'src={hotspotImage}  /> */}
                {hotspots.map(eachHotspot=>
                <Entity  position={eachHotspot} look-at="#camera"  className="clickable"  style={{  opacity:" 0.5"}}  id={eachHotspot.hotspot_id} begin="fusing" events={{click:hello}} height="0.2"  width="0.2" primitive='a-image'src={hotspotImage}  />)} 
      <a-sky src={singleScene.scene_image} ></a-sky>
      </Scene>
      <img style={{ position: 'absolute', top: '70%', left: '20%',  opacity:" 0.5 ",transform: 'translate(-50%, -50%)', width: '200px', height: '100px', zIndex: '999' }} src={singleScene.map_image} />
    </div>
        )
}
export default Viewer