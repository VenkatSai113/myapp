import { Component } from "react";
import './index.css'
import Sidebar from '../Sidebar'
import BottomNavbar from '../Home/bottomNavbar'
import Button from 'react-bootstrap/Button';
import ProfileTopNavbar from '../Account/profileTopNav'
import {Link} from 'react-router-dom'
import {GrGallery} from 'react-icons/gr'
import {HiOutlinePhotograph} from 'react-icons/hi'
import {MdSlowMotionVideo} from 'react-icons/md'
import {TbRotate360} from 'react-icons/tb'
import StandardImageList from './uploadedimages'
import Cookies from "js-cookie"
class Profile extends Component{
    state={profileDetails:""}

    componentDidMount=async()=>{
        const jwtToken=Cookies.get("jwt_token")
        const url="https://objective-wright.69-49-231-148.plesk.page/profileData";
        const options={
            headers:{
                "authorization":`Bearer ${jwtToken}`
            },
            method:"GET"
        }
        const response=await fetch(url,options);
        console.log(response)
        if(response.ok===true){
            const fetchedData=await response.json();
           
            this.setState({profileDetails:fetchedData})
            console.log(fetchedData)

        }
    }
  
    render(){
        const {profileDetails}=this.state
        const { desigener_name,logo,number_of_posts,number_of_followers,number_of_following}=profileDetails
        console.log(logo)
        return(
            <div className="home-top-navbar-container">
               <ProfileTopNavbar/>
            <div>
            <div className="d-flex flex-row">
                <Sidebar/>
                <div>
                    <div className="emty-div"></div>
            <div className="saved-feed-container ">
                <div className="saved-profile-div">
                    <div>
                    <img src={`https://objective-wright.69-49-231-148.plesk.page/${logo}`} alt="profile" className="profile-image-profilepic"/>
                    <p  className="saved-profile-name">{desigener_name}</p>
                    </div>
                    <div>
                        <p className="saved-post-text">Posts</p>
                        <p className="post-number">{number_of_posts}</p>
                       
                    </div>
                    <div>
                        <p className="saved-post-text">Followers</p>
                        <p className="post-number">{number_of_followers}</p>
                    </div>
                    <div>
                        <p className="saved-post-text">Following</p>
                        <p className="post-number">{number_of_following}</p>
                    </div>
                </div>
                <div className="saved-profile-div">
                <Link to="/editprofile"><Button variant="primary"  size="sm">Edit Profile</Button></Link>
                </div>
              
                <div className='filter-icons-desktop-view filter-icons-desktop-view-center'>
                        <div className='explore-icon-div'>
                        <p className='explore-icon'><GrGallery/></p>
                        <p className='explore-icon-text'>All</p>
                        </div>
                        <div className='explore-icon-div'>
                        <p className='explore-icon'><HiOutlinePhotograph/></p>
                        <p className='explore-icon-text'>Photos</p>
                        </div>
                        <div className='explore-icon-div'>
                        <p className='explore-icon'><MdSlowMotionVideo/></p>
                        <p className='explore-icon-text'>Videos</p>
                        </div>
                        <div className='explore-icon-div'>
                        <p className='explore-icon'><TbRotate360/></p>
                        <p className='explore-icon-text'>360 Toures</p>
                        </div>
                        
                       </div>
                       <div className='filter-icons-mobile-view'>
                        <div className='explore-icon-div'>
                        <p className='all-explore-icon-mobile-view'><GrGallery/></p>
                       
                        </div>
                        <div className='explore-icon-div'>
                        <p className='explore-icon-mobile-view'><HiOutlinePhotograph/></p>
                       
                        </div>
                        <div className='explore-icon-div'>
                        <p className='explore-icon-mobile-view'><MdSlowMotionVideo/></p>
                       
                        </div>
                        <div className='explore-icon-div'>
                        <p className='explore-icon-mobile-view'><TbRotate360/></p>
                       
                        </div>
                        
                       </div>
                <div>
                  
                <div className="saved-uploaded-feed-div">
                <StandardImageList/>
            </div>
                </div>
            </div>
            <div className="d-flex flex-row">
            </div>
            </div>
            </div>
            </div>
        <BottomNavbar/>
            </div>
        )
    }
}
export default Profile