import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import {FaAngleRight, FaCookie} from 'react-icons/fa'
import {Link} from "react-router-dom"
import { withRouter } from 'react-router-dom/';
const ProjectList=(props)=>{
    const {listItem}=props
    const {projectId,title}=listItem
    console.log("Hello")
    const onClickProjectId=()=>{
       localStorage.setItem("projectId",projectId)
       const {history}=props
       history.replace("/estimateSpacesList")
    }
    return(
        <>
        <ListItem
          key={projectId}
          id={projectId}
          onClick={onClickProjectId}
          disableGutters
          secondaryAction={
            <IconButton aria-label="comment">
              <FaAngleRight />
            </IconButton>
          }
        >
          <ListItemText primary={title} />
        </ListItem>
        <hr></hr>
        </>
    )
}
export default withRouter(ProjectList)