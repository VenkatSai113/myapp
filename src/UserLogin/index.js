import {Component} from 'react'
import {Link,withRouter} from 'react-router-dom'
import firebase from '../OtpAuth/firebase.config'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import Cookies from 'js-cookie'
import './index.css'
import { Redirect } from 'react-router-dom'
import BarLoader from 'react-loader-spinner'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

class UserOtpLogin extends Component{
    state={phoneNumber:"",name:"",hello:"hello",submittMsg:[],validationStatus:"",isLoading:false}
    onChangeMobileNumber=(event)=>{
        this.setState({phoneNumber:event.target.value})
    }
    onChangeUserName=(event)=>{
      this.setState({name:event.target.value})
      console.log(event.target.value)
  }
    onOtp=(jwtToken)=>{
      this.setState({isLoading:false})
      const {phoneNumber,otp}=this.state
      let appVerifier=new firebase.auth.RecaptchaVerifier('recaptcha',{'size':"invisible"});
     let phone=`+91${phoneNumber}`
     const auth = firebase.auth();
     auth.signInWithPhoneNumber(phone, appVerifier)
.then((confirmationResult) => {
 const code = prompt('Enter the verification code:');
 console.log(otp)
 confirmationResult.confirm(code)
   .then((result) => {
    const jwtTokenLogin=Cookies.set("userJwtToken",jwtToken,{expires:30})
     console.log("successfully varified")
     const {history}=this.props
     const sharedPostId=localStorage.getItem("sharedPostId")

     history.replace(`/sharedPost:${sharedPostId}`)
   })
   .catch((error) => {
     // Verification code is incorrect
     this.setState({submittMsg:error.code})
     console.log("Verification code is incorrect")
   });
})
.catch((error) => {
 // Error sending SMS verification code
 console.log("Error sending SMS verification code")
 console.log(error.message)
 this.setState({submittMsg:error.message})
});
     }
    handleClick=async(e)=>{
      const {phoneNumber,name}=this.state
      if(phoneNumber!==""){
          
        this.setState({isLoading:true})
        const signupUrl="http://localhost:9000/userRegister"
        let signupDetails={name,phoneNumber}
     
        const options={
            method:"POST",
            headers:{
                "Content-Type":"Application/json"
            },
            mode:"cors",
            body:JSON.stringify(signupDetails)
        }
        const response=await fetch(signupUrl,options)
        const data=await response.json()
        console.log(data)
        if(response.ok===true){
            // this.setState({responseData:data})
            // this.setState({open:true})
            this.onOtp(data.jwtToken)
            this.setState({isLoading:false})
        }
    }
    else{
       
    }
      // this.setState({isLoading:true})
      //   const {phoneNumber,hello}=this.state
      //   const extra= {phoneNumber,hello}
      //   const url="http://localhost:9000/userLoginCheck/"
      //   const options={
      //     method:"POST",
      //     headers:{
      //       "Content-Type":"application/json"
      //     },
      //     mode:"cors",
      //     body:JSON.stringify(extra)
      //   }
      //   const response=await fetch(url,options)
      //   const data=await response.json()
      // console.log(response,"datta")
      //  this.setState({submittMsg:data.error_msg})
      //  this.setState({isLoading:false})
      //   if(response.ok===true){
      //     this.onOtp(data.jwtToken)
      //     console.log(data,"ioukjyhgfd")
      //   }
    }
    render(){
      const {submittMsg,isLoading}=this.state
        return(
            <form >
              {isLoading?( <Box sx={{ display: 'flex' }} color="red" style={{ position: 'absolute', top: '50%', left: '45%',  zIndex: '999' }}  height={50} width={50}>
      <CircularProgress   />
    </Box>):""}
            <div className='login-bg-container' >
            <img className="logo-image" src="https://designalley.in/wp-content/uploads/2022/03/Logo.png" alt="piniteinfo Logo"/>
            <div className="login-card-container">
            <img className="logo-login-image" src="https://designalley.in/wp-content/uploads/2022/03/Logo.png" alt="piniteinfo Logo"/>
            <input type="text" placeholder='Enter Your Name' className='username-input-filed ' onChange={this.onChangeUserName}/>
               <input type="number" placeholder='Enter phone number' className='username-input-filed ' onChange={this.onChangeMobileNumber}/>
               {/* {isPasswordTrue&&<p className='error-message'>*{errorMessage}</p>} */}
              <label></label>
              <div id="recaptcha"></div>
               <button type="button" className='login-button1' onClick={this.handleClick}>Request OTP</button>
               <label className='error-message12'>{submittMsg}</label>
               {/* <p className='forgot-password'><Link to="/forgotpassword">Forgot Password?</Link></p> */}
               <p className='dont-have-account'>Don't Have an Account?<span className='signup-text'><Link className="link" to="/userOtpAuth">Sign Up</Link></span></p>
            </div>
            </div>
            </form>
        )
    }
}
export default withRouter(UserOtpLogin)