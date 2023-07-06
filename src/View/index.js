import {Entity, Scene} from 'aframe-react';
import { useEffect, useState } from 'react';
import axios from "axios"
import hotspotImage from "./next.png"
import "./index.css"
import { useLocation } from 'react-router-dom'


const  Viewer =()=>{
  const location = useLocation()
  const [singleScene,setSingleScene]=useState("")
    const [hotspots,setHotspots]=useState([]);
    console.log(hotspots)
    useEffect(() => {
      const pathUrl=location.pathname
      const pathUrlSplit=pathUrl.split(":")
      const parseTourId=pathUrlSplit[1]
        const fetchData = async () => {
          try {
           
            const localtourId={parseTourId:"tour"}

          
            const apiUrl="https://objective-wright.69-49-231-148.plesk.page/viewer"
           
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
        console.log(hotspotId)
        const hotspotIds={hotspotId,hello:"hello"}
            const apiUrl="https://objective-wright.69-49-231-148.plesk.page/moveingScenes"
           
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
                  <a-entity cursor="fuse: true; fuseTimeout: 500"  
                  
            position="0 0 -1"
            geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
            material="color: red; shader: flat"
            className="cursor-style"
            >
  </a-entity>
                </a-camera>
                {/* <a-image src={hotspotImage}  width="3" position="-1 0.5 -3" id="1751" onClick={hello} height="1.5"></a-image>
                <Entity  position={{x:1 ,y:0.75 ,z:-3}} look-at="#camera"  id="1751" className="clickable"   begin="fusing" events={{click:hello}} height="0.5"  width="0.5" primitive='a-image'src={hotspotImage}  /> */}
                {hotspots.map(eachHotspot=>
              
                
                <Entity  position={eachHotspot} look-at="#camera"  className="clickable"   id={eachHotspot.hotspot_id} begin="fusing" events={{click:hello}} height="0.5"  width="0.5" primitive='a-image'src={hotspotImage}  />)} 
              
    
      <a-sky src={singleScene.scene_image} ></a-sky>
      </Scene>
      <img style={{ position: 'absolute', top: '70%', left: '20%',  opacity:" 0.9 ",transform: 'translate(-50%, -50%)', width: '200px', height: '100px', zIndex: '999' }} src={singleScene.map_image} />
    </div>
        )
}
export default Viewer