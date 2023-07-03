import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import BallotIcon from '@mui/icons-material/Ballot';
import logoImage from "./FavIcon.png"
import "./index.css"

const SimpleBottomNavigation=()=> {
  const [value, setValue] = React.useState(0);

  return (
    <Box id="footer"  sx={{ width: 200 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction  id="home" label="Home" icon={<HomeOutlinedIcon  />} />
        <BottomNavigationAction id="home" label="Explore" icon={< SearchOutlinedIcon />} />  
        <BottomNavigationAction id="bottom-nav-dashboard" label="Dashboard" icon={ <img src={logoImage} className='dashbord-image'/>} />
        <BottomNavigationAction id="home" label="Store" icon={<StoreMallDirectoryIcon />} />
        <BottomNavigationAction id="home" label="Projects" icon={<BallotIcon />} />

      </BottomNavigation>
    </Box>
  );
}
export default SimpleBottomNavigation