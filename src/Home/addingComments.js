import "./index.css"

const  AddingComments=(props)=>{
    
        const {comment1}=props
        const{image,desigener_name,comment,commentsCreatedAt,deignerName
        }=comment1
    
        const getTimeElapsed = () => {
            const postDate = new Date(commentsCreatedAt);
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
       
        return(
            <div className="d-flex flex-row w-100">
            <div className='comments-profiles'>
            <img alt="" src="https://objective-wright.69-49-231-148.plesk.page/uploads/1689326326294_tree-736885_1280.jpg" className="comment-profile-image"/>
            <p className="profile-name-comments">{desigener_name} <label className='comment-text ml-1'>{comment}</label><br></br><label className='comment-time-text'>{getTimeElapsed()} </label></p>
            <br></br>
            
        </div>
        
        </div>
        )
    
}

export default AddingComments