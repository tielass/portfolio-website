import React, {useEffect, useState} from 'react'
import ProgressBar from './ProgressBar'
import '../style/Skills.css'
import JavascriptIcon from '@mui/icons-material/Javascript';
import DrawIcon from '@mui/icons-material/Draw';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';

function Skills() {

  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);

  const testData = [
    { bgcolor: "#FFC221", completed: 60 },
    { bgcolor: "#FFC221", completed: 30 },
    { bgcolor: "#FFC221", completed: 53 },
    { bgcolor: "#FFC221", completed: 23 },
    { bgcolor: "#FFC221", completed: 13 },
  ];

  return (
    <div className='skills'>
      <h2 className="skills--heading">
        Skills
      </h2>
      <div className="skills--container">
        <div className="skills--card">
          <div className="black--square">
            <div className="black--square--info">
              <JavascriptIcon className='js--icon'/>
              <h3 className='custom--skill--header'>Frontend</h3>
              <p className='custom--skill--text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className="skills--progress">
            {testData.map((item, idx) => (
              <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
            ))}
          </div>
        </div>

        <div className="skills--card">
          <div className="black--square">
            <div className="black--square--info">
              <DrawIcon className='draw--icon'/>
              <h3 className='custom--skill--header'>UI / UX</h3>
              <p className='custom--skill--text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className="skills--progress">
            {testData.map((item, idx) => (
              <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
            ))}
          </div>
        </div>

        <div className="skills--card">
          <div className="black--square">
            <div className="black--square--info">
              <ColorLensOutlinedIcon className='illustration--icon'/>
              <h3 className='custom--skill--header'>Illustration</h3>
              <p className='custom--skill--text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className="skills--progress">
            {testData.map((item, idx) => (
              <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
            ))}
          </div>
        </div>

        <div className="skills--card">
          <div className="black--square">
            <div className="black--square--info">
              <DesignServicesOutlinedIcon className='design--icon'/>
              <h3 className='custom--skill--header'>Graphic Design</h3>
              <p className='custom--skill--text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className="skills--progress">
            {testData.map((item, idx) => (
              <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
