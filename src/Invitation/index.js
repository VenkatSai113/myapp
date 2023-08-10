import { Component } from "react";
import './index.css'
import {AiOutlineUserAdd} from 'react-icons/ai'
import { FacebookShareButton, WhatsappShareButton} from 'react-share'
import {FacebookIcon,WhatsappIcon} from 'react-share'
import Cookies from "js-cookie";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Sidebar from "../Sidebar";
import TopNavbar from "../Home/topNavbar";
import BottomNavbar from "../Home/bottomNavbar";

class InviteDesigner extends Component{
  state={mobileNumber:"",invitationMsg: "I'm inviting you to register with Design Alley! Here is the link http://localhost:3000/login",errorMsg:"",open:false, vertical: 'top',
  horizontal: 'center',successMsg:""}
  onChangeMobileNumber=(event)=>{
    this.setState({mobileNumber:event.target.value})
  }
  handleClose = () => {
    this.setState({open:false})
  };
  invitationApi=async()=>{
    
    const jwtToken=Cookies.get("jwt_token")
    console.log(jwtToken)
    const {mobileNumber,invitationMsg}=this.state
    const invitationDetails={mobileNumber,invitationMsg}
    console.log(invitationDetails)
    const url="https://objective-wright.69-49-231-148.plesk.page/invitationApi"
    const options={
      method:"POST",
      headers:{
        "Content-Type":"application/json",
       "Authorization":`Bearer ${ jwtToken}`
      }
      ,
      body:JSON.stringify(invitationDetails)
    }
    const response=await fetch(url,options);
   
    const data=await response.json()
    console.log(data)
   this.setState({errorMsg:data})
   if(response.ok===true){
    this.setState({successMsg:data})
    this.setState({errorMsg:""})
    this.setState({open:true})
    this.setState({mobileNumber:""})
   }
  }
    render(){
      const {errorMsg ,open,vertical,horizontal,successMsg,mobileNumber}=this.state
        return(
          <div className="d-fle flex-row">
            <div>
              <Sidebar/>
              <TopNavbar/>
            </div>
            <div className="invite-container">
                <div className="header-div">
                <img className="logo-login-image1" src="https://designalley.in/wp-content/uploads/2022/03/Logo.png" alt="piniteinfo Logo"/>
                </div>
                <div className="body-div">
                  <div className="icon-div">
                    <p ><AiOutlineUserAdd className="icon-symboll"/></p>
                  </div>
                  <b className="invite-desigener-heading">Invite Interior Designers</b>
                  <p className="invite-description">Invite atleast three interior Designers</p>
                  <label className="mobile-number-text" htmlFor="mobilenumber">Mobile Number</label>
                  <input type="number" name={mobileNumber} value={mobileNumber} onChange={this.onChangeMobileNumber} id="mobilenumber"/>
                  <button type="button" className="login-button1" onClick={this.invitationApi}>Invite</button>
                 <label className="error-message">{errorMsg}</label>
                 {/* <Snackbar open={open}  autoHideDuration={10} > */}
         {/* <Alert severity="success" sx={{ width: '100%' }}>
     {errorMsg}
        </Alert> */}
        {/* <Alert onClose={this.handleClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert> */}
         <Snackbar open={open} autoHideDuration={6000} anchorOrigin={{ vertical, horizontal }} onClose={this.handleClose}>
        <Alert onClose={this.handleClose} severity="success" sx={{ width: '100%' }}>
          {successMsg }
        </Alert>
      </Snackbar>
      {/* </Snackbar> */}
                  <p className="invite-description">Invite through Social Media</p>
                  <div  > 
                    {/* <FacebookShareButton url="https://nervous-poincare.69-49-231-148.plesk.page/signup" quote="I'm inviting you to register with Design Alley! Here is the link" hashtag="react">
                      <FacebookIcon size={35}  logoFillColor="white" round={true}>
                      </FacebookIcon>
                    </FacebookShareButton> */}
                    <WhatsappShareButton url="http://localhost:3000/signup" title="I'm inviting you to register with Design Alley! Here is the link">
                      <WhatsappIcon className="ml-3" size={35} logoFillColor="white" round={true}>
                      </WhatsappIcon>
                    </WhatsappShareButton>
                  </div>
                  <div>
                  </div>
                </div>
            </div>
            <BottomNavbar/>
            </div>
        )
    }
}
export default InviteDesigner                                                              