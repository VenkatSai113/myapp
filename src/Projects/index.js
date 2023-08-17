import { Component } from "react";
import './index.css'
import Sidebar from '../Sidebar'
import ProjectCard from "./projectCard";
import TopNavbar from "../Home/topNavbar";
import BottomNavbar from "../Home/bottomNavbar";
import { v4 as uuidv4 } from 'uuid';
import {HiPlus} from "react-icons/hi"
import Cookies from "js-cookie";

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
let jwtToken=""
class Projects extends Component{

    state={projectItems:initialCardItems,onSearch:"",projectName:"",description:"", }
    componentDidMount=()=>{
      jwtToken=Cookies.get("jwt_token")
    }
    onChangeprojectname=(event)=>{
        const {projectName}=this.state
        this.setState({projectName:event.target.value})
        console.log(projectName)
    }
    onSubmit=async(event)=>{
        event.preventDefault()
        const {projectName,description}=this.state
        if(projectName===""){
            alert("Please Enter Projectname")
          }
          else{
            const apiUrl="http://localhost:9000/createProject"
            const projectData={projectName,hello:"hello"}
            const options={
              method:"POST",
              headers:{
                "Content-Type":"Application/json",
                "Authorization":`Bearer ${jwtToken}`
              },
              body:JSON.stringify(projectData)
            }
            const response=await fetch(apiUrl,options)
            const data=await response.json()
            this.setState({projectName:""})
            console.log(data)
        }
    }
    render(){
        const {projectItems,onSearch,projectName}=this.state
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
        <input type="text" className='form-control ' value={projectName} onChange={this.onChangeprojectname} placeholder='Project Name'/> 
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
                    {projectItems.map(eachCard=>
                        <ProjectCard cardItem={eachCard} key={eachCard.id}/>)}
                </div>
               </div>
            </div>
        )
    }
}
export default Projects