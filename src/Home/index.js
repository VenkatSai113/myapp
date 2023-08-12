import { Component } from "react";
import './index.css'
import Sidebar from '../Sidebar'
import FeedContainer from './FeedContainer'
import TopNavbar from './topNavbar'
import BottomNavbar from './bottomNavbar'
import SuggestionProfiles from './suggestionProfiles'
import {v4 as uuidv4} from 'uuid'
import Cookies from "js-cookie";

const initialFeeds=[]

const suggestionProfiles=[
    {
        profileImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBhl1zIWjaCArZzMzooDCgEVh97WhK_dsFDXJ4dem7dQ&s",
        profileName:"Venkat_456",
        profileDescription:"interior Desigener",
        status:"follow",
        id:uuidv4()
    },
    {
        profileImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBhl1zIWjaCArZzMzooDCgEVh97WhK_dsFDXJ4dem7dQ&s",
        profileName:"Venkat_456",
        profileDescription:"interior Desigener",
        status:"follow",
        id:uuidv4()
    },
    {
        profileImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBhl1zIWjaCArZzMzooDCgEVh97WhK_dsFDXJ4dem7dQ&s",
        profileName:"Venkat_456",
        profileDescription:"interior Desigener",
        status:"follow",
        id:uuidv4()
    },
    {
        profileImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBhl1zIWjaCArZzMzooDCgEVh97WhK_dsFDXJ4dem7dQ&s",
        profileName:"Venkat_456",
        profileDescription:"interior Desigener",
        status:"follow",
        id:uuidv4()
    },
    {
        profileImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBhl1zIWjaCArZzMzooDCgEVh97WhK_dsFDXJ4dem7dQ&s",
        profileName:"Venkat_456",
        profileDescription:"interior Desigener",
        status:"follow",
        id:uuidv4()
    },
    {
        profileImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBhl1zIWjaCArZzMzooDCgEVh97WhK_dsFDXJ4dem7dQ&s",
        profileName:"Venkat_456",
        profileDescription:"interior Desigener",
        status:"follow",
        id:uuidv4()
    },
]

class Home extends Component{
    
    state={stateFeeds:initialFeeds,feedDetails:[],loginUser:"",navBarAuth:true}
    componentDidMount=async()=>{
        const jwtToken=Cookies.get("jwt_token")
        const userJwtToken=Cookies.get("userJwtToken")
        const currentUrl = window.location.href;
        const splitCurrentUrl=currentUrl.split("/");
       
        const urlLength=splitCurrentUrl.length-1
        const profilePost=splitCurrentUrl[urlLength].split(":")
        const userPost=profilePost[0]
        const hello=async()=>{
            const logUrl="http://localhost:9000/logedInUser"
        const options={
            method:"GET",
            headers:{
                "Content-Type":"Application/json",
                "Authorization":`Bearer ${jwtToken}`
            }
           
        }
        const response=await fetch(logUrl,options);
        const data1=await response.json();
        if(response.ok===true){
            this.setState({loginUser:data1})
            const {loginUser}=this.state
            console.log(loginUser)
        }
       
     
        }
        hello()
     
       
       
        if(userPost==="profilePosts"){
            const designerPostsUrl="http://localhost:9000/designerPost"
            const selectedPostId=profilePost[1]
            const postInfo={selectedPostId,hello:"hello"}

            const options={
                method:"POST",
                headers:{
                    "Content-Type":"Application/json",
                    "Authorization":`Bearer ${jwtToken}`
                },
                mode: "cors",
                body:JSON.stringify(postInfo)
               
            }
            const response=await fetch(designerPostsUrl,options);
            const data=await response.json();
            this.setState({feedDetails:data})
          
          
        }
        else if(userPost==="sharedPost"){
           this.setState({navBarAuth:false})
            const designerPostsUrl1="http://localhost:9000/designerSelectedPost"
            const selectedPostId1=profilePost[1]
            const postInfo1={selectedPostId1,hello:"hello"}

            const options1={
                method:"POST",
                headers:{
                    "Content-Type":"Application/json",
                    "Authorization":`Bearer ${userJwtToken}`
                   
                },
                mode: "cors",
                body:JSON.stringify(postInfo1)
               
            }
            const response1=await fetch(designerPostsUrl1,options1);
            const data1=await response1.json();
            this.setState({feedDetails:data1})
          
          
        }
        else{
        const feedUrl="http://localhost:9000/feedData"
        const options={
            method:"GET",
            headers:{
                "Content-Type":"Application/json",
                "Authorization":`Bearer ${jwtToken}`
            }
           
        }
        const response=await fetch(feedUrl,options);
        const data=await response.json();
        this.setState({feedDetails:data})
        console.log(data)
    }
      
    }
    render(){
        const {stateFeeds,feedDetails,loginUser,navBarAuth}=this.state
      
        return(
            <div className="home-top-navbar-container">
               <TopNavbar/>
            <div>
            <div className="d-flex flex-row">
                {navBarAuth?<Sidebar/>:null}
                
                <div>
            <div className="d-flex flex-row">
            <div className="feed-container mt-3">
                {feedDetails.map(eachFeed=>
                   <FeedContainer stateFeed={eachFeed} key={eachFeed.postId} loginUser={loginUser} /> )}
            </div>
          
            <div className="suggition-container">
            {navBarAuth?<>
                <div className="suggestion-text-container">
               <p className="suggition-name">Suggestions For You</p>
               <p className="see-all">See All</p>
               </div>
               {suggestionProfiles.map(eachProfile=>
                 <SuggestionProfiles suggestionProfilesList={eachProfile} key={eachProfile.id}/>)}
                 </>
                 :null}
            </div>
            </div>
            </div>
            </div>
            </div>
            {navBarAuth?<BottomNavbar/>:null}
            </div>
        )
    }
}
export default Home