import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Sunil | Software Engineer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is ',
  name: 'Sunil',
  subtitle: 'I like to make stuff with code',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `I'm a professional and passionate Software Developer focused on efficiency and constant learning.`,
  paragraphTwo: `I have created solutions for my clients by improving their web development processes and accomplish their ideas come true, either from the front-end or the back-end mostly using JavaScript, React, Gatsby, Node, Express.js & MongoDB.`,
  paragraphThree: `I would love to set up an introduction call to discuss how I could help your business and make your goals happen.`,
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'bizanalyst.jpg',
    title: 'Tally On Mobile',
    info: `
    Biz Analyst Tally mobile app brings real time information & allows you to access your Tally ERP9 data anytime / anywhere. It is securely synced with your Tally ERP9 installation.`,
    info2: '',
    url: 'https://bizanalyst.in/',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'b2x.jpg',
    title: 'B2X Solutions',
    info: 'After sales service',
    info2: '',
    url: 'https://b2x.com',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'gymbook.jpg',
    title: 'GymBook',
    info: 'Help Gym owner to manage their gym',
    info2: '',
    url: 'https://b2x.com',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: uuidv1(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: uuidv1(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/sunilpatel21',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/chill-patel',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
