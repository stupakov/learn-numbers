import React, { Component } from "react";
import PropTypes from "prop-types";
import Carousel from './Carousel';
import LearnNumbersGroup from './learn/LearnNumbersGroup';
import Definition from "./shared/Definition";
import './shared/overlay.css';

// container component
class LearnPage extends Component {
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

  hideOverlay() {
    this.setState({
      showOverlay: false,
      overlayNumber: undefined
    });
  }

  _renderOverlay() {
    const {translate, getExamples, getSoundFiles} = this.props.languageData;
    const number = this.state.overlayNumber;
    const label = number.toString();
    const translation = translate(number);
    const soundFiles = getSoundFiles(translation);
    const examplesWithTranslations = getExamples(number).map(ex => (
      {
        number: ex,
        word: translate(ex)
      }
    ));

    return (
      <div className='overlay' onClick={() => this.hideOverlay()}>
        <Definition
          {...{label, translation}}
          examples={examplesWithTranslations}
          soundFiles={soundFiles}
        />
      </div>
    );
  }

  // Carousel has state; don't re-render it since it will get reset.
  render() {
    const {languageData} = this.props;
    const overlay = this.state.showOverlay && this._renderOverlay();

    return (
      <div>
        {overlay}
        <Carousel>
          {languageData.learnSlides.map((learnSlide) => (
            <div className='slide' label={learnSlide.label} key={learnSlide.label}>
              <LearnNumbersGroup
                layout={learnSlide.layout}
                wide={learnSlide.label === '10, 100, 1k, 1M'}
                showFlashcard={this.showOverlay.bind(this)}
              />
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}

LearnPage.propTypes = {
  languageData: PropTypes.object.isRequired,
};

export default LearnPage;
