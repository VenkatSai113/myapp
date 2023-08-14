import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {CgDetailsMore} from 'react-icons/cg'
import {HiOutlineTrendingUp} from 'react-icons/hi'
import {BsBell} from 'react-icons/bs'
import {BiTimeFive} from 'react-icons/bi'
import {Link,withRouter} from 'react-router-dom'
import {BsBookmark} from 'react-icons/bs'
import Cookies from 'js-cookie';
import {Tb360View} from 'react-icons/tb' 
import {IoMdLogOut} from 'react-icons/io'

const  NavbarItems1=(props)=>{
  const [smShow, setSmShow] = useState(false);
 const logout=()=>{
    Cookies.remove("jwt_token")
    const {history}=props
    history.replace("/login")
}
  return (
    <>
      <CgDetailsMore onClick={() => setSmShow(true)} />
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <>
                <Link className='sub-card-container' to="/shop">
                    <p className='sub-container-item'>Shop</p>
                   
                </Link>
                {/* <Link className='sub-card-container' to="/activity">
                    <p className='sub-container-item'>Activity</p>
                   
                </Link> */}
                {/* <Link className='sub-card-container' to="/trending">
                    <p className='sub-container-item'>Trending</p>
                  
                </Link> */}
                <Link className='sub-card-container' to="/projects">
                    <p className='sub-container-item'>Projects</p>
                  
                </Link>
                <Link className='sub-card-container' to="/savedposts">
                    <p className='sub-container-item'>Saved</p>
                   
                </Link>
                <Link className='sub-card-container' to="/savedTours">
                    <p className='sub-container-item'>360 Virtual Tours</p>
                 
                </Link>
                <Link className='sub-card-container' to="/invitation">
                    <p className='sub-container-item'>Invite</p>
                  
                </Link>
                <div className='sub-card-container'>
                    <p className='sub-container-item' onClick={logout}>Log Out <IoMdLogOut className='icon-style ml-2'/></p>
                </div>
            </>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default withRouter(NavbarItems1)