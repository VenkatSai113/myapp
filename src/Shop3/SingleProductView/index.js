import {Component} from 'react'
import './index.css'
import {Container,Row,Col} from 'react-bootstrap'
import ProductView from './accordain'
import Sidebar from '../../Sidebar/index'
import ShopNavebar from '../navbar'
import BottomNavbar from '../../Home/bottomNavbar'
import Button from 'react-bootstrap/button'
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
    state={referenceImagesList:initialreferenceImagesList,singleProductData:[],splitedImages:[],activeIndex:0}

    getProductsData= async()=>{
        jwtToken=Cookies.get("jwt_token")
        const productId=localStorage.getItem("productId")
        const productDetails={productId,hello:"hello"}
        const apiUrl="https://objective-wright.69-49-231-148.plesk.page/productDetailview"
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
    componentDidMount(){
        this.getProductsData()
    }
     handleSlideChange = (index) => {
        this.setState({activeIndex:index});
      };
    render(){
      const {singleProductData,splitedImages,activeIndex}=this.state
        return(
            <>
            <div className='bg-container-product-view'>
            <div className='dash-row'>
            <div className='sidebar-container'>
            <Sidebar/>
            </div> 
            <ShopNavebar/>         
            <div className='bg-container1 shadow'>
              
            <Container>
                <Row>
                    <Col md={6}>
                        <SwipeableViews enableMouseEvents index={activeIndex} onChangeIndex={this.handleSlideChange}>
                        {splitedImages.map(eachImage=>
                        <>
                          <div className='post-count-div'> <p className='post-count'>{`${activeIndex+1}/${splitedImages.length}`}</p></div>
                           <img alt="products" src={`https://objective-wright.69-49-231-148.plesk.page/${eachImage}`} className='img-fluid productSize'/></> )}
                          
                           </SwipeableViews>
                        
                        <div className='referImgDiv'>
                        {splitedImages.map(eachImage=>
                           <img alt="smallimg" src={`https://objective-wright.69-49-231-148.plesk.page/${eachImage}`} className="referedImg"/>)}
                        </div>
                    </Col>
                    <Col md={6}>
                       <div className='descDiv'>
                        <h5>{singleProductData.title}</h5>
                        <h5>MRP : ₹{singleProductData.price}</h5>
                       <ProductView singleProductData={singleProductData}/>
                       {/* <ProjectPopup/> */}
                       {/* <Button varient="secondory" className="ml-4">Get Quote</Button>
                       <Button varient="secondory" className="ml-4">Add to Wishlist</Button> */}
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