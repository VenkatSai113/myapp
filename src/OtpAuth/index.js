import {Component} from 'react'
import {Link,withRouter} from 'react-router-dom'
import firebase from './firebase.config'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import Cookies from 'js-cookie'
import './index.css'
import { Redirect } from 'react-router-dom'
import BarLoader from 'react-loader-spinner'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import OtpInput from 'react-otp-input';

let appVerifier=""
class OtpAuth extends Component{
    state={phoneNumber:"",hello:"hello",submittMsg:[],validationStatus:"",isLoading:false,otp:"",stateJwtToken:"",phoneNumberInput:true,}
    onChangeMobileNumber=(event)=>{
        this.setState({phoneNumber:event.target.value})
    }
    onChangeOtpNumber=(event)=>{
      this.setState({otp:event.target.value})
      console.log(event.target.value)
    }
    onOtp=(jwtToken)=>{
      this.setState({isLoading:true})
      const {phoneNumber,otp}=this.state
      let phone=`+91${phoneNumber}`
      const auth = firebase.auth();
       appVerifier=new firebase.auth.RecaptchaVerifier('recaptcha',{'size':"invisible"});
       auth.signInWithPhoneNumber(phone, appVerifier)
       this.setState({phoneNumberInput:false})
       this.setState({isLoading:false})
    
   
   
     }

     varifyOtp=(jwtToken)=>{
      this.setState({isLoading:true})
      const {stateJwtToken}=this.state
      const {phoneNumber,otp}=this.state
      let phone=`+91${phoneNumber}`
      const auth = firebase.auth();
      auth.signInWithPhoneNumber(phone, appVerifier)
      .then((confirmationResult) => {
      //  const code = prompt('Enter the verification code:');
       console.log(otp)
       confirmationResult.confirm(otp)
         .then((result) => {
          const jwtTokenLogin=Cookies.set("jwt_token",stateJwtToken,{expires:30})
           console.log("successfully varified")
           const {history}=this.props
           history.replace("/")
           this.setState({isLoading:false})
         })
         .catch((error) => {
           // Verification code is incorrect
           this.setState({submittMsg:error.code})
           console.log("Verification code is incorrect")
           this.setState({isLoading:false})
         });
      })
      .catch((error) => {
       // Error sending SMS verification code
       console.log("Error sending SMS verification code")
       console.log(error.message)
       this.setState({submittMsg:error.message})
       this.setState({isLoading:false})
      });
     }

    handleClick=async(e)=>{
      this.setState({isLoading:true})
        const {phoneNumber,hello}=this.state
        const extra= {phoneNumber,hello}
        const url="https://venkatsai.onrender.com/checkingPhonenumbers/"
        const options={
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          mode:"cors",
          body:JSON.stringify(extra)
        }
        const response=await fetch(url,options)
        const data=await response.json()
       this.setState({submittMsg:data.error_msg})
       this.setState({isLoading:false})
        if(response.ok===true){
          this.onOtp(data.jwtToken)
          this.setState({stateJwtToken:data.jwtToken})
        }
    }
    render(){
      const {submittMsg,isLoading,phoneNumberInput,otp,phoneNumber}=this.state
        return(
            <form>
              {isLoading?( <Box sx={{ display: 'flex' }} color="red" style={{ position: 'absolute', top: '50%', left: '45%',  zIndex: '999' }}  height={50} width={50}>
      <CircularProgress   />
    </Box>):""}
            <div className='login-bg-container' >
            <img className="logo-image" src="https://designalley.in/wp-content/uploads/2022/03/Logo.png" alt="piniteinfo Logo"/>
            <div className="login-card-container">
            <img className="logo-login-image" src="https://designalley.in/wp-content/uploads/2022/03/Logo.png" alt="piniteinfo Logo"/>
              {phoneNumberInput?<input autoFocus type="number" placeholder='Enter phone number' className='username-input-filed ' onChange={this.onChangeMobileNumber}/>:<input autoFocus type="number" placeholder='Enter OTP' className='username-input-filed ' value={otp} onChange={this.onChangeOtpNumber}/>} 
               
               {/* {isPasswordTrue&&<p className='error-message'>*{errorMessage}</p>} */}
              <label></label>
              <div id="recaptcha"></div> 
              {phoneNumberInput?<button type="button" value={phoneNumber} className='login-button1' onClick={this.handleClick}>Request OTP</button>:<button type="button" className='login-button1' onClick={this.varifyOtp}>Varify OTP</button>}  
               
               
               <label className='error-message12'>{submittMsg}</label>
               {/* <p className='forgot-password'><Link to="/forgotpassword">Forgot Password?</Link></p> */}
               <p className='dont-have-account'>Don't Have an Account?<span className='signup-text'><Link className="link" to="signup">Sign Up</Link></span></p>
            </div>
            </div>
            </form>
        )
    }
}
export default withRouter(OtpAuth)