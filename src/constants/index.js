import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  jpm,
  diabetes,
  threejs,
  infosys,
  Emusic,
  AlgorithmAnalyzer,
  Cab24,
  weather,
  Ecommerce,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Infosys Springboard Internship",
    company_name: "Infosys",
    icon: infosys,
    iconBg: "#E6DEDD",

    points: [
      "Completed Infosys Springboard Internship by developing E-Music, a Django-based AI music application.",
      "Implemented features like user authentication, voice-based song search, and AI-driven music recommendations.",
    ],
  },
  {
    title: "JPMorgan Chase and Co.",
    company_name: "Software Engineering Job Simulation",
    icon: jpm,
    iconBg: "#E6DEDD",

    points: [
      "Completed a comprehensive virtual job simulation focused on real-world software engineering tasks.",
      "Collaborated in a simulated team environment to debug, troubleshoot, and improve software solutions.",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "Cab-24",
    description:
    "Developed Cab-24, a smart cab booking app with real-time ride tracking, fare estimation, and user-friendly interface. Focused on seamless navigation and responsive design. This project showcases my skills in building intuitive transport solutions that enhance user convenience and mimic real-world cab service experiences.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "openCV",
        color: "green-text-gradient",
      },
      {
        name: "Logistic Regression",
        color: "pink-text-gradient",
      },
    ],
    image: Cab24,
    source_code_link:
      "https://github.com/abhay9696",
    flag: "0",
  },
  {
    name: "Weather Forecast App",
    description:
      "Designed an interactive Weather Forecast App with real-time data, clean UI, and responsive layout. Integrated API to display temperature, humidity, and weather conditions by city. This project reflects my ability to combine functionality and design to deliver accurate, user-friendly weather updates across all devices.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "SQLite",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/abhay9696",
    flag: "0",
  },
  {
    name: "Basic E-Commerce Website",
    description:
      "Created a sleek and responsive E-Commerce website with dynamic product displays, interactive cart features, and smooth user navigation. Showcased strong frontend skills using HTML, CSS, and JavaScript. This project highlights my passion for crafting engaging online shopping experiences with clean design and functional performance.",
    tags: [
      {
        name: "Nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "JAVA",
        color: "pink-text-gradient",
      },
    ],
    image: Ecommerce,
    source_code_link: "https://github.com/abhay9696",
    flag: "0",
  },
];

export { services, technologies, experiences, testimonials, projects };
