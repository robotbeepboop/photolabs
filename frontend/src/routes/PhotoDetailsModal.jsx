import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import PhotoFavButton from '../components/PhotoFavButton';
import PhotoList from '../components/PhotoList';

export const PhotoDetailsModal = (props) => {

  const photoData = props.photos.filter(photo => photo.id === props.selectedPhoto);

  return (
    <div className='photo-details-modal'>
      <button className='photo-details-modal--close-button'>
        <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_428_287)">
            <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_428_287">
            <rect width="18" height="18" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </button>
      <PhotoFavButton toggleFavs={ toggleFavs } photo_id={ photoData[0].id } />
        <img src={ photoData[0].user.profile } />
        <p>{ photoData[0].user.name }</p>
        <img src={ photoData[0].urls.raw } />
        <p>{ photoData[0].location.city }, { photoData[0].location.country }</p>
        <br />
        <p>Similar photos: </p>
        <PhotoList photos={ photos.slice(0,5) } />
    </div>
  );
}

export default PhotoDetailsModal;
