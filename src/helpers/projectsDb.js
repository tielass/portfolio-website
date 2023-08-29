import giftit1 from '../images/giftit1.jpg'
import giftit2 from '../images/giftit2.jpg'
import giftit3 from '../images/giftit3.jpg'
import giftit4 from '../images/giftit4.jpg'
import giftit5 from '../images/giftit5.jpg'
import Asfalting1 from '../images/asfalting-website-1.jpg'
import Asfalting2 from '../images/asfalting-website-2.jpg'
import Asfalting3 from '../images/asfalting-website-3.jpg'
import Asfalting4 from '../images/asfalting-website-4.jpg'
import Asfalting5 from '../images/asfalting-website-5.jpg'
import LonelyFans from '../images/lonelyfans.jpg'
import Githublogo from '../images/githublogo.png'


export const projectsDb = [
  {
    id: 1,
    title: 'GiftIt',
    description: 'Giftit is a webapp, which helps the user select the right gift, create events and invite friends to them and make use of the birthday calendar feature.  ',
    image: [giftit1, giftit2, giftit3, giftit4, giftit5 ],
    type: "fullstack",
    skills: ['Ruby on rails', 'Javascript', 'Webapp Design', 'Figma', 'HTML & CSS'],
    url: 'https://www.giftit.one/',
    tag: "Ruby / Rails"
  },
  {
    id: 2,
    title: 'AsfaltingLtd',
    description: 'Website for the road construction and maintenance company Asfalting Ltd',
    image: [Asfalting1, Asfalting2, Asfalting3, Asfalting4, Asfalting5],
    type: "Frontend",
    skills: ['React', 'Javascript', 'Webapp design', 'Figma', 'HTML & CSS', 'react-router-dom'],
    url: 'https://asfaltingltd.netlify.app/',
    tag: "React"
  },
  {
    id: 3,
    title: 'LonelyFans',
    description: 'LonelyFans is a collaborative project for an online platform, on which users can book sports fans for events. Simply create an account and either book a fan or register yourself as one and join those games you love. The project was created with Ruby on Rails.',
    image: [LonelyFans],
    type: "Frontend",
    skills: ['Ruby on rails', 'Ruby', 'Webapp design', 'Figma', 'HTML & CSS'],
    url: 'https://github.com/tielass/-lonelyfans',
    tag: "Ruby / Rails"
  },
  {
    id: 4,
    title: 'GH Api Task',
    description: 'A small project to fetch information from GitHubs API and using that information to create or update an account on FreshDesk, using their API. Alongside the API task I have also added unit tests using Jest.',
    image: [Githublogo],
    type: "Backend",
    skills: ['NodeJS', 'Javascript', 'Backend', 'CLI', 'API', 'Jest', 'Unit testing'],
    url: 'https://github.com/tielass/craft-demo-mihail',
    tag: "JavaScript"
  },
]
