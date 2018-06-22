import React from "react";

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
  const style = {
    border: '3px solid hotpink',

    width: '70px',
    height: '70px',
    borderRadius: '50%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <h2 style={style}>{props.number}</h2>
  );
};

const ZeroToNine = () => (
  <NumberRows>
    <NumberRow>
      {[1,2,3].map((n) => (<NumberBox number={n} key={n}/>))}
    </NumberRow>
    <NumberRow>
      {[4,5,6].map((n) => (<NumberBox number={n} key={n}/>))}
    </NumberRow>
    <NumberRow>
      {[7,8,9].map((n) => (<NumberBox number={n} key={n}/>))}
    </NumberRow>
    <NumberRow>
      {[0].map((n) => (<NumberBox number={n} key={n}/>))}
    </NumberRow>
  </NumberRows>
);

export default ZeroToNine;
