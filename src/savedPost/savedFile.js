import {Link} from 'react-router-dom'

const SavedFileCard=(props)=>{
    const {cardItem}=props
    const {caption,thumbnail,postType,postId,thumbnail_image}=cardItem
   const firstImage=thumbnail.split(",")
   const displayedImage=firstImage[0]
   const splitDisplayedImage=displayedImage.split(".")[1]
   console.log(displayedImage,"-p0oiuythgr")
   const onPostClick=()=>{
    console.log(postId)
   }
    return(
        <>
        {splitDisplayedImage=="mp4"?<Link to={`/profilePosts:${postId}`}><video  src={`http://13.233.231.34:9000/${displayedImage}`} onClick={onPostClick} autoPlay loop muted  className="profile-post-gridView"/></Link>:<Link to={`/profilePosts:${postId}`}><img src={`http://13.233.231.34:9000/${displayedImage}`} onClick={onPostClick} className="profile-post-gridView"/></Link>}
        
        
        </>
    )
}
export default SavedFileCard