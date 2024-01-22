import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {IoCopyOutline,IoCopy} from "react-icons/io5"
import {BsFillShareFill} from "react-icons/bs"
import { FacebookShareButton ,FacebookIcon, WhatsappShareButton,WhatsappIcon, TelegramShareButton, TelegramIcon} from 'react-share';

function Example(props) {
  const {tour_id,postId,tour_description}=props
  
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [copyIcon,setCopyIcon]=useState(false)
  const copyTourUrl=()=>{
    navigator.clipboard.writeText(`${window.location.origin}/sharedPost:${postId}`)
    setCopyIcon(true)
  }
  let imageUrl='https://venkatsai.onrender.com/virtualThumbnails/1691574163284_Royal-Suite-.jpg'
  return (
    <>
    
      <BsFillShareFill style={{cursor:"pointer"}} onClick={() => setSmShow(true)}/>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
           Share With
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='d-flex flex-row justify-content-around'>
          {copyIcon? <p className='copy-icon' onClick={copyTourUrl}> <IoCopy/></p>:<p className='copy-icon' onClick={copyTourUrl}> <IoCopyOutline/></p>} 
          {/* <div>
      <FacebookShareButton
        url={`${window.location.origin}/viewer:${tour_id}`}
        quote={'Dummy text!'}
        hashtag="#muo"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

    </div> */}
    <div>
      <WhatsappShareButton
        url={`${window.location.origin}/sharedPost:${postId}`}
        quote={'Dummy text!'}
        title={tour_description}
        hashtag="#muo"
        image={imageUrl}
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      
    </div>
    <div>
      <TelegramShareButton
        url={`${window.location.origin}/sharedPost:${postId}`}
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

export default Example;