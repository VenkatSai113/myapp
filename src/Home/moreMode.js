import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {FiMoreVertical} from 'react-icons/fi'
import './index.css'
import {IoCopyOutline,IoCopy} from "react-icons/io5"
import {WhatsappShareButton,WhatsappIcon,TelegramShareButton,TelegramIcon} from 'react-share';
const modelItems=[{
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

function MoreModel(props) {
  const {selectedPostId1,caption,postId}=props
  
  console.log(selectedPostId1,"qwaesrdtfhgjk")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [copyIcon,setCopyIcon]=useState(false)
  const copyTourUrl=()=>{
    navigator.clipboard.writeText(`${window.location.origin}/sharedPost:${postId}`)
    setCopyIcon(true)
  }
const onclickPin=()=>{
  localStorage.setItem("pinPost",JSON.stringify(selectedPostId1))
}
  return (
    <>
     
      <FiMoreVertical onClick={handleShow}/>

      <Modal show={show} onHide={handleClose}>
       
        <Modal.Body>
            <div className='feed-model-container'>
               {modelItems.map(eachItem=>
                <ModelItems modelItemText={eachItem} key={eachItem.id}/>)}
            </div>
            <div className='model-text-div'>
             <p className='model-report-text' onClick={onclickPin}>Pin to your Profile</p>
        </div>
            <div className='d-flex flex-row justify-content-around'>
            {copyIcon? <p className='copy-icon' onClick={copyTourUrl}> <IoCopy/></p>:<p className='copy-icon' onClick={copyTourUrl}> <IoCopyOutline/></p>} 
            {/* <div>
      <FacebookShareButton
        url={`${window.location.origin}/sharedPost:${selectedPostId1}`}
        quote={'Dummy text!'}
        hashtag="#muo"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

    </div> */}
    <div>
      <WhatsappShareButton
        url={`${window.location.origin}/sharedPost:${selectedPostId1}`}
        quote={'Dummy text!'}
        hashtag="#muo"
        title={caption}
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      
    </div>
    <div>
      <TelegramShareButton
        url={`${window.location.origin}/sharedPost:${selectedPostId1}`}
        quote={'Dummy text!'}
        hashtag="#muo"
      >
        <TelegramIcon size={32} round />
      </TelegramShareButton>
      
    </div>
    </div>
        </Modal.Body>
       
      </Modal>
    </>
  );
}

export default MoreModel