import { Component } from "react";
import TopNavbar from "./topNavbar";
import BottomNavbar from "./bottomNavbar";

import MoreModel from './moreMode'
import Button from 'react-bootstrap/Button'
import AddingComments from './addingComments'
import './index.css'
  
const comments=[{
    profileImage:"https://savvywomen.tomorrowmakers.com/sites/default/files/2020-03/women%20entrepreneurship.jpg",
    profileName:"sai_112",
    comment:"This product is very good",
    id:1
},
{
    profileImage:"https://savvywomen.tomorrowmakers.com/sites/default/files/2020-03/women%20entrepreneurship.jpg",
    profileName:"sai_112",
    comment:"This product is very good",id:2
},
{
    profileImage:"https://savvywomen.tomorrowmakers.com/sites/default/files/2020-03/women%20entrepreneurship.jpg",
    profileName:"sai_112",
    comment:"This product is very good",
    id:3
},]
const MobileViewComments=(props)=>{
    const {gettingFeedid}=props
    return(
        <div>
        <TopNavbar/>
        <BottomNavbar/>
        <div className='comment-section-mobile-view'>
        <div className='comment-header'>
        <img alt="" src="https://savvywomen.tomorrowmakers.com/sites/default/files/2020-03/women%20entrepreneurship.jpg" className="profile-image1"/>
       
        <p className="profile-name-comments">Venkat_sai_113</p>
        
    <p className="more-icon"><MoreModel/></p>
        </div>
        <div className="commenting-container-mobile-view">
            {comments.map(eachComment=>
              <AddingComments comment1={eachComment}/>)}
           
        </div>
        <form className="d-flex flex-row">
        <input type="text" className="form-control" placeholder="Add A Comment..."/>
        <Button type="button" variant="primary">Post</Button>
        </form>
    </div>
    </div>
    )
}

export default MobileViewComments