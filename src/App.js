import React, { Component } from 'react';
import './App.css';
import Carousel from './components/Carousel';

//TODO extract slides into components

class App extends Component {
  render() {
    return (
      <div className="App">
        <Carousel>
          <div className='slide' label='0-9'>
            <h3>0-9</h3>
          </div>
          <div className='slide' label='10-19'>
            <h3>10-19</h3>
          </div>
          <div className='slide' label='10, 100, 1k, 1M'>
            <h3>10, 100, 1k, 1M</h3>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default App;
