import "./index.css"

const  AddingComments=(props)=>{
    
        const {comment1}=props
        const{profileImage,profileName,comment}=comment1
       
        return(
            
            <div className='comments-profiles'>
            <img alt="" src={profileImage} className="comment-profile-image"/>
            <p className="profile-name-comments">{profileName}</p>
            <p className='profile-name'>{comment}</p>
        </div>
        )
    
}

export default AddingComments