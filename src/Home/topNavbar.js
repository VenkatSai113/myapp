import './index.css'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {RiMessengerLine} from 'react-icons/ri'
import {Link} from 'react-router-dom'
import {BsChatDots} from 'react-icons/bs'
import {AiFillPlusSquare} from 'react-icons/ai'
import "./index.css"
 const TopNavbar=()=>{
    return(
        <div id="upper" className="navbar-container">
        <img src="https://designalley.in/wp-content/uploads/2022/03/Logo.png" alt="sidebar logo" className='navbar-logo1'/>
        <div className="d-flex flex-row ">
        {/* <Link className="nav-link" to="/notifications"><p className="notifications-icon2"><BsChatDots/></p></Link>
        <Link  className="nav-link"  to="/chat"><p className="notifications-icons "><IoMdNotificationsOutline/></p></Link>
        <Link  className="nav-link"  to="/chat"><p className="notifications-icons"><AiFillPlusSquare className='plus-button'/></p></Link> */}
        </div>
        </div>
    )
}
export default TopNavbar