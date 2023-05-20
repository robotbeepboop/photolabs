import React, { useState } from 'react';
import '../styles/PhotoListItem.scss';
import FavIcon from './FavIcon';

const PhotoListItem = (props) => {
  return (
    <div className='photo-list--item'>
      <button onClick={ clickHandler }>
        <FavIcon />
      </button>
      <img className='photo-list--image' src={ props.imageSource } alt={ props.photo.description } onClick={ props.clickHandler(props.photo) } />
      <p>{ props.photo.user.username }</p>
      <p>Location: { props.photo.location.city }, { props.photo.location.country }</p>
    </div>
  );
}

export default PhotoListItem
