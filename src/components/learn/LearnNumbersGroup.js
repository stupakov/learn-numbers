import React from "react";
import PropTypes from "prop-types";

// TODO: consider using styled-div for these

const NumberRows = (props) => {
  const style = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
  };

  return (
    <div style={style}>{props.children}</div>
  );
};

const NumberRow = (props) => {
  const style = {
    flex: '1',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    border: '1px solid #eee'
  };

  return (
    <div style={style}>{props.children}</div>
  );
};

const NumberBox = (props) => {
  let width = props.wide ? '170px' : '70px';
  let borderRadius = props.wide ? '35px' : '50%';

  const style = {
    border: '3px solid hotpink',

    width: width,
    height: '70px',
    borderRadius: borderRadius,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <h2 style={style} onClick={props.onClick}>{props.number}</h2>
  );
};

const LearnNumbersGroup = (props) => {
  return (
    <NumberRows>
      {props.layout.map((row, rowIdx) => (
        <NumberRow key={rowIdx}>
          {row.map((n) => (
            <NumberBox
              number={n}
              key={n}
              onClick={() => props.showFlashcard(n)}
              wide={props.wide}
            />
          ))}
        </NumberRow>
      ))}
    </NumberRows>
  );
};

LearnNumbersGroup.propTypes = {
  layout: PropTypes.array.isRequired,
  wide: PropTypes.bool.isRequired,
  showFlashcard: PropTypes.func.isRequired,
};

export default LearnNumbersGroup;
