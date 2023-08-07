import { useEffect, useState } from "react"
import "./index.css"

import { BsTrash } from "react-icons/bs"
import Cookies from "js-cookie"
let id=""
const Thumbnail=(props)=>{
    const {sceneDetails,selectScene,deleteScenes}=props
    const {scene_image,scene_name,scene_id}=sceneDetails
    const [tourId,setTourId]=useState("")
    let jwtToken=""
    useEffect(()=>{
      jwtToken=Cookies.get("jwt_token")
      const tourId=localStorage.getItem("tourId")
      const parseTourId=JSON.parse(tourId);
      setTourId(parseTourId)

  })

    const onClickthumbImage=()=>{
        id=scene_id
       selectScene(id)
       console.log(id)
    }
    const deleteScene=async()=>{
      let text = "Are you sure you want to delete the Scene";
      const deleteSceneInfo={id,tourId}
       id=scene_id
     console.log(id,"idd")
      if (window.confirm(text) === true) {
         
      const apiUrl="https://objective-wright.69-49-231-148.plesk.page/deleteScene";
      const options={
          method:"DELETE",
          headers:{
              "Content-Type":"application/json",
              "authorization":`Bearer ${jwtToken}`
          },
          body:JSON.stringify(deleteSceneInfo)
          
      }
      const response=await fetch(apiUrl,options)
      const data=await response.json()
      if(response.ok===true){
        deleteScenes(data)
      }
      console.log(data)
      console.log(jwtToken)
      } else {
        text = "You canceled!";
        console.log(text)
      }

  }
    return(
        <>
          <div className={`scene-row-container `}>
            <div className='thumb-row-div'>
            <div className={`thumbnail-div-2 `}>
        <img src={scene_image} className="thumbnail-image-2" alt="" onClick={onClickthumbImage}/>
       <div className={`scene-name-div-1  `}>
        <p className="scene-name1">{scene_name}</p>
        <label className="scene-name1" onClick={deleteScene} ><BsTrash/></label>

        </div>
     </div>
            </div>
          </div>
       
        </>
    )
}
export default Thumbnail