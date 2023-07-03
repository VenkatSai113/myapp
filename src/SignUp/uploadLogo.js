import React from 'react';
import ImageUploading from 'react-images-uploading';
import './index.css'
import {IoIosRemoveCircleOutline} from 'react-icons/io'
import {RxUpdate} from 'react-icons/rx'
import {AiFillCamera} from 'react-icons/ai'
// import BottomNavbar from '../Home/bottomNavbar';

export function UploadLogo() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    const imageObject=imageList[0]
    const imageData=imageObject.data_url
   console.log(imageList, addUpdateIndex);
    setImages(imageList);
    localStorage.setItem("logo_img",imageData)
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
            <label className='projectName'>Upload Logo Here</label>
            &nbsp;
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" className='logo-pic' />
              
                <div className="image-item__btn-wrapper">
                <RxUpdate className="update-image" onClick={() => onImageUpdate(index)}/>
                <IoIosRemoveCircleOutline className="remove-image " onClick={() => onImageRemove(index)}/>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
      {/* <BottomNavbar/> */}
    </div>
  );
}
export default UploadLogo