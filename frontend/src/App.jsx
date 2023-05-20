import React, { useState } from 'react';
import './App.scss';
import HomeRoute from './components/HomeRoute';
import photoData from './mocks/photos.json';
import topicData from './mocks/topics.json';

const App = () =>{
  const [favourites, setFavourites] = useState(0);
  return (
    <div className='App'>
      <HomeRoute photos={ photoData } topics={ topicData } favourites={ favourites } setFavourites={ setFavourites } />
    </div>
  );
}

export default App
