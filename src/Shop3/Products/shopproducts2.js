import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import {Link} from 'react-router-dom'

export default function TitlebarImageList() {
  return (
    <ImageList>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Playwood</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <Link to="/singleproductview">
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          /></Link>
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
const itemData = [
    {
      img: 'https://img.staticmb.com/mbcontent//images/uploads/2022/6/marble-flooring.jpg',
      title: 'Polycab',
      author: 'Marble is a reasonably strong and durable stone.',
    },
    {
      img: 'https://5.imimg.com/data5/GX/QU/SJ/SELLER-3684351/home-marbles-1000x1000.jpg',
      title: 'Polycab',
      author: 'Marble is a reasonably strong and durable stone.',
    },
    {
      img: 'https://i.pinimg.com/474x/86/c0/e8/86c0e8768635fbbdb77e1c91804d2dbc.jpg',
      title: 'Polycab',
      author: 'Marble is a reasonably strong and durable stone.',
    },
    {
      img: 'https://www.shutterstock.com/image-photo/interior-empty-apartment-wide-room-260nw-444277510.jpg',
      title: 'Polycab',
      author: 'Marble is a reasonably strong and durable stone.',
    },
    {
      img: 'https://i.ytimg.com/vi/5myiy0S44Cg/sddefault.jpg',
      title: 'Polycab',
      author: 'Marble is a reasonably strong and durable stone.',
    },
    {
      img: 'https://www.shutterstock.com/image-photo/beautiful-modern-granite-marble-counters-260nw-556701058.jpg',
      title: 'Polycab',
      author: 'Marble is a reasonably strong and durable stone.',
    },
    {
      img: 'https://4.imimg.com/data4/VJ/LW/MY-4231541/home-floor-marble-500x500.jpg',
      title: 'Polycab',
      author: 'Marble is a reasonably strong and durable stone.',
    },
    {
      img: 'https://www.kajariaceramics.com/concept-picture/high002010.jpg',
      title: 'Polycab',
      author: 'Marble is a reasonably strong and durable stone.',
    },
    {
      img: 'https://images.orientbell.com/media/catalog/product/cache/392ab858ac74369464793e7affa0d4cb/p/g/pgvt_triangle_makrana_bianco_bm_office_cowork_area_glazed_vitrified_tiles_wall_floor_tile_600x1200_mm_1.jpg',
      title: 'Polycab',
      author: 'Marble is a reasonably strong and durable stone.',
    },
    {
      img: 'https://constrofacilitator.com/wp-content/uploads/2021/12/Aesthetic-Floor-Marble-Tiles.jpg',
      title: 'Polycab',
      author: 'Marble is a reasonably strong and durable stone.',
    },
    {
      img: 'https://www.kajariaceramics.com/test_folder/mobileapp/uploads/blogs/1569326145_The-7-Biggest-Mistakes-to-Avoid-While-Choosing-Floor-Tiles.jpg',
      title: 'Polycab',
      author: 'Marble is a reasonably strong and durable stone.',
    },
    {
      img: 'https://i.pinimg.com/736x/5f/43/1d/5f431d632a2a214d5028dd118626052f.jpg',
      title: 'Polycab',
      author: 'Marble is a reasonably strong and durable stone.s',
    },
  ];