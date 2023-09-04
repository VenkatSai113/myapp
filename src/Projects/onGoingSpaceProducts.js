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
import { Container,Row,Col } from "react-bootstrap";
import SpaceProductsTable from "./onGoingSpaceProductsTable";
import { Redirect } from "react-router-dom";
let jwtToken=""
class OngoingSpaceProducts extends Component{
     state={spaceProducts:[1],spaceImage:"",spaceName:"",isAvailable:true}
     componentDidMount=()=>{
        const getProducts=async()=>{
            const jwtToken=Cookies.get("jwt_token")
            const parseSpaceId=window.location.pathname.split(":")[1]
            const spaceId=parseInt(parseSpaceId)
            const spaceDetails={spaceId,hello:"hello"}
            const apiUrl="http://13.233.231.34:9000/spaceProducts"
            const options={
                method:"POST",
                headers:{
                    "Content-Type":"Application/json",
                    'Authorization':`Bearer ${jwtToken}`
                },
                body:JSON.stringify(spaceDetails)
            }
            const response=await fetch(apiUrl,options)
            const data=await response.json()
            console.log(data)
            if(data.length===0){
                console.log(data)
                this.setState({isAvailable:true})
            }
            else{
                this.setState({spaceProducts:data})

            this.setState({spaceImage:data[0].spaceImage})
            this.setState({spaceName:data[0].spaceName})
            this.setState({isAvailable:false})
           
            }
            

        }
        getProducts()
       
     }

    render(){
        const {spaceProducts,spaceImage,spaceName,isAvailable}=this.state
        if(isAvailable){
            return(
                <div style={{height:"100vh",width:"100vw"}}>
              <img src="https://perfectstart.com.au/wp-content/uploads/2017/08/not-available.jpg" style={{height:"400px",width:"400px",margin:"auto"}}/>
           </div>
            )
            
        }
        else{
        return(
            <div className="projects-bg-container">
                <BottomNavbar/>
                <TopNavbar/>
              
                <Sidebar/>
              
              
               <div className="projects-container">
               <p className="project-heading">Products</p>
                <div className="input-div">
                    
                </div>
                <div className="project-cards-container">
                <Container fluid>
                    <Row>
                        <Col md={5}>
                        <img src={spaceImage} className="space-image"/>
                        </Col>
                        <Col md={7}>
                            <h6>{spaceName} :</h6>
                            <table class="table">
  <thead>
    <tr>
      {/* <th scope="col">#</th> */}
      <th scope="col">Item</th>
      <th scope="col">Units</th>
      <th scope="col">Qty</th>
    </tr>
  </thead>
  <tbody>
    {spaceProducts.map(eachProduct=>
       <SpaceProductsTable spaceProducts={eachProduct} key={eachProduct.productId}/> )}
    
  </tbody>
</table>
                        </Col>
                    </Row>
                </Container>
                </div> 
               </div>
            </div>
        )
    }
    }
}
export default OngoingSpaceProducts