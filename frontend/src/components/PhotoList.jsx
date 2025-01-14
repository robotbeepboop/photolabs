import React from 'react';
import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {
  const mappedPhotos = props.photos.map((photo) => {
    return <PhotoListItem username={ photo.user.username } imageSource={ photo.urls.thumb } key={ photo.id } id={ photo.id } alt={ photo.description } city={ photo.location.city } country={ photo.location.country } />;
  });
  
  return (
    <ul className="photo-list">
      { mappedPhotos }
    </ul>
  ); 
}

export default PhotoList
