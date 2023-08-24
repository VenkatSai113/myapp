import { useState } from "react"
import {TiTick} from 'react-icons/ti'
import "./index.css"
let totalPrices=parseInt(0)
let margin=parseInt(0)
let finalPriceArray=[]
const EstimateSpaceTableList=(props)=>{
  const {spaceProduct}=props
  const {spaceName,title,quentity,price}=spaceProduct
  const [finalPrice,setFinalPrice]=useState("")
  console.log(finalPrice,"finalPrice")
  const addMargin=(event)=>{
     margin=event.target.value
   
    //  totalPrices+=totalPrice
    // console.log(price)
     
  }
  const onTickaddMargin=()=>{
  
    const totalPrice=parseInt(margin)+parseInt(price)
    console.log(totalPrice)
    finalPriceArray.push(totalPrice)
    localStorage.setItem("finalPriceArray",finalPriceArray)
    console.log(finalPriceArray)
    setFinalPrice(totalPrice)
  }
    return(
        <tr>
        <th scope="row">1</th>
        <td>{spaceName}</td>
        <td>{title}</td>
        <td>{quentity}</td>
        <td>{quentity * price}</td>
        <td>
        <input type="number"  onChange={addMargin}/> <TiTick className="tick-icon" onClick={onTickaddMargin}/></td>
        <td>{finalPrice}</td>
      </tr>
    )
}
export default EstimateSpaceTableList