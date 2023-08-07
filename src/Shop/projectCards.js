import {Col} from 'react-bootstrap';
const ProjectCard=(props)=>{
    const {projectItems}=props
    const {name,status,image,newDescription}=projectItems
    return(
        <Col md={4}>
            <p>
        <div className='card-div'>
            <img src={image} className='card-image' alt="design" />
            <p className='desigenerName'>{name}</p>
            <p className='desigenerDesciption'>Project Description :</p>
            <p className='interiorDesciption'>{newDescription}</p>
            <p className='interiorDesciption'><span className='desigenerDesciption'>{status}</span>{status}</p>
            </div>
            </p></Col>

    )
}
export default ProjectCard