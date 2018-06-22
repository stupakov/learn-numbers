import React from "react";
import Carousel from './Carousel';

const ReferencePage = () => (
  <Carousel>
    <div className='slide' label='0-9'>
      0-9
    </div>
    <div className='slide' label='10-19'>
      10-19
    </div>
    <div className='slide' label='10-100'>
      10-100
    </div>
    <div className='slide' label='100-1000'>
      100-10000
    </div>
    <div className='slide' label='10, 100, 1k, 1M'>
      10, 100, 1k, 1M
    </div>
  </Carousel>
);

export default ReferencePage;
