import { Component } from "react";
import '../index.css'
import Sidebar from '../Sidebar'
import SpacesCard from "./spacesCard";
import TopNavbar from "../Home/topNavbar";
import BottomNavbar from "../Home/bottomNavbar";
import { v4 as uuidv4 } from 'uuid';
import TitlebarBelowMasonryImageList from './spacesCard'
import {MdOutlineDesignServices} from 'react-icons/md'
import {SiReacthookform} from 'react-icons/si'
import paymentImage from "./Group Payments (1).png"
import designImage from './Group design.png'
import trackerImage from './Group Tracking.png'
import estimateImage from './Group estimate (1).png'
import {Link} from 'react-router-dom'
import {BsPlusCircle} from 'react-icons/bs'
const initialCardItems=[{
    imageUrl:"https://media.designcafe.com/wp-content/uploads/2023/01/05102507/wfh-friendly-living-room-for-working-professionals.jpg"
    ,name:"Ongoing Projects",
    brand:"Spaces",
    status:"UpComing"
    ,id:uuidv4()
},
{
    imageUrl:"http://cdn.home-designing.com/wp-content/uploads/2018/01/flying-pendant-lights-colourful-stools-kitsch-living-room.jpg"
    ,name:"Upcoming Projects",
    brand:"Spaces",
    status:"OnGoing"
    ,id:uuidv4()
},
{
    imageUrl:"http://cdn.home-designing.com/wp-content/uploads/2018/01/orange-cushions-grey-curtains-dark-living-room.jpg"
    ,name:"Completed Projects",
    brand:"Spaces",
    status:"UpComing"
    ,id:uuidv4()
},
{
    imageUrl:"https://media.designcafe.com/wp-content/uploads/2023/01/05102507/wfh-friendly-living-room-for-working-professionals.jpg"
    ,name:"Ongoing Projects",
    brand:"Spaces",
    status:"UpComing"
    ,id:uuidv4()
},
{
    imageUrl:"http://cdn.home-designing.com/wp-content/uploads/2018/01/flying-pendant-lights-colourful-stools-kitsch-living-room.jpg"
    ,name:"Upcoming Projects",
    brand:"Spaces",
    status:"OnGoing"
    ,id:uuidv4()
},
{
    imageUrl:"http://cdn.home-designing.com/wp-content/uploads/2018/01/orange-cushions-grey-curtains-dark-living-room.jpg"
    ,name:"Completed Projects",
    brand:"Spaces",
    status:"UpComing"
    ,id:uuidv4()
},

]
class Spaces extends Component{

    state={projectItems:initialCardItems,onSearch:"",name:"",description:"", }
    onChangeSearch=(event)=>{
        this.setState({onSearch:event.target.value})
    }
    onChangeprojectname=(event)=>{
        const {name}=this.state
        this.setState({name:event.target.value})
        console.log(name)
    }

    onChangeprojectDesc=(event)=>{
        const {description}=this.state
        this.setState({description:event.target.value})
        console.log(description)
    }

    onSubmit=(event)=>{
        event.preventDefault()
        const {name,description}=this.state
        if(name===""){
            alert("Please Enter Projectname")
          }
          else{
        const newProject={
            id:uuidv4(),
            imageUrl:"https://media.designcafe.com/wp-content/uploads/2023/01/05102507/wfh-friendly-living-room-for-working-professionals.jpg",
            name,
            description,
            status:"not completed"
        }
        // let hello=name==="" &&description===""
       
        this.setState(prevState => ({
            projectItems: [...prevState.projectItems, newProject,],
            name:" ",
            description:" ",
          }))
        }
    }
    onblurProjectname=(event)=>{
        const {name}=this.state
       if(name===""){
        
       }
    }
    render(){
        const {projectItems,onSearch}=this.state
        const searchResult=projectItems.filter(eachSearch=>
            eachSearch.name.includes(onSearch))
       
        return(
            <div className="projects-bg-container">
                <BottomNavbar/>
                <TopNavbar/>
              
                <Sidebar/>
               
               <div className="projects-container">
                <div className="d-flex flex-row justify-content-between w-75">
                <p className="project-heading">Spaces</p>
                {/* <button type="button" class="btn btn-outline-primary">Primary</button> */}
                <button className="spaces-button" data-toggle="modal" data-target="#exampleModalCenter1"><BsPlusCircle/>  Create Space</button>
                <div className="modal fade" id="exampleModalCenter1" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle1" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Space Name</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <input type="text" className='form-control ' onChange={this.onChangeprojectname} onBlur={this.onblurProjectname} placeholder='Project Name'/> 
        {/* <input type="text" className='form-control mt-4'  onChange={this.onChangeprojectDesc} placeholder='Project Description'/> 
        <label>Status</label>
        <select className="form-control">
            <option value="UpComing">upComing</option>
            <option value="OnGoing">OnGoing</option>
            <option value="Completed">Completed</option>
        </select> */}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary" onClick={this.onSubmit} data-dismiss="modal">Submit</button>
      </div>
    </div>
  </div>
</div>
              
                </div>
             
               <div className="d-flex flex-row justify-content-around w-100 ml-auto mr-auto">
                <div>
                <Link to="/explore"><img src={designImage}/></Link>
               
                </div>
                <div>
               <Link to="/projectList"> <img src={estimateImage}/></Link>
                </div>
                <div>
                <img src={paymentImage}/>
                   
                </div>
              <Link to="/projectTrack">  <div>
                <img src={trackerImage}/>
                    </div></Link>
                </div>   
                <div className="input-div">
                
               
              
                </div>
                <div className="space-cards-container mw-90">
                    {/* <TitlebarBelowMasonryImageList/> */}
                    {searchResult.map(eachCard=>
                        <SpacesCard cardItem={eachCard} key={eachCard.id}/>)}
                </div>
               </div>
            </div>
        )
    }
}
export default Spaces