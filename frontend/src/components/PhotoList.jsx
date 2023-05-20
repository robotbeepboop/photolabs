import React, { useState } from 'react';
import PhotoList from './PhotoList';
import TopNavigation from './TopNavigationBar';
import '../styles/HomeRoute.scss';
import FavIcon from './FavIcon';

const [viewModal, setViewModal] = useState(false);
const [viewPhoto, setViewPhoto] = useState({});
//open modal
const clickHandler = (photoID) => {
  setViewModal(true);
  setViewPhoto(photoID);
};
//close modal
const closeHandler = () => {
  setViewModal(false);
};

//if viewModal evaluates to true, use short circuit to display the modal

const HomeRoute = (props) => {
  return (
    <div className='home-route'>
      <TopNavigation topics={ props.topics } favourites={ props.favourites } setFavourites={ props.setFavourites } />
      <div className='photo-list'>
        
        { viewModal === true && (
          <div className='photo-list--modal'>
            <button onClick={ closeHandler }> X </button>
            <FavIcon setFavourites={ props.setFavourites } />
            <p>{props.photo.user.username}</p>
            <img src={ props.photo.urls.full } alt={props.photo.description} />
            <div className='photo-list--modal-related-images'>
              <p>Similar Photos</p>
              <PhotoList photos={ props.photos.slice(0, 6)} />
            </div>
          </div>
        )}

        <PhotoList photos={ props.photos } setFavourites={ props.setFavourites } onClick={ clickHandler } />
      </div>
    </div>
  )
};

export default HomeRoute
