import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const clickHandler = () => {
    props.viewModal();
    props.selectPhoto(photo_id);
  };

  return (
    <div className='photo-list--item'>
      <PhotoFavButton toggleFavs={ toggleFavs } photo={ photo_id } />
      <img className='photo-list--image' src={ props.imageSource } alt={ props.photo.description } onClick={ clickHandler } />
      <p>{ props.photo.user.username }</p>
      <p>Location: { props.photo.location.city }, { props.photo.location.country }</p>
    </div>
  );
}

export default PhotoListItem
