// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo-transparent-png.png";
import logo from "./assets/logo-png.png";
// Profile Image
import profile from "./assets/profile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/ProjectBooki.png";
import projectImage2 from "./assets/projects/sophie bluel.png";
import projectImage3 from "./assets/projects/qwenta.png";
import projectImage4 from "./assets/projects/nina.png";
import projectImage5 from "./assets/projects/kasa.png";
import projectImage6 from "./assets/projects/mon vieux grimoire.png";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Nicolas Petit",
  tagline: "étudiant dev web chez Openclassroom.",
  img: profile,
  about: `Alors moi c'est Nicolas, j'ai 31 ans et je me suis lancé dans ce nouveau défis de reconversion pro pour devenir Developpeur Web. Je suis issus d'une formation de logistique et ayant travaillé dans ce milieu pendant près de 10 ans,  j'ai décidé de me lancer dans ce nouveau projet.
  Grâce à Openclassroom j'ai pu acquérir une grande connaissance dans le secteur de l'informatique et plus précisément dans le métier de developeur web.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/nicolas-petit80/",
  github: "https://github.com/Npetstud",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {}];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Developpeur Web",
    Company: "Chez Openclassroom",
    Location: "Online",
    Type: "Full Time",
    Duration: "Aout 2023 - Present",
  },
  
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  sass: sass,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Project Booki",
    image: projectImage1,
    description: `Dans ce projet, je devais créer la page d'accueil d'une agence de voyage avec Html et Css`,
    techstack: "HTML/CSS",
    previewLink: "https://npetstud.github.io/Projet_Booki/",
    githubLink: "https://github.com/Npetstud/Projet_Booki",
  },
  {
    title: "Project Sophie Bluel",
    image: projectImage2,
    description: `Dans ce projet, il fallait créer une page web dynamique pour le site internet d'une architecte d'intérieur en utilisant JavaScript et en communiquant avec une API.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com/Npetstud/Portfolio_sophie_Bluel",
  },
  {
    title: "Project Menu Maker by Qwenta",
    image: projectImage3,
    description: `Dans ce projet, je devais planifier le développement du site web sans intervenir dans le code. Pour ce projet, j'ai utilisé une veille technique, rédigé les spécifications techniques, utilisé un outil de gestion du projet et enfin présenté la solution technique.`,
    techstack: "Pocket, Trello",
    
  },
  {
    title: "Project Nina Carducci",
    image: projectImage4,
    description: `Dans ce projet, je devais debbuger et optimiser le site de la photographe nina carducci. Pour se faire, j'ai du optimiser le référencement d’un site, en améliorant sa performance et son accessibilité.`,
    techstack: "HTML/CSS, JavaScript, Wave, Lighthouse",
    previewLink: "https://npetstud.github.io/nina-carducci/",
    githubLink: "https://github.com/Npetstud/nina-carducci",
  },
  {
    title: "Project Kasa",
    image: projectImage5,
    description: `Dans ce projet, j'ai implémenté le Front-End en utilisant React et React Router. utilisation de SASS pour gérer le CSS et l'implémentation d’animations CSS et utilisation de Nodejs pour l'exécution du code JS`,
    techstack: "HTML/CSS/SASS, JavaScript, Nodejs",
    previewLink: "https://google.com",
    githubLink: "https://github.com/Npetstud/kasa_app",
  },
  {
    title: "Project Mon vieux Grimoire",
    image: projectImage6,
    description: `Dans ce projet, je devais développer le back end d'un site de notation de livre. Pour se faire, j'ai crée un serveur avec Express connecté à ma base de donnée MongoDb. J'ai implémenté
    des opération Crud pour la gestion et notation des livres. De plus j'y ai implémenté un systeme d'aythentification sécurisé pour les utilisateurs. Ce projet respecte les bonne pratiques du Green Code.`,
    techstack: "Javascript, Nodejs, Express, MongoDb",
    previewLink: "https://google.com",
    githubLink: "https://github.com/Npetstud/Mon_vieux_grimoire",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "Npetit80@laposte.net",
  phone: "0600000000",
};
