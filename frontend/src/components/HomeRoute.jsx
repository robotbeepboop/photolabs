import React, { useState } from 'react';
import photos from '../mocks/photos';
import PhotoList from './components/PhotoList';
import './HomeRoute.scss';

//render home page with the photos
const HomeRoute = () => {
  console.log(photos);
  return (
    <div className='home-route'>
      <div className='photo-list'>
        <PhotoList props={photos} />
      </div>
    </div>
  )
};

export default HomeRoute
