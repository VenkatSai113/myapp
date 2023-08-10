import { Route,Redirect } from "react-router-dom";
import Cookies from "js-cookie";


const ProtecteRoute=(props)=>{
    const token=Cookies.get("userJwtToken")
    const currentUrlId=window.location.pathname.split(":")[1]
    localStorage.setItem("sharedPostId",currentUrlId)
    if(token===undefined){
        return <Redirect to="/userLogin"/>
    }
    return(<Route {...props}/>)
}
export default ProtecteRoute