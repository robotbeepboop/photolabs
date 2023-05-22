import React, { useState } from 'react';
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {
  const mappedPhotos = photos.map(photo => {
    <PhotoListItem username={ photo.user.username } imageSource={ photo.urls.thumb } key={ photo.id } id={ photo.id } />
  });
  return (
    <ul>
    { mappedPhotos }
    </ul>
  );
};

export default HomeRoute;
