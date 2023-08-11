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
import ProfilePosts from './profilePosts'
let postData=""
let jwtToken=""
class Profile extends Component{
    state={profileDetails:"",profilePosts:[]}

    componentDidMount=async()=>{
        
         jwtToken=Cookies.get("jwt_token")
        const url="http://localhost:9000/profileData";
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
        const postApiUrl="http://localhost:9000/profileAllposts"
        const postOptions={
            headers:{
                "Content-Type":"Application/json",
                "authorization":`Bearer ${jwtToken}`
            },
            method:"GET"
           
        }
        const postResponse=await fetch(postApiUrl,postOptions)
         postData=await postResponse.json()
        if(response.ok===true){
            this.setState({profilePosts:postData});
           
        }
        console.log(postData)
    }
    allPosts=()=>{
        this.setState({profilePosts:postData});
    }
    onClickPhotos=()=>{
        const {profilePosts}=this.state
        const resultData=postData.filter(eachItem=>{
            const images=eachItem.postType.includes("image") 
            const imageVideo = eachItem.postType.includes("imageVideo") 
            return images || imageVideo; 
        }
            
        )
        console.log(resultData)
        this.setState({profilePosts:resultData});

    }
    onClickVideo=()=>{
        const {profilePosts}=this.state
        const videoData=postData.filter(eachItem=>{
            const images=eachItem.postType.includes("video") 
            const imageVideo = eachItem.postType.includes("imageVideo") 
            return images || imageVideo; 
         } )
        console.log(videoData)
        this.setState({profilePosts:videoData});

    }
    virtualImages=async()=>{
        const virtualData=postData.filter(eachItem=>{
            const virtualImages=eachItem.postType.includes("virtualTourImage") 
        
            return virtualImages; 
         } )
        console.log(virtualData)
        this.setState({profilePosts:virtualData});

        // const postApiUrl="http://localhost:9000/360ImagesOnProfile"
        // const postOptions={
        //     headers:{
        //         "Content-Type":"Application/json",
        //         "authorization":`Bearer ${jwtToken}`
        //     },
        //     method:"GET"
           
        // }
        // const postResponse=await fetch(postApiUrl,postOptions)
        //  postData=await postResponse.json()
        //  console.log(postData)
       
    }
    render(){
        const {profileDetails,profilePosts}=this.state
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
                    <img src={`http://localhost:9000/${logo}`} alt="profile" className="profile-image-profilepic"/>
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
                        <div className='explore-icon-div' onClick={this.allPosts}>
                        <p className='explore-icon'><GrGallery/></p>
                        <p className='explore-icon-text'>All</p>
                        </div>
                        <div className='explore-icon-div' onClick={this.onClickPhotos}> 
                        <p className='explore-icon'><HiOutlinePhotograph/></p>
                        <p className='explore-icon-text'>Photos</p>
                        </div>
                        <div className='explore-icon-div' onClick={this.onClickVideo}>
                        <p className='explore-icon'><MdSlowMotionVideo/></p>
                        <p className='explore-icon-text'>Videos</p>
                        </div>
                        <div className='explore-icon-div' onClick={this.virtualImages}>
                        <p className='explore-icon'><TbRotate360/></p>
                        <p className='explore-icon-text'>360 Toures</p>
                        </div>
                        
                       </div>
                       <div className='filter-icons-mobile-view'>
                        <div className='explore-icon-div' onClick={this.allPosts}>
                        <p className='all-explore-icon-mobile-view'><GrGallery/></p>
                       
                        </div>
                        <div className='explore-icon-div' onClick={this.onClickPhotos}>
                        <p className='explore-icon-mobile-view'><HiOutlinePhotograph/></p>
                       
                        </div>
                        <div className='explore-icon-div' onClick={this.onClickVideo}>
                        <p className='explore-icon-mobile-view'><MdSlowMotionVideo/></p>
                       
                        </div>
                        {/* <div className='explore-icon-div'  onClick={this.virtualImages}>
                        <p className='explore-icon-mobile-view'><TbRotate360/></p>
                       
                        </div> */}
                        
                       </div>
                <div>
                  
                <div className="saved-uploaded-feed-div">
                  {profilePosts.map(eactPost=>
                    <ProfilePosts postDetails={eactPost} />)}
                         
               
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