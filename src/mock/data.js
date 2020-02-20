import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Sunil | Software Engineer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi all 👋',
  name: `I'm Sunil.`,
  subtitle: `Sr. Fullstack Developer | Entrepreneur.`,
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraph: [
    `Hello! I'm Sunil 4+ year of experience as, a software engineer based in Mumbai, India.`,
    `I develop exceptional mobile app, web app, and and modern backends.
  Here are a few technologies I've been working with recently. JavaScript, Angular, React Native, Node, Express.js, Serverless, PostgresSQL & MongoDB.`,
    `I would love to set up an introduction call to discuss how I could help your business and make your goals happen.`,
  ],
  resume: 'https://sunil-doc.s3.ap-south-1.amazonaws.com/sunil_fullstack_developer.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'bizanalyst.jpg',
    title: 'Tally On Mobile',
    info: [
      ` Biz Analyst Tally mobile app brings real time information & allows you to access your Tally ERP9 data anytime / anywhere.`,
      `It is securely synced with your Tally ERP9 installation.`,
      `Team Size of 7 people`,
    ],
    info2: `Tech used: Electron js, Node js, Serverless, Angular, DyanamoDB, MongoDB, Postgres`,
    url: 'https://bizanalyst.in/',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'b2x.jpg',
    title: 'B2X Solutions',
    info: [
      'New After-Sales Solution for mobile OEM',
      `Handle mobile repair center for OEM like Google, Apple Samsung.`,
      `Team Size of 6 people`,
    ],
    info2: `Tech used: Express js, Node js, Angular js, Postgres`,
    url: 'https://b2x.com',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'gymbook.jpg',
    title: 'GymBook',
    info: ['Help Gym owner to manage their gym', `Founder of App, 3000+ Register user`],
    info2: 'Tech used: Express js, Node js, MongoDB, React Native',
    url: 'https://gymbook.in',
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
