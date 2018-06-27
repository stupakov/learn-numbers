import React from "react";
import PropTypes from "prop-types";
import "./LearnOverlay.css";

const emphasizeWord = (text, highlight) => {
  return text;
};

const LearnOverlay = (props) => {
  return (
    <div className='learn-overlay' onClick={props.onClick}>
      <h1>
        {props.label}
      </h1>
      <h2>
        {props.translation}
      </h2>
      <div className='learn-overlay-table'>
        {props.examples.map(ex => {
          return (<div className='learn-overlay-table-row' key={ex.number}>
            <div className='learn-overlay-table-cell learn-overlay-table-number'>{ex.number}</div>
            <div className='learn-overlay-table-cell'> = </div>
            <div className='learn-overlay-table-cell learn-overlay-table-word'>{emphasizeWord(ex.word, props.translation)}</div>
          </div>);
        })}
      </div>
    </div>
  );
};

LearnOverlay.propTypes = {
  label: PropTypes.string.isRequired,
  translation: PropTypes.string.isRequired,
  examples: PropTypes.array.isRequired,
};

export default LearnOverlay;
