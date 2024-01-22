import {Component} from 'react'
import ShopNavebar from '../navbar'
import Sidebar from '../../Sidebar'
import './index.css'
import TitlebarImageList from './shopproducts2'
import BottomNavbar from '../../Home/bottomNavbar'
import SelectedProducts from './shopProducts'
import Cookies from 'js-cookie'
import EmptyProduct from './Group 1374.png'

class ShopProducts extends Component{
    state={productData:[],projectDetails:[],}
   
    componentDidMount=()=>{
        let jwtToken=Cookies.get("jwt_token")
        // const projectApiCall=async()=>{
        //     console.log("AWesrdfghvjbnm")
           
        //     const apiUrl="https://venkatsai.onrender.com/projectsInStore"
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
        //   projectApiCall()
        const products=async()=>{
       
        const materialName=localStorage.getItem("materialName")
        const productDetails={materialName,hello:"hello"}
        console.log(materialName)
        const apiUrl="https://venkatsai.onrender.com/storeProducts"
        const options={
            method:"POST",
            headers:{
                "Content-Type":"Application/json",
                "Authorization":`Bearer ${jwtToken}`
            },
            body:JSON.stringify(productDetails)
        }
        const respone=await fetch(apiUrl,options)
        const data=await respone.json()
        console.log(data)
        const {productData}=this.state
        this.setState({productData:data})
        console.log(productData,"productData")
      

    }
    products()
   


    }
    render(){
        const {productData,projectDetails}=this.state
        return(
            <div>
            <div className='d-flex flex-row'>
            <Sidebar/>
            <div className='d-flex flex-column shop3-container'>
            {/* <ShopNavebar projectDetails={projectDetails}/> */}
            {productData.length===0?<img src={EmptyProduct} style={{height:"400px",width:"400px",margin:"auto"}}/>:<div className='product-cards'>
                {productData.map(eachImage=>
                    <SelectedProducts products={eachImage}/> )}
            </div>}
            <BottomNavbar/>
                </div>
            </div>
            </div>
        )
    }
}
export default ShopProducts