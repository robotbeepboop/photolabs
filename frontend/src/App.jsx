import React from 'react';
import './App.scss';
import HomeRoute from './components/HomeRoute';
import photoData from './mocks/photos.json';
import topicData from './mocks/topics.json';

const App = () =>{
  return (
    <div className='App'>
      <HomeRoute photos={ photoData } topics={ topicData } />
    </div>
  );
}

export default App
