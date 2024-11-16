import {
  frontend,
  backend,
  creator,
  web,
  typescript,
  tailwind,
  nodejs,
  git,
  appwrite,
  youtube,
  kodego,
  ssg,
  freecodecamp,
  nextjsportfolio,
  threejsportfolio,
  ssgtaskmanagement,
  nextjs,
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
    name: "git",
    icon: git,
  },
  {
    name: "appwrite",
    icon: appwrite,
  },
  {
    name: "TypeScript",
    icon: typescript,
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
    name: "nextjs",
    icon: nextjs,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "KodeGo BootCamp, Philippines",
    icon: kodego,
    iconBg: "#383E56",
    date: "July 2023 - November 2023",
    points: [
      "Worked on full-stack development projects, building responsive web applications with a focus on user experience and performance.",
      "On the frontend, used React and other technologies to create mobile-first, cross-browser-compatible interfaces",
      "On the backend, developed server - side logic and managed databases with Laravel, collaborating closely with the frontend team to ensure seamless integration and data synchronization for optimized user interactions.",
    ],
  },
  {
    title: "Responsive Web Design",
    company_name: "freeCodeCamp",
    icon: freecodecamp,
    iconBg: "#7A839F",
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
    date: "August 2024 - Present",
    points: [
      "Developing and maintaining full-stack web applications using a variety of technologies, including Django , Next.js, and React.js, .",
      "Actively engaging in self-directed learning through YouTube, constantly expanding knowledge in emerging technologies such as Three.js,Laravel and the MERN stack.",
      "Implementing responsive design and optimizing application performance to create seamless user experiences across multiple devices.",
      "Striving to master new tech stacks and frameworks, continuously refining skills to stay updated with the latest industry trends and best practices.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Supreme Student Government, Jose Rizal Memorial State University - Tampilisan Campus",
    icon: ssg,
    iconBg: "#6F6665",
    date: "September 2024 - Present",
    points: [
      "Created the SSG Task Manager system, an in-house tool designed to streamline organizational workflows for the Supreme Student Government.",
      "This project involved the full software development lifecycle from concept through implementation and has enhanced overall task management efficiency.",
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
