import {GrHomeRounded} from 'react-icons/gr'
import {BsSearch} from 'react-icons/bs'
import {FaRegPlusSquare} from 'react-icons/fa'
import {FiShoppingCart} from 'react-icons/fi'
import {CgProfile} from 'react-icons/cg'
import {Link} from 'react-router-dom'
import {AiOutlineUserAdd} from 'react-icons/ai'
import {Tb360View} from 'react-icons/tb'
import "./index.css"
import logoImage from "./FavIcon.png"
import {IoMdLogOut} from 'react-icons/io'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

const BottomNavbar=(props)=>{
  const logout=()=>{
    if (window.confirm("Are you Sure you want to LogOut") == true) {
      Cookies.remove("jwt_token")
    const {history}=props
    history.replace("/login")
    } 
   
    
}
    return(
        <div id="footer" className="bottom-navbar11">
        <Link to="/" className="nav-link"><p className="notifications-icon1"><GrHomeRounded  /></p></Link>
        <Link to="/savedTours"><p className="notifications-icon1"><Tb360View/></p></Link>
        <Link to="/createPost"><p className="notifications-icon1"><FaRegPlusSquare/></p></Link> 
          {/* <BottomNavigationAction id="bottom-nav-dashboard" label="Dashboard" icon={ } />  */}
        
        <Link to="/invitation"  className="nav-link"><p className="notifications-icon1"><AiOutlineUserAdd/></p></Link>
        <Link to="/profile"  className="nav-link"> <p className="notifications-icon1" ><CgProfile/></p></Link>
      
       
      </div>
    )
}
export default withRouter(BottomNavbar)