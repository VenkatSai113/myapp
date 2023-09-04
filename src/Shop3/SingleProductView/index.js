import {Component} from 'react'
import './index.css'
import {Container,Row,Col} from 'react-bootstrap'
import ProductView from './accordain'
import Sidebar from '../../Sidebar/index'
import ShopNavebar from '../navbar'
import BottomNavbar from '../../Home/bottomNavbar'
// import Button from 'react-bootstrap/Button';
import ProjectPopup from './projectPopup'
import Cookies from 'js-cookie'
import SwipeableViews from 'react-swipeable-views'

const initialreferenceImagesList=[{
    refrerdImg:"https://media.istockphoto.com/id/1047335262/photo/kitchen-interior-with-sink-cabinets-stainless-steel-in-new-luxury-home.jpg?s=612x612&w=0&k=20&c=1bo0q4tiWTFx62fETfU1czUKudoVkdKKzdbkBmPeg-E=",

},{
    refrerdImg:"https://cdn.trendir.com/wp-content/uploads/2016/12/Villeroy-Boch-kitchen-sink.jpg"

},
{
    refrerdImg:"https://assets-news.housing.com/news/wp-content/uploads/2022/02/01225202/8-latest-bathroom-sink-designs-shutterstock_1670779702-1200x700-compressed.jpg"

},
{
    refrerdImg:"https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2020/02/20165417/07.png"
},]
let jwtToken=""
class SingleProductView extends Component{
    state={referenceImagesList:initialreferenceImagesList,singleProductData:[],splitedImages:[],activeIndex:0,projectSpaces:[]}

    getProductsData= async()=>{
       
        const productId=localStorage.getItem("productId")
        const productDetails={productId,hello:"hello"}
        const apiUrl="http://13.233.231.34:9000/productDetailview"
        const options={
            method:"POST",
            headers:{
                "Content-Type":"Application/json",
                "Authorization":`Bearer ${jwtToken}`
            },
            body:JSON.stringify(productDetails)
        }
        const response=await fetch(apiUrl,options)
        const data=await response.json()
        if(response.ok===true){
            this.setState({singleProductData:data})
            console.log(data)
            const splitedImages=data.thumbnail.split(",");
            this.setState({splitedImages})
           



        }
       
    }
    //  projectApiCall=async()=>{
    //     console.log("AWesrdfghvjbnm")
       
    //     const apiUrl="http://13.233.231.34:9000/projectsInStore"
    //     const options={
    //       method:"GET",
    //       headers:{
    //         "Content-Type":"Application/json",
    //         "authorization":`Bearer ${jwtToken}`
    //       },
    //     }
    //     const response=await fetch(apiUrl,options)
    //     const data=await response.json()
    //     this.setState({projectDetails:data})
      
  
    //   }
       spaceFun=async(projectId)=>{
        
        const spaceDetails={projectId,hello:"hello"}
        const apiUrl="http://13.233.231.34:9000/spaceCards"
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
            this.setState({projectSpaces:data})
            console.log(data,"projectIdvv")
        }
        else{
            this.setState({projectSpaces:[]})
            console.log(data,"")
        }
       

   }
   
    componentDidMount(){
        jwtToken=Cookies.get("jwt_token")
        localStorage.setItem("spaceIdArray","");
        const   parseProjectId=localStorage.getItem("storeProject")
        const projectId=JSON.parse(parseProjectId)
        this.getProductsData()
        // this.projectApiCall()
        this.spaceFun(projectId)
    }
     handleSlideChange = (index) => {
        this.setState({activeIndex:index});
      };
    render(){
      const {singleProductData,splitedImages,activeIndex,projectSpaces}=this.state
        return(
            <>
            <div className='bg-container-product-view'>
            <div className='dash-row'>
            <div className='sidebar-container'>
            <Sidebar/>
            </div> 
            {/* <ShopNavebar projectDetails={projectDetails}/>          */}
            <div className='bg-container1 shadow'>
              
            <Container>
                <Row>
                    <Col md={6}>
                        <SwipeableViews enableMouseEvents index={activeIndex} onChangeIndex={this.handleSlideChange}>
                        {splitedImages.map(eachImage=>
                        <>
                          <div className='post-count-div'> <p className='post-count'>{`${activeIndex+1}/${splitedImages.length}`}</p></div>
                           <img alt="products" src={`http://13.233.231.34:9000/${eachImage}`} className='img-fluid productSize'/></> )}
                          
                           </SwipeableViews>
                        
                        <div className='referImgDiv'>
                        {splitedImages.map(eachImage=>
                           <img alt="smallimg" src={`http://13.233.231.34:9000/${eachImage}`} className="referedImg"/>)}
                        </div>
                    </Col>
                    <Col md={6}>
                       <div className='descDiv'>
                        <h5>{singleProductData.title}</h5>
                        {singleProductData.quantity==0? <h5 style={{color:"red"}}>Not Available</h5>:null}
                       
                        <h5>MRP : ₹{singleProductData.price}</h5>
                        <ProjectPopup projectSpaces={projectSpaces} singleProductData={singleProductData}/>
                       {/* <Button variant="secondary" className="ml-4 mt-3 mb-5">Get Quote</Button>
                       <Button variant="secondary" className="ml-4 mt-3 mb-5">Add to Wishlist</Button> */}
                       <ProductView singleProductData={singleProductData}/>
                      
                       </div>
                    </Col>
                </Row>
            </Container>
            <BottomNavbar/>
        </div>
        </div>
        </div>
        </>
        )
    }
}
export default SingleProductView