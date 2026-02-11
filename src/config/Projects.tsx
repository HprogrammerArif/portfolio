import Appwrite from '@/components/technologies/Appwrite';
import Bun from '@/components/technologies/Bun';
import DaisyUi from '@/components/technologies/DaisyUi';
import Expo from '@/components/technologies/Expo';
import ExpressJs from '@/components/technologies/ExpressJs';
import Firebase from '@/components/technologies/Firebase';
import Github from '@/components/technologies/Github';
import JavaScript from '@/components/technologies/JavaScript';
import MDXIcon from '@/components/technologies/MDXIcon';
import MongoDB from '@/components/technologies/MongoDB';
import Motion from '@/components/technologies/Motion';
import Netlify from '@/components/technologies/Netlify';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import Sentry from '@/components/technologies/Sentry';
import Shadcn from '@/components/technologies/Shadcn';
import SocketIo from '@/components/technologies/SocketIo';
import TailwindCss from '@/components/technologies/TailwindCss';
import ThreeJs from '@/components/technologies/ThreeJs';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'Co-parenting - A React native Parenting Platform App',
    description:
      'A comprehensive child management co-parenting platform with features like child tracking, expenses tracking, communication, ai refine messages and suggestions, chat with ai, schedule, and more ',
    image: '/project/co-parenting-app.png',
    video: 'https://ik.imagekit.io/ax29mr7pl/Video%20Project.mp4',
    link: 'playstore.co-parenting-app',
    technologies: [
      { name: 'React native', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },

      { name: 'Expo Go', icon: <Expo key="expo" /> },
      {name: 'Firebase', icon: <Firebase key="firebase" /> },
      {name: 'Sentry', icon: <Sentry key="Sentry" /> },
    ],
    github: 'https://github.com/HprogrammerArif/co_parenting_update.git',
    live: 'https://co-parenting-app.vercel.app',
    details: true,
    projectDetailsPageSlug: '/projects/co-parenting-app',
    isWorking: true,
  },
  {
    title: 'Gift Guru - A React native Social Media Platform App',
    description:
      'A comprehensive social media platform with features like advertisement, post, scroll differect post from different users, feed, advance analytics, and more ',
    image: '/project/gift-guru-app.png',
    video: 'https://ik.imagekit.io/ax29mr7pl/Video%20Project.mp4',
    link: 'playstore.co-parenting-app',
    technologies: [
      { name: 'React native', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },

      { name: 'Expo Go', icon: <Expo key="expo" /> },
      {name: 'Firebase', icon: <Firebase key="firebase" /> },
      {name: 'Sentry', icon: <Sentry key="Sentry" /> },
    ],
    github: 'https://github.com/HprogrammerArif/gift_guru.git',
    live: 'https://gift-guru-app.vercel.app',
    details: true,
    projectDetailsPageSlug: '/projects/gift-guru-app',
    isWorking: true,
  },
  {
    title: 'Stayvision - Colaborative Study Hub',
    description:
      'A web platform designed for students to read and share notes, study materials and lesson easily. Built with a modern tech stack, it ensures an easy-to-use, visually appealing, and responsive experience.',
    image: '/project/stay-vision-study-hub.png',
    video: 'https://ik.imagekit.io/ax29mr7pl/Video%20Project.mp4',
    link: 'https://stayvision-e5db4.web.app/',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Firebase', icon: <Firebase key="firebase" /> },
      { name: 'DaisyUi', icon: <DaisyUi key="daisyui" /> },
    ],
    github: 'https://github.com/HprogrammerArif/StayVision-Client.git',
    live: 'https://stayvision-e5db4.web.app/',
    details: true,
    projectDetailsPageSlug: '/projects/stayvision',
    isWorking: true,
  },


  {
    title: 'NotesBuddy',
    description:
      'A web platform designed for students to read and share notes, study materials and lesson easily. Built with a modern tech stack, it ensures an easy-to-use, visually appealing, and responsive experience.',
    image: '/project/notesbuddy.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/notesbuddy.mp4?tr=orig',
    link: 'https://notesbuddy.in',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Firebase', icon: <Firebase key="firebase" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
      { name: 'MDX', icon: <MDXIcon key="mdx" /> },
    ],
    github: 'https://github.com/ramxcodes/notesbuddy',
    live: 'https://notesbuddy.in',
    details: true,
    projectDetailsPageSlug: '/projects/notesbuddy',
    isWorking: true,
  },









  {
    title: 'Appwrite MCP Server',
    description:
      'Model Context Protocol server for seamless Appwrite database operations with 7 powerful tools and 99.9% success rate',
    image: '/project/appwrite.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/appwrite.mp4',
    link: 'https://mcp.ramx.in/',
    technologies: [
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Bun', icon: <Bun key="bun" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Appwrite', icon: <Appwrite key="appwrite" /> },
    ],
    github: 'https://github.com/ramxcodes/mcp-server',
    live: 'https://mcp.ramx.in/',
    details: true,
    projectDetailsPageSlug: '/projects/appwrite-mcp-server',
    isWorking: true,
  },
  {
    title: 'Syncify',
    description:
      'Real-time music streaming platform with synchronized playback, live chat, and social listening features',
    image: '/project/syncify.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/syncify.mp4',
    link: 'https://syncify.rocks',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
      { name: 'Socket.io', icon: <SocketIo key="socketio" /> },
    ],
    github: 'https://github.com/ramxcodes/syncify',
    live: 'https://syncify.rocks',
    details: true,
    projectDetailsPageSlug: '/projects/syncify',
    isWorking: true,
  },
  {
    title: 'Pasandida Aurat',
    description:
      'Innovative dating platform featuring anonymous questions and authentic connections - currently in development',
    image: '/project/pasandida.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/pasandida.mp4',
    link: 'https://www.pasandidaurat.com/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Prisma', icon: <Prisma key="prisma" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Socket.io', icon: <SocketIo key="socketio" /> },
    ],
    live: 'https://www.pasandidaurat.com/',
    details: true,
    projectDetailsPageSlug: '/projects/pasandida-aurat',
    isWorking: false, // Currently in development
  },
  {
    title: 'The Quest',
    description:
      'Personal challenge tracker for completing 500 DSA problems, earning ₹300,000, and improving fitness within 6 months',
    image: '/project/quest.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/quest.mp4',
    link: 'https://quest.ramx.in/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'MDX', icon: <MDXIcon key="mdx" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
    ],
    github: 'https://github.com/ramxcodes/the-quest',
    live: 'https://quest.ramx.in/',
    details: true,
    projectDetailsPageSlug: '/projects/the-quest',
    isWorking: true,
  },
  {
    title: 'FestX',
    description:
      "Comprehensive event management platform for college festivals and hackathons built for NMIMS'24 Hackathon",
    image: '/project/festx.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/fest-x.mp4',
    link: 'https://fest-x.ramx.in/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
    ],
    github: 'https://github.com/ramxcodes/fest-x',
    live: 'https://fest-x.ramx.in/',
    details: true,
    projectDetailsPageSlug: '/projects/fest-x',
    isWorking: true,
  },
  {
    title: "I'm a chill guy",
    description:
      'AI-powered GitHub profile roaster with intelligent analysis, witty commentary, and social sharing features',
    image: '/project/chillguy.png',
    link: 'https://chillguy.ramx.in',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Express.js', icon: <ExpressJs key="expressjs" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Netlify', icon: <Netlify key="netlify" /> },
      { name: 'GitHub', icon: <Github key="github" /> },
    ],
    github: 'https://github.com/ramxcodes/chill-guy',
    live: 'https://chillguy.ramx.in',
    details: true,
    projectDetailsPageSlug: '/projects/chill-guy',
    isWorking: true,
  },
  {
    title: "Ram's Space",
    description:
      'Personal poetry and blog platform featuring emotional stories, poems, and creative writing with dark/light theme support',
    image: '/project/ramspace.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/ramspace.mp4',
    link: 'https://blog.ramx.in/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'MDX', icon: <MDXIcon key="mdx" /> },
    ],
    live: 'https://blog.ramx.in/',
    details: true,
    projectDetailsPageSlug: '/projects/poems-blog',
    isWorking: true,
  },
  {
    title: 'Intent JS',
    description:
      'Modern JavaScript library website with advanced animations, interactive playground, and comprehensive documentation',
    image: '/project/intent.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/intent.mp4',
    link: 'https://intent-js.ramx.in',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Motion', icon: <Motion key="motion" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
    ],
    github: 'https://github.com/ramxcodes/intent-js',
    live: 'https://intent-js.ramx.in',
    details: true,
    projectDetailsPageSlug: '/projects/intent-js',
    isWorking: true,
  },
  {
    title: 'Moonstone 2K25',
    description:
      "Official website for Medicaps University's premier annual college festival with event management and registration",
    image: '/project/moonstone.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/moonstone.mp4',
    link: 'https://moonstone.ramx.in/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Motion', icon: <Motion key="motion" /> },
      { name: 'Three.js', icon: <ThreeJs key="threejs" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
    ],
    github: 'https://github.com/ramxcodes/moonstone-fest',
    live: 'https://moonstone.ramx.in/',
    details: true,
    projectDetailsPageSlug: '/projects/moonstone-fest',
    isWorking: true,
  },
  {
    title: 'Valorant Remastered',
    description:
      'Gaming website with immersive 3D animations, agent showcases, and performance-optimized Valorant experience',
    image: '/project/valorant.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/valorant.mp4',
    link: 'https://valorant.ramx.in',
    technologies: [
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
    ],
    github: 'https://github.com/ramxcodes/valorant-remastered',
    live: 'https://valorant.ramx.in',
    details: true,
    projectDetailsPageSlug: '/projects/valorant-remastered',
    isWorking: true,
  },
  {
    title: 'That Startup',
    description:
      'Startup listing and pitching platform where entrepreneurs can submit ideas, vote on concepts, and connect with founders',
    image: '/project/that-startup.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/that-startup.mp4',
    link: 'https://that-startup.ramx.in/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Sanity', icon: <Sentry key="sanity" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
    ],
    github: 'https://github.com/ramxcodes/that-startup',
    live: 'https://that-startup.ramx.in/',
    details: true,
    projectDetailsPageSlug: '/projects/that-startup',
    isWorking: true,
  },
];
