import React from 'react'
import '../style/ProgressBar.css'

const ProgressBar = (props) => {
  const { bgcolor, completed, skill } = props;

  const fillerStyles = {
    width: `${completed}%`,
    backgroundColor: bgcolor,
    transition: 'width 2s ease-in-out'
  }

  return (
    <div className='progress--bar--wrapper'>
      <div style={{ ...fillerStyles, '--completed': `${completed}%` }} className='progress--bar--container'>
        <span className='progress--bar--skill'>{skill}</span>
        <span className='progress--bar--completed'>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
