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
    state={productData:[]}
    componentDidMount=()=>{
        const products=async()=>{
        const jwtToken=Cookies.get("jwt_token")
        const materialName=localStorage.getItem("materialName")
        const productDetails={materialName,hello:"hello"}
        console.log(materialName)
        const apiUrl="https://objective-wright.69-49-231-148.plesk.page/storeProducts"
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
        const {productData}=this.state
        return(
            <div>
            <div className='d-flex flex-row'>
            <Sidebar/>
            <div className='d-flex flex-column shop3-container'>
            <ShopNavebar/>
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