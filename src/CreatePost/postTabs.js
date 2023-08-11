import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { duration, useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import {Link} from "react-router-dom"
import Box from '@mui/material/Box';
import "./index.css"
import Button from 'react-bootstrap/Button';
import {FiSettings} from 'react-icons/fi'
import DemoSimple from './test'
 
import TourCreator from '../TourCreator/index'
import ReactPlayer from 'react-player'
import axios from 'axios'
import { FormControl } from '@mui/material';
import Cookies from 'js-cookie';
import { useEffect,useState } from 'react';

let jwtToken=""
const styles = {
    slide: {
      padding: 15,
      minHeight: 100,
      color: '#fff',
    },
    slide1: {
      background: '#FEA900',
    },
    slide2: {
      background: '#B3DC4A',
    },
    slide3: {
      background: '#6AC0FF',
    },
  };
  
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
let  sigitionTextArray=[]
function FullWidthTabs() {
  React.useEffect(()=>{
    jwtToken=Cookies.get("jwt_token");
  },[])
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [feedImages,setFeedImages]=React.useState([]) 
  const [sampleImage,setSampleImage]=React.useState(false)
  const [suggitionsText,setSuggitionsText]=React.useState() 
  const [caption,setCaption]=React.useState("")
  const [designStyle, setDesignStyle]=React.useState("")
  const [propertyType,setPropertyType]=React.useState("")
  const [location,setLocation]=React.useState("")
  const [occupancy,setOccupancy]=React.useState("")
  const [propertySize,setPropertySize]=React.useState("")
  const [duration,setDuration]=React.useState("") 
  const [tags,setTags]=React.useState("")
  const [privacyState,setPrivacyState]=React.useState("")
  const [videoUpload,setVideoUpload]=React.useState([])
  const [isLoading,setIsLoading]=React.useState(false)
  const [uploadingImage,setUploadngImage]=React.useState(false)
  const [responseMessage,setResponseMessage]=React.useState("")
  const [videoHeight,setvideoHeight]=React.useState(false)
  const [postButtonDisable,setPostButtonDisable]=React.useState(false)
  const onHandleChange=(event)=>{
    const {name,value}=event.target
    switch(name){
      case 'caption':
        setCaption(event.target.value);
        break;
        case "designStyle":
          setDesignStyle(event.target.value);
          break;
          case "propertyType":
            setPropertyType(event.target.value);
            break;
            case "location":
              setLocation(event.target.value);
              break;
              case "occupancy":
                setOccupancy(event.target.value);
                break;
                case "propertySize":
                setPropertySize(event.target.value);
                break;
                case "duration":
                  setDuration(event.target.value)
                  break;
                  case "tags":
                  setTags(event.target.value);
                  break;
                  case "privacyState":
                  setPrivacyState(event.target.value);
                  break;


    }
  }
 
const uploadVideoPost=async()=>{
  
    setIsLoading(true)
    const apiUrl = "http://localhost:9000/postVideo";
    const formData = new FormData();
    formData.append("caption", caption);
    formData.append("designStyle", designStyle);
    formData.append("propertyType", propertyType);
    formData.append("location", location);
    formData.append("occupancy", occupancy);
    formData.append("propertySize", propertySize);
    formData.append("duration", duration);
    formData.append("tags", tags);
    formData.append("privacyState", privacyState);
    for (let i = 0; i < videoUpload.length; i++) {
    formData.append("videoUpload", videoUpload[i]);
    }
    const config={
      headers:{
          "Content-Type":"Application/json",
          "authorization":`Bearer ${jwtToken}`
      }
  }
    axios.post(apiUrl, formData,config)
      .then((response) => {
       
        setResponseMessage(response.data)
        setCaption("");
        setDesignStyle("");
        setPropertyType("");
        setLocation("");
        setOccupancy("");
        setPropertySize("");
        setDuration("");
        setTags("");
        setPrivacyState("");
        setIsLoading(false)
        setUploadngImage(false)
        setvideoHeight(false)
      })
      .catch((error) => {
        console.log(error);
      });
  

}

const emtyClick=()=>{
  alert("Please select the Images")
}
const emtyVideos=()=>{
  alert("Please select Atleast One Video")
}

  const onCreatePost = async () => {
    setIsLoading(true)
    const apiUrl = "http://localhost:9000/postImage";
    const formData = new FormData();
    formData.append("caption", caption);
    formData.append("designStyle", designStyle);
    formData.append("propertyType", propertyType);
    formData.append("location", location);
    formData.append("occupancy", occupancy);
    formData.append("propertySize", propertySize);
    formData.append("duration", duration);
    formData.append("tags", tags);
    formData.append("privacyState", privacyState);
    for (let i = 0; i < feedImages.length; i++) {
      formData.append('feedImages', feedImages[i]);
    }
    // formData.append("feedImages", feedImages[0]);
    // formData.append("feedImages1", feedImages[1]);
    // formData.append("feedImages2", feedImages[2]);
    const config={
      headers:{
          "Content-Type":"Application/json",
          "authorization":`Bearer ${jwtToken}`
      }
  }
    axios.post(apiUrl, formData,config)
      .then((response) => {
     
        setResponseMessage(response.data)
        setCaption("");
        setDesignStyle("");
        setPropertyType("");
        setLocation("");
        setOccupancy("");
        setPropertySize("");
        setDuration("");
        setTags("");
        setPrivacyState("");
        setIsLoading(false)
        setUploadngImage(false)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const  onChangeFileUpload=(event)=>{
    const uploadImages=event.target.files
    
    const maxSizeInBytes = 100 * 1024 * 1024;
    if(uploadImages.length>6){
      setPostButtonDisable(false)
      alert("You won't upload more then 6 Images")

     }
     else{
      let newSelectedFiles = [];

      for (let i = 0; i < uploadImages.length; i++) {
        const file = uploadImages[i];
        const fileNames=uploadImages[i].name
       
        if (file.size <= maxSizeInBytes) {
          newSelectedFiles.push(file);
          setPostButtonDisable(true)
          setSampleImage(true)
          setUploadngImage(true)
          setFeedImages(newSelectedFiles)
        } else {
         alert(`File ${file.name} exceeds the allowed limit (100MB) and will not be uploaded.`);
        }
      }
     
     }
   
 }


 
 const suggitionButtonClick=(event)=>{
    sigitionTextArray.push(event.target.name)
  
    const suggitionTextString=sigitionTextArray.join()
    setSuggitionsText(suggitionTextString)
 }
 
 const onChangeVideoUpload=(event)=>{
  const videoUploadArray=event.target.files
  const maxSizeInBytes = 100 * 1024 * 1024;
  if(videoUploadArray.length>3){
    setPostButtonDisable(false)
    alert("You won't Upload more then 3 Videos")
  }else{
     let newSelectedFiles = [];

      for (let i = 0; i < videoUploadArray.length; i++) {
        const file = videoUploadArray[i];
  
        if (file.size <= maxSizeInBytes) {
          newSelectedFiles.push(file);
          setvideoHeight(true)
  setUploadngImage(true)
  
  setVideoUpload(newSelectedFiles)
  setPostButtonDisable(true)
        }
      else{
        alert(`File ${file.name} exceeds the allowed limit (100MB) and will not be uploaded.`);
      }}
  
  
  }
 }
 const divHeight=videoHeight?"post1-div-size":""
  return (
    <Box>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
         
        >
          <Tab  sx={{ backgroundColor: '#2e2a2b'}} label="Image" {...a11yProps(0)} />
          <Tab  sx={{ backgroundColor: '#2e2a2b'}} label="Video" {...a11yProps(1)} />
          <Tab  sx={{ backgroundColor: '#2e2a2b'}} label="360" {...a11yProps(2)} />
          
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}>
        <TabPanel value={value} index={0} dir={theme.direction}>
          
        <div className='post-div-size'>
<SwipeableViews enableMouseEvents>
{uploadingImage?(
     Array.from(feedImages).map(item1=>{
      if(item1.name.split(".")[1]==="mp4"){
        return(
          <video src={item1? URL.createObjectURL(item1):"null"}  autoPlay loop muted className='video-player'/>
        )
      }
      else{
                     return(
                      <> 
                         <img src={item1? URL.createObjectURL(item1):"null"} className='post-image-size'/>
                     </>)}
                 })):null}
    </SwipeableViews>
   
    </div>
    <div className='d-flex flex-rwo'>
    {uploadingImage?(
     Array.from(feedImages).map(item1=>{
      if(item1.name.split(".")[1]==="mp4"){
        return(
          <video src={item1? URL.createObjectURL(item1):"null"}  autoPlay loop muted className='thumb-nails'/>
        )
      }
      else{
                     return(
                      <> 
                         <img src={item1? URL.createObjectURL(item1):"null"} className='thumb-nails'/>
                     </>)}
                 })):null}
                 </div>
<label htmlFor="file-upload9" className="create-scene-button1" style={{textAlign:"center"}}>Upload Image/Videos</label>
<input type="file" id="file-upload9"   className="hello1"  required multiple onChange={onChangeFileUpload}/>
<div className='form-scrool-div'>
{isLoading?( <Box sx={{ display: 'flex' }} color="red" style={{ position: 'absolute', top: '50%', left: '45%',  zIndex: '999' }}  height={50} width={50}>
      <CircularProgress   />
    </Box>):""}
    {/* <label for="images" class="drop-container" id="dropcontainer">
  <span class="drop-title">Drop files here</span>
  or
  <input type="file" id="images" accept="image/*" required  multiple onChange={onChangeFileUpload}/>
</label> */}
<p className='postTitle'>Post Caption</p>
                   <textarea rows="2" cols="10" className='form-control' name="caption" value={caption} onChange={onHandleChange}  placeholder='Write A Caption ...'></textarea>
                   <p className='postTitle'> Design Style</p>
                   <select  onChange={onHandleChange} value={designStyle} name="designStyle" className="form-control" >
                        <option>Select</option>
                        <option name="classic" >Classic</option>
                        <option name="modren" >Modren</option>
                        <option name="trending" >Trending</option>
                        </select>
                        <p className='postTitle'>Property Type</p>
                    <select className="form-control"  value={propertyType}name="propertyType" onChange={onHandleChange} >
                        <option>Select</option>
                        <option name="residential" >Residential</option>
                        <option name="commercial">Commercial</option>
                        </select>
                        <p className='postTitle'>Location</p>
                  <input type='text' className='form-control'  name="location" value={location} onChange={onHandleChange} placeholder='Enter Location ... Ex: Hyderabad'/>
                  <p className='postTitle'>Occupancy</p>
                    <input type="text" className="form-control" name="occupancy" value={occupancy} onChange={onHandleChange} placeholder='Enter Residential Type '/>
                    <p className='postTitle'>Property Size</p>
                  <input type='text' className='form-control'  name="propertySize" value={propertySize} onChange={onHandleChange} placeholder='Enter Property size...'/>
                  
                  <p className='postTitle'>Time Duration</p>
                  <input type='text' className='form-control'  name="duration" value={duration} onChange={onHandleChange} placeholder='Time duration of the project to complete...'/>
                  <h6 className='postTitle'>Privacy</h6>
                  <select onChange={onHandleChange} value={privacyState} name="privacyState" className="form-control"   >
                        <option  >Select</option>
                        <option name="public" >Public</option>
                        <option name="private" >Private</option>
                        </select>
                        <p className='postTitle'>Add # tags</p>
                        <textarea rows="2" cols="10" value={tags} onChange={onHandleChange} className='form-control mt-2 mb-2'   name="tags" placeholder='Add # tags'></textarea>
                  
                  <div className='rowButtonDiv'>
                     
                        {postButtonDisable?<button type='button' className='post-button' onClick={onCreatePost}>Post</button>:<button type='button' className='post-button' onClick={emtyClick} >Post</button>}
                    </div>
                <p className='m-auto'>{responseMessage}</p>
                 
</div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          

         <div className={divHeight}>
         <SwipeableViews enableMouseEvents>
         {uploadingImage?(
        Array.from(videoUpload).map(item=>{
                  return(
                    
                      <video src={item? URL.createObjectURL(item):"null"}  autoPlay loop muted className='video-player'/>
                  )
              })):null}
              </SwipeableViews>
           

           </div>
           {uploadingImage?(
     Array.from(videoUpload).map(item1=>{
                     return(
                      <video src={item1? URL.createObjectURL(item1):"null"}  autoPlay loop muted className='thumb-nails'/>
                     )
                 })):null}
  
   
<div>
<label htmlFor="file-upload7" className="create-scene-button1" style={{textAlign:"center"}}>Upload Video</label>
<input type="file" id="file-upload7"   className="hello1" accept="video/*" required multiple  onChange={onChangeVideoUpload}/>

{/* <label for="video" class="drop-container" id="dropcontainer">
  <span class="drop-title">Drop files here</span>
  or
  <input type="file" id="video" accept="video/*" required   onChange={onChangeVideoUpload}/>
</label> */}


<div className='form-scrool-div'>
{isLoading?( <Box sx={{ display: 'flex' }} color="red" style={{ position: 'absolute', top: '50%', left: '45%',  zIndex: '999' }}  height={50} width={50}>
      <CircularProgress   />
    </Box>):""}
<p className='postTitle'>Post Caption</p>
                   <textarea rows="2" cols="10" className='form-control' name="caption" value={caption} onChange={onHandleChange}  placeholder='Write A Caption ...'></textarea>
                   <p className='postTitle'> Design Style</p>
                   <select  onChange={onHandleChange} value={designStyle} name="designStyle" className="form-control" >
                        <option>Select</option>
                        <option name="classic" >Classic</option>
                        <option name="modren" >Modren</option>
                        <option name="trending" >Trending</option>
                        </select>
                        <p className='postTitle'>Property Type</p>
                    <select className="form-control"  value={propertyType}name="propertyType" onChange={onHandleChange} >
                        <option>Select</option>
                        <option name="residential" >Residential</option>
                        <option name="commercial">Commercial</option>
                        </select>
                        <p className='postTitle'>Location</p>
                  <input type='text' className='form-control'  name="location" value={location} onChange={onHandleChange} placeholder='Enter Location ... Ex: Hyderabad'/>
                  <p className='postTitle'>Occupancy</p>
                    <input type="text" className="form-control" name="occupancy" value={occupancy} onChange={onHandleChange} placeholder='Enter Residential Type '/>
                    <p className='postTitle'>Property Size</p>
                  <input type='text' className='form-control'  name="propertySize" value={propertySize} onChange={onHandleChange} placeholder='Enter Property size...'/>
                  
                  <p className='postTitle'>Time Duration</p>
                  <input type='text' className='form-control'  name="duration" value={duration} onChange={onHandleChange} placeholder='Time duration of the project to complete...'/>
                  <h6 className='postTitle'>Privacy</h6>
                  <select onChange={onHandleChange} value={privacyState} name="privacyState" className="form-control"   >
                        <option  >Select</option>
                        <option name="public" >Public</option>
                        <option name="private" >Private</option>
                        </select>
                        <p className='postTitle'>Add # tags</p>
                        <textarea rows="2" cols="10" value={tags} onChange={onHandleChange} className='form-control mt-2 mb-2'   name="tags" placeholder='Add # tags'></textarea>
                  
                  <div className='rowButtonDiv'>
                     
                        {postButtonDisable?<button type='button' className='post-button' onClick={uploadVideoPost}>Post</button>:<button type='button' className='post-button' onClick={emtyVideos}>Post</button>}
                    </div>
                    <p className='m-auto'>{responseMessage}</p>
                
                 
</div>
   
</div> 
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>

        <Link to="/createtour"><Button variant="primary">Continue To create Virtual Tours</Button></Link>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
export default  FullWidthTabs