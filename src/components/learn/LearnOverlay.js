import React from "react";

const LearnOverlay = (props) => {
  const style = {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={style} onClick={props.onClick}>
      <h1>
        {props.number}
      </h1>
    </div>
  );
};

export default LearnOverlay;
