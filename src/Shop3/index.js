import {Component} from 'react'
import ShopNavebar from './navbar'
import ShopCarousel from './shopcarousel'
import Sidebar from '../Sidebar'
import './index.css'
import Materials from './materials'
import { v4 as uuidv4 } from 'uuid';
import BottomNavbar from '../Home/bottomNavbar'
import Button from 'react-bootstrap/Button';
import SimpleSlider from './shopSlider'
import { MdVerifiedUser } from 'react-icons/md';
import Cookies from 'js-cookie';

const meterialItems=[{
    materialImage:"https://5.imimg.com/data5/SELLER/Default/2023/2/UV/IJ/ZB/109711794/playwood-500x500.jpeg",
    materialName:"Wood",
    id:uuidv4()
 },
 {
    materialImage:"https://thumbs.dreamstime.com/b/wooden-parquet-3659513.jpg",
    materialName:"Laminates",
    id:uuidv4()
 },
 {
    materialImage:"https://thumbs.dreamstime.com/b/fabric-panels-door-covered-acoustic-board-pattern-surface-texture-hotel-interior-material-design-decoration-background-134476844.jpg",
    materialName:"Panels",
    id:uuidv4()
 },
 {
    materialImage:"https://i.pinimg.com/originals/f2/06/a7/f206a70c4ae0c16b9752e3a8e6e14720.jpg",
    materialName:"Quartz",
    id:uuidv4()
 },
 {
    materialImage:"https://media.istockphoto.com/id/1293993201/photo/ceramic-wall-texture-patchwork-tile-tiled-background.jpg?s=612x612&w=is&k=20&c=ixXba7C54N2HFVCwSlMcoKe3AoBZHeIrNc18NLBHPiE=",
    materialName:"Tiles",
    id:uuidv4()
 },
 {
    materialImage:"https://i.pinimg.com/originals/f2/06/a7/f206a70c4ae0c16b9752e3a8e6e14720.jpg",
    materialName:"Quartz",
    id:uuidv4()
 },
 {
    materialImage:"https://media.istockphoto.com/id/1304826235/photo/luxury-bathroom-interior-with-shower-toilet-mirror-and-yellow-towels.jpg?s=612x612&w=0&k=20&c=bUEbM3oGL_28QbeXrozy1ITjYFME42D2uOGrYh8iOkI=",
    materialName:"Marbles",
    id:uuidv4()
 },
 {
    materialImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMEDLxWPmyOIQY7dfdZTmv4nKuqHLUNcJszYBNltjh&s",
    materialName:"Veneers",
    id:uuidv4()
 },
 {
    materialImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxA0jr7IQSAHNlQtvtvjUDcQddx4A3j1wHxDX9YxTs&s",
    materialName:"MDF",
    id:uuidv4()
 },
 {
    materialImage:"https://www.zeyka.in/pub/media/catalog/product/h/d/hdhmr-board_22.jpg",
    materialName:"HDHMR",
    id:uuidv4()
 },
 {
    materialImage:"https://www.homelane.com/blog/wp-content/uploads/2021/10/kitchen-cabinets-hdf-fiberboard.jpg",
    materialName:"HDF",
    id:uuidv4()
 },
 {
    materialImage:"https://e3panels.com/wp-content/uploads/2021/06/usage-of-edgeband-1080x675.jpeg",
    materialName:"Edgebands",
    id:uuidv4()
 },
 {
    materialImage:"https://www.architectureartdesigns.com/wp-content/uploads/2016/03/12-38-1280x720.jpg",
    materialName:"Wood Floor",
    id:uuidv4()
 },
 {
    materialImage:"https://m.media-amazon.com/images/I/71B+qNYG96L._SL1500_.jpg",
    materialName:"Electronics",
    id:uuidv4()
 },
 {
    materialImage:"https://pspdynamic.com/new/wp-content/uploads/2021/10/wire-and-cable-industry-1-750x430-1.jpeg",
    materialName:"Wires And Cables",
    id:uuidv4()
 },
 {
    materialImage:"https://www.aquantindia.com/wp-content/uploads/2020/04/Aquant-Concrete-Basin-7506.jpg",
    materialName:"Basins",
    id:uuidv4()
 },
 {
    materialImage:"https://www.lycosceramic.com/wp-content/uploads/2022/07/water-closet.jpg",
    materialName:"Water Closets",
    id:uuidv4()
 },
] 
class Shop3 extends Component{
   state={projectDetails:[]}
   componentDidMount=()=>{
      const projectApiCall=async()=>{
         console.log("AWesrdfghvjbnm")
         const jwtToken=Cookies.get("jwt_token");
         const apiUrl="http://localhost:9000/projectsInStore"
         const options={
           method:"GET",
           headers:{
             "Content-Type":"Application/json",
             "authorization":`Bearer ${jwtToken}`
           },
         }
         const response=await fetch(apiUrl,options)
         const data=await response.json()
         this.setState({projectDetails:data})
       
   
       }
       projectApiCall()
   }
    render(){
      const {projectDetails}=this.state
        return(
            <div>
            <div className='d-flex flex-row'>
            <Sidebar/>
            <div className='d-flex flex-column shop3-container'>
               
            <ShopNavebar projectDetails={projectDetails} />
            <ShopCarousel/>
            <div className="shop-content-div">
                <h1 className='shop-material-text'>Architecture & Interior design ready material for your 3D <br></br>models.</h1>
                <div className='material-row-div'>
                    { meterialItems.map(eachMaterial=>
                        <Materials matrtielsProp={eachMaterial} key={eachMaterial.id}/>)}
                        </div>
                        <h3 className="categories-text">50+ categories to discover texture from</h3>
                        <Button variant="warning" className="mt-4">Explore Now</Button>{' '}
                        <div className="architects-and-designers-div">
                          {/* <div className="shop-slider-div">
                           <SimpleSlider/>
                           </div>  */}
                           {/* <div className='review-div mb-5'>
                           <h3 className="categories-text">Loved by over 15,000 architects & designers.</h3>
                           <p className='slider-profile-review-description'>Here’s what some of them have to say.</p>
                           <div className="signup-button1"><Button variant="warning" >Signup Now</Button>{' '}</div>
                              </div>             */}
                           </div>
                         <div className="curated-architects-designers">
                           <div className='curated-architects-designers-body'>
                              <div className='curated-architects-designers-content'>
                              <h1 className="shop-Curated-text">Curated with love for architects & designers</h1>
                               <p className="material-depot-text">Design Alley curates materials from top brands in<br></br> India for ready to be deployed for your 3D<br></br> renderings</p>
                               <div className='d-flex flex-row'>
                               <p>< MdVerifiedUser className='verified-icon'/></p>
                               <p className='actual-materials-text'>Actual materials</p>
                               </div>
                               <div className='d-flex flex-row'>
                               <p>< MdVerifiedUser className='verified-icon'/></p>
                               <p className='actual-materials-text'>150+ Top brands</p>
                               </div>
                               <div className='d-flex flex-row'>
                               <p>< MdVerifiedUser className='verified-icon'/></p>
                               <p className='actual-materials-text'>Always free*</p>
                               </div>
                               <div className='explore1-div'>
                               <Button variant="warning" >Signup Now</Button>{' '}
                               </div>
                              
                              </div>
                            <img className="curated-architects-image" src="https://images.adsttc.com/media/images/59f2/285c/b22e/3819/9400/0538/original/Top_15_Products_Materials_ArchDaily.gif?1509042265" alt=""/>
                           </div>
                           </div>
                           <div className="curated-architects-designers">
                           <div className='curated-architects-designers-body'>
                           <img className="curated-architects-image" src="https://archi-monarch.com/wp-content/uploads/2022/08/MODERN-ARCHITECTURE.webp" alt=""/>
                              <div className='curated-architects-designers-content1'>
                              <h1 className="shop-Curated-text">Super fast material search that saves your design time.</h1>
                               <p className="material-depot-text">Design Alley curates materials from top lining brands for ready to be deployed for your 3D renderings.</p>
                               <div className='d-flex flex-row'>
                               <p>< MdVerifiedUser className='verified-icon'/></p>
                               <p className='actual-materials-text'>Powerful filters</p>
                               </div>
                               <div className='d-flex flex-row'>
                               <p>< MdVerifiedUser className='verified-icon'/></p>
                               <p className='actual-materials-text'>Wide variety of brands</p>
                               </div>
                               <div className='d-flex flex-row'>
                               <p>< MdVerifiedUser className='verified-icon'/></p>
                               <p className='actual-materials-text'>Curated inspiration</p>
                               </div>
                               <div className='explore1-div'>
                               <Button variant="warning" >Let's Start</Button>{' '}
                               </div>
                              
                              </div>
                          
                           </div>
                           </div>
                           <h1 className="shop-Curated-text1 mt-5 mb-4">Trusted by the finest <span className="indian-brands-text">Indian brands</span></h1>
                           <div className='brand-images'>
                              <img alt="" src="https://materialdepot.in/static/media/Logo-02.ffe5f579.png" className='brand-image'/>
                              <img alt="" src="https://materialdepot.in/static/media/Logo-03.ad778493.png" className='brand-image'/>
                              <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAABdCAYAAAB6vP7zAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUJSURBVHgB7dzhdds2EAfwU1+/V52g6AR1JygzQdQJokxgewJRE9iewNIElSeQMkGUCYROUG+A3j1CNaMSIEAeFYn5/97DUyyQOIo8ESBIhQgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODsJgTqnHNTfim4TH0RlsvrZDLZkQIfw3C5qb1tpXAMS8qSEoU36pFf3jdUWS5PvGEbysDtbQNVe27rvmH5u0B8cc/r7Onrbf2NdH1s2/n+wN1ymVN1AENeuey4vHCbK8pQi1H4EmJ9jKf6vhkcb+DKxRWZ7YVsO8QvTpbdOn0m8lmmXB5cN3eUtr8kxoLLPy7fNrb9qX4gHc+uyvbviquS9DOXpAPe4H3bArUYJb11YzkKLgdJNOpBK1EMl2f6jvCO/8AvcgY0NBCOcasYo+T2Oh8jrUQRs9RT6bXzSbKi/iyFY8gZ4JF0zbsmy4+ka8Ebshli1J1hzeVToE4OsAnULSl84F6P//D9feoB3NfWlW7jJmUljiHLlTQMSZbXpouG3lz7YParwVNCe1nruozBbEvcbd92eLmDi5MBp5zmp4H1C/95pJ1NQ/00Mcajb8vU1pO/7xLWT/68WVxeooiHlvZCLjpReJm5izu4jCsMV505Tt9btMTYpsRwVbJG2yFtLj9RRBFpL2vj3eUkyiGyvtQZ6qklxiqzrbbELlLb0hzMnnp2I7pk9jvVRBZ513dsJgc2EuMLtz+nDH5CLzYWSb5k1kgUG3jf0LgumWeRupXSAH7WsS6It0sG3rtA9U3ql1kjUeRq4SlQN6ZL5thtgSfS8Ufg/ZeeibgMvJ98JabV9ZQUPrMsNPruCxDaoVbjfor/Zoe+3Vn30hrUL9NPnS9ReEfJRnwMVMuH345gvBLafks6TKTOUg/++IQS5Wxdz3FjdhQ+BRvKGDhdGUs6pgPHsIH3f6EE2lc9JYU36G5E45U6QzpspE7jbBxq429KoJooLV2QkPFKUp94gXr18T3aFwX14Lv9mw5x/6M+j9LSBckG/0XXKTRgnTqF6XD/JbOB6tbHEVrELq2TBuJDTbiVFJ9fuUafInUfaNgYRc9kjI0Pv12iJHRB12gXqZs7nZtsq0hdp5luVz2uYALVL/5YtRpsCr+lC7o6/vPsIos8950v8jFCB85wechJFlc9N1NGFkmenxnyXo8oSe/y8RIsI3WGqvkiQwlc9VjALDPGnMvnthi+bbmDv4osZnMe7h40UcbWBSWcVQxVB7JxNtq9PTPyyH8eqHqi/jSG1O1bYhy4DTmDzY5nmFrbC99221TEO8qg/YTb/8jO5Y2XLuiWxkESP/Ycqxy4kqpnVOtT56ZhHUvxGLFuZu6LJAllWubeOxq66zkqaSRdkN/Bf1La/IPMXRS+GErk7x3pP6pYWXP7JWU6S6KMsAuSAymn7qQrhoifIzFWpL/P1rnPtByd64wyxqsgSZbfqd+Z8ieKx1gpxBCS0Pddk0ScLVG8kkZ0FSTdEJdfKf4Ef8y6bYFaQi6pm52s7wfJnaUOZndcQiMmS4mkC+KBl5yyZUQudy1PB2tfAqtuInFC7zd5oYSfZOSSPt8/z1pQNUtbRBaXOPJ51qk/WPdddz2GXBjE7jFZqj7rZqL0o3j8bwYDqN2EM/T2ZZCDvdf60XgtxrQhhiUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDr9y/GJtue1vkMGwAAAABJRU5ErkJggg==" className='brand-image'/>
                              <img alt="" src="https://materialdepot.in/static/media/Jaquar.df561913.png" className='brand-image'/>
                              <br></br>
                              <img alt="" src="https://materialdepot.in/static/media/Viva.679bba1f.png" className='brand-image'/>
                              <img alt="" src="https://materialdepot.in/static/media/Pacific.666d434d.png" className='brand-image'/>
                              <img alt="" src="https://materialdepot.in/static/media/Quantra.12f0b663.png" className='brand-image'/>
                              <img alt="" src="https://materialdepot.in/static/media/Logo-02.ffe5f579.png" className='brand-image'/>
                           </div>
                          
                           <h1 className="shop-Curated-text1 mt-5 mb-4"> Dive right into unlimited <span className="indian-brands-text">textures.</span></h1>
                           <p className='actual-materials-text'>Signup now and get access to top quality rendering assets from real world materials.</p>
                           <div className='mb-5'>
                           <Button variant="warning" >Signup Now</Button>{' '}
                           <Button variant="outline-secondary" className='ml-4'>Explore Material</Button>{' '}
                         
                           </div>
                        <BottomNavbar/>
            </div>
                </div>
            </div>
            </div>
        )
    }
}
export default Shop3