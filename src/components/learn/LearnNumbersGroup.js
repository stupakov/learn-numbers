import React from "react";
import PropTypes from "prop-types";
import Style from '../../style/style';

// TODO: consider using styled-div for these

const NumberRows = (props) => {
  const style = {
    width: '100%',
    marginBottom: '15px',
  };

  return (
    <div style={style}>{props.children}</div>
  );
};

const NumberRow = (props) => {
  const style = {
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
    border: `3px solid ${Style.colorScheme[2]}`,

    width: width,
    height: '70px',
    borderRadius: borderRadius,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '10px',
    marginRight: '10px',
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
              number={n.toLocaleString()}
              key={n}
              onClick={() => props.showFlashcard(n)}
              wide={row.length < 3}
            />
          ))}
        </NumberRow>
      ))}
    </NumberRows>
  );
};

LearnNumbersGroup.propTypes = {
  layout: PropTypes.array.isRequired,
  showFlashcard: PropTypes.func.isRequired,
};

export default LearnNumbersGroup;
