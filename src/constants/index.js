import {
  frontend,
  backend,
  creator,
  mobile,
  web,
  typescript,
  tailwind,
  nodejs,
  git,
  appwrite,
  youtube,
  kodego,
  ssglogo,
  freecodecamp,
  nextjsportfolio,
  threejsportfolio,
  qrtransit,
  bg,
  nextjs,
  reactnative,
  expo,
} from "../assets"

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
]

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
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "System Application Creator",
    icon: creator,
  },
]

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
  {
    name: "React Native",
    icon: reactnative,
  },
  {
    name: "Expo",
    icon: expo,
  },
]

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
      "Developing and maintaining full-stack web applications using a variety of technologies, including Django, Next.js, and React.js.",
      "Actively engaging in self-directed learning through YouTube, constantly expanding knowledge in emerging technologies such as Three.js, Laravel, React Native, and Expo.",
      "Implementing responsive design and optimizing application performance to create seamless user experiences across multiple devices.",
      "Striving to master new tech stacks and frameworks, continuously refining skills to stay updated with the latest industry trends and best practices.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Supreme Student Government, Jose Rizal Memorial State University - Tampilisan Campus",
    icon: ssglogo,
    iconBg: "#6F6665",
    date: "September 2024 - Present",
    points: [
      "Created a comprehensive web application for the Supreme Student Government (SSG) to streamline attendance management at events and meetings",
      "This system empowers students with easy registration, QR code-based check-ins, and personalized dashboards, while providing administrators with powerful tools for event management and reporting.",
    ],
  },
]

const projects = [
  {
    name: "NextJs Portfolio",
    description:
      "Designed and developed a modern portfolio website using Next.js, showcasing personal projects, skills, and experiences with optimized performance and SEO.",
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
    live_demo_link: "https://my-portfolio-eight-xi-85.vercel.app/",
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
    live_demo_link: "https://3-js-portfolio-phi.vercel.app/",
    source_code_link: "https://github.com/LemuelVelez/3JS_PORTFOLIO",
  },
  {
    name: "SSG Attendance and Participation Tracking System",
    description:
      "This web application simplifies attendance management for the SSG with QR code check-ins, personalized dashboards, and powerful admin tools.",
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
    image: bg,
    live_demo_link: "https://ssg-qr-attendance.vercel.app/",
    source_code_link: "https://github.com/LemuelVelez/SSG_QR_Attendance",
  },
  {
    name: "QR Transit - Bus Ticketing System",
    description:
      "A full-stack bus ticketing system with both web admin dashboard and mobile app. Features include QR code ticket generation, scanning, and real-time tracking for a seamless transportation experience.",
    tags: [
      {
        name: "expo",
        color: "blue-text-gradient",
      },
      {
        name: "react-native",
        color: "green-text-gradient",
      },
      {
        name: "appwrite",
        color: "pink-text-gradient",
      },
      {
        name: "nextjs",
        color: "orange-text-gradient",
      },
    ],
    image: qrtransit,
    live_demo_link: "https://qrtransit-admin.vercel.app/",
    source_code_link: "https://github.com/",
    expo_link:
      "https://expo.dev/accounts/lemuel007/projects/QRTransit/builds/c9f74181-3662-45c6-9c70-daeb27b0410d?fbclid=IwZXh0bgNhZW0CMTEAYnJpZBEwWkJsRnQyVERsbUtLUGw4SgEelPDHb0D_LJw3mHATvnVm9wpfDBoInQ9fQq0-k6pD-bBwjc-A8eH9WIIKx9s_aem_cnyD6vMNeGmE5wRzinrz9A/c9f74181-3662-45c6-9c70-daeb27b0410d",
  },
]

export { services, technologies, experiences, projects }
