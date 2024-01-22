import { Component, useEffect, useState } from "react";
import './index.css'
import Sidebar from '../Sidebar'
import OngoingProjectCard from "./ongoingprojectCards";
import TopNavbar from "../Home/topNavbar";
import BottomNavbar from "../Home/bottomNavbar";
import { v4 as uuidv4 } from 'uuid';
import {HiPlus} from "react-icons/hi"
import GutterlessList from './estimateProjectList'
import EstimatePdfCard from './estimateCardPdfList'
import estimateSpacesCardList from './estimateSpacesCardList'
import { Container,Row,Col } from "react-bootstrap";
import Cookies from "js-cookie";
import EstimateSpaceTableList from './estimateSpaceTableList'
let jwtToken=""
const EstimateSpacesList=()=> {
    const [profileImage,setProfileImage]=useState("")
    const [productDetails,setProductDetails]=useState([])
    const [profileData,setProfileData]=useState([])
    useEffect(()=>{
         jwtToken=Cookies.get("jwt_token")
        const spaceProducts=async()=>{
            
            const parseProjectId=localStorage.getItem("projectId")
            const projectId=JSON.parse(parseProjectId)
            const projectDetails={projectId,hello:"hello"}
            const apiUrl="https://venkatsai.onrender.com/estimateProducts"
            const options={
                method:"POST",
                headers:{
                    "Content-Type":"Application/json",
                    "Authorization":`Bearer ${jwtToken}`
                },
                body:JSON.stringify(projectDetails)
            }
            const response=await fetch(apiUrl,options);
            const data=await response.json()
            console.log(data)
            setProductDetails(data)
        }
        spaceProducts()
        const getDesignerDetails=async()=>{
          
            const apiUrl="https://venkatsai.onrender.com/estimateDesignerDetails"
            const options={
                method:"GET",
                headers:{
                    "Content-Type":"Application/json",
                    "Authorization":`Bearer ${jwtToken}`
                },
            }
            const response=await fetch(apiUrl,options)
            const data=await response.json()
            console.log(data,"data")
            setProfileData(data)
        }
        getDesignerDetails()
       
    },[1])
    const totalSubmit=()=>{
        console.log("hellloooooooo")
    }
    const profilePreview=(event)=>{
        console.log(event.target.files)
        var src = URL.createObjectURL(event.target.files[0]);
        setProfileImage(src)

    }
        return(
            <div className="projects-bg-container">
                <BottomNavbar/>
                <TopNavbar/>
                <Sidebar/>
               <div className="projects-container">
               <p className="project-heading">Estimate List</p>
               <div className="d-flex flex-row justify-content-between w-75">
               <div>
               <img  className="profile-image" src={`https://venkatsai.onrender.com/${profileData.logo}`}/>
               {/* <div class="center">
  <div class="form-input">
    <div class="preview">
      <img  id="file-ip-1-preview"/>
    </div>
    <label for="file-ip-1">Upload Image</label>
    <input type="file" id="file-ip-1" accept="image/*" onChange={profilePreview}/>
    
  </div>
</div>  */}
</div>
<div>
<p className="project-heading">Estimate No:01</p>
</div>
</div>
<Container>
    <Row>
        <Col md={4}>
        <p className="project-heading">Company Name/Designer Name :<span style={{fontWeight:"normal"}}> {profileData.desigener_name}</span></p>
            {/* <input type="text" placeholder="Your Company" className="form-control mt-3"/> */}
        </Col>
        <Col md={4}>
        <p className="project-heading">Address :<span style={{fontWeight:"normal"}}> {profileData.address}</span></p>
            {/* <input type="text" placeholder="Your Name" className="form-control mt-3"/> */}
        </Col>
        <Col md={4}>
        <p className="project-heading">City/Area :<span style={{fontWeight:"normal"}}> {profileData.area}</span></p>
            {/* <textarea type="text" placeholder="Address" className="form-control mt-3"/> */}
        </Col>
        {/* <Col md={6}>
            <input type="text" placeholder="city,State Zip" className="form-control mt-3"/>
        </Col>
        <Col md={6}>
            <input type="text" placeholder="Country" className="form-control mt-3"/>
            
        </Col> */}
        <Col xs={12}>
        <table class="table table-bordered mt-3">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th>Space Name</th>
      <th scope="col">Product</th>
      <th scope="col">Qty</th>
      <th scope="col">Rate</th>
      <th scope="col">Margin</th>
      <th scope="col">Final price</th>
    </tr>
  </thead>
  <tbody>
    {productDetails.map(eachProduct=>
        <EstimateSpaceTableList spaceProduct={eachProduct} key={eachProduct.spaceId}/> )}
        <tr>
            <td colSpan="6">Total</td>
            <td>2323</td>
        </tr>
 
   
  </tbody>
</table>
        </Col>
    </Row>
</Container>
                <div className="input-div">
                   
                </div>
                <div className="project-cards-container">
                    <estimateSpacesCardList/>
                    {/* {searchResult.map(eachCard=>
                        <OngoingProjectCard cardItem={eachCard} key={eachCard.id}/>)} */}
                </div>
                <button className="btn btn-primary ml-auto mr-auto">Submit</button>
               </div>
            </div>
        )
    
}
export default EstimateSpacesList