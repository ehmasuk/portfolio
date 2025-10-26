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
    "I began my journey in 2020, and from the very start, I was captivated by programming. What began as curiosity quickly grew into passion, and since then I’ve never stopped learning. Over the years, I’ve specialized in the MERN stack with a strong focus on front-end development, while continuously exploring new tools and technologies.",
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
    {
      name: "Strapi",
      icon: <Icon fontSize={15} icon="logos:strapi-icon" />,
    },
    {
      name: "Docker",
      icon: <Icon fontSize={15} icon="logos:docker-icon" />,
    },
  ],

  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
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
      title: "Bookora",
      description: "A free online platform where users can create books.",
      technologies: ["NextJS", "Tailwind", "Typescript", "MongoDB", "NodeJS"],
      liveLink: "https://bookora.vercel.app/",
      sourceLink: "https://github.com/ehmasuk/bookora-client",
      image: "/bookora.png",
      purpose: "pet",
    },
    {
      title: "Eazybuy",
      description: "Ecommerce website with Admin panel and Stripe payment integration",
      technologies: ["NextJS", "Tailwind", "Ant Design", "MongoDB", "NodeJS", "Stripe"],
      liveLink: "https://eazybuy-rho.vercel.app/",
      sourceLink: "https://github.com/ehmasuk/eazybuy",
      image: "/eazybuy.png",
      purpose: "pet",
    },
    {
      title: "Escuela De Escritura Creativa",
      description: (
        <>
          Contributed as a frontend developer to{" "}
          <a href="https://escuela-ray-bolivar-sosa.com" className="text-blue-600 underline" target="_blank">
            this
          </a>{" "}
          company website
        </>
      ),
      technologies: ["HTML", "CSS", "JS", "jQuery", "ReactJS", "NextJS", "Tailwind"],
      liveLink: "https://escuela-ray-bolivar-sosa.com",
      sourceLink: "",
      image: "/ray.png",
      purpose: "client",
    },
    {
      title: "WeTravel",
      description: "Travel booking website where I contributed as a frontend developer.",
      technologies: ["HTML", "CSS", "Tailwind", "JavaScript", "jQuery"],
      liveLink: "https://wetravel.pk",
      sourceLink: "",
      image: "/wetravel.png",
      purpose: "client",
    },
    {
      title: "MyBot",
      description: "AI-powered chatbot platform with user authentication.",
      technologies: ["NextJS", "NodeJS", "Tailwind", "Prisma", "NextAuth", "MongoDB"],
      liveLink: "https://mybot-coral.vercel.app",
      sourceLink: "https://github.com/ehmasuk/mybot",
      image: "/mybot.png",
      purpose: "pet",
    },

    {
      title: "Morristown Limos",
      description: "Limousine booking website where I contributed as a frontend developer.",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery"],
      liveLink: "https://morristownlimos.com",
      sourceLink: "",
      image: "/morris.png",
      purpose: "client",
    },
    {
      title: "Ellevo",
      description: "Ecommerce fully functional landing page",
      technologies: ["NextJS", "Tailwind", "Typescript", "External API", "MongoDB", "NodeJS"],
      liveLink: "https://ellevo.vercel.app/",
      sourceLink: "https://github.com/ehmasuk/ellevo",
      image: "/ellevo.png",
      purpose: "pet",
    },
    {
      title: "FreeClip",
      description: "Developed an open-source desktop screen recorder",
      technologies: ["NextJS", "Typescript", "Tailwind"],
      liveLink: "https://freeclip.vercel.app/",
      sourceLink: "https://github.com/ehmasuk/freeclip",
      image: "/freeclip.png",
      purpose: "pet",
    },

    {
      title: "Course land",
      description: "An experimental courses site built to sharpen my MERN skills.",
      technologies: ["NextJS", "CSS", "JS"],
      liveLink: "https://ehcourses.netlify.app/",
      sourceLink: "",
      image: "/courseland.png",
      purpose: "pet",
    },
  ],
} as const;
