import Accordion from 'react-bootstrap/Accordion';

function FlushExample() {
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Design Style</Accordion.Header>
        <Accordion.Body>
         <ul>
            <li>Contemporary</li>
            <li>Modern</li>
         </ul>
        
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Category</Accordion.Header>
        <Accordion.Body>
        <ul>
            <li>Residential</li>
            <li>Renovation</li>
         </ul>
        
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Spces</Accordion.Header>
        <Accordion.Body>
         <ul>
            <li>Living Room</li>
            <li>Kitchen</li>
         </ul>
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Sub Category</Accordion.Header>
        <Accordion.Body>
         <ul>
            <li>Sofa</li>
            <li>Tiles</li>
         </ul>
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Feeds</Accordion.Header>
        <Accordion.Body>
         <ul>
            <li>Images</li>
            <li>Videos</li>
         </ul>
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Uploaded</Accordion.Header>
        <Accordion.Body>
         <ul>
            <li>Today</li>
            <li>This week</li>
         </ul>
          
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        
  );
}

export default FlushExample;