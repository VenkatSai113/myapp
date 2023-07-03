const Profiles=(props)=>{
    const {allUsers}=props
    const {desigener_name}=allUsers
   
    return(
        <div className="suggestion-profile-container">
        <div className="suggestion-profile">
        <img alt="" src="" className="suggestion-profile-image"/>
        <div className="profile-name-designation">
          <label className="suggestion-profile-name">{desigener_name}</label>
          <label className="suggestion-profile-desigenaton">interior Desigener</label>
        </div>
        </div>
        <p className="follow-text">Send</p>
         </div>
        )
}
export default Profiles;