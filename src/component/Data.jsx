
import stock from './../assets/projects/stock-desktop1.png';
import coins from './../assets/projects/coins-desktop1.png';
import movies from './../assets/projects/movie-desktop1.png';
import home from './../assets/projects/ome-heart.png';

export const SkillData = [
  {
    skill: 'HTML',
    percent: '99%',
  },
  {
    skill: 'CSS',
    percent: '99%',
  },
  {
    skill: 'Javascript',
    percent: '99%',
  },
  {
    skill: 'React',
    percent: '99%',
  },
];

export const SkillData2 = [
  {
    skill: 'RUBY',
    percent: '80%',
  },
  {
    skill: 'Ruby on Rails',
    percent: '90%',
  },
  {
    skill: 'Node',
    percent: '85%',
  },
  {
    skill: 'Redux',
    percent: '99%',
  },
];


export const PortfolioData = [
  {
    img: home,
    name: 'Home & Heart',
    details: 'This is a React-Redux app that allows user to sign up and sign in, allow only sign up user to add items, delete item and also make reservaation for each items and view them later on. The APIs are built with Ruby on Rails.',
    github: 'https://github.com/YinkTech/Home-heart',
    link: 'https://home-heart.netlify.app/',
  },
  {
    img: stock,
    name: 'Stock Market',
    details: 'This is a React-Redux app that display all the crytopcurrency coins and display it details on a new page with trending coins list at the side',
    github: 'https://github.com/YinkTech/Stock-Market',
    link: 'https://yinktech.github.io/Stock-Market',
  },
  {
    img: coins,
    name: 'Coins Marketplace',
    details: 'This project is a captone project in javascript, where data is been fetched from api and a data is also passed. It also including searching the name.',
    github: 'https://github.com/YinkTech/Coins-Marketplace',
    link: 'https://yinktech.github.io/Coins-Marketplace',
  },
  {
    img: movies,
    name: 'Movies Store',
    details: 'This is a React-Redux app to store movies and place them in a different categories.',
    github: 'https://github.com/YinkTech/Bookstore-app',
    link: 'https://yinktech.github.io/Bookstore-app',
  },
]