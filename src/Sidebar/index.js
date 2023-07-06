import {Component} from 'react'
import {Link,withRouter} from 'react-router-dom'
import './index.css'
import { AiOutlineHome,AiOutlineSearch,AiOutlineShop,AiFillProject,AiOutlinePlus,AiOutlineUserAdd} from 'react-icons/ai';
import {BsChatRight,BsBookmark} from 'react-icons/bs'
import {BiTrendingUp} from 'react-icons/bi'
import {CgProfile,CgDetailsMore} from 'react-icons/cg'
import {BsBell} from 'react-icons/bs'
import {BiTimeFive} from 'react-icons/bi'
import {Tb360View} from "react-icons/tb"
import Cookies from 'js-cookie';

const sidebarItems=[
    {
    name:"Home",
    icon:<AiOutlineHome  className='icon'/>,
    id:1,
    path:"/"
},

{
    name:"Invitation",
    icon:<AiOutlineUserAdd  className='icon'/>,
    id:26,
    path:"/invitation"
},
{
    name:"Create Post",
    icon:<AiOutlinePlus  className='icon'/>,
    id:6,
    path:"/createPost"
},
// {
//     name:"Explore",
//     icon:<AiOutlineSearch  className='icon'/>,
//     id:2,
//     path:"/explore"
// },
// {
//     name:"Trending",
//     icon:<BiTrendingUp  className='icon'/>,
//     id:7,
//     path:"/trending"
// },
// {
//     name:"Projects",
//     icon:<AiFillProject  className='icon'/>,
//     id:4,
//     path:"/projects"
// },

// {
//     name:"Shop",
//     icon:<AiOutlineShop  className='icon'/>,
//     id:3,
//     path:"/shop"
// },

// {
//     name:"Chat",
//     icon:<BsChatRight  className='icon-chat'/>,
//     id:5,
//     path:"/chat"
// },
,
{
    name:"Virtual Tours",
    icon:<Tb360View  className='icon'/>,
    id:20,
    path:"/savedTours"
},
// {
//     name:"Profile",
//     icon:<CgProfile  className='icon'/>,
//     id:8,
//     path:"/Profile"
// },

]

const CardItems=(props)=>{
    const {eachCardItems}=props
    const {name,icon,path}=eachCardItems
    return(
        <>
        <Link to={path} className="sidebar-card-container link">
            <p>{icon}</p>
            <p className="home">{name}</p>
        </Link>
        
         
          </>       
    )
}
class Sidebar extends Component{
    state={moreItems:false}
    logout=()=>{
        Cookies.remove("jwt_token")
        const {history}=this.props
        history.replace("/login")
    }
    onClickmoreItems=()=>{
       this.setState(prevState=>{
        const {moreItems}=prevState
        return{
            moreItems : !moreItems
        }
       })
    }
    render(){
        const {moreItems}=this.state
        return(
           
            <div className="sidebar-container">
                <img src="https://designalley.in/wp-content/uploads/2022/03/Logo.png" alt="sidebar logo" className='sidebar-logo'/>
                {sidebarItems.map(eachItem=>
                    <CardItems eachCardItems={eachItem} key={eachItem.id}/>)}
                    <div className="sidebar-card-container link" onClick={this.onClickmoreItems}>
                        <p><CgDetailsMore  className='icon'/></p>
                        <p className="home">more</p>
                    </div>
                    {moreItems &&<>
                {/* <Link className='sub-card-container' to="/notifications">
                    <p className='sub-container-item'>Notifications</p>
                    <p className='subicons'><BsBell /></p>
                </Link>
                <Link className='sub-card-container' to="/activity">
                    <p className='sub-container-item'>Activity</p>
                    <p className='subicons'><BiTimeFive /></p>
                </Link>
                <Link className='sub-card-container' to="/savedposts">
                    <p className='sub-container-item'>Saved</p>
                    <p className='subicons'><BsBookmark /></p>
                </Link> */}
                
                <div className='sub-card-container'>
                    <p className='sub-container-item' onClick={this.logout}>Log Out</p>
                </div></>}
            </div>
        )
    }
}
export default withRouter(Sidebar)