import React from 'react'
import ProgressBar from './ProgressBar'
import '../style/Skills.css'
import JavascriptIcon from '@mui/icons-material/Javascript';
import DrawIcon from '@mui/icons-material/Draw';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import { softwareSkills } from '../helpers/softwareSkills'
import { illustrationSkills } from '../helpers/illustrationSkills'
import { uiuxSkills } from '../helpers/uiuxSkills'
import { visualDesignSkills } from '../helpers/visualDesignSkills'

function Skills() {

  // eslint-disable-next-line no-unused-vars
  // const [completed, setCompleted] = useState(0);

  // useEffect(() => {
  //   setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  // }, []);


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
              <p className='custom--skill--text'>Frontend involves creating the UI/UX of a website or application, focusing on the visual design, layout, and interactivity.</p>
            </div>
          </div>
          <div className="skills--progress">
            {softwareSkills.map((item, idx,) => (
              <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} skill={item.skill}/>
            ))}
          </div>
        </div>

        <div className="skills--card">
          <div className="black--square">
            <div className="black--square--info">
              <DrawIcon className='draw--icon'/>
              <h3 className='custom--skill--header'>Illustration</h3>
              <p className='custom--skill--text'>Illustration is the captivating alchemy of transforming thoughts, narratives, or abstract notions into compelling visual stories.</p>
            </div>
          </div>
          <div className="skills--progress">
            {illustrationSkills.map((item, idx) => (
              <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} skill={item.skill}/>
            ))}
          </div>
        </div>

        <div className="skills--card">
          <div className="black--square">
            <div className="black--square--info">
              <ColorLensOutlinedIcon className='illustration--icon'/>
              <h3 className='custom--skill--header'>UI / UX</h3>
              <p className='custom--skill--text'>UI/UX design is the harmonious blend of aesthetics and functionality, where artistry meets user-centered innovation to create seamless, engaging digital experiences.</p>
            </div>
          </div>
          <div className="skills--progress">
            {uiuxSkills.map((item, idx) => (
              <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} skill={item.skill}/>
            ))}
          </div>
        </div>

        <div className="skills--card">
          <div className="black--square">
            <div className="black--square--info">
              <DesignServicesOutlinedIcon className='design--icon'/>
              <h3 className='custom--skill--header'>Visual Design</h3>
              <p className='custom--skill--text'>Visual design is the creative process of transforming ideas and concepts into visually captivating elements, harnessing the power of color, typography, imagery, and layout.</p>
            </div>
          </div>
          <div className="skills--progress">
            {visualDesignSkills.map((item, idx) => (
              <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} skill={item.skill}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
