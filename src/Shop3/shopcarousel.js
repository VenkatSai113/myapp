import Carousel from 'react-bootstrap/Carousel';
import "./index.css"
import Button from 'react-bootstrap/Button'

function ShopCarousel() {
  return (
    <Carousel >
      <Carousel.Item>
        <img
          className="slider-image-shop"
          src="https://media.istockphoto.com/id/1210123439/photo/classic-gray-interior-with-armchairs-sofa-coffee-table-lamps-flowers-and-wall-moldings-3d.jpg?s=612x612&w=0&k=20&c=ZLrygb18zlJflkFAwtt6xc0GY4VKYGKRzvGDjPGu54Y="
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="shop-carousel-label-text">We  Provide Best Interior Service</h3>
          <Button variant="warning">Shop Now</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slider-image-shop"
          src="https://images.adsttc.com/media/images/5f2c/8545/b357/65db/c000/008c/large_jpg/FEAT_ID.jpg?1596753213"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3 className="shop-carousel-label-text">We  Provide Best Interior Service</h3>
          <Button variant="warning">Shop Now</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slider-image-shop"
          src="https://t3.ftcdn.net/jpg/03/73/51/06/360_F_373510690_cQQLplLNbi0l84A7sftZq8dSvdKOGCcj.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3 className="shop-carousel-label-text">We  Provide Best Interior Service</h3>
          <Button variant="warning">Shop Now</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ShopCarousel;