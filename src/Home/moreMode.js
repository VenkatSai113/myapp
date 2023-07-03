import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {FiMoreHorizontal} from 'react-icons/fi'
import './index.css'
const modelItems=[{
    itemName:"Report",
    id:1,
  
},{
    itemName:"Unfollow",
    id:3,
   
},{
    itemName:"Go Post",
    id:4,

},{
    itemName:"Go to Account",
    id:5,
    
}]

const ModelItems=(props)=>{
    const {modelItemText}=props
    const {itemName}=modelItemText
    return(
        <div className='model-text-div'>
             <p className='model-report-text'>{itemName}</p>
        </div>
    )
}

function MoreModel() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     
      <FiMoreHorizontal onClick={handleShow}/>

      <Modal show={show} onHide={handleClose}>
       
        <Modal.Body>
            <div className='feed-model-container'>
               {modelItems.map(eachItem=>
                <ModelItems modelItemText={eachItem} key={eachItem.id}/>)}
            </div>
        </Modal.Body>
       
      </Modal>
    </>
  );
}

export default MoreModel