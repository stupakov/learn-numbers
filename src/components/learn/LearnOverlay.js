import React from "react";
import PropTypes from "prop-types";

const LearnOverlay = (props) => {
  const style = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  };

  return (
    <div style={style} onClick={props.onClick}>
      <h1>
        {props.label}
      </h1>
      <h2>
        {props.translation}
      </h2>
    </div>
  );
};

LearnOverlay.propTypes = {
  label: PropTypes.string.isRequired,
  translation: PropTypes.string.isRequired,
};

export default LearnOverlay;
