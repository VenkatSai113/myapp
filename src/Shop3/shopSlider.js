import React, { Component } from "react";
import Slider from "react-slick";
import SliderReview from './SliderReview'
import './index.css'
const revieProfileDetails=[{
  profilename:"Shivani Tiwari",
  profileImage:"https://img.freepik.com/free-photo/business-finance-employment-female-successful-entrepreneurs-concept-friendly-smiling-office-manager-greeting-new-coworker-businesswoman-welcome-clients-with-hand-wave-hold-laptop_1258-59122.jpg",
  designation:"Interior Design",
  review:"Happy with HD textures found on Design Alley. They make our lives so easy as a 3D artist. We save a tone of time now in material Search thanks to this website.",
  id:1

},
{
  profilename:"Sakshi Agarval",
  profileImage:"http://www.stylecraze.com/wp-content/uploads/2013/12/Chanda-Kocchar.jpg",
  designation:"Interior Design",
  review:"I am Really happy with the website experience I actually used materials from Design Alley on my 3D model to render and  the result were fantastic.",
  id:2

},
{
  profilename:"Prajwal",
  profileImage:"https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=170667a&w=0&k=20&c=IlPFUqbP8NnWtIbXp_-udYStw89UHIhXEiEJ8wSIpT4=",
  designation:"Interior Design",
  review:"Happy with HD textures found on Design Alley. They make our lives so easy as a 3D artist. We save a tone of time now in material Search thanks to this website.",
  id:3

},
]
class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          {revieProfileDetails.map(eachReview=>
             <SliderReview reviewDetails={eachReview} key={eachReview.id} />)}
         
        </Slider>
      
      </div>
    );
  }
}
export default SimpleSlider