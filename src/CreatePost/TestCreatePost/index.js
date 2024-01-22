import { Component } from "react"
import axios from 'axios'
import Cookies from "js-cookie"
let jwtToken=""
class TestCreatePost extends Component{
    state={caption:"",designStyle:"",feedImages:[],propertyType:"",location:"",occupancy:"",propertySize:"",duration:"",privacyState:"",tags:""}
   componentDidMount=()=>{
    jwtToken=Cookies.get("jwt_token")

   }
    onHandleChange=()=>{
        console.log("Hello")
    }
    onChangeFileUpload=(event)=>{
        this.setState({feedImages:event.target.files[0]})
    }
     onCreatePost = async () => {
        const {feedImages}=this.state
        const apiUrl = "https://venkatsai.onrender.com/postImage";
        const formData = new FormData();
        formData.append("feedImages", feedImages);
        const config={
          headers:{
              "Content-Type":"Application/json",
              "authorization":`Bearer ${jwtToken}`
          }
      }
        axios.post(apiUrl, formData,config)
          .then((response) => {
            console.log(response.data);
           
          })
          .catch((error) => {
            console.log(error);
          });
      };
    render(){
        const {caption,designStyle,propertyType,location,occupancy,propertySize,duration,privacyState,tags}=this.state
      
        return(
            <>
            
<label htmlFor="file-upload9" className="create-scene-button1" style={{textAlign:"center"}}>Upload Image</label>
<input type="file" id="file-upload9"   className="hello1"  multiple onChange={this.onChangeFileUpload}/>
<div className='form-scrool-div'>
<p className='postTitle'>Post Caption</p>
           <textarea rows="2" cols="10" className='form-control' name="caption" value={caption} onChange={this.onHandleChange}  placeholder='Write A Caption ...'></textarea>
           <p className='postTitle'> Design Style</p>
           <select  onChange={this.onHandleChange} value={designStyle} name="designStyle" className="form-control" >
                <option>Select</option>
                <option name="classic" >Classic</option>
                <option name="modren" >Modren</option>
                <option name="trending" >Trending</option>
                </select>
                <p className='postTitle'>Property Type</p>
            <select className="form-control"  value={propertyType}name="propertyType" onChange={this.onHandleChange} >
                <option>Select</option>
                <option name="residential" >Residential</option>
                <option name="commercial">Commercial</option>
                </select>
                <p className='postTitle'>Location</p>
          <input type='text' className='form-control'  name="location" value={location} onChange={this.onHandleChange} placeholder='Enter Location ... Ex: Hyderabad'/>
          <p className='postTitle'>Occupancy</p>
            <input type="text" className="form-control" name="occupancy" value={occupancy} onChange={this.onHandleChange} placeholder='Enter Residential Type '/>
            <p className='postTitle'>Property Size</p>
          <input type='text' className='form-control'  name="propertySize" value={propertySize} onChange={this.onHandleChange} placeholder='Enter Property size...'/>
          
          <p className='postTitle'>Time Duration</p>
          <input type='text' className='form-control'  name="duration" value={duration} onChange={this.onHandleChange} placeholder='Time duration of the project to complete...'/>
          <h6 className='postTitle'>Privacy</h6>
          <select onChange={this.onHandleChange} value={privacyState} name="privacyState" className="form-control"   >
                <option  >Select</option>
                <option name="public" >Public</option>
                <option name="private" >Private</option>
                </select>
                <p className='postTitle'>Add # tags</p>
                <textarea rows="2" cols="10" value={tags} onChange={this.onHandleChange} className='form-control mt-2 mb-2'   name="tags" placeholder='Add # tags'></textarea>
          
          <div className='rowButtonDiv'>
             
                <button type='button' className='post-button' onClick={this.onCreatePost}>Post</button>
            </div>
        
         
</div>
            </>

        )
    }
}
export default TestCreatePost


{/* <TabPanel value={value} index={0} dir={theme.direction}>
          
<div className='post-div-size'>
<SwipeableViews enableMouseEvents>
{sampleImage?(
         
         Array.from(feedImages).map(item1=>{
             return(
                 <img src={item1? URL.createObjectURL(item1):"null"} className='post-image-size mb-2'/>
             )
         })
      ): <img src="https://media.designcafe.com/wp-content/uploads/2023/01/31151510/contemporary-interior-design-ideas-for-your-home.jpg" className='post-image-size mb-2'/>}
</SwipeableViews>
</div>
         
    


</TabPanel> */}