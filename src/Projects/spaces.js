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
import axios from "axios";
import Cookies from "js-cookie";


class Spaces extends Component{

    state={projectItems:[],onSearch:"",spacename:"",spaceImage:"",isSceneLoading:false,projectId:"" }
    componentDidMount=()=>{
        const jwtToken=Cookies.get("jwt_token")
        const parseProjectId=localStorage.getItem("projectId")
        const projectId=JSON.parse(parseProjectId)
        const spaceDetails={projectId,hello:"hello"}
        console.log(projectId)
        this.setState({projectId})
        const spaceFun=async()=>{
            const apiUrl="http://localhost:9000/spaceCards"
            const options={
                method:"POST",
                headers:{
                    "Content-Type":"Application/json",
                    "Authorization":`Bearer ${jwtToken}`
                },
                body:JSON.stringify(spaceDetails)
            }
            const response =await fetch(apiUrl,options)
            const data=await response.json()
            if(response.ok===true){
                this.setState({projectItems:data})
                console.log(data)
            }
            else{
                this.setState({projectItems:[]})
                console.log(data)
            }
           

        }
       spaceFun()
    }
    
    onChangeprojectname=(event)=>{
        const {spacename}=this.state
        this.setState({spacename:event.target.value})
        console.log(spacename)
    }
    uploadSpaceImage=(event)=>{
        this.setState({spaceImage:event.target.files[0]})
    }
    onSubmit=(event)=>{
        event.preventDefault()
        const {spacename}=this.state
        if(spacename===""){
            alert("Please Enter Spacename")
          }
          else{
            const {spaceImage,spacename,projectId}=this.state
            const spaceDetails={spaceImage,spacename}
                this.setState({isSceneLoading:true})
               const apiUrl="http://localhost:9000/createSpaces"
               const formData=new FormData();
                formData.append("spacename",spacename)
                formData.append("projectId",projectId)
                formData.append("spaceImage",spaceImage)
                axios.post(apiUrl,formData).then
                (response=>{
                    console.log(response.data)
                    this.setState({projectItems:response.data})
                  
                 }
                    ).catch(error=>
                        console.log(error)
                    )
          }
    }

    render(){
        const {projectItems,onSearch,spacename}=this.state
        // const searchResult=projectItems.filter(eachSearch=>
        //     eachSearch.spacename.includes(onSearch))
       
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
        <input type="file" className='form-control mt-2' onChange={this.uploadSpaceImage}/> 
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
               <Link to="/estimateSpacesList"> <img src={estimateImage}/></Link>
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
                   
                    {projectItems.map(eachCard=>
                    
                        <SpacesCard cardItem={eachCard} key={eachCard.id}/>)}
                </div>
               </div>
            </div>
        )
    }
}
export default Spaces