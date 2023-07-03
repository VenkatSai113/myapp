import React from 'react';
import ImageUploading from 'react-images-uploading';
import './index.css'
import {IoIosRemoveCircleOutline} from 'react-icons/io'
import {RxUpdate} from 'react-icons/rx'
import {AiFillCamera} from 'react-icons/ai'
import BottomNavbar from '../Home/bottomNavbar';

export function UploadProfileImg() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="App">
      <ImageUploading
       
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <AiFillCamera className="upload-image"
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            />
            <label className='projectName'>Upload Profile Image</label>
            &nbsp;
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" className='profile-pic mb-5' />
                <div className="image-item__btn-wrapper">
                <RxUpdate className="update-image mb-3" onClick={() => onImageUpdate(index)}/>
                <IoIosRemoveCircleOutline className="remove-image mb-3" onClick={() => onImageRemove(index)}/>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
      <BottomNavbar/>
    </div>
  );
}
export default UploadProfileImg