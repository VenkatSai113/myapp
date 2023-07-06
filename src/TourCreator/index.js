import { Component } from "react"
import "./index.css"
import axios from "axios";
import Cookies from "js-cookie";
import TopNavbar from "../Home/topNavbar";
import BottomNavbar from "../Home/bottomNavbar";
import Sidebar from "../Sidebar";
import Button from 'react-bootstrap/Button';
import BarLoader from 'react-loader-spinner'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

let jwtToken=""
class TourCreator extends Component{
    state={tourTitle:"",description:"",tourThumbnail:"",tourImgSrc:"",isLoading:false}
    componentDidMount=()=>{
        jwtToken=Cookies.get("jwt_token")
    }
    onhandleChange=(event)=>{
        const {name,value}=event.target
        this.setState({[name]:value})
        const {description}=this.state
        console.log(description)

    }
    uploadimage=(event)=>{
        const{tourThumbnail}=this.state
        const file=event.target.files[0]
        this.setState({tourThumbnail:file})
        this.setState({tourImgSrc:URL.createObjectURL(file)})
        console.log(URL.createObjectURL(file))
    }
    onCreateTour=()=>{
        const {tourTitle,description,tourThumbnail}=this.state
        if(tourTitle==="" || description=== ""){
            alert("Please Give Proper Title, Description and Image")
        }else{
            this.setState({isLoading:true})
        localStorage.setItem("tourTitle",tourTitle)
        
      
        const apiurl="https://objective-wright.69-49-231-148.plesk.page/virtualtours"
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
                history.push("/virtualTours")
            localStorage.setItem("tourId",response.data.tourId)
            
        })
        .catch(error=>{
            console.log(error)
        })
    }
    }
    render(){
        const {tourTitle,description,errorMsg,tourImgSrc,isLoading}=this.state
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
                   
                    <input type="text" className="form-control" placeholder="Enter your Title..." name="tourTitle" value={tourTitle} onChange={this.onhandleChange}/>
                  

                    <textarea type="text" className="form-control mt-3" placeholder="Enter your Description..." value={description} name="description" onChange={this.onhandleChange}></textarea>
                    {/* <input type="text" className="form-control mt-3" placeholder="Enter scene name" value={scenename} name="scenename" onChange={this.onhandleChange}/> */}
                    <label htmlFor="file-upload" className="mt-3">Upload Thumbnail</label>
<input type="file" id="file-upload" name="file-upload" className="hello"  onChange={this.uploadimage}/>
<img src={tourImgSrc} className="virtual-tour-image-size"/>
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

export default TourCreator