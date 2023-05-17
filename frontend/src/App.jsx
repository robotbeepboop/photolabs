import React from 'react';
import PhotoList from './components/PhotoList';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => (
  <div className="App">
    <PhotoListItem />
  </div>
)

export default App
