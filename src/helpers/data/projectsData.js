// import image from '../../../public/projects/sorting-hat.gif'

const imgPath = '../../../public/assets/images/projects';

const projects = [
  {
    title: 'Sorting Hat',
    screenshot: `${imgPath}/sorting-hat.gif`,
    description:
      'Single page application that accepts a students name and randomly assigns them a house from Hogwarts. Each  student card is provided a background color according to the house and has an expel button which will remove the card from the page.',
    technologiesUsed:
      'HTML / CSS / JavaScript / Bootstrap / Version Control with Github',
    available: true,
    url: 'https://sorting-hat-mp.netlify.app/#',
    githubUrl: 'https://github.com/michaelpfohl/sorting-hat',
  },
  {
    title: 'Color Flipper',
    screenshot: 'https://photos.app.goo.gl/85ycw3TXJq5gLa226',
    description:
      'Single page application that allows a user to generate a random color from a pre-generated array of simple colors or a truly random color with a random hex code. Background and logo color change according to color selected.',
    technologiesUsed: 'HTML / CSS / JavaScript / Version Control with Github',
    available: true,
    url: 'https://color-flipper-mp.netlify.app/',
    githubUrl: 'https://github.com/michaelpfohl/color-flipper',
  },
  {
    title: 'Pies',
    screenshot: 'project-images/pies.gif',
    description:
      'Single page application styled with Bootstrap displaying cards with details for pies with buttons with filter functionality that also change the background color when pressed.',
    technologiesUsed:
      'HTML / CSS / JavaScript / Bootstrap / Version Control with Github',
    available: true,
    url: 'https://bootstrap-pies.netlify.app/',
    githubUrl: 'https://github.com/michaelpfohl/event-listeners',
  },
  {
    title: 'Pet Adoption',
    screenshot: 'project-images/pet-adoption.gif',
    description:
      'Single page application displaying cards with details for adoptable pets with buttons with filter functionality that also change the background color when pressed.',
    technologiesUsed: 'HTML / CSS / JavaScript / Version Control with Github',
    available: true,
    url: 'https://pet-adoption-michael-pfohl.netlify.app/',
    githubUrl: 'https://github.com/michaelpfohl/pet-adoption',
  },
  {
    title: 'Monochromed Template',
    screenshot: 'project-images/monochromed-template.png',
    description: 'Reimagining of the Monochromed Template from Templated.co',
    technologiesUsed: 'HTML / CSS / Version Control with Github',
    available: true,
    url: 'https://monochromed-template.netlify.app/',
    githubUrl: 'https://github.com/michaelpfohl/monochromed-template',
  },
  {
    title: 'Coffee Houses of Nashville',
    screenshot: 'project-images/coffee-houses.png',
    description:
      'Simple webpage using flexbox to display cards for a variety of coffee houses in Nasvhille',
    technologiesUsed: 'HTML / CSS / Version Control with Github',
    available: true,
    url: 'https://pet-adoption-michael-pfohl.netlify.app/',
    githubUrl: 'https://github.com/michaelpfohl/pet-adoption',
  },
  {
    title: 'Fork Product Cards',
    screenshot: 'project-images/fork-product-cards.png',
    description:
      'Simple webpage using flexbox to display cards for forks using an overlayed image on sold out items.',
    technologiesUsed: 'HTML / CSS / Version Control with Github',
    available: true,
    url: 'https://github.com/michaelpfohl/coffee-houses',
    githubUrl: 'https://github.com/michaelpfohl/coffee-houses',
  },
];

const getProjects = () => projects;

export default { getProjects };
