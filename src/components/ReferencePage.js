import React from "react";
import Carousel from './Carousel';
import Definition from './shared/Definition';

const renderGroup = (group, languageData) => {
  const {translate} = languageData;
  const {label, translation} = group;
  const examplesWithTranslations = group.examples.map(ex => (
    {
      number: ex,
      word: translate(ex)
    }
  ));

  return (<Definition
    {...{label, translation}}
    examples={examplesWithTranslations}
  />);
};

const ReferencePage = (props) => {
  const {languageData} = props;
  return (
    <Carousel>
      {languageData.referenceSlides.map((group) => (
        <div className='slide slide-flex' label={group.label} key={group.label}>
          {renderGroup(group, languageData)}
        </div>
      ))}
    </Carousel>
  );
};

export default ReferencePage;
