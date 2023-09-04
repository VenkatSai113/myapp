import './index.css'

const SuggestionProfiles=(props)=>{
    const {suggestionProfilesList}=props
    const {logo,desigener_name,profileDescription,status}=suggestionProfilesList
    return(
        <div className="suggestion-profile-container">
              <div className="suggestion-profile">
              <img alt="" src={`http://13.233.231.34:9000/${logo}`} className="suggestion-profile-image"/>
              <div className="profile-name-designation">
                <label className="suggestion-profile-name">{desigener_name}</label>
                <label className="suggestion-profile-desigenaton">interior Desigener</label>
              </div>
              </div>
              <p className="follow-text">follow</p>

               </div>
    )
}
export default SuggestionProfiles