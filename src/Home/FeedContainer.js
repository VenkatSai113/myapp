import {Component, useState,useEffect} from 'react'
import {SlHeart} from 'react-icons/sl'
import {BsBookmark,BsFillBookmarkFill} from 'react-icons/bs'
import {BsFillShareFill} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'
import MoreModel from './moreMode'
import  DescktopCommentsPopup from './comments'
import {Link,withRouter} from 'react-router-dom';
import Cookies from 'js-cookie'
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import {RiCheckboxMultipleBlankLine} from 'react-icons/ri'
import SwipImages from './swipableImages'
let jwtToken=""
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const FeedContainer=(props)=>{
   
    const {stateFeed,loginUser}=props
        const {deignerName,postId,caption,likes,thumbnail,postType,createdAt,tags,designStyle,category,location,occupancy,propertySize,duration,designerLogo,userId,tourId}=stateFeed
       
        const splitedImages=thumbnail.split(",")
        console.log(splitedImages)
        const [activeIndex, setActiveIndex] = useState(0);
        const [selectedPostId,setSelectedPostId]=useState(1)
        const [likeCount,setLikeCount]=useState(likes)
        const [commentData,setCommentData]=useState([])
          useEffect(()=>{
          jwtToken=Cookies.get("jwt_token")
        })

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };
        const getTimeElapsed = () => {
         const postDate = new Date(createdAt);
         const currentDate = new Date();
         const timeDiff = currentDate - postDate;
     
         // Calculate the time difference in milliseconds, seconds, minutes, hours, days, months, and years
         const secondsDiff = Math.floor(timeDiff / 1000);
         const minutesDiff = Math.floor(secondsDiff / 60);
         const hoursDiff = Math.floor(minutesDiff / 60);
         const daysDiff = Math.floor(hoursDiff / 24);
         const monthsDiff = Math.floor(daysDiff / 30);
         const yearsDiff = Math.floor(monthsDiff / 12);
     
         if (yearsDiff >= 1) {
           return `${yearsDiff} ${yearsDiff === 1 ? 'year' : 'years'} ago`;
         } else if (monthsDiff >= 1) {
           return `${monthsDiff} ${monthsDiff === 1 ? 'month' : 'months'} ago`;
         } else if (daysDiff >= 1) {
           return `${daysDiff} ${daysDiff === 1 ? 'day' : 'days'} ago`;
         } else if (hoursDiff >= 1) {
           return `${hoursDiff} ${hoursDiff === 1 ? 'hour' : 'hours'} ago`;
         } else if (minutesDiff >= 1) {
           return `${minutesDiff} ${minutesDiff === 1 ? 'minute' : 'minutes'} ago`;
         } else {
           return 'Less than a minute ago';
         }
       };
    const [likeButton,setLikeButon]=useState(true);
    const [savedFeed,setSavedFeed]=useState(true);
    const onSavedPostDelete=async()=>{
      const postIds={postId,hello:"hello"}
      console.log(postIds)
    
        setSavedFeed(false)
        const savedApiUrl="https://objective-wright.69-49-231-148.plesk.page/savedPost";
        const options={
          method:"post",
          headers:{
            "Content-Type":"Application/json",
            "Authorization":`Bearer ${jwtToken}`
          },
          mode:"cors",
          body:JSON.stringify(postIds)
        }
        const response=await fetch(savedApiUrl,options)
        const data=await response.json()
        console.log(data)
  
   
  }
  const onClickSavedPost=async()=>{
    const postIds={postId,hello:"hello"}
    console.log(postIds)
   
      const savedApiUrl="https://objective-wright.69-49-231-148.plesk.page/deleteSavedPost";
        const options={
          method:"post",
          headers:{
            "Content-Type":"Application/json",
            "Authorization":`Bearer ${jwtToken}`
          },
          mode:"cors",
          body:JSON.stringify(postIds)
        }
        const response=await fetch(savedApiUrl,options)
        const data=await response.json()
        console.log(data)

  }
    const likeAndDislike=async()=>{
      const postIds={postId,hello:"hello"}
      console.log(postId)
         if(likeButton===true){
          const likesApiUrl="https://objective-wright.69-49-231-148.plesk.page/likesCount";
          const options={
            method:"post",
            headers:{
              "Content-Type":"Application/json",
              "Authorization":`Bearer ${jwtToken}`
            },
            mode:"cors",
            body:JSON.stringify(postIds)
          }
          const response=await fetch(likesApiUrl,options)
          const data=await response.json()
          console.log(data)
          setLikeCount(likes+1)
            setLikeButon(false)
         }
         else{
             setLikeButon(true)
             setLikeCount(likes-1)
         }
        
    }
     const onImageLikeAndDislike=(event)=>{
         console.log(deignerName)
         if(event.detail===1){
            setLikeButon(true)
            
         }
         else{
            setLikeButon(false)
            
         }
     }
     const commentPostId=async()=>{
        localStorage.setItem("postId",postId)
        console.log(postId,"lk,mjgfh")
        const commentPostId={comment:"comment",postId}
        const apiUrl="https://objective-wright.69-49-231-148.plesk.page/viewComments"
        const options={
          method:"POST",
          headers:{
            "Content-Type":"Application/json",
            
            "authorization":`Bearer ${jwtToken}`
          },
          mode: "cors",
          body:JSON.stringify(commentPostId)
        }
        const response=await fetch(apiUrl,options)
        const data=await response.json()
        console.log(data)
        setCommentData(data)
     }
       const getpostId=()=>{
         setSelectedPostId(postId)
       }
       const virtualTour=()=>{
        const {history}=props
        console.log(`${ window.location.href}viewer:${tourId}`)
        history.push(`viewer:${tourId}`)
        // console.log(window.pathname)
       
        
       }
    return(
        <div className='feed-container-div'>
        {(postType =="image" || "imageVideo" || "virlTourImage") ?  ((splitedImages.length===1)? <img alt="" src={`https://objective-wright.69-49-231-148.plesk.page/${splitedImages[0]}`} className="virtual-feed" onClick={virtualTour}/>:
        <> <SwipeableViews enableMouseEvents  index={activeIndex} onChangeIndex={handleSlideChange}>
        {splitedImages.map(eachImage=>{
          if(eachImage.split(".")[1]=="mp4"){
            return(
              <>
               <div className='post-count-div'> <p className='post-count'>{`${activeIndex+1}/${splitedImages.length}`}</p></div>
            <video  src={`https://objective-wright.69-49-231-148.plesk.page/${eachImage}`} autoPlay loop muted  className="feed-video"/>
            </>)
          }
          else{
            return(
            <>
            <img alt="" src={`https://objective-wright.69-49-231-148.plesk.page/${eachImage}`} className="feed-image" onClick={onImageLikeAndDislike}/>
            <div className='post-count-div'> <p className='post-count'>{`${activeIndex+1}/${splitedImages.length}`}</p></div>
          </>)
          }
        }
       )}
        </SwipeableViews></>
         ) :(splitedImages.length>1)? <><SwipeableViews enableMouseEvents  index={activeIndex}
         onChangeIndex={handleSlideChange}>
            {splitedImages.map(eachImage=>
            <>
            <video  src={`https://objective-wright.69-49-231-148.plesk.page/${eachImage}`} autoPlay loop muted  className="feed-video"/>
            <div className='post-count-div'> <p className='post-count'>{`${activeIndex+1}/${splitedImages.length}`}</p></div> </>)}</SwipeableViews></>:<video  src={`https://objective-wright.69-49-231-148.plesk.page/${splitedImages[0]}`} autoPlay loop muted  className="feed-image"/>}
       
        <div className="like-symbol-div">
        <div className="profile-row-container">
        <img alt="Profile Image"   src={`https://objective-wright.69-49-231-148.plesk.page/${designerLogo}`} className="profile-image1"/>
       <div className="designer-time-column-div">
        <p className="profile-name1" >{deignerName}</p>
        <p className='time-text'>{getTimeElapsed()}</p>
        </div>
    
       
        </div>
        
        {/* <div className="save-share-symbol">
         <p className="like"><BsBookmark/></p>
         <p className="like"><BsFillShareFill/></p>
         </div> */}
         <div>
         <div className="like-symbol">
         {loginUser.designer_id===userId?<p className="like1" onClick={onClickSavedPost}><BsFillBookmarkFill/></p>:<p  onClick={onSavedPostDelete} className="like1"><BsBookmark/></p>}
         {/* {loginUser.designer_id===null?<p  onClick={onSavedPostDelete} className="like1"><BsBookmark/></p>:null} */}
            {likeButton? <p className="like1" onClick={likeAndDislike}><SlHeart/></p>: <p className="like" onClick={likeAndDislike}><AiFillHeart className='liked'/></p>}
           
         {/* <p className="like desktop-comment" onClick={commentPostId}>
            < DescktopCommentsPopup />   
         </p>
         <Link to="/comments"><p className="like mobile-view-comment">< DescktopCommentsPopup/></p></Link> */}
          <p className="more-icon1" onClick={getpostId}><MoreModel selectedPostId1={selectedPostId} /></p>
         </div>
         <label className='likes-text'>{likeCount} likes</label>
         </div>
     
        </div>
        
        <div className="on-comment">
         
        <p className="like desktop-comment" onClick={commentPostId}>
            < DescktopCommentsPopup deignerName={deignerName} thumbnail={thumbnail} commentData={commentData}/>   
         </p>
        <label className="comment-sapn">{caption}<br></br>{tags} #{designStyle} #{category} #{location} #{occupancy} #{propertySize} #{duration}</label> 
        
        
        </div>
     </div>
    )
}

export default withRouter(FeedContainer)