import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  shopify,
  redis,
  java,
  kafka,
  coreverse,
  integrate,
  almamate,
  fakeNews,
  website_monitoring,
  expense_tracker,
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  }
];

const technologies: TTechnology[] = [
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
    name: "Redis",
    icon: redis,
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
    name: "Java",
    icon: java,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "kafka",
    icon: kafka,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Software Developer Intern",
    companyName: "Integrate Marketing Technologies",
    icon: integrate,
    iconBg: "#383E56",
    date: "Jan 2025 - Apr 2025",
    points: [
      "Developed a scalable hybrid API architecture using gRPC and REST, improving request-response performance by 30%.",
      "Integrated Redis caching to handle high-frequency traffic and reduced latency by 15%.",
      "Implemented rate limiting and used RabbitMQ with durability for resilient messaging, reducing request failures by 90%.",
      "Focused on writing secure and scalable backend code using C# and .NET.",
    ],
  },
  {
    title: "Software Developer Intern",
    companyName: "Coreverse Pvt. Ltd",
    icon: coreverse, 
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Mar 2024",
    points: [
      "Led frontend development of 'Docore' School Management System using Flutter and Dart.",
      "Improved user satisfaction by 25% through responsive UI and seamless UX.",
      "Collaborated with cross-functional teams and used Git/GitHub for efficient version control.",
      "Integrated Firebase for real-time data updates and authentication.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Almamate",
    description:
      "A full-stack alumni-student engagement platform with real-time chat, event management, and secure role-based access. Enables seamless interaction between students, alumni, and faculty.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "websockets", color: "pink-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
    ],
    image: almamate,
    sourceCodeLink: "https://github.com/RismanRJ/Almamate", 
  },
  {
    name: "Fake News Detector",
    description:
      "An AI-powered system to classify news articles as real or fake using TF-IDF and Logistic Regression, with 98% accuracy. Features news summarization and language translation.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "flask", color: "green-text-gradient" },
      { name: "react", color: "pink-text-gradient" },
      { name: "ml", color: "blue-text-gradient" },
    ],
    image: fakeNews,
    sourceCodeLink: "https://github.com/RismanRJ/Fake_news_detection", 
  },
  {
    name: "WebSite Monitoring",
    description:
      "A Java multi‑threaded website monitoring tool that periodically checks endpoint availability and response times concurrently using threads, logging results for analytics.",
    tags: [
      { name: "java", color: "blue-text-gradient" },
      { name: "multithreading", color: "green-text-gradient" },
      { name: "logging", color: "pink-text-gradient" },
    ],
    image: website_monitoring, 
    sourceCodeLink: "https://github.com/RismanRJ/WebSite_Monitoring",
  },
  {
  name: "Expense Tracker",
  description:
    "A React-based single-page expense tracking app that allows users to manage multiple user profiles and categorize expenses. Features include add/edit/delete users and expenses, live updates to user totals, and a visual summary of spending by category.",
  tags: [
    { name: "react", color: "blue-text-gradient" },
    { name: "styled_components", color: "pink-text-gradient" },
    { name: ".Net MVC", color: "green-text-gradient" },
  ],
  image: expense_tracker, 
  sourceCodeLink: "https://github.com/RismanRJ/Expense-Tracker",
},
{
  name: "Shopify E‑commerce",
  description:
    "A full‑stack e‑commerce platform built with Node.js, Express, React, and MongoDB. Features include product listing, shopping cart, authentication, order processing, and an admin dashboard with inventory and user management.",
  tags: [
    { name: "react", color: "blue-text-gradient" },
    { name: "nodejs", color: "green-text-gradient" },
    { name: "mongodb", color: "pink-text-gradient" },
    { name: "zustand", color: "blue-text-gradient" },
  ],
  image: shopify,
  sourceCodeLink: "https://webreact-21f64.web.app/",
}


];


export { services, technologies, experiences, testimonials, projects };
