import {Link} from 'react-router-dom'
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const OngoingSpaceCard=()=>{
  
    return(
        <Link to={`hello`} className="link-project">
        <div className="project-card-container">
                        <img alt="project" src="https://media.designcafe.com/wp-content/uploads/2023/01/05102507/wfh-friendly-living-room-for-working-professionals.jpg" className="project-image-style"/>
                        <div className='project-background'>
                            <div className='d-flex flex-row justify-content-between'>
                            <p className="project-brand">brand</p>
                            {/* <div className="progressBar d-flex flex-row">
                                <label className='project-brand'>Completed</label>
       <ProgressBar now={percentage} label={`${percentage}%`}className='mt-2 ml-1'  style={{width:"100px"}} />
    </div> */}

                                </div>
                      
                            </div>
                       
                        {/* <p className="project-name">Project Description:</p>
                        <div className="description-div">
                        <p className="description">{description}</p>
                        </div>
                        <p className="project-name">Status :<span className="description">UpComing</span></p> */}
                    </div>
                    </Link>
    )
}
export default OngoingSpaceCard