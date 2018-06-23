import React from "react";
import Carousel from './Carousel';
import LearnNumbers from './learn/LearnNumbers';

const LearnPage = (props) => {
  const {languageData} = props;
  return (
    <Carousel>
      {languageData.learnSlides.map((learnSlide) => (
        <div className='slide' label={learnSlide.label} key={learnSlide.label}>
          <LearnNumbers
            layout={learnSlide.layout}
            wide={learnSlide.label === '10, 100, 1k, 1M'}
            languageData={languageData}
          />
        </div>
      ))}
    </Carousel>
  );
}

export default LearnPage;
