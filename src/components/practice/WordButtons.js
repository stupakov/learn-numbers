import React, { Component } from "react";
import PropTypes from "prop-types";
import './BuildNumber.css';
import Style from '../../style/style';


const getGradientStyle = (() => {
  const color1 = Style.colorScheme[2];
  const color2 = Style.colorScheme[4];
  const colormap = Style.gradientColormap([color1, color2]);

  return (idx, length) => {
    const fraction = idx / length;
    return {
      backgroundColor: colormap(fraction)
    };
  };
})();

const WordButton = (props) => {
  return (
    <span className="word-button" onClick={props.onClick} style={props.style}>
      {props.children}
    </span>
  );
};

const WordButtons = (props) => {
  const {words, onClick} = props;

  return words.map((word, idx) => {
    return <WordButton
      key={word}
      onClick={() => onClick(word)}
      style={getGradientStyle(idx, words.length)}
    >{word}</WordButton>
  });
};

WordButtons.propTypes = {
  words: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default WordButtons;
