import { Component } from "react";
import './index.css'
import Sidebar from '../Sidebar'
import FeedContainer from './FeedContainer'
import TopNavbar from './topNavbar'
import BottomNavbar from './bottomNavbar'
import SuggestionProfiles from './suggestionProfiles'
import {v4 as uuidv4} from 'uuid'
import SimpleBottomNavigation from './newBottomBar'

const initialFeeds=[{
    profileName:"Introvert_janu",
    profileImage:"https://savvywomen.tomorrowmakers.com/sites/default/files/2020-03/women%20entrepreneurship.jpg",
    feedImage:"https://s3images.zee5.com/wp-content/uploads/2021/08/aa2ca5d9-883f-4d12-8fdb-2fa13bc6d1b5-Carpetright-House-Beautiful-Portobello-Carpet-In-Riverside-designsecrets.jpeg",
    id:1
},
{
    profileName:"Introvert_janu",
    profileImage:"https://savvywomen.tomorrowmakers.com/sites/default/files/2020-03/women%20entrepreneurship.jpg",
    feedImage:"https://media.designcafe.com/wp-content/uploads/2022/08/25190515/interior-design-cost-in-bangalore.jpg",
    id:2
},
{
    profileName:"Introvert_janu",
    profileImage:"https://savvywomen.tomorrowmakers.com/sites/default/files/2020-03/women%20entrepreneurship.jpg",
    feedImage:"http://cdn.home-designing.com/wp-content/uploads/2019/04/living-room-pendant-light.jpg",
    id:3
},
{
    profileName:"Introvert_janu",
    profileImage:"https://savvywomen.tomorrowmakers.com/sites/default/files/2020-03/women%20entrepreneurship.jpg",
    feedImage:"https://assets-news.housing.com/news/wp-content/uploads/2022/02/18205828/Minimalist-interior-design-Tips-to-make-your-home-look-minimal.jpg",
    id:4
},
{
    profileName:"Introvert_janu",
    profileImage:"https://savvywomen.tomorrowmakers.com/sites/default/files/2020-03/women%20entrepreneurship.jpg",
    feedImage:"https://5.imimg.com/data5/SELLER/Default/2020/11/VA/PT/WD/63934041/whatsapp-image-2020-11-27-at-15-37-27-2--500x500.jpeg",
    id:5
}]

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
    state={stateFeeds:initialFeeds,feedDetails:[]}
    componentDidMount=async()=>{
        const feedUrl="https://objective-wright.69-49-231-148.plesk.page/feedData"
        const options={
            method:"GET",
           
        }
        const response=await fetch(feedUrl,options);
        const data=await response.json();
        this.setState({feedDetails:data})
        console.log(data)
    }
    render(){
        const {stateFeeds,feedDetails}=this.state
      
        return(
            <div className="home-top-navbar-container">
               <TopNavbar/>
            <div>
            <div className="d-flex flex-row">
                <Sidebar/>
                <div>
            <div className="d-flex flex-row">
            <div className="feed-container">
                {feedDetails.map(eachFeed=>
                   <FeedContainer stateFeed={eachFeed} key={eachFeed.feed_id}/> )}
            </div>
            <div className="suggition-container">
                <div className="suggestion-text-container">
               <p className="suggition-name">Suggestions For You</p>
               <p className="see-all">See All</p>
               </div>
               {suggestionProfiles.map(eachProfile=>
                 <SuggestionProfiles suggestionProfilesList={eachProfile} key={eachProfile.id}/>)}
            </div>
            </div>
            </div>
            </div>
            </div>
       <SimpleBottomNavigation/>
            </div>
        )
    }
}
export default Home