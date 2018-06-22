import React from "react";
import Carousel from './Carousel';
import ZeroToNine from './learn/ZeroToNine';

const LearnPage = () => (
  <Carousel style={{
  }}>
      <div className='slide' label='0-9'>
        <ZeroToNine/>
      </div>
      <div className='slide' label='10-19'>
        <h3>10-19</h3>
      </div>
      <div className='slide' label='10, 100, 1k, 1M'>
        <h3>10, 100, 1k, 1M</h3>
      </div>
    </Carousel>
);

export default LearnPage;
