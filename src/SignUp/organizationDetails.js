import {Component} from 'react'
import './index.css'
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

class OrganizationDetails extends Component{
    state={areaMaxCharacters: 50,areaCharcterLength:0,isEmailValid: false, maxCharacters: 50,addressMaxCharacters: 100,charcterLength:0,addressCharcterLength:0,open:false,userState:false,name:"",address:"",email:"",logoFile:"",PhoneNumber:"",area:"",gstNumber:"",logo:"",budget:"",bankName:"",accountNumber:"",branch:"",ifscCode:"",nameError:"",PhoneNumberError:"",addressError:"",areaError:"",budgetError:"",bankNameError:"",accountNumberError:"",branchError:"",ifscCodeError:"",nameStatus:false,
    addressStatus:false,emailStatus:false,emailError:"",areaStatus:false,budgetStatus:false,bankNameStatus:false,accountNumberStatus:false,branchStatus:false,ifscCodeStatus:false,PhoneNumberStatus:false,isLoading:false}
      requiredHandle=(event)=>{
          const {name,value}=event.target
          this.setState({
              [name]:value
          })
      }
      handleFileChange=(event)=>{
        console.log(event.target.files[0])
        this.setState({logoFile:event.target.files[0]})
    }
    onChangeName=(event)=>{
        const { maxCharacters } = this.state;
        const {name,value}=event.target
        if (value.length <= maxCharacters) {
            this.setState({charcterLength:value.length})
             console.log(value.length)
             this.setState({
                 [name]:value
             })
           }
    }
    onChangeAddress=(event)=>{
        const { addressMaxCharacters } = this.state;
        const {name,value}=event.target
        if (value.length <= addressMaxCharacters) {
            this.setState({addressCharcterLength:value.length})
             console.log(value.length)
             this.setState({
                 [name]:value
             })
           }
    }
    onChangeEmail=(event)=>{
        const { name, value } = event.target;

        // Email validation using a regular expression
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const isValid = emailRegex.test(value);
    
        this.setState({
          [name]: value,
          isEmailValid: isValid,
        });
       
    }
      onSubmitSignUp=()=>{
        const {name,address,email,area,budget,bankName,accountNumber,branch,ifscCode,PhoneNumber}=this.state
          if(name===""){
              this.setState({nameError:"Name is Requeried"})
              this.setState({nameStatus:true})
          }
          else{
              this.setState({nameError:""})
              this.setState({nameStatus:false})
          }
          if(address===""){
              this.setState({addressError:"Address is Requeried"})
              this.setState({addressStatus:true})
          }
          else{
              this.setState({addressError:""})
              this.setState({addressStatus:false})
          }
          if(email===""){
              this.setState({emailError:"Email is Requeried"})
              this.setState({emailStatus:true})
          }
          else{
              this.setState({emailError:""})
              this.setState({emailStatus:false})
          }
          if(area===""){ 
              this.setState({areaError:"Area/City is Requeried"})
              this.setState({areaStatus:true})
          }
          else{
              this.setState({areaError:""})
              this.setState({areaStatus:false})
          }
          if(budget===""){
              this.setState({budgetError:"Budget is Requeried"})
              this.setState({budgetStatus:true})
          }
          else{
              this.setState({budgetError:""})
              this.setState({budgetStatus:false})
          }
          if(bankName===""){
              this.setState({bankNameError:"Bank Name is Requeried"})
              this.setState({bankNameStatus:true})
          }
          else{
              this.setState({bankNameError:""})
              this.setState({bankNameStatus:false})
          }
          if(accountNumber===""){
              this.setState({accountNumberError:"Account number is Requeried"})
              this.setState({accountNumberStatus:true})
          }
          else{
              this.setState({accountNumberError:""})
              this.setState({accountNumberStatus:false})
          }
          if(branch===""){
              this.setState({branchError:"Branch is Requeried"})
              this.setState({branchStatus:true})
          }
          else{
            const {branch}=this.state
            console.log(branch)
              this.setState({branchError:""})
              this.setState({branchStatus:false})
          }
          if(ifscCode===""){
              this.setState({ifscCodeError:"Ifsc code is Requeried"})
              this.setState({ifscCodeStatus:true})
          }
          else{
              this.setState({ifscCodeError:""})
              this.setState({ifscCodeStatus:false})
          }
          if(PhoneNumber===""){
            this.setState({PhoneNumberError:"Mobile Number  is Requeried"})
            this.setState({PhoneNumberStatus:true})
        }
        else{
            this.setState({PhoneNumberError:""})
            this.setState({PhoneNumberStatus:false})
        }
        if(name!==""&&address!==""&&email!=="",area!==""&&budget!==""&&PhoneNumber!=="",bankName!=="",accountNumber!=="",branch!=="",ifscCode!==""){
            this.setState({isLoading:true})
            const {name,address,email,area,budget,bankName,accountNumber,branch,ifscCode,PhoneNumber,logoFile}=this.state
            const designerDetails={name,address,email,area,budget,bankName,accountNumber,branch,ifscCode,PhoneNumber,logoFile};
            const formData=new FormData();
            formData.append("name",name);
            formData.append("address",address);
            formData.append("email",email)
            formData.append("area",area);
            formData.append("budget",budget);
            formData.append("bankName",bankName);
            formData.append("accountNumber",accountNumber);
            formData.append("branch",branch);
            formData.append("ifscCode",ifscCode);
            formData.append("PhoneNumber",PhoneNumber);
            formData.append("logoFile",logoFile);
            const url="https://venkatsai.onrender.com//designer/signup/"
            axios.post(url,formData).then
            (response=> 
               this.setState({responseData:response.data}),
               this.setState({open:true}),  
            ).then((result) => {
                this.setState({isLoading:false})
                //  const {history}=this.props
                //  history.replace("/")
               })
            .catch(error=>console.log(error))
            // const options={
            //     method:"POST",
            //     headers:{
            //         "content-Type":'multipart/form-data'
            //     },
            //     mode:"cors",
            //     body:JSON.stringify(designerDetails),

            // }
            // const response=await fetch(url,options)
            // const data=await response.json()
            // console.log(data)
        }
      }
      render(){
        const {name,isEmailValid,address,email,area,budget,bankName,accountNumber,branch,ifscCode,nameError,nameStatus,emailStatus,areaError,budgetError,bankNameError,accountNumberError,branchError,ifscCodeError,
            addressStatus,PhoneNumber,PhoneNumberError,PhoneNumberStatus,emailError,areaStatus,addressCharcterLength,addressMaxCharacters,charcterLength,maxCharacters,budgetStatus,bankNameStatus,accountNumberStatus,addressError,branchStatus,ifscCodeStatus,responseData,isLoading}=this.state
          return(
             
             <> <div className="elements-div mt-2"><label className='property mt-3' htmlFor="residentType">Organization Name</label>
                <div className='text-element-residential'>
                <input type="text" className='form-control' value={name} placeholder=" Enter Your name" name="name"  onChange={this.onChangeAddress}/></div>
              
              </div> 
              {nameStatus?<p className='error-msg'>{nameError}</p>:<p  className='input-length'>{charcterLength}/{maxCharacters}</p>}
               <div className="elements-div mt-2">
              <label className='property mt-3'>Address</label>
              <div className='text-element-residential'>
              <textarea row="13" cols="50" value={address} className='form-control mb-3' name="address" placeholder=' Enter your address' onChange={this.onChangeAddress}>
              </textarea>
                 </div>
                 </div>
                 {addressStatus?<p className='error-msg'>*{addressError}</p>:  <p  className='input-length'>{addressCharcterLength}/{addressMaxCharacters}</p> }
                 <div className="elements-div">
                 <label className='property mt-3'>Email Id</label>
                 <div className='text-element-residential'>
                 <input type="email" className='form-control' value={email} placeholder=" Enter Valid Email id" name="email" onChange={this.onChangeEmail} />
                  </div>
                  </div>
                  {emailStatus?<p className='error-msg'>*{emailError}</p>:<> {isEmailValid ? <p className='input-length mt-2'>Email is valid!</p> : <p  className='error-msg mt-2'>Email is not valid!</p>}</>}
                  <div className="elements-div">
               <label className='property mt-3'>Mobile Number</label>
               <div className='text-element-residential'>
               <input type="email" className='form-control' value={PhoneNumber} placeholder="Enter Valid Mobile number id" name="PhoneNumber" onChange={this.requiredHandle} />
                </div>
                </div>
                {PhoneNumberStatus&&<p className='error-msg'>*{PhoneNumberError}</p>}
                  <div className="elements-div">
                  <label className='property mt-3'>Area/City </label>
                  <div className='text-element-residential'>
                  <input type="text" className='form-control'  value={area}  placeholder=" Enter Area/City" name="area" onChange={this.requiredHandle} />
                  </div>
                  </div>
                  {areaStatus&&<p className='error-msg'>*{areaError}</p>}
                  <div className="elements-div">
                  <label className='property mt-3'>Logo</label>
                  <div className='text-element-residential'>
                  <input type="file" onChange={this.handleFileChange} accept="image/png, image/gif, image/jpeg" />
                  </div>
                  </div>
                  {/* <div className="elements-div">
                <label className='property mt-3'>GST Number</label>
                <div className='text-element-residential'>
                <input type="text" className='form-control'  placeholder=" Enter GST Number" name="timeDuration" />
                </div>
                </div> */}
                  <div className='w-100'>
                      <div className="elements-div">
                  <label className='property mt-3'>Budget</label>
                  <div className='text-element-residential'>
                <input type="number" className='form-control' value={budget} placeholder='Enter Minimun Budget'  name="budget" onChange={this.requiredHandle} />
                </div>
                </div>
                {budgetStatus&&<p className='error-msg'>*{budgetError}</p>}
                <div className="bank-details-div">
                <label className='bank-details mt-3'>Bank Details</label>
                </div>
                <div className="elements-div">
                  <label className='property mt-3'>Bank Name</label>
                  <div className='text-element-residential'>
                  <input type="text" className='form-control' value={bankName} placeholder=" Enter Bank Name" name="bankName" onChange={this.requiredHandle} />
                  </div>
                  </div> 
                  {bankNameStatus&&<p className='error-msg'>*{bankNameError}</p>}
                <div className="elements-div">
                  <label className='property mt-3'>Account Number</label>
                  <div className='text-element-residential'>
                  <input type="number" className='form-control'  value={accountNumber} placeholder=" Enter Bank Account Number" name="accountNumber" onChange={this.requiredHandle} />
                  </div>
                  </div> 
                  {accountNumberStatus&&<p className='error-msg'>*{accountNumberError}</p>}
                  <div className="elements-div">
                  <label className='property mt-3'>Branch</label>
                  <div className='text-element-residential'>
                  <input type="text" className='form-control' value={branch}  placeholder=" Enter Branch" name="branch" onChange={this.requiredHandle} />
                  </div>
                  </div> 
                  {branchStatus&&<p className='error-msg'>*{branchError}</p>}
                  <div className="elements-div">
                  <label className='property mt-3'>IFSC Code</label>
                  <div className='text-element-residential'>
                  <input type="text" className='form-control' value={ifscCode}  placeholder=" Enter IFSC Code" name="ifscCode" onChange={this.requiredHandle} />
                  </div>
                  </div> 
                  
                  {ifscCodeStatus&&<p className='error-msg'>*{ifscCodeError}</p>}
                <div className="elements-div">
               
                  <div className='text-element-residential'>
                 
               <div>
                </div>
                </div>
                </div>
                <div className='d-flex flex-row justify-content-between'>
                <button className='login-button' onClick={this.onSubmitSignUp}>Sign Up</button>
                
                </div>
                {isLoading?( <Box sx={{ display: 'flex' }}  style={{ position: 'absolute',marginLeft:"20%",  zIndex: '999' }} >
           <CircularProgress   />
         </Box>):""}
                <p className='response-data'>{responseData}</p>
                 </div>
                 </>
          )
      }
}
export default withRouter(OrganizationDetails)