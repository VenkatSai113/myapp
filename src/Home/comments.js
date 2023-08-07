import React from 'react';
import Modal from 'react-bootstrap/Modal';
import {SlBubble} from 'react-icons/sl'
import './index.css'
import MoreModel from './moreMode'
import Button from 'react-bootstrap/Button'
import AddingComments from './addingComments'
import { useState,useEffect } from 'react';
import Cookies from 'js-cookie';
import SwipeableViews from 'react-swipeable-views';

const comments=[{
    profileImage:"https://savvywomen.tomorrowmakers.com/sites/default/files/2020-03/women%20entrepreneurship.jpg",
    profileName:"sai_112",
    comment:"This product is very good",
    id:1
},
{
    profileImage:"https://savvywomen.tomorrowmakers.com/sites/default/files/2020-03/women%20entrepreneurship.jpg",
    profileName:"sai_112",
    comment:"This product is very good",id:2
},
{
    profileImage:"https://savvywomen.tomorrowmakers.com/sites/default/files/2020-03/women%20entrepreneurship.jpg",
    profileName:"sai_112",
    comment:"This product is very good",
    id:3
},]
function DescktopComments(props) {
  const {deignerName,thumbnail,commentData}=props
  console.log(deignerName,"deignerNamedeignerName")
 const [comment,setComment]=useState("");
 const [postId,setPostId]=useState("");
 const [jwtToken,setjwtToken]=useState("")
 const [commentSet,setCommentSet]=useState([])
 const [activeIndex, setActiveIndex] = useState(0);
 const [selectedPostId,setSelectedPostId]=useState(1)
 
 const handleSlideChange = (index) => {
  setActiveIndex(index);
};
 const thumbnails = thumbnail.split(",")

const addComment=(event)=>{
  setComment(event.target.value)
  //gettingFeedid()
}
useEffect(()=>{
  // setCommentSet(commentData)
  const jwtToken=Cookies.get("jwt_token")
  setjwtToken(jwtToken)
  const localpostId=localStorage.getItem("postId")
  const intpostId=parseInt(localpostId)
  console.log(intpostId)
  setPostId(intpostId)
  
})
const commentPosted=async()=>{
  const comments={comment,postId}
  const apiUrl="https://objective-wright.69-49-231-148.plesk.page/comments"
  const options={
    method:"POST",
    headers:{
      "Content-Type":"Application/json",
      
      "authorization":`Bearer ${jwtToken}`
    },
    mode: "cors",
    body:JSON.stringify(comments)
  }
  const response=await fetch(apiUrl,options)
  const data=await response.json()
  console.log(data)
  setCommentSet(data)
  setComment("")
}
  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className='comments-model-bg-container'>
            <div className='comment-body'>
              <div className='w-100 d-none d-md-block'>
            <SwipeableViews enableMouseEvents index={activeIndex} onChangeIndex={handleSlideChange}>
              {thumbnails.map(eachImage=>{
                <img src={`https://objective-wright.69-49-231-148.plesk.page/${eachImage}`} className="descktop-comment-image" alt=""/>
                
                if(eachImage.split(".")[1]=="mp4"){
                  return(
                    <>
                     <div className='post-count-div'> <p className='post-count'>{`${activeIndex+1}/${thumbnails.length}`}</p></div>
                  <video  src={`https://objective-wright.69-49-231-148.plesk.page/${eachImage}`} autoPlay loop muted  className="descktop-comment-image"/>
                  </>)
                }
                else{
                  return(
                  <>
                  <img alt="" src={`https://objective-wright.69-49-231-148.plesk.page/${eachImage}`} className="descktop-comment-image" />
                  <div className='post-count-div'> <p className='post-count'>{`${activeIndex+1}/${thumbnails.length}`}</p></div>
                </>)
                }
                
               } )}

            </SwipeableViews>
            </div>
            
            <div className='comment-section '>
                <div className='comment-header'>
                <img alt="" src="https://savvywomen.tomorrowmakers.com/sites/default/files/2020-03/women%20entrepreneurship.jpg" className="profile-image1"/>
               
                <p className="profile-name-comments">{deignerName}</p>
                
            <p className="more-icon"><MoreModel/></p>
         
                </div>
                <div className="commenting-container w-100">
                    {commentSet.map(eachComment=>
                      <AddingComments comment1={eachComment}/>)}
                   
                </div>
                <form className="d-flex flex-row">
                <input type="text" className="form-control"  placeholder="Add A Comment..." value={comment} onChange={addComment}/>
                <Button type="button" variant="primary" onClick={commentPosted}>Post</Button>
                </form>
            </div>
            </div>
        </div>
      </Modal.Body>
     
    </Modal>
  );
}

function DescktopCommentsPopup(props) {

  const [modalShow, setModalShow] = React.useState(false);
  const {deignerName,thumbnail,commentData}=props
  console.log(thumbnail,"deignerNamedeignerName457467")
  console.log("arsdfghVJBKNfgchvjbnm")


  return (
    <>
      <p onClick={() => setModalShow(true)} className='comments-text'>View All Comments...</p>
      {/* <SlBubble /> */}

      <DescktopComments
        show={modalShow}
        onHide={() => setModalShow(false)}
        deignerName={deignerName}
        thumbnail={thumbnail}
        commentData={commentData}
      />
    </>
  );
}
export default DescktopCommentsPopup