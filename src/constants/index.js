import {
  frontend,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  laravel,
  git,
  figma,
  appwrite,
  youtube,
  kodego,
  freecodecamp,
  nextjsportfolio,
  threejsportfolio,
  ssgtaskmanagement,
  threejs,
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
    title: "Front-End Developer",
    icon: frontend,
  },
  {
    title: "Back-End Developer",
    icon: backend,
  },
  {
    title: "System Application Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "html",
    icon: html,
  },
  {
    name: "css",
    icon: css,
  },
  {
    name: "javascript",
    icon: javascript,
  },
  {
    name: "typescript",
    icon: typescript,
  },
  {
    name: "reactjs",
    icon: reactjs,
  },
  {
    name: "tailwind",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Laravel",
    icon: laravel,
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
    name: "appwrite",
    icon: appwrite,
  },
  {
    name: "appwrite",
    icon: appwrite,
  },
];

const experiences = [
  {
    title: "Front-End Developer (Bootcamp Project)",
    company_name: "KodeGo BootCamp, Philippines",
    icon: kodego,
    iconBg: "#383E56",
    date: "July 2023 - September 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Back-End Developer (Bootcamp Project)",
    company_name: "KodeGo BootCamp, Philippines",
    icon: kodego,
    iconBg: "#E6DEDD",
    date: "October 2023 - November 2023",
    points: [
      "Developed and maintained server-side logic and databases using Laravel, ensuring robust and scalable web applications.",
      "Collaborated with front-end developers, designers, and product managers to integrate user-facing elements with server-side logic.",
      "Optimized application performance by managing data storage solutions and enhancing query efficiency.",
      "Conducted code reviews and provided valuable feedback to improve the back-end architecture and overall system performance.",
    ],
  },
  {
    title: "Responsive Web Design",
    company_name: "freeCodeCamp",
    icon: freecodecamp,
    iconBg: "#383E56",
    date: "June 2024 - July 2024",
    points: [
      "Completed hands-on projects to master responsive web design principles, ensuring websites are visually appealing and functional across various devices.",
      "Gained expertise in HTML, CSS, and Flexbox, utilizing these technologies to create fluid layouts and adaptive interfaces.",
      "Focused on mobile-first design approaches, optimizing user experiences for smaller screens and progressively enhancing for larger devices.",
      "Validated and refined web designs through rigorous testing for cross-browser compatibility and adherence to web accessibility standards.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "YouTube",
    icon: youtube,
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Present",
    points: [
      "Developing and maintaining full-stack web applications using a variety of technologies, including Django , Next.js, and React.js, .",
      "Actively engaging in self-directed learning through YouTube, constantly expanding knowledge in emerging technologies such as Three.js,Laravel and the MERN stack.",
      "Implementing responsive design and optimizing application performance to create seamless user experiences across multiple devices.",
      "Striving to master new tech stacks and frameworks, continuously refining skills to stay updated with the latest industry trends and best practices.",
    ],
  },
];

const projects = [
  {
    name: "NextJs Portfolio",
    description:
      'Designed and developed a modern portfolio website using Next.js, showcasing personal projects, skills, and experiences with optimized performance and SEO.',
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: nextjsportfolio,
    source_code_link: "https://github.com/LemuelVelez/-My_Portfolio",
  },
  {
    name: "ThreeJs Portfolio",
    description:
      "A 3D portfolio web application built with Three.js, showcasing projects in an interactive, visually engaging way. Users can explore various projects, view details, and navigate through immersive 3D scenes.",
    tags: [
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "emailjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: threejsportfolio,
    source_code_link: "https://github.com/LemuelVelez/3JS_PORTFOLIO",
  },
  {
    name: "Task Management System",
    description:
      "This web application allows the SSG President to manage tasks, track attendance, and monitor participation through a mobile-friendly interface for efficient submissions.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "shadcn",
        color: "green-text-gradient",
      },
      {
        name: "appwrite",
        color: "pink-text-gradient",
      },
    ],
    image: ssgtaskmanagement,
    source_code_link: "https://github.com/LemuelVelez/ssg-task-manager",
  },
];

export { services, technologies, experiences, projects };
