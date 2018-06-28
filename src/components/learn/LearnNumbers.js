import React, { Component } from "react";
import Definition from "../shared/Definition";

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

class LearnNumbers extends Component {
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
      const {translate, getExamples} = this.props.languageData;
      const number = this.state.overlayNumber;
      const label = number.toString();
      const translation = translate(number);
      const examplesWithTranslations = getExamples(number).map(ex => (
        {
          number: ex,
          word: translate(ex)
        }
      ));
      const onClick=() => this.clearOverlay();

      return (<Definition
        {...{label, translation, onClick}}
        examples={examplesWithTranslations}
      />);
    };

    return (
      <NumberRows>
        {this.props.layout.map((row, rowIdx) => (
          <NumberRow key={rowIdx}>
            {row.map((n) => (
              <NumberBox
                number={n}
                key={n}
                onClick={() => this.showOverlay(n)}
                wide={!!this.props.wide}
              />
            ))}
          </NumberRow>
        ))}
      </NumberRows>
    );
  }
}

export default LearnNumbers;
