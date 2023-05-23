import React, { useState } from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import PhotoDetailsModal from './PhotoDetailsModal';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  return(
    <div className="home-route">
      { props.viewModal && <PhotoDetailsModal photos={ props.photos } selectedPhoto={ props.selectedPhoto } toggleFavs={ props.toggleFavs } closeModalHandler={ props.closeModalHandler } />}
      <TopNavigationBar topics={ props.topics } favPhotoExist={ props.favPhotoExist } selectTopic={ props.selectTopic } />
      <PhotoList photos={ props.photos } selectPhoto={ props.selectPhoto } toggleFavs={ props.toggleFavs } viewModal={ props.viewModal } />
    </div>
  );
}
export default HomeRoute;
