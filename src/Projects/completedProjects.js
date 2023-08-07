import { Component } from "react";
import './index.css'
import Sidebar from '../Sidebar'
import CompletedProjectCard from "./completedProjectCards";
import TopNavbar from "../Home/topNavbar";
import BottomNavbar from "../Home/bottomNavbar";
import { v4 as uuidv4 } from 'uuid';
import {HiPlus} from "react-icons/hi"

const initialCardItems=[{
    imageUrl:"https://media.designcafe.com/wp-content/uploads/2023/01/05102507/wfh-friendly-living-room-for-working-professionals.jpg"
    ,name:"Ongoing Projects",
    brand:"Brand",
    status:"UpComing"
    ,id:uuidv4()
},
{
    imageUrl:"http://cdn.home-designing.com/wp-content/uploads/2018/01/flying-pendant-lights-colourful-stools-kitsch-living-room.jpg"
    ,name:"Upcoming Projects",
    brand:"Brand",
    status:"OnGoing"
    ,id:uuidv4()
},
{
    imageUrl:"http://cdn.home-designing.com/wp-content/uploads/2018/01/orange-cushions-grey-curtains-dark-living-room.jpg"
    ,name:"Completed Projects",
    brand:"Brand",
    status:"UpComing"
    ,id:uuidv4()
},
{
    imageUrl:"https://media.designcafe.com/wp-content/uploads/2023/01/05102507/wfh-friendly-living-room-for-working-professionals.jpg"
    ,name:"Ongoing Projects",
    brand:"Brand",
    status:"UpComing"
    ,id:uuidv4()
},
{
    imageUrl:"http://cdn.home-designing.com/wp-content/uploads/2018/01/flying-pendant-lights-colourful-stools-kitsch-living-room.jpg"
    ,name:"Upcoming Projects",
    brand:"Brand",
    status:"OnGoing"
    ,id:uuidv4()
},
{
    imageUrl:"http://cdn.home-designing.com/wp-content/uploads/2018/01/orange-cushions-grey-curtains-dark-living-room.jpg"
    ,name:"Completed Projects",
    brand:"Brand",
    status:"UpComing"
    ,id:uuidv4()
},

]
class CompletedProjects extends Component{

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
               <p className="project-heading">Completed Project</p>
                <div className="input-div">
                
               
              
                </div>
                <div className="project-cards-container">
                    {searchResult.map(eachCard=>
                        <CompletedProjectCard cardItem={eachCard} key={eachCard.id}/>)}
                </div>
               </div>
            </div>
        )
    }
}
export default CompletedProjects