import React, { useEffect, useState } from 'react';
import './App.scss';
import HomeRoute from './components/HomeRoute';
import useApplicationData from './hooks/useApplicationData';
import axios from 'axios';

const App = () => {
  //state variables
  const [ photos, setPhotos ] = useState([]);
  const [ topics, setTopics ] = useState([]);
  const [ selectedPhoto, setSelectedPhoto ] = useState('');
  const [ selectedTopic, setSelectedTopic ] = useState('');
  const { favourites, setFavourites, viewModal, setViewModal, favPhotoExist, setFavPhotoExist, toggleFavs, openModalHandler, closeModalHandler } = useApplicationData;
  
  //set photo and topic functions
  const selectPhoto = (photo_id) => { setSelectedPhoto(photo_id) };
  const selectTopic = (topic_id) => { setSelectedTopic(topic_id) };

  //useEffect
  useEffect(() => {
    axios.get('http://localhost:8001/api/photos')
      .then(response => { setPhotos(response.data) })
      .catch(error => console.log(error))
    axios.get('http://localhost:8001/api/topics')
      .then(response => { setTopics(response.data) })
      .catch(error => console.log(error))
  }, []);


  return (
    <div className='App'>
      <HomeRoute
      photos={ photos }
      topics={ topics }
      selectPhoto={ selectPhoto }
      selectTopic={ selectTopic }
      favourites={ favourites }
      viewModal={ viewModal }
      favPhotoExist={ favPhotoExist }
      toggleFavs={ toggleFavs }
      openModalHandler={ openModalHandler}
      closeModalHandler={ closeModalHandler } />
    </div>
  );
}

export default App
