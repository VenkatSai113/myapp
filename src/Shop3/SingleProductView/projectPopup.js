import React, { useState } from 'react';
// import Button from 'react-bootstrap/button'
import './index.css'
import Modal from 'react-bootstrap/Modal';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

let spaceIdArray=[]
const SpaceBoxes=(props)=>{
  const{spaces}=props
  const {spaceName,spaceId}=spaces
 const onClickSpaceId=(event)=>{
    if(event.target.checked===true){
      spaceIdArray.push(spaceId)
      localStorage.setItem("spaceIdArray",spaceIdArray)
    }
    else{
      let valueToRemove =spaceId;
      const index=spaceIdArray.indexOf(valueToRemove)
      if(index !==-1){
        spaceIdArray.splice(index, 1);
        localStorage.setItem("spaceIdArray",spaceIdArray)
      }
    }
  }
  
  return(
  <div className='d-flex flex-row w-75' >
            <input id={`spaceId${spaceId}`} type="checkbox" style={{marginLeft:"30%"}} onClick={onClickSpaceId}/>
            <label htmlFor={`spaceId${spaceId}`}  style={{marginLeft:"40%"}}>{spaceName}</label>
          </div>
  )
}
let jwtToken=""
const  ProjectPopup1=(props)=> {
  useEffect(()=>{
    
    spaceIdArray=[]
    jwtToken=Cookies.get("jwt_token");
  })
  const {projectSpaces,singleProductData}=props
  console.log(singleProductData,"singleProductData")
  const {productId,productType,productSize,quantity}=singleProductData
  const [show, setShow] = useState(false);
  const [quentity,setQuentity]=useState("")
  const [quantityErrorMessage,setQuantityErrorMessage]=useState("")
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onChangeQuentity=(event)=>{
    const quentity=event.target.value
    
    if(quentity<1){
      setQuantityErrorMessage("Please give Quentity Atleast 1")
      setQuentity("")
    }
    else{
      setQuantityErrorMessage("")
      setQuentity(quentity)
    }
    
  }
  const onSubmitProducts=async()=>{
   const numberOfSpaces= spaceIdArray.length

   console.log(numberOfSpaces)
   const noOfProductsAdded=numberOfSpaces*quentity
    const availableQty=quantity-noOfProductsAdded 
    debugger
   if(availableQty<0){
    alert(`Available Products Are ${quantity}`)
    setShow(false)
   }
   else{
   
    
    const spacesId=localStorage.getItem("spaceIdArray")
    // const spacesId=JSON.parse(parseSpacesId)
    const spaceProducts={productId,productType,productSize,spacesId,quentity,availableQty}
    const apiUrl="http://localhost:9000/projectSpaceProducts"
    const options={
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${jwtToken}`
      },
      body:JSON.stringify(spaceProducts)
    }
    const response=await fetch(apiUrl,options);
    const data=await response.json()
    localStorage.removeItem("spaceIdArray","");
    spaceIdArray=[]
    setShow(false)
  }
   
  }

  return (
    <>
      <button type="button" className="btn btn-primary mt-3 mb-5" onClick={handleShow}>Add Project</button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <div className='d-flex flex-row justify-content-around'>
          <label className="mobile-num-text">Quantity</label>
          <div style={{width:"100px"}}>
         <input type="number" className='form-control' value={quentity} onChange={onChangeQuentity}/>
         
          </div>
         
          </div>
          <p className='error-msg  mr-auto'>{quantityErrorMessage}</p>
          <div className='d-flex flex-column'>
           
          {projectSpaces.map(eachSpace=>
             <SpaceBoxes spaces={eachSpace}/>
             )}
          </div>
          <button  onClick={onSubmitProducts}>Submit</button>
          {/* <img src="https://images.timesproperty.com/blog/2071/unnamed_84.jpg" alt="add-project-single-product-view" className="add-project-single-product-view"/>
          <h3 className="welcome-text mt-3">Welcome To Design Alley</h3>
          <label className="mobile-num-text">Enter your Mobile Number</label>
          <input type="number" className="form-control" placeholder="Enter your Mobile Number..."/>
          <Button variant="warning" className='mt-3'>Get OTP</Button>{' '}
          <p className="material-depot-text mt-2">By signing up, you agree to our Terms and Conditions and Privacy Policy</p> */}
        </Modal.Body>
       
      </Modal>
    </>
  );
}
export default ProjectPopup1