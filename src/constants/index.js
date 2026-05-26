import {
  mobile,
  backend,
  creator,
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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  msfabric,
  photoshop,
  powerbi,
  python,
  sql,
  ai,
  logo,
  ct,
  scatterpie,
  tks,
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
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "certification",
    title: "Certification",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Power BI",
    subtitle: "Dashboard & Analytics",
    icon: powerbi,
  },
  {
    title: "Agentic AI",
    subtitle: "AI Systems & Automation",
    icon: ai,
  },
  {
    title: "SQL",
    subtitle: "Database & Querying",
    icon: sql,
  },
  {
    title: "Python",
    subtitle: "Data Processing & ML",
    icon: python,
  },
  {
    title: "Microsoft Fabric",
    subtitle: "Data Engineering",
    icon: msfabric,
  },
  {
    title: "Adobe Photoshop",
    subtitle: "Graphic Design & Editing",
    icon: photoshop,
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
    title: "SQL Intern",
    company_name: "Celebal Technologies",
    icon: ct,
    iconBg: "#383E56",
    date: "June 2025 - August 2025",
    points: [
      "Worked with SQL Server to design, modify, and query relational databases using DDL, DML, Joins, and Views.",
      "Implemented advanced SQL features such as Stored Procedures, Triggers, CTEs, and Window Functions.",
      "Contributed to a departmental average salary analysis project analyzing employee salary data to compute average salary and employee count.",
      "Filtered departments where the average salary exceeds the overall average to provide actionable insights for decision-making.",
      "Tools Used: SQL Server, Power BI, Python, Databricks.",
    ],
  },
  {
    title: "Data Analytics Trainee & BI Intern",
    company_name: "ScatterPie Analytics",
    icon: scatterpie,
    iconBg: "#E6DEDD",
    date: "Sep 2025 - Apr 2026",
    points: [
      "Worked as a Business Intelligence Intern (On-site, Jan 2026 - Apr 2026) and Data Analytics Trainee (Remote, Sep 2025 - Jan 2026).",
      "Developed custom Power BI dashboards to translate complex business requirements into clear visualizations.",
      "Cleaned, transformed, and modeled raw data to build scalable reports.",
      "Leveraged SQL and Microsoft Power BI to extract, clean, and analyze datasets.",
      "Developed and optimized analytical queries and data cleaning pipelines in SQL.",
    ],
  },
  {
    title: "Business Intelligence Intern",
    company_name: "Techknomatic Services Private Limited",
    icon: tks,
    iconBg: "#ffffff",
    date: "Apr 2026 - Present",
    points: [
      "Working as a Business Intelligence Intern (On-site).",
      "Building interactive dashboards and business intelligence reporting solutions using Microsoft Power BI.",
      "Designing data models and calculating metrics to support core business decisions.",
    ],
  },
];

const testimonials = [
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

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
