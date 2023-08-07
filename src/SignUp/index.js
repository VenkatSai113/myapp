import {Component} from 'react'
import './index.css'
import {Link} from 'react-router-dom'
import IndividualDesigener from './individualDesigener'
import OrganizationDetails from './organizationDetails'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

class SignUp extends Component{
    state={Organization:false,individual:false,isLoading:false}
    onChangeDesigener=(event)=>{
        if(event.target.value==="Organization"){
            this.setState({
                Organization:true
            })
            this.setState({
                individual:false
            })
        }
        else{
            this.setState({
                Organization:false
            })
            this.setState({
                individual:true
            })
        }
    }
    render(){
        const {Organization,individual,isLoading}=this.state
        return(
            <div className='forgot-password-bg-container1'>               
                <div className='forgot-password-container1'>
                 <img alt=""  src="https://designalley.in/wp-content/uploads/2022/03/Logo.png" className='logo-image-signup'/>
                  <FormControl>
      <FormLabel id="demo-radio-buttons-group-label" className='select-text'>Register with Design Alley</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue=""
        name="radio-buttons-group">
        <div className='d-flex flex-row justify-content-around'>
       <label className="radio-style"> <FormControlLabel   onChange={this.onChangeDesigener}  value="Organization" control={<Radio />}  label="Organization" /></label>
       <label className="radio-style"><FormControlLabel  onChange={this.onChangeDesigener} value="individual desigener" control={<Radio />} label="Individual Designer" /></label>
        </div>
      </RadioGroup>
    </FormControl>
    <div className='body-content'>
    {isLoading?( <Box sx={{ display: 'flex' }} color="red" style={{ position: 'absolute', top: '50%', left: '45%',  zIndex: '999' }}  height={50} width={50}>
      <CircularProgress   />
    </Box>):""}
                {Organization&& <OrganizationDetails/>}
                {individual&&<IndividualDesigener />}
               </div>
                  <hr></hr>                
                  <div className='bottom-login-div'>
                  <p className='information-text-1'><span className='information-text'>Have An Account? </span><Link to="/login">  Login</Link></p>
                  </div>
                </div>
            </div>
        )
    }
}
export default SignUp