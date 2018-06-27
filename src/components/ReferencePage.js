import React from "react";
import Carousel from './Carousel';
import LearnOverlay from './learn/LearnOverlay';

const renderGroup = (group, languageData) => {
  const {translate, getExamples} = languageData;
  const {label, translation} = group;
  const examplesWithTranslations = group.examples.map(ex => (
    {
      number: ex,
      word: translate(ex)
    }
  ));

  return (<LearnOverlay
    {...{label, translation}}
    examples={examplesWithTranslations}
  />);
};

const ReferencePage = (props) => {
  const {languageData} = props;
  return (
    <Carousel>
      {languageData.referenceSlides.map((group) => (
        <div className='slide' label={group.label} key={group.label}>
          {renderGroup(group, languageData)}
        </div>
      ))}
    </Carousel>
  );
};

export default ReferencePage;
