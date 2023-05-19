import React, { useState } from 'react';
import './App.scss';
import HomeRoute from './components/HomeRoute';
/*mock data */
import photoData from './mocks/photos.json';
import topicData from './mocks/topics.json';

// Note: Rendering a single component to build components in isolation

const App = () => {
  return (
    <div className='App'>
      <HomeRoute photos={photoData} topics={topicData} />
    </div>
  );
}

export default App
