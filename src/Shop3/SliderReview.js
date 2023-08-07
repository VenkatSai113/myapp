import './index.css'
const SliderReview=(props)=>{
    const {reviewDetails}=props
    const {profilename,profileImage,designation,review}=reviewDetails
    return(
        <div className="slider-content-div">
        <div className="inner-slider-content-div">
          <div className="slider-row-div">
          <img alt="" src={profileImage} className="slider-profile-image" />
          <div className="ml-2">
          <h6 className="slider-profile-name">{profilename}</h6>
          <label className="slider-profile-description">{designation}</label>
          </div>
         
          </div>
           <p className="slider-profile-description ml-3 mt-2">{review}</p>
        </div>
        </div>
    )
}
export default SliderReview