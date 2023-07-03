import React from 'react';
import Modal from 'react-bootstrap/Modal';
import {SlBubble} from 'react-icons/sl'
import './index.css'
import MoreModel from './moreMode'
import Button from 'react-bootstrap/Button'
import AddingComments from './addingComments'
import { useState,useEffect } from 'react';
import Cookies from 'js-cookie';

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
  //const {gettingFeedid}=props
 const [comment,setComment]=useState("");
 const [postId,setPostId]=useState("");
 const [jwtToken,setjwtToken]=useState("")
const addComment=(event)=>{
  setComment(event.target.value)
  //gettingFeedid()
}
useEffect(()=>{
  const jwtToken=Cookies.get("jwt_token")
  setjwtToken(jwtToken)
  const localpostId=localStorage.getItem("postId")
  const intpostId=parseInt(localpostId)
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
            <img src="https://s3images.zee5.com/wp-content/uploads/2021/08/aa2ca5d9-883f-4d12-8fdb-2fa13bc6d1b5-Carpetright-House-Beautiful-Portobello-Carpet-In-Riverside-designsecrets.jpeg" className="descktop-comment-image" alt=""/>
            <div className='comment-section'>
                <div className='comment-header'>
                <img alt="" src="https://savvywomen.tomorrowmakers.com/sites/default/files/2020-03/women%20entrepreneurship.jpg" className="profile-image1"/>
               
                <p className="profile-name-comments">Venkat_sai_113</p>
                
            <p className="more-icon"><MoreModel/></p>
                </div>
                <div className="commenting-container">
                    {comments.map(eachComment=>
                      <AddingComments comment1={eachComment}/>)}
                   
                </div>
                <form className="d-flex flex-row">
                <input type="text" className="form-control" placeholder="Add A Comment..." onChange={addComment}/>
                <Button type="button" onClick={commentPosted} variant="primary">Post</Button>
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

  return (
    <>
      
      <SlBubble onClick={() => setModalShow(true)}/>

      <DescktopComments
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
export default DescktopCommentsPopup