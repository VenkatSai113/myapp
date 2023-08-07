import React, { useState } from 'react';
import Button from 'react-bootstrap/button'
import './index.css'
import Modal from 'react-bootstrap/Modal';

function ProjectPopup1() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button type="button" className="add-project-btn mt-3" onClick={handleShow}>Add Project</button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <img src="https://images.timesproperty.com/blog/2071/unnamed_84.jpg" alt="add-project-single-product-view" className="add-project-single-product-view"/>
          <h3 className="welcome-text mt-3">Welcome To Design Alley</h3>
          <label className="mobile-num-text">Enter your Mobile Number</label>
          <input type="number" className="form-control" placeholder="Enter your Mobile Number..."/>
          <Button variant="warning" className='mt-3'>Get OTP</Button>{' '}
          <p className="material-depot-text mt-2">By signing up, you agree to our Terms and Conditions and Privacy Policy</p>
        </Modal.Body>
       
      </Modal>
    </>
  );
}
export default ProjectPopup1