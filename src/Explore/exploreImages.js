import {Link} from 'react-router-dom'
import {Col} from 'react-bootstrap'

const ProdutsList=(props)=>{
    const {productDetails}=props
    const {image}=productDetails
    return(
        <Col sm={6} md={4} lg={3}>
        <div className='product-card-container'>
            <Link to="/"><img src={image} alt="product" className='image-style'/></Link>
        </div>
        </Col>
    )
}
export default ProdutsList