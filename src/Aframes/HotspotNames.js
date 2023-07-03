import {TiTick} from "react-icons/ti"
import {RxCross1} from "react-icons/rx"
import { useState } from "react"
import Cookies from 'js-cookie';
import "./index.css"
let parseActiveTourId=200

const HotspotNames=(props)=>{
    const {hotspotData,scenes,activeSceneId,updatedHotspots}=props
    const {hotspot_name,hotspot_id}=hotspotData
    const [targetScene, setTargetScene]=useState("")
    console.log(hotspot_id,"waersthgjkl")
    const onSceneSelection=(event)=>{
        setTargetScene(event.target.value)
        console.log(scenes)
    }
    const onLinkClick=async()=>{
        const activeTourId=localStorage.getItem("tourId")
        const parseActiveTourId=JSON.parse(activeTourId)
        let parseActiveSceneId=activeSceneId
        let actionHotspot=hotspot_id
        let targetedSceneId=targetScene
        const linkedspots={parseActiveSceneId,parseActiveTourId,actionHotspot,targetedSceneId}
        const apiUrl="http://localhost:9000/linkedSpots"
        const options={
            method:"POST",
            headers:{
                "Content-Type":"Application/json",
               
            },
            mode: "cors",
            body:JSON.stringify(linkedspots)
        }
        const response=await fetch(apiUrl,options)
        const data=await response.json()
        console.log(data)
    }
    const deleteHotspot =async()=>{
        let id=activeSceneId
        let hotspotId=hotspot_id
        const jwtToken=Cookies.get("jwt_token")
       const apiUrl="http://localhost:9000/deleteHotspot"
       const deleteHotspotInfo={hotspotId,id}
       const options={
        method:"POST",
        headers:{
            "Content-Type":"Application/json",
            "authorization":`Bearer ${jwtToken}`
        },
        mode: "cors",
        body:JSON.stringify(deleteHotspotInfo)
       }
       const response=await fetch(apiUrl,options)
       const data=await response.json()
       if(response.ok===true){
        console.log(data,"dataaaa")
        updatedHotspots(data,hotspot_id)
       }
       
    }
    return(
        <div className="hotspot-row-div">
            <p className="hotspot-name13">{hotspot_name}</p>
            <select onChange={onSceneSelection} className="dropdown-option">
                <option> 
                  select
                </option>
                {scenes.map(eachItem=>
                    <option key={eachItem.scene_id} value={eachItem.scene_id}>{eachItem.scene_name}</option>)}
            </select>
            <p className='tick-icon'  onClick={onLinkClick} ><TiTick/></p>
        <p className="tick-icon" onClick={deleteHotspot} ><RxCross1/></p>

        </div>
    )
}
export default HotspotNames