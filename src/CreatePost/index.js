import {Component} from 'react'
import './index.css'
import Sidebar from '../Sidebar'
import TopNavbar from '../Home/topNavbar'
import BottomNavbar from '../Home/bottomNavbar'
import axios from 'axios'
import Cookies from 'js-cookie'
import SimpleDialogDemo from './autocomplete'
import Profiles from './autocomplete'
import FullWidthTabs from './postTabs'
import SimpleBottomNavigation from '../Home/newBottomBar'

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
        const searchApi="http://13.233.231.34:9000/selectedUsers";
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
        const apiUrl="http://13.233.231.34:9000/relatedUsers";
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
        const url= "http://13.233.231.34:9000/post"
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
                </div>
            <div>
              
               <TopNavbar/>
                <div className='postForm1'> 
<FullWidthTabs/>
                    </div>
                    <BottomNavbar/>
               </div>
          
            </div>
        )
    }
}
export default CreatePost