import { ExperienceType, ProjectType } from "@/types";
import { GithubIcon, Linkedin02Icon, Mail01Icon, NewTwitterIcon } from "@hugeicons/core-free-icons";
import { IconSvgElement } from "@hugeicons/react";

type Props = {
  name: string;
  title: string;
  description: string;
  location: string;
  resumeUrl: string;
  socials: {
    name: string;
    url: string;
    icon: IconSvgElement;
  }[];
  experience: ExperienceType[];
  projects: ProjectType[];
};

export const resume: Props = {
  name: "Emdadul Haque",
  title: "Fullstack Developer",
  description:
    "Frontend focused MERN stack developer, continuously exploring new technologies and tools. Since beginning my journey , I have been captivated by programming, turning curiosity into passion and kept learning.",
  location: "Dhaka, Bangladesh",
  resumeUrl: "https://docs.google.com/document/d/16xqU_FbFhuOYR07erO3d94S_9RUVGPIz",
  socials: [
    {
      name: "Github",
      url: "https://github.com/ehmasuk",
      icon: GithubIcon,
    },
    {
      name: "Linkedin",
      url: "https://linkedin.com/in/ehmasuk",
      icon: Linkedin02Icon,
    },

    {
      name: "X (formally Twitter)",
      url: "https://x.com/eh_masuk",
      icon: NewTwitterIcon,
    },
    {
      name: "Mail",
      url: "mailto:ehmasuk@gmail.com",
      icon: Mail01Icon,
    },
  ],
  experience: [
    {
      id: 1,
      companyName: "Escuela De Escritura Creativa",
      position: "Front End Developer",
      responsibilities: [
        "Built and maintained web pages with Nextjs, Typescript, and Tailwindcss",
        "Developed a RAG-based AI chatbot using LangChain.js, Next.js, and Pinecone.",
        "Collaborated with developers using Git ",
        "Quickly learned and implemented new features from documentation.",
      ],
      workingPeriod: "Nov,2023 - June,2026",
      skills: ["Nextjs", "Typescript", "Nodejs", "Tailwindcss", "LangChain", "Pinecone"],
    },
    {
      id: 2,
      companyName: "Freelance",
      position: "Front End Developer",
      responsibilities: [
        "Developed and maintained web applications using React and Node.js",
        "Collaborated with cross-functional teams to deliver high-quality software",
        "Implemented new features and improved existing functionality",
      ],
      workingPeriod: "Jan,2023 - Oct,2023",
      skills: ["React", "Node.js", "Express", "MongoDB"],
    },
  ],
  projects: [
    {
      id: 1,
      title: "PinPad",
      description: "A free note sharing app with live collaboration.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      sourceCode: "https://github.com/ehmasuk/pin-pad",
      liveDemo: "https://pinpad.vercel.app",
      category: "Live collaboration tool",
      favicon: "https://pinpad.vercel.app/favicon.ico",
    },
    {
      id: 2,
      title: "BookOra",
      description: "A free online platform where users can create books.",
      stack: ["NextJS", "Tailwind", "Typescript", "MongoDB", "NodeJS"],
      sourceCode: "https://github.com/ehmasuk/bookora",
      liveDemo: "https://bookora.vercel.app",
      category: "Online book creation platform",
      favicon: "https://bookora.vercel.app/favicon.ico",
    },
    {
      id: 3,
      title: "Easybuy",
      description: "Ecommerce website with Admin panel and Stripe payment integration",
      stack: ["NextJS", "Tailwind", "Typescript", "MongoDB", "NodeJS", "Stripe", "Prisma"],
      sourceCode: "https://github.com/ehmasuk/eazybuy",
      liveDemo: "https://eazybuy-rho.vercel.app",
      category: "Ecommerce website",
      favicon: "https://eazybuy-rho.vercel.app/favicon.ico",
    },
    {
      id: 4,
      title: "FreeClip",
      description: "Desktop screen recorder",
      stack: ["NextJS", "Tailwind", "Typescript"],
      sourceCode: "https://github.com/ehmasuk/freeclip",
      liveDemo: "https://freeclip.vercel.app/",
      category: "Desktop screen recorder",
      favicon: "https://freeclip.vercel.app/favicon.ico",
    },
    {
      id: 5,
      title: "WeTravel",
      category: "Travel agency website for client",
      description: "A travel agency website for client",
      stack: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      liveDemo: "https://wetravel.pk/",
      favicon: "https://wetravel.pk/favicon.png",
    },
    {
      id: 6,
      title: "MyBot",
      description: "AI-powered chatbot platform with user authentication.",
      stack: ["NextJS", "Tailwind", "Typescript"],
      sourceCode: "https://github.com/ehmasuk/mybot",
      liveDemo: "https://mybot-coral.vercel.app/",
      category: "AI-powered chatbot platform",
      favicon: "https://mybot-coral.vercel.app/favicon.ico",
    },
  ],
};
