import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/esm/Button';
import './index.css'
import {BiPencil} from 'react-icons/bi'
import {GrUpdate} from 'react-icons/gr'
import {GiCancel} from 'react-icons/gi'


const ChangePassword=(props)=>{
  const [smShow, setSmShow] = useState(false);
 
  return (
    <>
     <Button variant="primary"  onClick={() => setSmShow(true)}><BiPencil/></Button>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='d-flex flex-column'>
            <label htmlFor='oldpassword' className='old-password'>Old Password</label>
            <input id="oldpassword" type="password" className='username-input-filed' placeholder='Please Enter Old Password'/>
            <label htmlFor='newpassword' className='old-password'>New Password</label>
                  <input type="password"  id="newpassword" className='username-input-filed' placeholder='Please Enter New Password'/>
                  <label htmlFor='newpassword' className='old-password'>Confirm Password</label>
                  <input type="password"  id="confirmpassword" className='username-input-filed' placeholder='Confirm Password'/>
                  <div className='m-3'>
                  <Button variant="secondary" size="sm"><GrUpdate/></Button>
                  <Button variant="secondary" size="sm" className='ml-2' > <GiCancel/></Button>
                   </div>
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default ChangePassword