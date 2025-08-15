import { Icons } from "@/components/icons";
import { Icon } from "@iconify/react";
import { HomeIcon } from "lucide-react";
export const DATA = {
  name: "Eh Masuk",
  initials: "EM",
  url: "https://ehmasuk.vercel.app",
  location: "Dhaka, Bangladesh",
  locationLink: "https://www.google.com/maps/place/dhaka",
  description: "A passionate fullstack web developer.",
  summary:
    "Passionate Full-Stack Developer (MERN) building scalable web applications with seamless user experiences and efficient backend solutions. Always learning, problem-solving, and innovating to stay ahead in the evolving tech world",
  avatarUrl: "/me.jpg",
  skills: [
    {
      name: "Bootstrap",
      icon: <Icon fontSize={15} icon="logos:bootstrap" />,
    },
    {
      name: "Tailwind CSS",
      icon: <Icon fontSize={15} icon="logos:tailwindcss-icon" />,
    },
    {
      name: "React JS",
      icon: <Icon fontSize={15} icon="logos:react" />,
    },
    {
      name: "Redux",
      icon: <Icon fontSize={15} icon="logos:redux" />,
    },
    {
      name: "Typescript",
      icon: <Icon fontSize={15} icon="logos:typescript-icon" />,
    },
    {
      name: "Next JS",
      icon: <Icon fontSize={15} icon="logos:nextjs-icon" />,
    },
    {
      name: "Node JS",
      icon: <Icon fontSize={15} icon="logos:nodejs-icon" />,
    },
    {
      name: "Mongoose",
      icon: <Icon fontSize={15} icon="simple-icons:mongoose" />,
    },
    {
      name: "JWT",
      icon: <Icon fontSize={15} icon="simple-icons:jsonwebtokens" />,
    },
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "ehmasuk@gmail.com",
    tel: "+8801723266507",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ehmasuk",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ehmasuk",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
      Whtasapp: {
        name: "Whatsapp",
        url: "https://wa.me/+8801723266507",
        icon: Icons.whatsapp,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Escuela De Escritura Creativa",
      href: "https://escuela-ray-bolivar-sosa.com",
      skills: ["HTML", "CSS", "JS", "jQuery", "ReactJS", "NextJS", "Tailwind"],
      location: "Madrid, Spain",
      title: "Front End Developer",
      start: "Nov 2022",
      end: "Jun 2025",
      description:
        "Built and maintained web pages using HTML, CSS, JavaScript, and jQuery. Developed a RAG-based AI chatbot using LangChain.js, Next.js, and Pinecone. Debugged complex CSS and JavaScript issues to ensure smooth UI/UX. Collaborated with developers using GitHub for version control, pull requests, and code reviews. Quickly learned and implemented new features from documentation.",
    },
    {
      company: "Fiverr",
      href: "https://fiverr.com",
      skills: ["HTML", "CSS", "JavaScript", "Wordpress"],
      location: "Remote",
      title: "Front End Developer",
      start: "Dec 2021",
      end: "Sep 2022",
      description:
        "Completed 20+ projects converting Figma, PSD, and XD designs into responsive websites using HTML, CSS, and JavaScript. Customized WordPress themes and optimized website performance. Communicated with clients, managed projects independently, and consistently delivered work within deadlines.",
    },
  ],
  projects: [
    {
      title: "FreeClip",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description: "Developed an open-source logging and analytics platform for OpenAI.",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "Shadcn UI", "Magic UI", "Stripe"],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/freeclip.png",
    },
    {
      title: "FreeClip",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description: "Developed an open-source logging and analytics platform for OpenAI.",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "Shadcn UI", "Magic UI", "Stripe"],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/freeclip.png",
    },
  ],
} as const;
