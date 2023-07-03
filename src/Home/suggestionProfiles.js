import './index.css'

const SuggestionProfiles=(props)=>{
    const {suggestionProfilesList}=props
    const {profileImage,profileName,profileDescription,status}=suggestionProfilesList
    return(
        <div className="suggestion-profile-container">
              <div className="suggestion-profile">
              <img alt="" src={profileImage} className="suggestion-profile-image"/>
              <div className="profile-name-designation">
                <label className="suggestion-profile-name">{profileName}</label>
                <label className="suggestion-profile-desigenaton">{profileDescription}</label>
              </div>
              </div>
              <p className="follow-text">{status}</p>

               </div>
    )
}
export default SuggestionProfiles