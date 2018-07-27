import React from "react";
import PropTypes from "prop-types";
import { Icon } from 'react-onsenui';

class SoundPlayer extends React.Component {
  constructor(props) {
    super(props);
    let audioComponents = props.urls.map(url => new Audio(url));
    for (let i = 0; i < audioComponents.length - 1; i++) {
      audioComponents[i].addEventListener('ended', () => audioComponents[i+1].play());
    };
    this.audioComponents = audioComponents;
  }

  play() {
    if (0 === this.audioComponents.length) {
      return;
    };
    this.audioComponents[0].play();
  }

  render() {
    return (
      <div onClick={(e) => {
        e.stopPropagation();
        this.play();
      }}>
      <Icon
        icon='volume-up'
        size={50}
        className='action-button'
      />
    </div>
    );
  }
}

SoundPlayer.propTypes = {
  urls: PropTypes.array.isRequired,
};

export default SoundPlayer;
