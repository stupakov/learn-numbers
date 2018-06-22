import React from "react";
import Carousel from './Carousel';
import LearnNumbers from './learn/LearnNumbers';

const LearnPage = () => {
  const zeroToNine = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [0]
  ];

  const teens = [
    [10],
    [11,12,13],
    [14,15,16],
    [17,18,19]
  ];

  return (
    <Carousel>
      <div className='slide' label='0-9'>
        <LearnNumbers layout={zeroToNine}/>
      </div>
      <div className='slide' label='10-19'>
        <LearnNumbers layout={teens}/>
      </div>
      <div className='slide' label='10, 100, 1k, 1M'>
        <h3>10, 100, 1k, 1M</h3>
      </div>
    </Carousel>
  );
}

export default LearnPage;
