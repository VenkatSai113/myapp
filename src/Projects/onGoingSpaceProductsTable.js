
const SpaceProductsTable=(props)=>{

    const {spaceProducts}=props
    const {title,quentity,productSize}=spaceProducts
    
    return(
        <tr>
        {/* <th scope="row">{i}</th> */}
        <td>{title}</td>
        <td>{productSize}</td>
        <td>{quentity}</td>
      </tr>
    ) 
}
export default SpaceProductsTable