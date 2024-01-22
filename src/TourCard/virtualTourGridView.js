import {Component} from 'react'

import { Button } from 'react-bootstrap'
import TourCards from "./TourDetailsCard"
import {Link} from 'react-router-dom'
import Sidebar from '../Sidebar/index'
import Paginations from "./pagnation"
import Cookies from 'js-cookie'
import BottomNavbar from "../Home/bottomNavbar"
import TopNavbar from "../Home/topNavbar"

let initialvirtualSceneDetails=[]
let jwtToken=""
class TourGridView extends Component{
  state={stateinitialvirtualSceneDetails:initialvirtualSceneDetails,searchState:"",stateJwtToken:jwtToken}
  componentDidMount (){
    const apiCallFunction =async()=>{
         jwtToken=Cookies.get("jwt_token")
        const tourId=localStorage.getItem("tourId")
        const parseTourId=JSON.parse(tourId)
        const apiData={parseTourId,hello:"hello"}
        const {stateJwtToken}=this.state
        console.log(apiData)
        const apiUrl="https://venkatsai.onrender.com/tourData1"
        const options={
            method:"POST",
            headers:{
                "Content-Type":"Application/json",
                "Authorization":`Bearer ${jwtToken}`
            },
            mode: "cors",
            body:JSON.stringify(apiData)
        }
        const response=await fetch(apiUrl,options)
        console.log(response)
        const data=await response.json()
        if(response.ok===true){
            this.setState({stateinitialvirtualSceneDetails:data})
        }
    }
    apiCallFunction()
  }
  onSearchtours=(event)=>{
    this.setState({searchState:event.target.value})
  }
  onClickDeleteTourDetails=async(tour_id)=>{
   console.log(tour_id)
    const apiData2={tour_id,hello:"hello"}
    console.log(jwtToken)
        const apiUrl="https://venkatsai.onrender.com/deleteTour"
        const options={
            method:"POST",
            headers:{
                "Content-Type":"Application/json",
                 "authorization":`Bearer ${jwtToken}`
            },
            mode: "cors",
            body:JSON.stringify(apiData2)
        }
        const response=await fetch(apiUrl,options)
        const data=await response.json()
        this.setState({stateinitialvirtualSceneDetails:data})
  }
//   logout=()=>{
//     Cookies.remove("jwt_token")
//     const {history}=this.props
//     history.replace("/login")
// }
    render(){
        const {stateinitialvirtualSceneDetails,searchState}=this.state
        const searchResult=stateinitialvirtualSceneDetails.filter(eachItem=>
            eachItem.tour_name.toLowerCase().includes(searchState.toLowerCase()) ||
            eachItem.tags.toLowerCase().includes(searchState.toLowerCase()) ||
            eachItem.tour_description.toLowerCase().includes(searchState.toLowerCase()))
        return(
            <>
         <TopNavbar/>
            <div>
                <div className='d-flex flex-row'>
                    <div>
                       <Sidebar/>
                    </div>
                    <div className='tour-container tour-cards-container'>
                        <div className='container-fluid mt-3'                                  >
                            <div className='row'>
                                <div className='col-lg-7 col-9'>
                                    <input type="search" className='form-control' placeholder='Search' onChange={this.onSearchtours}/>
                                </div>
                                <div className='col-lg-3'>
                                <Link to="/createtour"> <button className='login-button2' >Create Virtual Tour</button></Link>
                                </div>
                               {/* <div className='col-lg-3'>
                               <button className='logout-button2'  onClick={this.logout} >Log Out</button>
                                </div> */}
                            </div>
                            <div className='row g-0 mt-3'>
                                {searchResult.map(eachItem=>
                                    <TourCards tourDetails={eachItem} key={eachItem.id} onClickDeleteTourDetails={this.onClickDeleteTourDetails} />)}
                            </div>
                            {/* <Paginations/> */}
                        </div>
                        </div>
                </div>
                <BottomNavbar/>
            </div>
            </>
        )
    }
}
export default TourGridView