import React, { Component } from "react";
import LearnOverlay from "./LearnOverlay";

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
    <h2 style={style} onClick={props.onClick}>{props.number}</h2>
  );
};

class ZeroToNine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOverlay: false,
      overlayNumber: undefined
    };
  }

  showOverlay(n) {
    this.setState({
      showOverlay: true,
      overlayNumber: n
    });
  }

  clearOverlay() {
    this.setState({
      showOverlay: false,
      overlayNumber: undefined
    });
  }

  render() {
    if (this.state.showOverlay) {
      return (<LearnOverlay
        onClick={() => this.clearOverlay()}
        number={this.state.overlayNumber}
      />);
    };

    const numbers = [
      [1,2,3],
      [4,5,6],
      [7,8,9],
      [0]
    ];

    return (
      <NumberRows>
        {numbers.map((row, rowIdx) => (
          <NumberRow key={rowIdx}>
            {row.map((n) => (
              <NumberBox
                number={n}
                key={n}
                onClick={() => this.showOverlay(n)}
              />
            ))}
          </NumberRow>
        ))}
      </NumberRows>
    );
  }
}

export default ZeroToNine;
