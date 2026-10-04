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
  snitch,
  integrate,
  almamate,
  fakeNews,
  website_monitoring,
  expense_tracker,
  sre_agent,
  agentic_scrapper,
  python,
  go,
  postgresql,
  aws,
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
    name: "Python",
    icon: python,
  },
  {
    name: "Go",
    icon: go,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "AWS",
    icon: aws,
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
    title: "Software Engineer (Backend)",
    companyName: "Snitch",
    icon: snitch,
    iconBg: "#E6DEDD",
    date: "July 2025 - Present",
    points: [
      "Built a real-time order allocation engine for same-day and next-day delivery, evaluating 20M+ routing combinations at p95 218ms on indexed PostgreSQL.",
      "Lifted SDD from 17% to 27% and NDD from 40% to 55% through allocation optimization, multi-delivery-partner handling and tie-breaker rules.",
      "Owned the migration to an in-house data platform (Airbyte, Airflow, dbt, Redshift) on EKS, and moved backend servers from AWS App Runner to ECS with zero downtime.",
      "Re-architected the quick-commerce serviceability API with cache-first lookups, cutting Google Maps calls 94% and p95 latency from 578ms to 107ms.",
      "Led technical SEO fixes on a Next.js storefront and built Style Bot, an LLM-powered shopping assistant.",
    ],
  },
  {
    title: "Backend Engineer",
    companyName: "Integrate Marketing Technologies",
    icon: integrate,
    iconBg: "#383E56",
    date: "Jan 2025 - Jun 2025",
    points: [
      "Architected a hybrid gRPC + REST API layer with binary serialization, reducing latency 30% (450ms to 315ms).",
      "Implemented RabbitMQ async messaging with dead-letter queues and idempotency guards, achieving 99.9% delivery guarantee.",
      "Engineered multi-tier Redis caching, reducing database load 58% and latency from 480ms to 140ms for 50K+ daily orders.",
      "Built a distributed token-bucket rate limiter that prevented cascading failures during 10x traffic spikes, reducing failures 90%.",
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
    name: "SRE On-Call Agent",
    description:
      "An autonomous incident monitor that pulls metrics from New Relic, CloudWatch, Aurora PostgreSQL, Redis and Elasticsearch, checks them against per-service thresholds, and runs LLM-based root-cause analysis on every breach.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "fastapi", color: "green-text-gradient" },
      { name: "ollama", color: "pink-text-gradient" },
      { name: "docker", color: "blue-text-gradient" },
    ],
    image: sre_agent,
    sourceCodeLink: "https://github.com/RismanRJ/SRE-Oncall-Agent",
  },
  {
    name: "Agentic Scrapper",
    description:
      "A sandboxed web scraping platform where an LLM drafts the extraction config, an admin approves it, and each job runs in an ephemeral container behind an allowlisting egress proxy. Go gateway, Celery workers and CLIP-based moodboards.",
    tags: [
      { name: "go", color: "blue-text-gradient" },
      { name: "celery", color: "green-text-gradient" },
      { name: "pgvector", color: "pink-text-gradient" },
      { name: "playwright", color: "blue-text-gradient" },
    ],
    image: agentic_scrapper,
    sourceCodeLink: "https://github.com/RismanRJ/Agentic-scrapper",
  },
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
