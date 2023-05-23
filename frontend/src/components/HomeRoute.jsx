/*
delete this file later, code moved to app.jsx

import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const [favourites, setFavourites] = useState([]); //use array, not object. remember class example ***
  const [viewModal, setViewModal] = useState(false);
  
  const toggleFavs = (photo_id) => {
    const newFavourites = [];
    if  (!favourites.includes(photo_id)) { //spread operator to gather the rest of the likes
      newFavourites = [...favourites, photo_id];
    } else {
      newFavourites = favourites.filter(photo => photo !== photo_id);
    }
    //change the favourites state
    setFavourites(newFavourites);
  };
  
  const openModalHandler = () => {
     setViewModal(true);
  };
  
  const closeModalHandler = () => {
    setViewModal(false);
  };
  
  return(
    <div className="home-route">
      <TopNavigationBar topics={ props.topics } />
      <PhotoList photos={ props.photos } />
    </div>
  );
};

export default HomeRoute;
*/
