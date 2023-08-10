import { Component } from "react"
import "./index.css"
import axios from "axios"
import Thumbnail from "./thumbnail"
import SingleScene from './singleScene'
import Cookies from 'js-cookie'
import HotspotNames from './HotspotNames'
import {Link} from 'react-router-dom'
import BarLoader from "react-loader-spinner"
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

let jwtToken=""
class Aframes extends Component{
    state={sceneName:"",open:false,sceneImage:"",scenes:[],uploadMapRender:false,singleScene:[],jwtToken:"",hotspotData:[],activeSceneId:"",stateMap:null,isSceneLoading:""}
    componentDidMount=()=>{
        jwtToken=Cookies.get("jwt_token");
        this.setState({jwtToken:jwtToken})
        this.setLandscapeMode();
    window.addEventListener('resize', this.handleResize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
      }
    
      handleResize = () => {
        this.setLandscapeMode();
      };
      setLandscapeMode() {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile && window.innerWidth < window.innerHeight) {
          // If the device is mobile and in portrait mode, force landscape mode
          const landscapeElement = document.getElementById('landscape');
          if (landscapeElement && landscapeElement.requestFullscreen) {
            landscapeElement.requestFullscreen();
          } else if (landscapeElement && landscapeElement.mozRequestFullScreen) {
            landscapeElement.mozRequestFullScreen();
          } else if (landscapeElement && landscapeElement.webkitRequestFullscreen) {
            landscapeElement.webkitRequestFullscreen();
          } else if (landscapeElement && landscapeElement.msRequestFullscreen) {
            landscapeElement.msRequestFullscreen();
          }
        }
      }
    
    onChangesceneName=(event)=>{
       this.setState({sceneName:event.target.value})
    }
    onChangesceneImage=(event)=>{
        this.setState({sceneImage:event.target.files[0]})
        this.setState({open:true})
        
     }
     onSubmitScene=()=>{
        const {sceneName,sceneImage}=this.state
        if(sceneName==="",sceneImage===""){
            alert("Please Select Proper values")
        }
        else{
        this.setState({isSceneLoading:true})
        let tourId=localStorage.getItem("tourId")
        tourId=JSON.parse(tourId)
       const apiUrl="https://objective-wright.69-49-231-148.plesk.page/scenes"
       const formData=new FormData();
        formData.append("sceneName",sceneName)
        formData.append("sceneImage",sceneImage)
        formData.append("tourId",tourId)
        axios.post(apiUrl,formData).then
        (response=>{
            const responseScenes=response.data  
          this.setState((PrevState)=>({scenes:[...PrevState.scenes,responseScenes]}))
          this.setState({sceneName:""})
          this.setState({sceneImage:""})
          this.setState({isSceneLoading:false})
         }
            ).catch(error=>
                console.log(error)
            )
        }
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
      const apiUrl="https://objective-wright.69-49-231-148.plesk.page/sceneHotspots";
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
      this.setState({uploadMapRender:true})
     
      const mapImageFunction=async()=>{
        this.setState({isSceneLoading:true})
        const mapapiUrl="https://objective-wright.69-49-231-148.plesk.page/getmapImage";
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
            const apiUrl="https://objective-wright.69-49-231-148.plesk.page/hotspots"
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
        const apiUrl="https://objective-wright.69-49-231-148.plesk.page/mapImage"
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
      handleClose = (event, reason,prpos) => {
        this.setState({open:false})
      
     
    }
    onClickpreview=()=>{
        const tourId=localStorage.getItem("tourId")
        const parseTourId=JSON.parse(tourId)
        window.open(`http://localhost:3000/viewer:${parseTourId}`,"__blank")
    }
    render(){
        const {scenes,uploadMapRender,open,singleScene,hotspotData,activeSceneId,stateMap,sceneName,isSceneLoading}=this.state
        return(
            <>
                <Stack spacing={2} sx={{ width: '100%' }} style={{ vertical: 'top', horizontal: 'left' }}>
      
      <Snackbar open={open} autoHideDuration={2000} onClose={this.handleClose}>
        <Alert onClose={this.handleClose} severity="success" sx={{ width: '100%' }}>
        Image Uploaded Successfully!
        </Alert>
      </Snackbar>
      </Stack>
            <div  id="container23">
            {isSceneLoading?( <BarLoader type="TailSpin"  style={{ position: 'absolute', top: '50%', left: '55%',  zIndex: '999' }} color="#0275d8" height={50} width={50} />) :""}
                <div className="create-scene-row-container mt-2 ">
                <input type="text"  className='username-input-filed ' onChange={this.onChangesceneName} value={sceneName} placeholder="Enter Scene Name"/>
                <div className="col-3 col-md-2"> 
            <label htmlFor="file-upload1" className="create-scene-button" style={{textAlign:"center"}}>Upload Image</label>
<input type="file" id="file-upload1"   className="hello1"  onChange={this.onChangesceneImage}/>
            </div>
                {/* <input type="file" onChange={this.onChangesceneImage}  className="upload-image1"/> */}
                <button onClick={this.onSubmitScene} className="create-scene-button">Create Scene</button>
                <button onClick={this.onClickpreview} className="create-scene-button">Preview</button>
                <Link to="/savedTours"><button className="create-scene-button">Save</button></Link>
                </div>
                <hr></hr>
                {/* <div className="d-flex flex-row justify-content-around mt-2 mb-2">
                <button onClick={this.onClickpreview} className="btn btn-primary btn-sm">Preview</button>
                <Link to="/savedTours"><button className="btn btn-primary btn-sm">Save</button></Link>
             </div> */}
                <div className="scene-row-div">
                    <div className="scenes-lists">
                    <h6 className="hotspots-heading">Scenes</h6>
                    {scenes.map(eachItem=>
                       <Thumbnail sceneDetails={eachItem} key={eachItem.scene_id} selectScene={this.selectScene} deleteScenes={this.deleteScenes}/>)}
                    </div>
                    <div className="">
                        {uploadMapRender?
                    <div className="map-lists">
                    <h6 className="hotspots-heading">Upload Map</h6>
                    <p>{singleScene[0].scene_name}</p>
                    <div> 
            <label htmlFor="file-upload6" className="" style={{textAlign:"center"}}>Upload</label>
<input type="file" id="file-upload6"   className="hello1"  onChange={this.onChangeMap}/>
            </div>
            {/* <input type="file" className="form-control" /> */}
            </div>:""}
                    <div className="hotspots-lists">
                    {/* <h6 className="hotspots-heading">Upload Map</h6>
            <input type="file" className="form-control" onChange={this.onChangeMap}/> */}
                            <h6 className="hotspots-heading">Hotspots</h6>
                            <button onClick={this.addHotspots} className="btn btn-primary btn-sm">Create Hotspot</button>
                            {hotspotData.map(eachItem=>
                               <HotspotNames hotspotData={eachItem} key={eachItem.hotspot_id} scenes={scenes} activeSceneId={activeSceneId} updatedHotspots={this.updatedHotspots} />  )}
                        </div>
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