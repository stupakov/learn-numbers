import React, { Component } from "react";
import PropTypes from "prop-types";
import './BuildNumber.css';
import { Icon } from 'react-onsenui';
import Style from '../../style/style';

const WordButton = (props) => {
  return (
    <span className="word-button" onClick={props.onClick} style={props.style}>
      {props.children}
    </span>
  );
};

const generateNumber = () => {
  const getRandomElement = (arr) => (
    arr[Math.floor(Math.random() * arr.length)]
  );
  let maximum = getRandomElement([999, 999999, 999999999]);
  let number = Math.floor(Math.random() * maximum);
  return number;
};

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

class BuildNumber extends Component {
  constructor(props) {
    super(props);
    const number = generateNumber();
    const answerWords = this.props.languageData.translate(number).split(' ');
    this.state = {
      number: number,
      answerWords: answerWords,
      guessWords: [],
    };
  }

  reset() {
    const number = generateNumber();
    const answerWords = this.props.languageData.translate(number).split(' ');
    this.setState({
      number: number,
      answerWords: answerWords,
      guessWords: [],
    });
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

  guessFullyCorrect() {
    const g = this.state.guessWords;
    const a = this.state.answerWords;
    return a.length === g.length && a.every((v,i) => v === g[i])
  }

  renderWordButtons() {
    const {languageData} = this.props;
    const vocab = languageData.vocabulary.sort();

    return vocab.map((word, idx) => {
      const onClick = () => {
        this.addGuess(word);
      };

      return <WordButton
        key={word}
        onClick={onClick}
        style={getGradientStyle(idx, vocab.length)}
      >{word}</WordButton>
    });
  }

  renderFormattedGuess(guessWords, answerWords) {
    return answerWords.map((answerWord, idx) => {
      const guessWord = guessWords[idx];
      if(guessWords[idx] === answerWord) {
        return (
          <span className='guess-word guess-word-correct' key={idx}>
            {guessWord}
          </span>
        );
      }
      if(idx >= guessWords.length) {
        return (
          <span className='guess-word' key={idx}>_____</span>
        );
      }
      return (
        <span className='guess-word guess-word-incorrect' key={idx}>
          {guessWord}
        </span>
      );
    });
  }

  renderControls() {
    if(this.guessFullyCorrect()) {
      return (
        <div className='build-number-success'>
          <Icon
            icon='check'
            size={70}
            className='build-number-success-check build-number-button'
            onClick={() => this.reset()}
          />
        </div>
      );
    }
    return (
      <div className='build-number-answers'>
        {this.renderWordButtons()}
      </div>
    );
  }

  render() {
    return (
      <div className='build-number'>
        <div className='build-number-top-row'>
          <div className='build-number-spacer'/>
          <div className='build-number-number'>
            {this.state.number.toLocaleString()}
          </div>
          <div className='build-number-spacer'>
            <div className='build-number-reset build-number-button' onClick={() => this.reset()}>
              <Icon icon='refresh' size={30}/>
            </div>
          </div>
        </div>

        <div className='build-number-guess'>
          {this.renderFormattedGuess(this.state.guessWords, this.state.answerWords)}
        </div>

        <div className='build-number-controls'>
          {this.renderControls()}
        </div>
      </div>
    );
  }
}

BuildNumber.propTypes = {
  languageData: PropTypes.object.isRequired,
};

export default BuildNumber;
