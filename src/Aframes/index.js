import { Component } from "react"
import "./index.css"
import axios from "axios"
import Thumbnail from "./thumbnail"
import SingleScene from './singleScene'
import Cookies from 'js-cookie'
import HotspotNames from './HotspotNames'
import {Link} from 'react-router-dom'
import BarLoader from "react-loader-spinner"
let jwtToken=""
class Aframes extends Component{
    state={sceneName:"",sceneImage:"",scenes:[],singleScene:[],jwtToken:"",hotspotData:[],activeSceneId:"",stateMap:null,isSceneLoading:""}
    componentDidMount=()=>{
        jwtToken=Cookies.get("jwt_token");
        this.setState({jwtToken:jwtToken})
    }
    onChangesceneName=(event)=>{
       this.setState({sceneName:event.target.value})
    }
    onChangesceneImage=(event)=>{
        this.setState({sceneImage:event.target.files[0]})
     }
     onSubmitScene=()=>{
        this.setState({isSceneLoading:true})
        let tourId=localStorage.getItem("tourId")
        tourId=JSON.parse(tourId)
        const {sceneName,sceneImage}=this.state
       const apiUrl="http://localhost:9000/scenes"
       const formData=new FormData();
        formData.append("sceneName",sceneName)
        formData.append("sceneImage",sceneImage)
        formData.append("tourId",tourId)
        axios.post(apiUrl,formData).then
        (response=>{
            const responseScenes=response.data
          this.setState((PrevState)=>({scenes:[...PrevState.scenes,responseScenes]}))
          this.setState({sceneName:""})
          this.setState({isSceneLoading:false})
         }
            ).catch(error=>
                console.log(error)
            )
    }
    selectScene=async(id)=>{
        this.setState({isSceneLoading:true})
        console.log(id)
        this.setState({activeSceneId: id})
        const {scenes}=this.state
       const singleScene=scenes.filter(eachItem=>
        eachItem.scene_id===id)
      this.setState({singleScene:singleScene})
      const hotspotsPerScene={id,hello:"hello"}
      const apiUrl="http://localhost:9000/sceneHotspots";
      const options={
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "authorization":`Bearer ${jwtToken}`
        },
        body:JSON.stringify(hotspotsPerScene)
      }
      const response=await fetch(apiUrl,options)
      const data=await response.json()
      console.log(data)
      this.setState({hotspotData:data})
      this.setState({isSceneLoading:false})
      console.log(data,"arfghjewrh")
      const mapImageFunction=async()=>{
        this.setState({isSceneLoading:true})
        const mapapiUrl="http://localhost:9000/getmapImage";
        const activateSceneId={id,hello:"hello"}
        const mapOptions={
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "authorization":`Bearer ${jwtToken}`
            },
            body:JSON.stringify(activateSceneId)
        }
        const mapResponse=await fetch(mapapiUrl,mapOptions)
        const mapData=await mapResponse.json()
        console.log(mapData)
        const mapImage=mapData.map_image
        this.setState({stateMap:mapImage})
        this.setState({isSceneLoading:false})
       
      }
       
        mapImageFunction()

    }
    addHotspots=async()=>{
        let text;
        let hotspotName = prompt("Please enter your name:", "");
        if (hotspotName ===null || hotspotName === "") {
          text = "User cancelled the prompt.";
          console.log("User cancelled the prompt.")
        } else {
           
            let hotspotPositions=localStorage.getItem("position");
            let parsehotspots=JSON.parse(hotspotPositions)
            const {jwtToken}=this.state
            const {singleScene}=this.state
            const sceneId=singleScene[0].scene_id
            const scenehotspot={sceneId,parsehotspots,hotspotName}
            const apiUrl="http://localhost:9000/hotspots"
            const options={
                method:'POST',
                headers:{
                    "Content-Type":"Application/json",
                    
                    "authorization":`Bearer ${jwtToken}`
                  },
                  mode: "cors",
                body:JSON.stringify(scenehotspot)
            }
            const response=await fetch(apiUrl,options)
            const data=await response.json()
            if(response.ok === true){
              
                this.setState({hotspotData:data})
               
            }
            const {hotspotData}=this.state
            console.log(hotspotData)
        }
    }
    deleteScenes=(data)=>{
        this.setState({isSceneLoading:true})
        this.setState({scenes:data})
    }
    updatedHotspots=(data,hotspot_id)=>{
        const {hotspotData}=this.state
       this.setState({hotspotData:data})
      const onDeleteUpdatedHotspot=hotspotData.filter(eachHotspot=>
        eachHotspot.hotspot_id!==hotspot_id)
        this.setState({hotspotData:onDeleteUpdatedHotspot})
        console.log(hotspotData)
        this.setState({isSceneLoading:false})
      
    }
    onChangeMap=(event)=>{
        this.setState({isSceneLoading:true})
        const {activeSceneId}=this.state
        const mapFile=event.target.files[0]
        const apiUrl="http://localhost:9000/mapImage"
        const config={
            headers:{
                "Content-Type":"Application/json",
                "authorization":`Bearer ${jwtToken}`
            }
        }
        const formData=new FormData();
        formData.append("activeSceneId",activeSceneId)
        formData.append("mapFile",mapFile)
        axios.post(apiUrl,formData,config).then
        (response=>{
            console.log(response.data.map_image)
            const mapImagess=response.data.map_image
            this.setState({stateMap:mapImagess})
            const {stateMap}=this.state
            console.log(stateMap,"jhg")
            this.setState({isSceneLoading:false})
       }
        ).catch(error=>{   
            console.log(error)}
        )
    }
    onClickpreview=()=>{
        const tourId=localStorage.getItem("tourId")
        const parseTourId=JSON.parse(tourId)
        window.open(`https://designalley.69-49-231-148.plesk.page/viewer:${parseTourId}`,"__blank")
    }
    render(){
        const {scenes,singleScene,hotspotData,activeSceneId,stateMap,sceneName,isSceneLoading}=this.state
        return(
            <>
            <div>
            {isSceneLoading?( <BarLoader type="TailSpin"  style={{ position: 'absolute', top: '50%', left: '55%',  zIndex: '999' }} color="#0275d8" height={50} width={50} />) :""}
                <div className="d-flex flex-row justify-content-around mt-2">
                <input type="text" onChange={this.onChangesceneName} value={sceneName} placeholder="Enter Scene Name"/>
                <input type="file" onChange={this.onChangesceneImage}  className="upload-image1"/>
                <button onClick={this.onSubmitScene} className="btn btn-primary btn-sm">Create Scene</button>
                </div>
                <div className="d-flex flex-row justify-content-around mt-2 mb-2">
                <button onClick={this.onClickpreview} className="btn btn-primary btn-sm">Preview</button>
                <Link to="/savedTours"><button className="btn btn-primary btn-sm">Save</button></Link>
             </div>
                <div className="scene-row-div">
                    <div>
                    {scenes.map(eachItem=>
                       <Thumbnail sceneDetails={eachItem} key={eachItem.scene_id} selectScene={this.selectScene} deleteScenes={this.deleteScenes}/>)}
                    </div>
                    <div className="hotspots-lists">
                    <h6 className="hotspots-heading">Upload Map</h6>
            <input type="file" className="form-control" onChange={this.onChangeMap}/>
                            <h6 className="hotspots-heading">Hotspots</h6>
                            <button onClick={this.addHotspots} className="btn btn-primary btn-sm">Create Hotspot</button>
                            {hotspotData.map(eachItem=>
                               <HotspotNames hotspotData={eachItem} key={eachItem.hotspot_id} scenes={scenes} activeSceneId={activeSceneId} updatedHotspots={this.updatedHotspots} />  )}
                        </div>
                    <div className="aframe-div">
                        {singleScene.map(eachItem=>
                            <SingleScene scenes={eachItem} key={eachItem.scene_id} hotspotData={hotspotData} stateMap={stateMap} /> )}
          </div>
                </div>
            </div>
          </>
        )
    }
}

export default Aframes