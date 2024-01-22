import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import {FaAngleRight, FaCookie} from 'react-icons/fa'
import {Link} from "react-router-dom"
import Cookies from 'js-cookie'
const GutterlessList=()=> {
  const [projectState,setProjectState]=React.useState([])
  React.useEffect(()=>{
    const projectListFun=async()=>{
      const jwtToken=Cookies.get("jwt_token")
      const apiUrl="https://venkatsai.onrender.com/estimateProjectList"
      const options={
        method:"GET",
        headers:{
          "Content-Type":"/Application/json",
          "Authorization":`Bearer ${jwtToken}`
        },
      }
      const response=await fetch(apiUrl,options);
      const data=await response.json()
      console.log(data)
      setProjectState(data)
    }
    projectListFun()
   
  },[1])
  return (
   
    <List sx={{ width: '90%',  bgcolor: 'background.paper' }} className='ml-auto mr-auto'>
      {projectState.map((value) => (
         <Link to="/estimatepdflist" className="link-project">
        <ListItem
          key={value}
          disableGutters
          secondaryAction={
            <IconButton aria-label="comment">
              <FaAngleRight />
            </IconButton>
          }
        >
          <ListItemText primary={value.title} />
        </ListItem>
        <hr></hr>
        </Link>
      ))}
    </List>
  );
}
export default GutterlessList