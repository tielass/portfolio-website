import React from 'react'
import '../style/ProgressBar.css'

const ProgressBar = (props) => {
  const { bgcolor, completed, skill } = props;

  const containerStyles = {
    height: 20,
    backgroundColor: "#e0e0de",
    marginTop: 10,
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width 1s ease-in-out'
  }

  const labelStyles = {
    padding: 5,
    color: '#000',
    fontWeight: 'bold'
  }



  return (
    <div style={containerStyles}>
      <div style={fillerStyles} className='progress--bar--container'>
        <span style={labelStyles}>{skill}</span>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
