import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import {AiFillCheckCircle} from 'react-icons/ai'
function FolderList() {
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List dense sx={{ width: '90%',  bgcolor: 'background.paper' }} className='ml-auto mr-auto'>
      {[20, 21, 22, 23].map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
            <>
          <ListItem
            key={value}
            secondaryAction={
              <AiFillCheckCircle
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${value + 1}`}
                  src="https://media.designcafe.com/wp-content/uploads/2023/01/31151510/contemporary-interior-design-ideas-for-your-home.jpg"
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={`Fri, ${value },2023`} />
             
            </ListItemButton>
          </ListItem>
          <hr></hr>
          </>
        );
      })}
    </List>
  );
}
export default FolderList