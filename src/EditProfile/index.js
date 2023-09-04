import {Component} from 'react'
import './index.css'
import Button from 'react-bootstrap/Button'
import ChangePassword from './ChangePassword'
import axios from 'axios'
import {GrUpdate} from 'react-icons/gr'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

class EditProfile extends Component{ 
    state={profileImage:[],username:"",email:"",onUpload:false,phoneNumber:"",address:"",location:"",imageFile:"",succesMessage:""}
    componentDidMount=()=>{
        const editProfile=async()=>{
            let jwtToken=Cookies.get("jwt_token")
            const url="http://13.233.231.34:9000/profileData";
            const options={
                headers:{
                    "authorization":`Bearer ${jwtToken}`
                },
                method:"GET"
            }
            const response=await fetch(url,options);
            console.log(response)
            if(response.ok===true){
                const fetchedData=await response.json();
               
                this.setState({username:fetchedData.desigener_name})
                this.setState({email:fetchedData.email_id})
                this.setState({phoneNumber:fetchedData.phone_number})
                this.setState({address:fetchedData.address})
                this.setState({location:fetchedData.area})
                this.setState({profileImage:fetchedData.logo})

                console.log(fetchedData)
            }
        }
        editProfile()
       
    }
    onChangeHandle=(event)=>{
       const {name,value}=event.target
       this.setState({[name]:value})
    }
    onProfileChange=(event)=>{
        const file=event.target.files[0];
        this.setState({imageFile:file})
        const reader=new FileReader()
        reader.onloadend=()=>{
            this.setState({profileImage:reader.result})
            this.setState({onUpload:true})
        }
        if (file) {
            reader.readAsDataURL(file);
          } else {
           this.setState({profileImage:null});
          }
       
    }
   
    onSubmitProfile=async(props)=>{
        const jwtToken=Cookies.get("jwt_token")
        const {imageFile,username,email,phoneNumber,address,location}=this.state;
        console.log(imageFile)
        const formData=new FormData();
        formData.append("username",username);
        formData.append("email",email);
        formData.append("phoneNumber",phoneNumber);
        formData.append("address",address);
        formData.append("location",location);
        formData.append("profileImages",imageFile);
        const url="http://13.233.231.34:9000/editDesignerProfile"
        const config={
            headers:{
                "Content-Type":"Application/json",
                "authorization":`Bearer ${jwtToken}`
            }
          
        }
        const result=await axios.post(url,formData, config).then
        (response=>{
            console.log(response.data)
            const {history}=this.props
            history.push("/profile")

        })
        .catch(error=>console.log(error))
       
        
    }
    render(){
        const {profileImage,username,email,phoneNumber,address,location,onUpload}=this.state;
       
        return(
            <div className='forgot-password-bg-container'>
                <div className='forgot-password-container'>
                    <h3 className='edit-profile'>Edit Profile</h3>
            {<input  type="file"  onChange={this.onProfileChange} className="custom1-file-input"/>}
            {onUpload? <img src={profileImage} className='edit-profile-image' alt="" />:  <img src={`http://13.233.231.34:9000/${profileImage}`}className='edit-profile-image' alt="" />}
                   
                  
                  <input type="text" className='username-input-filed' name="username" value={username} onChange={this.onChangeHandle} placeholder='User Name /Company name'/>
                  <input type="email" className='username-input-filed' name="email" value={email} onChange={this.onChangeHandle} placeholder='Email'/>
                  <input type="number" className='username-input-filed' name="phoneNumber" value={phoneNumber} onChange={this.onChangeHandle} placeholder='Phone Number'/>
                  <input  type="text" className='username-input-filed' name="address" value={address} onChange={this.onChangeHandle} placeholder='Address'/>
                  <input type="text" className='username-input-filed' name="location" value={location} onChange={this.onChangeHandle} placeholder='Location'/>
              <div className='mt-3'>
              {/* <ChangePassword/>
                  <Button variant="secondary" className='ml-2'><GrUpdate/></Button> */}
                  <Button variant="secondary" onClick={this.onSubmitProfile} className='ml-2'>Submit</Button>
                  </div>
                  <hr></hr>
                </div>
            </div>
        )
    }
}
export default withRouter(EditProfile)