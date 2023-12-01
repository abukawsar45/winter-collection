import React from 'react';
// import './Gallery.css';


const Gallery = ({data}) => {
  return (
    <div className='image' >
      <img src={data?.img} alt='product-photo' style={{width: '100%'}} />
    </div>
  );
};

export default Gallery;