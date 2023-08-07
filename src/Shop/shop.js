import {Component} from 'react'
import './shop.css'
import {Container,  Row, Col,Button} from 'react-bootstrap';
import ProjectCard from './projectCards'
import Sidebar from '../Sidebar';

const initialprojectItems=[{
    id:1,
    name:"NAKSHATHRA Interior",
    image:"https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2021/06/10131120/interior-wall-design.jpg",
    status:"Completed",
    newDescription:"ghjghjg",
},{
    id:2,
    name:"RAM Interior",
    image:"https://www.nitidodesign.com/images/02_Featured%20Projects/01_Bombay%20Realty%20ICC%20Towers%20Residence%20-%20Residential%20Interiors%20-%201500%20sq%20ft/watermarked/01.JPG",
    status:"Upcoming",
    newDescription:"ghjghjg",
},{
    id:3,
    name:"PRIYA Interior",
    image:"https://interiordesign.net/wp-content/uploads/2022/12/Interior-Design-Claude-Cartier-Studio-France-idx221201_cc10-1024x686.jpg",
    status:"On Going",
    newDescription:"ghjghjg",
},
{
    id:4,
    name:"NAVYA Interior",
    image:"https://tasko.in/wp-content/uploads/2020/01/Top-Interior-Decoration-Company-in-Hyderabad-1.jpg",
    status:"Completed",
    newDescription:"ghjghjg",
},
{
    id:5,
    name:"PRAVALIKA Interior",
    image:"https://www.marmomac.com/wp-content/uploads/2020/11/Tendenze2020.jpg",
    status:"Upcoming",
    newDescription:"ghjghjg",
},
{
    id:6,
    name:"RAVALI Interior",
    image:"https://lines-hub.com/wp-content/uploads/2019/10/courtesy-of-Nina-Maya-Interiors-Vaucluse-Residence_Linesmag_1-1170x780.jpg",
    status:"On Going",
    newDescription:"ghjghjg",
},
{
    id:7,
    name:"OWAIS Interior",
    image:"https://lines-hub.com/wp-content/uploads/2019/10/courtesy-of-Nina-Maya-Interiors-Vaucluse-Residence_Linesmag_1-1170x780.jpg",
    status:"On Going",
    newDescription:"ghjghjg",
},]
class Shop extends Component{
    state={projectItems:initialprojectItems,userSearch:"",newDescription:"",projectName:"", selection:""}
    onSearchbyName=(event)=>{
        this.setState({userSearch:event.target.value})
        }
        newDescription=(event)=>{
           this.setState({newDescription:event.target.value})
        }
        newStatus=(event)=>{
            this.setState({status:event.target.value})
        }
        newName=(event)=>{
            this.setState({name:event.target.value})
        }
        selection=(event)=>{
            if(event.target.value === 'All'){
                this.setState({selection:""})
            }
            else{
                this.setState({selection:event.target.value})
            }
        }
        submitBtn=()=>{
            const {newDescription,status,name}=this.state
            const newItems={
                id:10,
                image:"https://assets.architecturaldigest.in/photos/600839aae6e1f64740188fce/16:9/w_2560%2Cc_limit/Bungalow-in-jaipur_1-1366x768.jpg",
                newDescription,
                status,
                name,
            }
           this.setState(prevState => ({
            projectItems: [...prevState.projectItems, newItems],
    }))
        }
    render(){
        const {selection}=this.state
        const {projectItems,userSearch}=this.state
        const searchResult=projectItems.filter(eachItem =>
        eachItem.name.includes(userSearch))
        const statusResult=projectItems.filter(eachStatus=>
        eachStatus.status.includes(selection))
        const twoSearch=searchResult || statusResult
        console.log(twoSearch)
        return(
            <div>
                <Sidebar/>
            <div className='bg-container'>
               
                <Container>
                    <Row>
                        <Col md={4}>
                            <p>
                        <select className='form-control' onChange={this.selection}>
                            <option value="All">All</option>
                            <option value="Upcoming">Upcoming</option>
                            <option value="On Going">On Going</option>
                            <option value="Completed">Completed</option>
                        </select>
                        </p>
                        </Col >
                        <Col md={4}><p><input type="search" placeholder='search...' className='form-control' onChange={this.onSearchbyName}/></p></Col>
                        <Col md={4}><p><Button className='projectButton' data-toggle="modal" data-target="#exampleModal">Add Project</Button></p></Col>
                    </Row>
                    <Row>
<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">New Project</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <input type="text" placeholder="Project Name" onChange={this.newName} className='form-control'/>
        <p>
       <input type="text" placeholder="Project Description" onChange={this.newDescription} className='form-control'/>
       </p>
       <p>
       <input type="text" placeholder="Project Status" onChange={this.newStatus} className='form-control'/>
       </p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={this.submitBtn}  data-dismiss="modal">Submit</button>
      </div>
    </div>
  </div>
</div>
                        {twoSearch.map(eachCard=>
                            <ProjectCard projectItems={eachCard} key={eachCard.id}/>
                        )}
                    </Row>
                </Container>
            </div>
            </div>
        )
    }
}
export default Shop