
import {Component} from 'react'
import Sidebar from '../Sidebar'
import './index.css'
import { Container,Row,Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import UploadProfileImg from './uploadProfile'
import ProfileTopNavbar from './profileTopNav'


class Account extends Component{
    state={username:""}
    changeName=(event)=>{
        console.log(event.target.value)
    }
    render(){
        return(
            <>
            <div className='profile-bg-container'>
            <div className='dash-row'>
            <div className='sidebar-container'>
            <Sidebar/>     
            </div>
            <div className='dashboard-container'>
            <ProfileTopNavbar/>
                <h3 className='dash-heading'>Account</h3>
                <div className='product-containers'>
                    <Container fluid>
                        <Row>
                            <Col md={4}>
                                <label htmlFor='userName' className='projectName'>User Name</label>
                                <input id="userName" type="text" onChange={this.changeName} className='form-control'/>
                                <label htmlFor='phoneNo' className='projectName'>Phone Number</label>
                                <input id="userName" type="number" className='form-control'/>
                                <label htmlFor='userName' className='projectName'>Address</label>
                                <textarea id="userName" type="text" className='form-control'></textarea>
                                <Button variant="primary" className='mt-4'>Save Changes</Button>
                                <div className='change-password-div'>
                                    <p className='password-text'>password</p>
                                    <div className='d-flex flex-row'>         
                                    <p className='change-password-text'>You can Reset your<br></br> password By clicking here</p>
                                    <div>
                                    <Button variant="secondary">Change</Button>
                                    </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                            <label htmlFor='phoneNo' className='projectName'>Email</label>
                                <input id="userName" type="email" className='form-control '/>
                            </Col>
                            <Col md={4}>
                                <UploadProfileImg/>
                            </Col>
                        </Row>
                    </Container>
            </div>
            </div>       
        </div>
        </div>
        </>
        )
    }
}
export default Account