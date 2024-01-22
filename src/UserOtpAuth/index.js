import {Component} from 'react'
import './index.css'
import { withRouter } from 'react-router-dom';

import axios from 'axios'
import * as React from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { green } from '@mui/material/colors';



const optionList = [
    { value: "Wood Works", label: "Wood Works" },
    { value: "Ceiling", label: "Ceiling" },
    { value: "Painting", label: "Painting" },
    { value: "Flooring", label: "Flooring" },
    { value: "Tiles Fixing", label: "Tiles Fixing" },
    { value: "Electrical", label: "Electrical" },
    { value: "Plumbing", label: "Plumbing" },
    { value: "Wallpapers", label: "Wallpapers" },
    { value: "Decor", label: "Decor" },
    { value: "Granite", label: "Granite" },
    { value: "Home Automation", label: "Home Automation" }
  ];
class IndividualDesigener extends Component{
    state={name:"",open:false,userState:false,address:"",venderType:"",multiServices:false,selectedOptions:"",matched:false,confirmAccount:"",email:"",PhoneNumber:"",area:"",gstNumber:"",bankName:"",accountNumber:"",reAccountNumber:"",branch:"",ifscCode:"",teamSize:"",teamSizeError:"",teamSizeStatus:"",nameError:"",PhoneNumberError:"",addressError:"",areaError:"",bankNameError:"",accountNumberError:"",branchError:"",ifscCodeError:"",nameStatus:false,
addressStatus:false,emailStatus:false,emailError:"",areaStatus:false,bankNameStatus:false,accountNumberStatus:false,branchStatus:false,ifscCodeStatus:false,PhoneNumberStatus:false,responseData:"",isLoading:false,notifications:false,city:"",cityError:"",cityStatus:""}


requiredHandle=(event)=>{

        const {name,value}=event.target
        this.setState({
            [name]:value
        },this.hello)
    }
    
    onSubmitSignUp=async()=>{
        let {name,PhoneNumber}=this.state
        if(name===""){
            this.setState({nameError:"Name is Requeried"})
            this.setState({nameStatus:true})
        }
        else{
            this.setState({nameError:""})
            this.setState({nameStatus:false})
        }
        if(PhoneNumber===""){
            this.setState({PhoneNumberError:"Mobile Number  is Requeried"})
            this.setState({PhoneNumberStatus:true})
        }
        else{
            this.setState({PhoneNumberError:""})
            this.setState({PhoneNumberStatus:false})
        }
       
        if(PhoneNumber!==""){
          
            this.setState({isLoading:true})
            const signupUrl="https://venkatsai.onrender.com/userRegister"
            let signupDetails={name,PhoneNumber}
         
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
            if(response.ok===true){
                this.setState({responseData:data})
                this.setState({open:true})
                this.setState({isLoading:false})
            }
        }
        else{
           
        }
           
    }
    handleClose = (event, reason,prpos) => {
        if (reason === 'clickaway') {
          return;
        }
        const {responseData}=this.state
                const responseSplit=responseData.split(" ")
                console.log(responseSplit)
                const responseLength=responseSplit.length -1
                if(responseSplit[responseLength]==="Successfully"){
                    this.setState({open:false})
                    const {history}=this.props
                    history.replace("/userLogin")
                }
                else{
                    const timer = setTimeout(() => {
                        this.setState({open:false})
                      }, 3000);
                       return () => clearTimeout(timer);
                    
                }
      }
       handleSelect=(data) =>{
        const{selectedOptions}=this.state
       this.setState({selectedOptions:data})
       console.log(selectedOptions)

      }
      onChangeVenderType=(event)=>{
        this.setState({venderType:event.target.value},this.multiSelectService)
      }
      multiSelectService=()=>{
        const {venderType}=this.state
        if(venderType=="Service Vender"){
        this.setState({multiServices:true})
      }
      else{
        this.setState({multiServices:false})
      }
    }
    onChangeBankName=(event)=>{
        this.setState({bankName:event.target.value})
    }
    
    render(){
        const {name,open,
           PhoneNumber,PhoneNumberError,PhoneNumberStatus,responseData,isLoading,}=this.state
            console.log(responseData)
        return(
           <> 
         <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={20} onClose={this.handleClose}>
        <Alert onClose={this.handleClose} severity="success" sx={{ width: '100%' }}>
         {responseData}
        </Alert>
      </Snackbar>
      {/* <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert>
      <Alert severity="success">This is a success message!</Alert> */}
    </Stack>
    <Container fluid>
        <Row>
            <Col xs="6">
            <label className='property mt-3' htmlFor="residentType">Name</label>
            <input type="text" className='form-control' value={name} placeholder="  Enter Your name" name="name" onChange={this.requiredHandle}/>
         
            </Col>
            <Col xs="6">
            <label className='property mt-3'>Mobile Number</label>
              
               <input type="number" className='form-control' value={PhoneNumber} placeholder="Enter Valid Mobile number" name="PhoneNumber" onChange={this.requiredHandle} />
               {PhoneNumberStatus&&<p className='error-msg mt-2'>*{PhoneNumberError}</p>}
               
            </Col> 
           
          
       

      
        </Row>
    </Container>
                <div className='w-100'>
              <div className="elements-div">
                <div className='text-element-residential'>
             <div>
              </div>
              </div>
              </div>
      {/* <Snackbar open={open} autoHideDuration={2000} >
        {userState?<Alert severity="error">  {  responseData}</Alert>:<Alert severity="success" sx={{ width: '100%' }}>
        {  responseData}
        </Alert>}
      </Snackbar> */}
              <div className='d-flex flex-row justify-content-between'>
              <button className='login-button' onClick={this.onSubmitSignUp}>Sign Up</button>
              </div>
              {isLoading?( <Box sx={{ display: 'flex' }} color="red" style={{ position: 'absolute',marginLeft:"20%",  zIndex: '999' }} >
           <CircularProgress   />
         </Box>):""}
              <p className='response-data'>{responseData}</p>
               </div>
               </>
        )
    }
}
export default withRouter(IndividualDesigener)