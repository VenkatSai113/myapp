import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BiFilterAlt } from 'react-icons/bi';
import './index.css'
import AccordianFilters from './AccordianFilter'

 function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="mt-5">
      <BiFilterAlt/>
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filter</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <AccordianFilters/>
            <Button variant="dark" className='applayBtn'>Aplly</Button>
            <Button variant="dark" className='applayBtn'>Reset</Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export function Example1() {
  return (
    <>
      {['end'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
       
    </>
  );
}
