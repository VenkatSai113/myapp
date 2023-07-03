import {Component, useState} from 'react'
import {SlHeart} from 'react-icons/sl'
import {BsBookmark} from 'react-icons/bs'
import {BsFillShareFill} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'
import MoreModel from './moreMode'
import  DescktopCommentsPopup from './comments'
import {Link} from 'react-router-dom';
import Cookies from 'js-cookie'

const FeedContainer=(props)=>{
   
    const {stateFeed}=props
        const {user_id,description,feed_images,feed_id}=stateFeed
    const [likeButton,setLikeButon]=useState(true);
    const likeAndDislike=()=>{
         if(likeButton===true){
            setLikeButon(false)
         }
         else{
             setLikeButon(true)
         }
        
    }
     const onImageLikeAndDislike=(event)=>{
         
         if(event.detail===1){
            setLikeButon(true)
            
         }
         else{
            setLikeButon(false)
            
         }
     }
     const commentPostId=async()=>{
        localStorage.setItem("postId",feed_id)
     }

    return(
        <div className='feed-container-div'>
        <div className="profile-row-container">
        <img alt=""   src="https://media.istockphoto.com/id/1210123439/photo/classic-gray-interior-with-armchairs-sofa-coffee-table-lamps-flowers-and-wall-moldings-3d.jpg?s=612x612&w=0&k=20&c=ZLrygb18zlJflkFAwtt6xc0GY4VKYGKRzvGDjPGu54Y=" className="profile-image1"/>
        <p className="profile-name" >{user_id}</p>
    
        <p className="more-icon"><MoreModel/></p>
        </div>
        
        <img alt="" src="https://media.istockphoto.com/id/1210123439/photo/classic-gray-interior-with-armchairs-sofa-coffee-table-lamps-flowers-and-wall-moldings-3d.jpg?s=612x612&w=0&k=20&c=ZLrygb18zlJflkFAwtt6xc0GY4VKYGKRzvGDjPGu54Y=" className="feed-image" onClick={onImageLikeAndDislike}/>
        <div className="like-symbol-div">
         <div className="like-symbol">
            {likeButton? <p className="like" onClick={likeAndDislike}><SlHeart/></p>: <p className="like" onClick={likeAndDislike}><AiFillHeart className='liked'/></p>}
           
         <p className="like desktop-comment" onClick={commentPostId}>
            < DescktopCommentsPopup />   
         </p>
         <Link to="/comments"><p className="like mobile-view-comment">< DescktopCommentsPopup/></p></Link>
         </div>
         <div className="save-share-symbol">
         <p className="like"><BsBookmark/></p>
         <p className="like"><BsFillShareFill/></p>
         </div>
       
        </div>
        <div className="on-comment">
         <p className="comment-profile">{user_id}<span className="comment-sapn">{description}</span></p>
        </div>
     </div>
    )
}

export default FeedContainer