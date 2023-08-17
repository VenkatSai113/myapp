import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';

const  ShopNavebar=(props)=> {
  const {projectDetails}=props
  console.log(projectDetails,"projectDetails")
 const [projectnames,setProjectnames]=useState([])
 useEffect(()=>{
  setProjectnames(projectDetails)
  console.log("projectDetailsprojectDetailsprojectDetails")
 })
 const selectProject=(event)=>{
  let projectId=event.target.value
  localStorage.setItem("storeProject",projectId);
  console.log(event.target.value)
 }
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img src="https://designalley.in/wp-content/uploads/2022/03/Logo.png" alt="sidebar logo" className='navbar-logo1'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <select className='form-control me-2' onChange={selectProject}>
              {projectnames.map(eachProject=>
               <option id={eachProject.projectId} value={eachProject.projectId}>{eachProject.title}</option>)}
            </select>
            {/* <Nav.Link href="#action1">Brands</Nav.Link>
            <Nav.Link href="#action2">Categories</Nav.Link> */}
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="#" disabled>
              Projects
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ShopNavebar;