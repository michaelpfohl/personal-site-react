/* eslint-disable max-len */
/* eslint-disable global-require */
const projects = [
  {
    title: 'Gnophy',
    screenshot: 'https://i.postimg.cc/029prDwf/Screen-Shot-2021-03-04-at-8-25-13-PM.png',
    description:
      'Named for the ancient Greek “Gnosis” (personal knowledge) and “Physis” (nature), Gnophy is an app built to encourage kids to learn about the nature around them via experience. The user can add Outings on which they will catalogue Sightings of the flora, fauna, and fungi that they encounter. From there, the user can input information about their own personal experience with what they encountered. Users can view all Sightings on a particular Outing or all Sightings as whole, as well as filter Sightings by type (flora, fauna, fungi). While adding Sightings, users will level up and unlock achievements as a way to motivate a continued journey of discovery.',
    technologiesUsed:
      'React / HTML / SCSS / Firebase / Version Control with Github',
    available: true,
    url: 'https://gnophy.netlify.app/',
    githubUrl: 'https://github.com/michaelpfohl/ec13-capstone-gnophy',
    hidden: false,
  },
  {
    title: 'React Pinterest',
    screenshot: 'https://i.postimg.cc/yNwTB748/Screen-Shot-2020-11-23-at-10-10-41-PM.png',
    description:
      'My goal for this project was to recreate a previous Pinterest-esque project in React as a way to practice state management, CRUD, authentication, and relating data using join tables on Firebase.',
    technologiesUsed:
      'React / HTML / SCSS / Firebase / Version Control with Github',
    available: true,
    url: 'https://react-pinterest-mp.netlify.app/',
    githubUrl: 'https://github.com/michaelpfohl/react-pinterest',
    hidden: false,
  },
  {
    title: 'Joke Generator',
    screenshot: 'https://i.postimg.cc/sDX3dzVW/Screen-Shot-2020-11-23-at-9-52-14-PM.png',
    description:
      'Press the button, get a joke. Press again, get the punchline. Repeat for marginal funnies. Joke generator made using Official Joke API and React.',
    technologiesUsed:
      'React / HTML / SCSS / Version Control with Github',
    available: true,
    url: 'https://joke-generator-mp.netlify.app',
    githubUrl: 'https://github.com/michaelpfohl/react-joke',
    hidden: false,
  },
  {
    title: 'Restaurant Dashboard',
    screenshot: 'https://i.postimg.cc/QCzZmBKq/Screen-Shot-2020-11-23-at-9-29-01-PM.png',
    description:
      'Group project completed at NSS. First week of coding was done by one team and then unexpectedly all teams were shuffled in order to simulate working on a completely unfamiliar codebase. Goal was to gain proficency creating a CRUD app while working with API calls.',
    technologiesUsed:
      'HTML / SCSS / JavaScript / Firebase / jQuery / Bootstrap / Webpack / Version Control with Github',
    available: true,
    url: 'https://le-baguette-e03bd.web.app/#',
    githubUrl: 'https://github.com/nss-evening-cohort-13/michelin-star-restaurant-dashboard-michelin-star-restaurant-dashboard',
    hidden: false,
  },
  {
    title: 'Snoopy Chat',
    screenshot: 'https://i.postimg.cc/nLcSXRgy/Screen-Shot-2020-11-23-at-8-49-58-PM.png',
    description:
      'Chat app that allows the user to select a persona and post, edit, and remove chat messages which elicit responses from chat bots if the correct keyword is used. Also features dark and large text mode options.',
    technologiesUsed:
      'HTML / SCSS / JavaScript / jQuery / Bootstrap / Webpack /  Version Control with Github',
    available: true,
    url: 'https://chatty-group-project.netlify.app/',
    githubUrl: 'https://github.com/michaelpfohl/chatty-beta',
    hidden: false,
  },
  {
    title: 'Jodhpur Pants',
    screenshot: 'https://i.postimg.cc/SRFWMdDL/Screen-Shot-2020-11-23-at-9-04-03-PM.png',
    description:
      'E-commerce site for a "very popular" style of pants, Jodphurs! The first group project I was a part of at NSS. Featuring a home page with a carousel of video reviews, as well as the ability to add pants to your cart and wishlist.',
    technologiesUsed:
      'HTML / JavaScript / Bootstrap /  Version Control with Github',
    available: true,
    url: 'https://jodhpur-pants.netlify.app',
    githubUrl: 'https://github.com/michaelpfohl/pants-group-project-todo-team-name-team-2',
    hidden: false,
  },
  {
    title: 'MTG Life Counter',
    screenshot: 'http://i.imgur.com/oXDp10eh.gifv',
    description:
      'App that lets you keep track of the life totals of any number of players while playing Magic: The Gathering. Lets you add, remove, and rename players, as well as set the app to Commander or Standard mode.',
    technologiesUsed:
      'HTML / CSS / JavaScript / Version Control with Github',
    available: true,
    url: 'https://mtg-life-counter-mp.netlify.app',
    githubUrl: 'https://github.com/michaelpfohl/mtg-life-counter',
    hidden: false,
  },
  {
    title: 'Color Clicker',
    screenshot: 'https://i.postimg.cc/w38b36Y2/Screen-Shot-2020-11-23-at-8-55-47-PM.png',
    description:
      'The digital equivalent of the satisfaction of popping bubble wrap! Each circle can be clicked to toggle the background to a random color, an exercise that is strangely satisfying and peaceful. Created as part of a 1 hour coding challenge with Nashville Programming Hour at Lyft.',
    technologiesUsed:
      'HTML / CSS / JavaScript / Version Control with Github',
    available: true,
    url: 'https://color-clicker.netlify.app',
    githubUrl: 'https://github.com/michaelpfohl/color-clicker',
    hidden: false,
  },
  {
    title: 'Dino Kennel',
    screenshot: 'https://i.postimg.cc/G3s7Tsgm/Screen-Shot-2020-11-23-at-8-51-41-PM.png',
    description:
      'Individual challenge for the first Milestone of NSS. A simple game that lets a user add dinos to a kennel then feed, play with, and send their dinos on adventures. Each action has an impact on the dinos health which in turn impacts where said dinos are kept.',
    technologiesUsed:
      'HTML / CSS / JavaScript / Bootstrap / Version Control with Github',
    available: true,
    url: 'https://dino-kennel.netlify.app/',
    githubUrl: 'https://github.com/michaelpfohl/dino-kennel',
    hidden: false,
  },
  {
    title: 'Bear Watcher',
    screenshot: 'https://i.postimg.cc/X7dMwPJm/bear-watcher.gif',
    description:
      'Single page application that allows a user to enter the name and image of bears and then catalog the date and time of each time the bear attempts to or succeeds in catching a fish. The goal of the project was to become more familiar with ES6 Modules.',
    technologiesUsed:
      'HTML / CSS / JavaScript / Bootstrap / Version Control with Github',
    available: true,
    url: 'https://bear-watcher-mp.netlify.app/',
    githubUrl: 'https://github.com/michaelpfohl/bear-watcher',
    hidden: false,
  },
  {
    title: 'Sorting Hat',
    screenshot: 'https://i.postimg.cc/hGcX6VjQ/sorting-hat.gif',
    description:
      'Single page application that accepts a students name and randomly assigns them a house from Hogwarts. Each  student card is provided a background color according to the house and has an expel button which will remove the card from the page.',
    technologiesUsed:
      'HTML / CSS / JavaScript / Bootstrap / Version Control with Github',
    available: true,
    url: 'https://sorting-hat-mp.netlify.app/#',
    githubUrl: 'https://github.com/michaelpfohl/sorting-hat',
    hidden: false,
  },
  {
    title: 'Color Flipper',
    screenshot: 'https://i.postimg.cc/tRDpsws5/color-flipper.gif',
    description:
      'Single page application that allows a user to generate a random color from a pre-generated array of simple colors or a truly random color with a random hex code. Background and logo color change according to color selected.',
    technologiesUsed: 'HTML / CSS / JavaScript / Version Control with Github',
    available: true,
    url: 'https://color-flipper-mp.netlify.app/',
    githubUrl: 'https://github.com/michaelpfohl/color-flipper',
    hidden: false,
  },
  {
    title: 'Pies',
    screenshot: 'https://i.postimg.cc/fTrsKdjS/pies.gif',
    description:
      'Single page application styled with Bootstrap displaying cards with details for pies with buttons with filter functionality that also change the background color when pressed.',
    technologiesUsed:
      'HTML / CSS / JavaScript / Bootstrap / Version Control with Github',
    available: true,
    url: 'https://bootstrap-pies.netlify.app/',
    githubUrl: 'https://github.com/michaelpfohl/event-listeners',
    hidden: false,
  },
  {
    title: 'Pet Adoption',
    screenshot: 'https://i.postimg.cc/286mhGvf/pet-adoption.gif',
    description:
      'Single page application displaying cards with details for adoptable pets with buttons with filter functionality that also change the background color when pressed.',
    technologiesUsed: 'HTML / CSS / JavaScript / Version Control with Github',
    available: true,
    url: 'https://pet-adoption-michael-pfohl.netlify.app/',
    githubUrl: 'https://github.com/michaelpfohl/pet-adoption',
    hidden: false,
  },
  {
    title: 'Monochromed Template',
    screenshot: 'https://i.postimg.cc/1tBhNV3t/monochromed-template.png',
    description: 'Reimagining of the Monochromed Template from Templated.co',
    technologiesUsed: 'HTML / CSS / Version Control with Github',
    available: true,
    url: 'https://monochromed-template.netlify.app/',
    githubUrl: 'https://github.com/michaelpfohl/monochromed-template',
    hidden: true,
  },
  {
    title: 'Coffee Houses of Nashville',
    screenshot: 'https://i.postimg.cc/2SLDX52c/coffee-houses.png',
    description:
      'Simple webpage using flexbox to display cards for a variety of coffee houses in Nasvhille',
    technologiesUsed: 'HTML / CSS / Version Control with Github',
    available: true,
    url: 'https://pet-adoption-michael-pfohl.netlify.app/',
    githubUrl: 'https://github.com/michaelpfohl/pet-adoption',
    hidden: true,
  },
  {
    title: 'Fork Product Cards',
    screenshot: 'https://i.postimg.cc/d08KwxMG/fork-product-cards.png',
    description:
      'Simple webpage using flexbox to display cards for forks using an overlayed image on sold out items.',
    technologiesUsed: 'HTML / CSS / Version Control with Github',
    available: true,
    url: 'https://github.com/michaelpfohl/coffee-houses',
    githubUrl: 'https://github.com/michaelpfohl/coffee-houses',
    hidden: true,
  },
];

const getProjects = () => projects;

export default { getProjects };
