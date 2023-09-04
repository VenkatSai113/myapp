import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { Link } from 'react-router-dom';
function SelectedProducts(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const {products}=props
  const {productId,title,description,thumbnail}=products
  const splitedImages=thumbnail.split(",")
  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };
  const onClickProduct=()=>{
    localStorage.setItem("productId",productId)
  }

  return (
   
    <Card style={{ width: '18rem' ,margin:"7px" }} onClick={onClickProduct}>
      {splitedImages.length===1?<Card.Img variant="top" src={`http://13.233.231.34:9000/${splitedImages}`} style={{height:"180px" ,width:"100%"}} /> :<SwipeableViews enableMouseEvents  index={activeIndex} onChangeIndex={handleSlideChange}>
      {splitedImages.map(eachImage=>
      <>
      <div className='post-count-div'> <p className='post-count'>{`${activeIndex+1}/${splitedImages.length}`}</p></div>
       <Card.Img variant="top" src={`http://13.233.231.34:9000/${eachImage}`} style={{height:"180px" ,width:"100%"}} />  </>)}
      </SwipeableViews>}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {description}
        </Card.Text>
        <Link to="/singleproductview">
        <Button variant="primary">Detail View</Button>
        </Link>
      </Card.Body>
    </Card>
    
  );
}

export default SelectedProducts;