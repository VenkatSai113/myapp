import {Entity} from 'aframe-react';
import hotspotImage from "./next.png"
import { useEffect,useState } from 'react';
import "./index.css"
const SingleScene=(props)=>{
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const {scenes,hotspotData,stateMap}=props
    const {scene_name,scene_image,scene_id}=scenes
    useEffect(() => {
        // Update the width value when the window is resized
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        // Attach the event listener
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
   
    return(
        <div className='scene-container'>
            {windowWidth < 768 ? <p>Render if width is greater than 768px</p> : <p>Render if width is less than or equal to 768px</p>}
        <a-scene embedded={true}>
         <a-camera id="camera" look-controls="enabled: true">
<a-entity cursor="fuse: true; fuseTimeout: 500" world-pos
            position="0 0 -1"
            geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
            material="color: red; shader: flat">
  </a-entity>
    </a-camera >
        <a-sky src={scene_image}></a-sky>
        {hotspotData.map(eachHotspot=>
            <Entity  position={eachHotspot} key={eachHotspot.hotspot_id}  height="0.2"  look-at="#camera" width="0.2" primitive='a-image' src={hotspotImage}/> )}
      </a-scene>
      <img  id="map-imagess" style={{  zIndex: '999' }} src={stateMap}  />
      </div>
    )
}
export default SingleScene