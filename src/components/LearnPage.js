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

  const multipliers = [
    ["10 + __"],
    ["x10"],
    ["x100"],
    ["x1,000"],
    ["x1,000,000"]
  ]

  return (
    <Carousel>
      <div className='slide' label='0-9'>
        <LearnNumbers layout={zeroToNine}/>
      </div>
      <div className='slide' label='10-19'>
        <LearnNumbers layout={teens}/>
      </div>
      <div className='slide' label='10, 100, 1k, 1M'>
        <LearnNumbers layout={multipliers} wide={true}/>
      </div>
    </Carousel>
  );
}

export default LearnPage;
