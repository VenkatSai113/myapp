import React, { useState } from 'react';
import Button from 'react-bootstrap/button'
import './index.css'
import Modal from 'react-bootstrap/Modal';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
const SpaceBoxes=(props)=>{
  const{spaceName}=props
  
  return(
  <div className='d-flex flex-row justify-content-around w-100 ' >
            <input type="checkbox" />
            {spaceName}
            <p style={{color:"red"}}>{spaceName}</p>
          </div>
  )
}
const  ProjectPopup1=(props)=> {
  const {projectSpaces}=props
  debugger
  const [show, setShow] = useState(false);
  const [onGoingProjectCards, setOnGoingProjectCards] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 

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
          <select className='form-control'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </select>
          
          </div>
          </div>
          
          <div className='d-flex flex-column'>
           
          {projectSpaces.map(eachSpace=>
             <SpaceBoxes spaces={eachSpace}/>
             )}
          </div>
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