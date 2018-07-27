import React, { Component } from "react";
import PropTypes from "prop-types";
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
    const label = number.toLocaleString();
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

  render() {
    const {languageData} = this.props;
    const overlay = this.state.showOverlay && this._renderOverlay();

    return (
      <div>
        {overlay}
        <div className='slide-wrapper slide-vertically-scrollable'>
          <div className='slide'>
            <LearnNumbersGroup
              layout={languageData.learnLayout}
              showFlashcard={this.showOverlay.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}

LearnPage.propTypes = {
  languageData: PropTypes.object.isRequired,
};

export default LearnPage;
