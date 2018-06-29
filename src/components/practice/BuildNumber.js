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

    const number = generateNumber();
    const answerWords = this.props.languageData.translate(number).split(' ');
    this.state = {
      number: number,
      answerWords: answerWords,
      guessWords: [],
    }
  }

  addGuess(word) {
    if(this.guessHasMistake()) {
      this.removeGuess();
    }

    this.setState({
      guessWords: this.state.guessWords.concat([word]),
    });
  }

  removeGuess() {
    var guessWords = this.state.guessWords;
    guessWords.pop();
    this.setState({
      guessWords: guessWords,
    });
  }

  guessHasMistake() {
    let hasMistake = false;
    const {guessWords, answerWords} = this.state;
    guessWords.forEach((word, idx) => {
      if(answerWords[idx] !== word) {
        hasMistake = true;
      }
    });
    return hasMistake;
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

  renderFormattedGuess(guessWords, answerWords) {
    return guessWords.map((word, idx) => {
      if(answerWords[idx] === word) {
        return (
          <span className='guess-word guess-word-correct' key={idx}>
            {word}
          </span>
        );
      }
      return (
        <span className='guess-word guess-word-incorrect' key={`${idx}-${word}`}>
          {word}
        </span>
      );
    });
  }

  render() {
    return (
      <div className='build-number'>
        <h1 className='build-number-number'>
          {this.state.number.toLocaleString()}
        </h1>

        <div className='build-number-guess'>
          {this.renderFormattedGuess(this.state.guessWords, this.state.answerWords)}
        </div>

        <div>
          {this.state.answerWords.join(' ')}
        </div>

        <div className='build-number-answers'>
          {this.renderWordButtons()}
        </div>
      </div>
    );
  }
}

BuildNumber.propTypes = {
  languageData: PropTypes.object.isRequired,
};

export default BuildNumber;
