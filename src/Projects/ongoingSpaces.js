import { Component } from "react";
import './index.css'
import Sidebar from '../Sidebar'
import OngoingProjectCard from "./ongoingprojectCards";
import TopNavbar from "../Home/topNavbar";
import BottomNavbar from "../Home/bottomNavbar";
import { v4 as uuidv4 } from 'uuid';
import {HiPlus} from "react-icons/hi"
import Cookies from "js-cookie";
import { options } from "aframe-react";
import OngoingSpaceCard from './onGoingSpaceCards'

let jwtToken=""
class OngoingSpaces extends Component{
     state={onGoingProjectCards:[]}
     componentDidMount=()=>{
        jwtToken=Cookies.get("jwt_token")
        const fetchProjects=async()=>{
            const apiUrl="http://localhost:9000/ongoingProjects"
            const options={
                method:"GET",
                headers:{
                    "Content-Type":"Application/json",
                    "Authorization":`Bearer ${jwtToken}`
                }
            }
            const response=await fetch(apiUrl,options);
            const data=await response.json()
            this.setState({onGoingProjectCards:data})
            console.log(data)

        }
        fetchProjects()
     }

    render(){

       const {onGoingProjectCards}=this.state
        return(
            <div className="projects-bg-container">
                <BottomNavbar/>
                <TopNavbar/>
              
                <Sidebar/>
              
              
               <div className="projects-container">
               <p className="project-heading">Ongoing Spaces</p>
                <div className="input-div">
                
               
              
                </div>
                <div className="project-cards-container">
                    {onGoingProjectCards.map(eachCard=>
                        <OngoingSpaceCard cardItem={eachCard} key={eachCard.id}/>)}
                </div>
               </div>
            </div>
        )
    }
}
export default OngoingSpaces