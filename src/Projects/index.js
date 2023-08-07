import { Component } from "react";
import './index.css'
import Sidebar from '../Sidebar'
import ProjectCard from "./projectCard";
import TopNavbar from "../Home/topNavbar";
import BottomNavbar from "../Home/bottomNavbar";
import { v4 as uuidv4 } from 'uuid';
import {HiPlus} from "react-icons/hi"

const initialCardItems=[{
    imageUrl:"https://media.designcafe.com/wp-content/uploads/2023/01/05102507/wfh-friendly-living-room-for-working-professionals.jpg"
    ,name:"Ongoing Projects",
    description:"Interior Project Description",
    click:"ongoingprojects",
    status:"UpComing"
    ,id:uuidv4()
},
{
    imageUrl:"http://cdn.home-designing.com/wp-content/uploads/2018/01/flying-pendant-lights-colourful-stools-kitsch-living-room.jpg"
    ,name:"Upcoming Projects",
    description:"Interior Project Description",
    click:"upcomingProjects",
    status:"OnGoing"
    ,id:uuidv4()
},
{
    imageUrl:"http://cdn.home-designing.com/wp-content/uploads/2018/01/orange-cushions-grey-curtains-dark-living-room.jpg"
    ,name:"Completed Projects",
    description:"Interior Project Description",
    click:"completedprojects",
    status:"UpComing"
    ,id:uuidv4()
},

]
class Projects extends Component{

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
               <div>
                <Sidebar/>
               </div>
               
               <div className="projects-container">
                <div className="input-div">
                <p className="project-heading">Projects</p>
                {/* <select className="username-select-filed ">
                    <option value="All">All</option>
                    <option value="completed">Completed</option>
                    <option value="upcoming">UpComing</option>
                    <option value="ongoing">Ongoing</option>
                </select> */}
                {/* <input className="username-input-filed" onChange={this.onChangeSearch} placeholder="Search..." type="text" /> */}
                <button type="button" className="add-project-btn" data-toggle="modal" data-target="#exampleModalCenter"><HiPlus/> Create New Project</button>
                <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Project Name</h5>
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
                <div className="project-cards-container">
                    {searchResult.map(eachCard=>
                        <ProjectCard cardItem={eachCard} key={eachCard.id}/>)}
                </div>
               </div>
            </div>
        )
    }
}
export default Projects