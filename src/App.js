import React from 'react';
import './App.css';

import Home from './components/Home'

class App extends React.Component{
 render(){
  return (
    <div className='container'>
      <div className='app-header'>
          <h1>Restaurent Finder</h1>
        </div>
      <Home></Home>
    </div>
  );
 }
}

export default App;
