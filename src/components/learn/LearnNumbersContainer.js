import React, { Component } from "react";
import PropTypes from "prop-types";
import Definition from "../shared/Definition";
import LearnNumbersGroup from "./LearnNumbersGroup";

class LearnNumbersContainer extends Component {
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

    return (<LearnNumbersGroup
      layout={this.props.layout}
      wide={this.props.wide}
      showFlashcard={this.showOverlay.bind(this)}
    />);
  }
};

LearnNumbersContainer.propTypes = {
  layout: PropTypes.array.isRequired,
  wide: PropTypes.bool.isRequired,
  languageData: PropTypes.object.isRequired,
};

export default LearnNumbersContainer;
