import {Component} from 'react'
import Accordion from 'react-bootstrap/Accordion';

const iniialInformationItems=[{
    name:"L*H*B",
    id:1,
    desc:21*5*21
},
{
    name:"Brand",
    id:2,
    desc:"TATA"
},
{
    name:"Tax",
    id:3,
    desc:12
},
{
    name:"Shipping Fee",
    id:4,
    desc:50
},
{
    name:"Available Units",
    id:5,
    desc:20
},
{
    name:"Material",
    id:6,
    desc:"Kitchen"
},
{
    name:"Tag",
    id:7,
    desc:"Kitchen,Residentional,Sink"
},
{
    name:"Features",
    id:8,
    desc:"Long Losting Durability"
},
{
    name:"Finish",
    id:14,
    desc:"Stainless Steel"
},
{
    name:"Estimation Time to Delivery",
    id:9,
    desc:"20Days"
},
{
    name:"Categories",
    id:10,
    desc:"Residentional Official"
},
{
    name:"Sub Categories",
    id:11,
    desc:"Sink"
},
{
    name:"Styles",
    id:12,
    desc:"Modern,Contemporary"
},
{
    name:"Spaces",
    id:13,
    desc:"Living Room,Kitchen"
}]
const Information=(props)=>{
    const {informationItems}=props
    const {name,desc}=informationItems
    return(
        <p className="information"><strong>{name}</strong>: {desc}</p>
    )
}
class ProductView extends Component{
    state={informationItems:iniialInformationItems}
    render(){
        const {informationItems,}=this.state
        const {singleProductData}=this.props
        const {tour_description,category,designStyle,duration,location,occupancy,propertySize,tags}=singleProductData
        return(
            <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Description</Accordion.Header>
        <Accordion.Body>
        {tour_description
}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Additional Information</Accordion.Header>
        <Accordion.Body>
            <div className='informationDiv'>
                {/* {informationItems.map(eachItem=>
                <Information informationItems={eachItem} key={eachItem.id}/>
                    )} */}
                     <p className="information"><strong>category</strong>: {category}</p>
                     <p className="information"><strong>Design Style</strong>: {designStyle}</p>
                     <p className="information"><strong>duration</strong>: {duration}</p>
                     <p className="information"><strong>location</strong>: {location}</p>
                     <p className="information"><strong>occupancy</strong>: {occupancy}</p>
                     <p className="information"><strong>propertySize</strong>: {propertySize}</p>
                     <p className="information"><strong># Tags</strong>: {tags}</p>
                     {/* <p className="information"><strong>quantity</strong>: {quantity}</p>
                     <p className="information"><strong>shipping Charges</strong>: ₹ {shippingCharges}</p>
                     <p className="information"><strong>Tax</strong>: {tax} %</p> */}
                     {/* <p className="information"><strong>quantity</strong>: {quantity}</p>
                     <p className="information"><strong>shipping Charges</strong>: ₹ {shippingCharges}</p> */}
            </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        )
    }
}
export default ProductView;