import {Component} from 'react'
import './index.css'
import Sidebar from '../Sidebar'
import TopNavbar from '../Home/topNavbar'
import BottomNavbar from '../Home/bottomNavbar'
import axios from 'axios'
import Cookies from 'js-cookie'
import SimpleDialogDemo from './autocomplete'
import Profiles from './autocomplete'

class CreatePost extends Component{
    state={propertyType:false,uploadingFeed:[],multipleUploadImages:"hello",property:"",description:"",subType:"",Occupancy:"",Category:"",DesignStyle:"",Locality:"",city:"",privacy:"",userProfiles:"",searchResult:"",profileResult:"",backendSearchResult:[]}
    onChangePropety=(event)=>{
       this.setState(prevState=>{
        const {propertyType}=prevState
        return{
            propertyType:!propertyType
        }
      
       })
       if(event.target.value==="Residential"){
        this.setState({property:"Residential"})
       }
       else{
        this.setState({property:"Commercial"})
       }
      
   
    }
    filterUser=async(event)=>{
        this.setState({searchResult:event.target.value});  
        const {userProfiles,searchResult}=this.state
       const searchingResult=userProfiles.filter(eachItem=>
        eachItem.desigener_name.includes(searchResult))
        this.setState({profileResult:searchingResult})
        const {property}=this.state
        const searchData={searchResult,property}
        const {profileResult}=this.state
        const searchApi="http://localhost:9000/selectedUsers";
        const options={
            method:"POST",
            headers:{
                "Content-Type":"Application/json",
                mode:"cros"
            },
            body:JSON.stringify(searchData),
           
        }
        const response=await fetch(searchApi,options);
        const data=await response.json();
       this.setState({backendSearchResult:data})

    }
    onChangeUpdateStatus=(event)=>{
        const {value,name}=event.target
        this.setState({[name]:value})
       console.log(event.target.value)
    }
    onChangeFileUpload=(event)=>{
       this.setState({uploadingFeed:event.target.files})
       
       

    }
    componentDidMount=async()=>{
        const apiUrl="http://localhost:9000/relatedUsers";
        const options={
             methos:"GET"
        }
        const response=await fetch(apiUrl,options);
        const data=await response.json();
       
        this.setState({userProfiles:data});
        const {userProfiles}=this.state
        
        this.setState({profileResult:userProfiles})
        // console.log(userProfiles)
    }
    onClickPost=async()=>{
      
        const {description,property,uploadingFeed,multipleUploadImages,subType,Occupancy,Category,DesignStyle,Locality,city,privacy}=this.state
        const designPost={description,property,uploadingFeed,subType,Occupancy,Category,DesignStyle,Locality,city,privacy}
      
        const jwtToken=Cookies.get("jwt_token");
        const url= "http://localhost:9000/post"
        const formData=new FormData()
        formData.append("description",description);
        formData.append("property",property);
        formData.append("subType",subType);
        if(uploadingFeed.length>1){
        Array.from(uploadingFeed).forEach(item=>{
            formData.append("multipleUploadImage",item)
        })}
        else{
            formData.append("multipleUploadImage",uploadingFeed[0])
        }
    
        formData.append("Occupancy",Occupancy);
        formData.append("Category",Category);
        formData.append("DesignStyle",DesignStyle);
        formData.append("Locality",Locality);
        formData.append("city",city);
        formData.append("privacy",privacy);
        const config={
            headers:{
                "Content-Type":"Application/json",
                "authorization":`Bearer ${jwtToken}`
            }
        }
        axios.post(url,formData,config).then
        (response=>{
            console.log(response)
        })
        .catch(error=>console.log(error))
       
       
       }
    render(){
       const {searchResult,profileResult,backendSearchResult,description,uploadingFeed,property,userProfiles,propertyType,subType,Occupancy,Category,DesignStyle,Locality,city,privacy}=this.state
       
         console.log(backendSearchResult)
        return(
            <div className="create-post-div">
                <div>
                <Sidebar/>
                <TopNavbar/>
                <BottomNavbar/>
                </div>
            <div>
               <div className='formDiv'>
                <div className='postForm'> 
                 {
                    Array.from(uploadingFeed).map(item=>{
                        return(
                            <img src={item? URL.createObjectURL(item):null} className='post-image-size'/>
                        )

                    })
                 }
                
                        <img src="C:\\Users\\Pinite info\\database/uploads/1681713893864_ashura img.png"/>
                    <p className='postTitle'>Post Your Images</p>
                   <input type="file" className='form-control' multiple onChange={this.onChangeFileUpload}/>
                    <p className='postTitle'>Post Description</p>
                   <textarea rows="2" cols="10" className='form-control' value={description} name="description" onChange={this.onChangeUpdateStatus} placeholder='Describe Your Design Style Here'></textarea>
                    <p className='postTitle'>Property Type</p>
                    <select className="form-control"  onChange={this.onChangePropety} >
                        <option>Select</option>
                        <option>Residential</option>
                        <option>Commercial</option>
                        </select>
                        {propertyType?
                        <div>
                    <p className='postTitle'> Residential Type</p>
                   <input type="text" className="form-control" value={subType} name="subType" onChange={this.onChangeUpdateStatus} placeholder='Enter Residential Type '/>
                    </div>:
                    <div>
                    <p className='postTitle'> Commercial Type</p>
                    <input type="text" className="form-control" value={subType} name="subType" onChange={this.onChangeUpdateStatus} placeholder='Enter Commercial Type '/>
                    </div>}
                    <div>
                    <p className='postTitle'>Occupancy</p>
                    <input type="text" className="form-control" value={Occupancy} name="Occupancy" onChange={this.onChangeUpdateStatus} placeholder='Enter Residential Type '/>
                    </div>
                    <div>
                    <p className='postTitle'>Category</p>
                    <input type="text" className="form-control" value={Category} name="Category" onChange={this.onChangeUpdateStatus} placeholder='Enter Category Type '/>
                    </div>
                    <div>
                    <p className='postTitle'>Design Style</p>
                    <input type="text" className="form-control" value={DesignStyle} name="DesignStyle" onChange={this.onChangeUpdateStatus} placeholder='Enter Design Style'/>
                    </div>
                    <div>
                    <p className='postTitle'>Locality</p>
                  <input type='text' className='form-control' value={Locality} name="Locality"onChange={this.onChangeUpdateStatus} placeholder='Enter Locality'/>
                    </div>
                    <div>
                    <p className='postTitle'>City</p>
                  <input type='text' className='form-control' value={city} name="city" onChange={this.onChangeUpdateStatus} placeholder='Enter City'/>
                    </div>
                    <p className='postTitle'>Privacy Status</p>
                    <select className='form-control' name="privacy" value={privacy} onChange={this.onChangeUpdateStatus}>
                            <option>
                                Public
                            </option>
                            <option>
                                Private
                            </option>
                        </select>
                        <input type="search" className='form-control mt-2' value={searchResult} name="searchResult" onChange={this.filterUser} placeholder='Search Users'/>
                        
                        {/* <SimpleDialogDemo/> */}
                        {Array.from(backendSearchResult).map(items=>
                            <Profiles allUsers={items} key={userProfiles.desigener_name}/>)}  
                    {/* <p className='postTitle'>Image</p>
                    <input className="form-control" type="file" id="formFileMultipl" multiple/>
                    <p className='postTitle'>Gallery</p>
                    <input className="form-control" type="file" id="formFileMultiple" multiple/>
                    <p className='postTitle'>Video</p>
                        <input className="form-control" type="file" id="formFileMultiple" multiple/>*/}
                    <div className='d-flex flex-row justify-content-between'>
                    <div> 
                    <p className='postTitle'>Turn Off Comments</p>
                    <p className='comment-turnoff-text'>You can change this later by going to the ··· menu at the top of your post.</p>
                    </div>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                    </div>
                    <div className='rowButtonDiv'>
                        <button type='button' className='post-button' onClick={this.onClickPost}>Post</button>
                       
                    </div>
                    </div>
               </div>
            </div>
            </div>
        )
    }
}
export default CreatePost