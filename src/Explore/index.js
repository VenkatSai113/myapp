import {Component} from 'react'
import './index.css'
import {Container,Row,Col} from 'react-bootstrap'
import {Example1} from './FilterModel'
import Sidebar from '../Sidebar'
import TopNavbar from '../Home/topNavbar'
import BottomNavbar from '../Home/bottomNavbar'
import ProdutsList from './exploreImages'
import {GrGallery} from 'react-icons/gr'
import {HiOutlinePhotograph} from 'react-icons/hi'
import {MdSlowMotionVideo} from 'react-icons/md'
import {TbRotate360} from 'react-icons/tb'
import DesktopTabItems from './desktopTabItems'
import MobileViewTabs from './mobileViewTabItems'

const desktopTabItems=[{
    tabicon:<GrGallery/>,
    displaidText:"All",
    TabId:"All",
},
{
    tabicon:<HiOutlinePhotograph/>,
    displaidText:"Photos",
    TabId:"Photos",
}
,
{
    tabicon:<MdSlowMotionVideo/>,
    displaidText:"Videos",
    TabId:"Videos",
},
{
    tabicon:<TbRotate360/>,
    displaidText:"360 Virtual Toure",
    TabId:"360Toure",
},]
const initialProductDetails=[{
    id:1,
    name:"Sofa set",
    price:5000,
    catagory:"Videos",
    image:"https://ii1.pepperfry.com/media/catalog/product/m/e/800x400/mersin-3-seater-sofa-in-teal-colour---amberville-in-pepperfry-mersin-3-seater-sofa-in-teal-colour----e6zofn.jpg"
},{
    id:2,
    name:"Tile",
    price:2000,
    catagory:"Photos",
    image:"https://www.sakarmarbo.com/wp-content/uploads/2018/11/hero-soluble-salt-nano-tile-1.jpg"
}
,{
    id:3,
    name:"Shink",
    price:1000,
    catagory:"Videos",
    image:"https://media.istockphoto.com/id/1047335262/photo/kitchen-interior-with-sink-cabinets-stainless-steel-in-new-luxury-home.jpg?s=612x612&w=0&k=20&c=1bo0q4tiWTFx62fETfU1czUKudoVkdKKzdbkBmPeg-E="
}
,{
    id:4,
    name:"Door",
    price:6000,
    catagory:"Videos",
    image:"https://i.ytimg.com/vi/RY1lSaNfdH8/maxresdefault.jpg"
}

,{
    id:6,
    name:"Ceiling",
    price:9000,
    catagory:"Photos",
    image:"https://www.99homeplans.com/wp-content/uploads/2017/03/ceiling-color-ideas-decoration-home-interior.jpg"
},{
    id:7,
    name:"Ceiling",
    price:9000,
    catagory:"Photos",
    image:"https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2021/06/10131120/interior-wall-design.jpg",
},{
    id:8,
    name:"Ceiling",
    price:9000,
    catagory:"Photos",
    image:"https://images.adsttc.com/media/images/5f2c/8545/b357/65db/c000/008c/large_jpg/FEAT_ID.jpg?1596753213"
},{
    id:9,
    name:"Ceiling",
    price:9000,
    catagory:"360Toure",
    image:"https://www.shutterstock.com/image-photo/stylish-interior-design-living-room-260nw-1723139395.jpg"
},{
    id:10,
    name:"Ceiling",
    price:9000,
    catagory:"360Toure",
    image:"https://www.rennovate.co.in/wp-content/uploads/2022/09/blog10-1.jpg"
},{
    id:11,
    name:"Ceiling",
    price:9000,
    catagory:"360Toure",
    image:"https://media.designcafe.com/wp-content/uploads/2020/02/21005335/interior-design-ideas-for-hall.jpg"
}]

class Explore extends Component{
    state={productDetails:initialProductDetails,userSearch:"",desktopTabItemsId:"All"}
   
    onSearch=(event)=>{
        const userSearchInput=event.target.value
       this.setState({userSearch:userSearchInput})
    }
    filteredProjects=()=>{
        const {productDetails,desktopTabItemsId}=this.state
       const activetab1= productDetails.filter(eachItem=>
            eachItem.catagory===desktopTabItemsId)
            if(desktopTabItemsId==="All"){
                return(productDetails)
            }
            return(activetab1)
    }
    updateActiveTabId=(TabId)=>{
        this.setState({desktopTabItemsId:TabId})
    }
    
    
    render(){
        const {productDetails,userSearch,desktopTabItemsId}=this.state
        const resultProducts=productDetails.filter(eachItem =>
            eachItem.name.toLowerCase().includes(userSearch))
            const activetab=this.filteredProjects()
        
        return(
            <>
            <Sidebar/>
            <TopNavbar/>
            <div className='explore-bg-container'>
            <Container fluid>
                <Row>
                    <Col md={12}>
                       <h6>Finalized Design</h6>
                        <div className='filter-row-div'>
                        <input type="search" className='form-control mr-4 mt-5' onChange={this.onSearch} placeholder="Search..."/>
                        {/* <Example1/> */}
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                    <div className='filter-icons-desktop-view'>
                        {desktopTabItems.map(eachlgtabItem=>
                            <DesktopTabItems  desktopTabList={eachlgtabItem} key={eachlgtabItem.TabId} updateActiveTabId={this.updateActiveTabId} desktopTabItemsId={desktopTabItemsId===eachlgtabItem.TabId}/>)}
                       </div>
                       <div className='filter-icons-mobile-view'>
                       {desktopTabItems.map(eachlgtabItem=>
                            <MobileViewTabs desktopTabList={eachlgtabItem} key={eachlgtabItem.TabId} updateActiveTabId={this.updateActiveTabId} desktopTabItemsId={desktopTabItemsId===eachlgtabItem.TabId}/>)}
                       </div>
                    </Col>
                    <div className='emtyDiv'>
                    </div>
                    {activetab.map(eactProduct=>
                    <ProdutsList productDetails={eactProduct} key={eactProduct.id}/>)}  
                </Row>
            </Container>
            <BottomNavbar/>
        </div>
        </>
        )
    }
}

export default Explore