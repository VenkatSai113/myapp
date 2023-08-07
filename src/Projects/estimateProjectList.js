import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import {FaAngleRight} from 'react-icons/fa'
import {Link} from "react-router-dom"
function GutterlessList() {
  return (
   
    <List sx={{ width: '90%',  bgcolor: 'background.paper' }} className='ml-auto mr-auto'>
      {[1, 2, 3].map((value) => (
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
          <ListItemText primary={`Project ${value}`} />
        </ListItem>
        <hr></hr>
        </Link>
      ))}
    </List>
  );
}
export default GutterlessList