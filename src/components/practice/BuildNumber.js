import React, { Component } from "react";
import PropTypes from "prop-types";
import './BuildNumber.css';

const WordButton = (props) => {
  return (
    <span className="word-button" onClick={props.onClick}>
      {props.children}
    </span>
  );
};

const generateNumber = () => (7654321);

class BuildNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: generateNumber(),
      guess: [],
    }
  }

  addGuess(word) {
    this.setState({
      guess: this.state.guess.concat([word]),
    });
  }

  removeGuess() {
    var guess = this.state.guess;
    guess.pop();
    this.setState({
      guess: guess,
    });
  }

  renderWordButtons() {
    const {languageData} = this.props;

    return languageData.vocabulary.map((word) => {
      const onClick = () => {
        this.addGuess(word);
      };

      return <WordButton
        key={word}
        onClick={onClick}
      >{word}</WordButton>
    });
  }

  renderControlButtons() {
    const onClick = () => {
        this.removeGuess();
      };

    const backspaceButton = (
      <WordButton
        key="backspace"
        onClick={onClick}
      >&lt;&lt;&lt;</WordButton>
    );

    return [backspaceButton];
  }

  render() {
    return (
      <div className='build-number'>
        <h1 className='build-number-number'>
          {this.state.number.toLocaleString()}
        </h1>

        <div className='build-number-guess'>
          {this.state.guess.join(' ')}
        </div>

        <div className='build-number-answers'>
          {this.renderWordButtons().concat(this.renderControlButtons())}
        </div>
      </div>
    );
  }
}

BuildNumber.propTypes = {
  languageData: PropTypes.object.isRequired,
};

export default BuildNumber;
