export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "DevFlow Blog",
    des: "A full-stack blogging platform built in a Turborepo monorepo with NestJS GraphQL API, Next.js 15 App Router frontend, JWT auth, and Supabase image storage.",
    img: "/blog.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg", "/re.svg"],
    link: "https://github.com/MahdiLcoder/NestJS-NextJS-blog-turborepo",
  },
  {
    id: 2,
    title: "Meet.AI",
    des: "An AI-powered meeting assistant platform with Next.js 15, TypeScript, Tailwind, tRPC, Drizzle ORM, and real-time Stream Video meetings.",
    img: "/meet-ai.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/MahdiLcoder/meet-ai",
  },
  {
    id: 3,
    title: "Language Learning Platform",
    des: "A React Native + Expo language-learning app with Stream-powered real-time voice agents, NativeWind styling, Clerk auth, and production-ready analytics.",
    img: "/language.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/fm.svg"],
    link: "https://github.com/MahdiLcoder/language-learning-platform",
  },
  {
    id: 5,
    title: "Spotlight",
    des: "A full-stack social media mobile app built with Expo, Convex, and Clerk — posts, likes, bookmarks, comments, follow system, and real-time notifications. Dark theme with a green (#4ADE80) accent.",
    img: "/spotligth.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg", "/c.svg"],
    link: "https://github.com/MahdiLcoder/spotlight",
  },
];

export const testimonials = [
  {
    quote:
      "I hired Mehdi as a freelance junior developer for a website refresh. He delivered clean, responsive frontend work and communicated clearly from start to finish.",
    name: "Ammar N.",
    title: "Small Business Owner",
    avatar: "/avatar1.svg",
  },
  {
    quote:
      "Mehdi joined our project as a mid-level freelance developer and helped us launch a landing page quickly. His attention to detail and willingness to iterate made him easy to work with.",
    name: "Sara K.",
    title: "Product Manager",
    avatar: "/avatar2.svg",
  },
  {
    quote:
      "This freelance developer showed strong technical focus and delivered functionality exactly as requested. Mehdi's junior/mid-level energy and quick responses helped the project move fast.",
    name: "Rayan M.",
    title: "Startup Founder",
    avatar: "/avatar3.svg",
  },
  {
    quote:
      "Mehdi took our brief and turned it into a polished web experience. His freelance mindset and ability to learn on the job made the collaboration feel professional and efficient.",
    name: "Leila B.",
    title: "Marketing Lead",
    avatar: "/avatar4.svg",
  },
  {
    quote:
      "As a client, I appreciated Mehdi's practical approach and consistent delivery. He felt like a dependable junior/mid-level freelancer who genuinely cared about the final result.",
    name: "Omar T.",
    title: "Ecommerce Client",
    avatar: "/avatar5.svg",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "Vercel",
    img: "/vercel.svg",
    nameImg: "/vercelName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Fullstack Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev",
    desc: "Designed and developed mobile apps for iOS and Android using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Web Dev Project",
    desc: "Led the development of a web application for a client, from initial concept to delivery.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/MahdiLcoder",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/labidi-mahdi-9245ba303/",
  },
];
