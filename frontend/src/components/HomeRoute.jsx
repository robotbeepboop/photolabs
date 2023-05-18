import React, { useState } from 'react';
import photos from '../mocks/photos';
import PhotoList from './components/PhotoList';
import './HomeRoute.scss';

//render home page with the photos
const HomeRoute = (props) => {
  return (
    <div className='home-route'>
      <div className='photo-list'>
        <PhotoList props={photos} setLikes={props.setLikes} />
      </div>
    </div>
  )
};

export default HomeRoute
