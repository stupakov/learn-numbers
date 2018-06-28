import React from "react";
import PropTypes from "prop-types";
import Carousel from './Carousel';
import BuildNumber from "./practice/BuildNumber.js";

const PracticePage = (props) => {
  const {languageData} = props;

  return (
    <Carousel>
      <div className="slide">
        <BuildNumber {...{languageData}}/>
      </div>
    </Carousel>
  );
};

PracticePage.propTypes = {
  languageData: PropTypes.object.isRequired,
};

export default PracticePage;
