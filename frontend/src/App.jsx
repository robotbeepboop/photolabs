import React, { useState } from 'react';
import TopNavigation from './components/TopNavigationBar';
import './App.scss';
import HomeRoute from './components/HomeRoute';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [likes, setLikes] = useState(0);

  return (
    <div className="App">
    <TopNavigation likes={ likes } />
    <HomeRoute setLikes={ setLikes } />
  </div>);
  
}

export default App
