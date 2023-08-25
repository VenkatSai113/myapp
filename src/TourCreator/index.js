import { Component } from "react"
import "./index.css"
import axios from "axios";
import Cookies from "js-cookie";
import BottomNavbar from "../Home/bottomNavbar";
import Sidebar from "../Sidebar";
import Button from 'react-bootstrap/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {Link,withRouter} from 'react-router-dom'
let jwtToken=""
let feedImages=""
class TourCreator extends Component{
    state={tourTitle:"",description:"",tourThumbnail:"",tourImgSrc:"",isLoading:false,imageHeight:true,designStyle:"",propertyType:"",location:"",occupancy:"",propertySize:"",timeDuration:"",privacy:"",tags:""}
    componentDidMount=()=>{
        jwtToken=Cookies.get("jwt_token")
    }
    onhandleChange=(event)=>{
        const {name,value}=event.target
        this.setState({[name]:value})
        
        console.log(value)

    }
    uploadimage=(event)=>{
      
        feedImages=event.target.files[0]
        this.setState({tourThumbnail:feedImages})
        this.setState({tourImgSrc:URL.createObjectURL(feedImages)})
        console.log(URL.createObjectURL(feedImages))
        this.setState({imageHeight:false})
    }
    onCreateTour=()=>{
        const {tourTitle,description,tourThumbnail,tourImgSrc,isLoading,imageHeight,designStyle,propertyType,location,occupancy,propertySize,timeDuration,privacy,tags}=this.state
        if(tourTitle==="" || description=== ""){
            alert("Please Give Proper Title, Description and Image")
        }else{
            this.setState({isLoading:true})
        localStorage.setItem("tourTitle",tourTitle)
        const apiurl="http://localhost:9000/virtualtours"
        console.log(tourTitle)
        const formData=new FormData();
        formData.append("tourTitle",tourTitle);
        formData.append("description",description);
        formData.append("tourThumbnail",tourThumbnail);
        const config={
            headers:{
                "Content-Type":"Application/json",
                "authorization":`Bearer ${jwtToken}`
            }
        }
        axios.post(apiurl,formData,config).then(response=>{
                const {history}=this.props
                this.setState({isLoading:false})
                // history.push("/virtualTours")
                window.open("http://localhost:3000/virtualTours");
            localStorage.setItem("tourId",response.data.tourId)
            
        })
        .catch(error=>{
            console.log(error)
        })
        const apiUrl = "http://localhost:9000/virtualTourCreater";
       const tourId= localStorage.getItem("tourId")
       const parseTourId=parseInt(tourId)
       const presentTourd=parseTourId+1
       console.log(presentTourd,"presentTourd")
        const formData1 = new FormData();
        formData1.append("tourTitle", tourTitle);
        formData1.append("designStyle", designStyle);
        formData1.append("propertyType", propertyType);
        formData1.append("location", location);
        formData1.append("occupancy", occupancy);
        formData1.append("propertySize", propertySize);
        formData1.append("timeDuration", timeDuration);
        formData1.append("tags", tags);
        formData1.append("privacy", privacy);
        formData1.append("presentTourd",presentTourd);
       
          formData1.append('feedImages', feedImages);
     
        // formData.append("feedImages", feedImages[0]);
        // formData.append("feedImages1", feedImages[1]);
        // formData.append("feedImages2", feedImages[2]);
        const config1={
          headers:{
              "Content-Type":"Application/json",
              "authorization":`Bearer ${jwtToken}`
          }
      }
        axios.post(apiUrl, formData1,config1)
          .then((response) => {
            console.log(response)
          })
          .catch((error) => {
            console.log(error);
          });
    }
    }
    render(){
        const {tourTitle,description,tourImgSrc,isLoading,imageHeight,designStyle,propertyType,location,occupancy,propertySize,timeDuration,privacy,tags}=this.state
        return(
            <>
              {isLoading?( <Box sx={{ display: 'flex' }} color="red" style={{ position: 'absolute', top: '50%', left: '45%',  zIndex: '999' }}  height={50} width={50}>
      <CircularProgress   />
    </Box>):""}
            {/* <TopNavbar/> */}
            <div className="d-flex flex-row">
                <Sidebar/>
            <div className="vr-container-details">
             
                <h1 className="main-heading">Create Virtual Tours</h1>
                <div className="body-vr-container">
                <img src={tourImgSrc} alt="tourImage" className={`${imageHeight?"":"virtual-tour-image-size"}`}/>
                <label htmlFor="file-upload" className="mt-3">Upload Thumbnail</label>
                <input type="file" id="file-upload" name="file-upload" className="hello"  accept="image/png, image/gif, image/jpeg"  onChange={this.uploadimage}/>
                    <input  htmlFor="file-upload" type="text" className="form-control" placeholder="Enter your Title..." name="tourTitle" value={tourTitle} onChange={this.onhandleChange}/>
                    <textarea type="text" className="form-control mt-3" placeholder="Enter your Description..." value={description} name="description" onChange={this.onhandleChange}></textarea>
                    {/* <input type="text" className="form-control mt-3" placeholder="Enter scene name" value={scenename} name="scenename" onChange={this.onhandleChange}/> */}
                    <label htmlFor="DesignStyle" style={{textAlign:"left",fontFamily:"roboto",fontWeight:"bold",fontSize:"14px"}} value={designStyle} name="designStyle" >Design Style</label>
                    <select className="form-control"  onChange={this.onhandleChange} value={designStyle} name="designStyle">
                        <option>select</option>
                        <option name="Classic">Classic</option>
                        <option name="Modren">Modren</option>
                        <option name="Trending">Trending</option>
                    </select>
                    <label htmlFor="propertyType" style={{textAlign:"left",fontFamily:"roboto",fontWeight:"bold",fontSize:"14px"}} >Property Type</label>
                    <select className="form-control" onChange={this.onhandleChange} value={propertyType} name="propertyType">
                        <option>select</option>
                        <option name="Residential">Residential</option>
                        <option name="commercial">commercial</option>
                    </select>
                    <label htmlFor="Location" style={{textAlign:"left",fontFamily:"roboto",fontWeight:"bold",fontSize:"14px"}}>Location</label>
                    <input id="Location" type="text" className="form-control" name="location" value={location} onChange={this.onhandleChange} placeholder="Enter Location"/>
                    <label htmlFor="Occupancy" style={{textAlign:"left",fontFamily:"roboto",fontWeight:"bold",fontSize:"14px"}}>Occupancy</label>
                    <input id="Occupancy" type="text" className="form-control" name="occupancy" value={occupancy} onChange={this.onhandleChange} placeholder="Enter Occupancy."/>
                    <label htmlFor="properySize" style={{textAlign:"left",fontFamily:"roboto",fontWeight:"bold",fontSize:"14px"}}>Property Size</label>
                    <input id="properySize" type="text" className="form-control" placeholder="Enter Property Size." value={propertySize}  onChange={this.onhandleChange} name="propertySize"/> 
                     <label htmlFor="timeDuration" style={{textAlign:"left",fontFamily:"roboto",fontWeight:"bold",fontSize:"14px"}}>Time Duration</label>
                    <input id="timeDuration" type="text" className="form-control" placeholder="Enter Time Durationion." value={timeDuration} name="timeDuration" onChange={this.onhandleChange} />
                    <label htmlFor="privacy" style={{textAlign:"left",fontFamily:"roboto",fontWeight:"bold",fontSize:"14px"}}>Privacy</label>
                    <select id="privacy" className="form-control" value={privacy} name="privacy" onChange={this.onhandleChange}>
                        <option>select</option>
                        <option name="Public">Public</option>
                        <option name="Private">Private</option>
                    </select>
                    <label htmlFor="timeDuration" style={{textAlign:"left",fontFamily:"roboto",fontWeight:"bold",fontSize:"14px"}}># Tags</label>
                    <textarea className="form-control" placeholder="Add # Tags" name="tags" value={tags} onChange={this.onhandleChange}></textarea>
<Button className='mt-3' onClick={this.onCreateTour} variant="primary">
        Start Creating Virtual Tour
      </Button>
                </div>
                </div>
                </div>
                <BottomNavbar/>
                </>
        )
    }
}

export default withRouter(TourCreator)