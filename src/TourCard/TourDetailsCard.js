import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./index.css"
import {Link,withRouter} from 'react-router-dom'
import { CiEdit } from 'react-icons/ci';
import {AiOutlineDelete,AiFillEye} from 'react-icons/ai'
import Example from './shareOptions'
import { useState ,useEffect} from 'react';

function TourCards(props) {
    const {tourDetails,onClickDeleteTourDetails}=props
    const {tour_name,thumbnail_image,tour_id,tour_description,postId}=tourDetails
    const [perPage,setPerPage]=useState([])
   
    const  onClickDeleteTour=()=>{
      let text = "Are you sure you want to delete the Tour";
        if (window.confirm(text) === true) {
      onClickDeleteTourDetails(tour_id)
        }
    }
    const editScenetourId=()=>{
       localStorage.setItem("tourId",tour_id)
       const {history}=props
       history.push("/editvirtualtour")
    }
    
  return (
    <div className='col-lg-4 col-md-6 col-12 mt-3 '>
    <Card style={{ width: '18rem' }}>
    <Link to={`/createdviewer:${tour_id}`}><Card.Img variant="top" className="tourThumbnail" src={`http://13.233.231.34:9000/${thumbnail_image}`} /></Link>
      <Card.Body>
        <div className='d-flex flex-row justify-content-between'>
        <Link to={`/createdviewer:${tour_id}`} className='tour-name'> <Card.Title >{tour_name}</Card.Title></Link>
        <Example tour_id={tour_id} postId={postId} tour_description={tour_description}/>
        </div>
        <Card.Text>
        {tour_description}
        </Card.Text>
        <div className='d-flex flex-row justify-content-between'>
       <Link to={`/VirtualtourdetailView:${tour_id}`}><Button variant="primary" size="sm" >Detail View <AiFillEye className='icon-style1'/></Button></Link> 
        {/* <Button variant="primary" size="sm" onClick={editScenetourId}> Edit <CiEdit className='icon-style'/></Button> */}
        <Button variant="danger" size="sm" onClick={onClickDeleteTour}>Delete <AiOutlineDelete className='icon-style1'/></Button> 
        </div>
      </Card.Body>
    </Card>
    </div>
  );
}

export default withRouter(TourCards);