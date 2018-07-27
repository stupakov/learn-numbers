import React from "react";
import PropTypes from "prop-types";
import SoundPlayer from './SoundPlayer';
import "./Definition.css";

const emphasizeWord = (text, highlight) => {
  return text;
};

const _renderSoundPlayer = (props) => {
  const { soundFiles } = props;

  if (undefined === soundFiles) {
    return undefined;
  }
  if (soundFiles.length === 0) {
    return undefined;
  }
  return (
    <SoundPlayer urls={soundFiles}/>
  );
}

const Definition = (props) => {
  return (
    <div className='definition'>
      <h1>
        {props.label.toLocaleString()}
      </h1>
      {_renderSoundPlayer(props)}
      <h2>
        {props.translation}
      </h2>
      <div className='definition-table'>
        {props.examples.map(ex => {
          return (<div className='definition-table-row' key={ex.number}>
            <div className='definition-table-cell definition-table-number'>{ex.number.toLocaleString()}</div>
            <div className='definition-table-cell'> = </div>
            <div className='definition-table-cell definition-table-word'>{emphasizeWord(ex.word, props.translation)}</div>
          </div>);
        })}
      </div>
    </div>
  );
};

Definition.propTypes = {
  label: PropTypes.string.isRequired,
  translation: PropTypes.string,
  examples: PropTypes.array.isRequired,
  soundFiles: PropTypes.array,
};

export default Definition;
