import DaisyUi from '@/components/technologies/DaisyUi';
import Expo from '@/components/technologies/Expo';
import ExpressJs from '@/components/technologies/ExpressJs';
import FabricJs from '@/components/technologies/FabricJs';
import Firebase from '@/components/technologies/Firebase';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import Netlify from '@/components/technologies/Netlify';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import ReactIcon from '@/components/technologies/ReactIcon';
import Sentry from '@/components/technologies/Sentry';
import Shadcn from '@/components/technologies/Shadcn';
import SocketIo from '@/components/technologies/SocketIo';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'Co-parenting - A React native Parenting Platform App',
    description:
      'A comprehensive React native cross platform child management co-parenting app with features like child tracking, expenses tracking, communication, ai refine messages and suggestions, chat with ai, schedule, and more ',
    image: '/project/co-parenting-app.png',
    video: 'https://ik.imagekit.io/ax29mr7pl/Screen%20Recording%202026-06-24%20095539.mp4',
    link: 'https://www.floruit.co.uk/',
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
    live: 'https://www.floruit.co.uk/',
    appStoreLink: 'https://apps.apple.com/us/app/floruit-co-parenting-app/id6761601644',
    playStoreLink: 'https://play.google.com/store/apps/details?id=com.floruit.app&pcampaignid=web_share',
    details: true,
    projectDetailsPageSlug: '/projects/co-parenting-app',
    isWorking: true,
  },


//   First time working with the TicketNetwork API!

// For the past month, I single-handedly built a ticket reselling platform from scratch using TicketNetwork's third-party API.

// 🔗 Check it out: https://ticketlove.net/

// Users can purchase real event tickets, and the client earns commission on every sale. Real tickets. Real transactions. Real cash flow. 💰

// So I built this platform single-handedly from scratch to deployment 
// Full TicketNetwork API integration 
// Deployed on Hostinger 
// Initial launch complete — still improving & adding features

// Had a great experience working with TicketNetwork's ecosystem.

  {
    title: 'ticketlove - a ticket reselling platform using ticketnetworks api',
    description:
      'A ticket reselling platform using ticketnetworks api.Users can purchase real event tickets, and the client earns commission on every sale. Real tickets. Real transactions. Real cash flow happen here.',
    image: '/project/ticketlove.png',
    video: 'https://ik.imagekit.io/ax29mr7pl/Screen%20Recordi%202026-06-24%20095539.mp4',
    link: 'https://ticketlove.net/',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Nodejs', icon: <NodeJs key="nodejs" /> },
      { name: 'Express.js', icon: <ExpressJs key="express.js" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgres" /> },

    
    ],
    github: 'https://github.com/HprogrammerArif/ticket-resell-third-party-api.git',
    live: 'https://ticketlove.net/',
    details: true,
    projectDetailsPageSlug: '/projects/ticketlove',
    isWorking: true,
  },



  {
    title: 'Gift Guru - A React native Social Media Platform App',
    description:
      'A comprehensive React native cross platform social media app with features like advertisement, post, scroll differect post from different users, feed, advance analytics, and more ',
    image: '/project/gift-guru-app.png',
    video: 'https://ik.imagekit.io/1brn1hp6y/screen-20260624-100557%20(1).mp4',
    link: 'https://www.findrya.co.uk/app',
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
    live: 'https://www.findrya.co.uk/app',
    appStoreLink: 'https://apps.apple.com/us/app/giftGuru/id676160164454663',
    playStoreLink: 'https://play.google.com/store/apps/details?id=com.giftGuru.app&pcampaignid=web_share',
    details: true,
    projectDetailsPageSlug: '/projects/gift-guru-app',
    isWorking: true,
  },


  {
    title: 'Gift Guru - A Social Media Web Platform For Appliate Marketing',
    description:
      'A comprehensive social media web platform for appliate marketing with features like advertisement, post, scroll differect post from different users, feed, advance analytics, and more ',
    image: '/project/gift-guru-affliate-social-media.png',
    video: 'https://ik.imagekit.io/1brn1hp6y/Screen%20Recording%202026-06-24%20165916.mp4',
    link: 'https://www.findrya.co.uk/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      {name: 'Firebase', icon: <Firebase key="firebase" /> },
    ],
    github: 'https://github.com/HprogrammerArif/Appiliate-Media.git',
    live: 'https://www.findrya.co.uk',
    details: false,
    projectDetailsPageSlug: '/projects/gift-guru-media',
    isWorking: true,
  },


  {
    title: 'Sora - A Ai Power Project Management Platform',
    description:
      'A Ai power comprehensive project management platform with features like ai analysis project from project, comprehensive feedback, project tracking, task management, project progress, project location maps and more ',
    image: '/project/sora-project-management.png',
    video: 'https://ik.imagekit.io/ax29mr7pl/Video%20Project.mp4',
    link: 'https://sora-project-management.vercel.app',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
      { name: 'Socket.io', icon: <SocketIo key="socketio" /> },
      { name: 'Firebase', icon: <Firebase key="firebase" /> },
    ],
    github: 'https://github.com/HprogrammerArif/SORA.git',
    live: 'https://sora-project-management.vercel.app',
    details: false,
    projectDetailsPageSlug: '/projects/sora-project-management',
    isWorking: false,
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
    details: false,
    projectDetailsPageSlug: '/projects/stayvision',
    isWorking: false,
  },


  {
    title: 'StayVista | A hotel management platform',
    description:
      'A web platform designed for hotel booking and management. Built with a modern tech stack, it ensures an easy-to-use, visually appealing, and responsive experience. Include features like room booking, payment gateway integration using stripe, user authentication, role based dashboard For gust, host, admin- Implement private route- Use imageBB for upload image- Use hooks for secure and public route- Use TanStack for fatching, update, delete (State management) and more.',
    image: '/project/stay-vista-hotel-management.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/notesbuddy.mp4?tr=orig',
    link: 'https://stayvista-arif.web.app/',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Firebase', icon: <Firebase key="firebase" /> },
       { name: 'DaisyUi', icon: <DaisyUi key="daisyui" /> },
    ],
    github: 'https://github.com/HprogrammerArif/stay-vista-client.git',
    live: 'https://stayvista-arif.web.app/',
    details: false,
    projectDetailsPageSlug: '/projects/stay-vista-hotel-management',
    isWorking: false,
  },


   {
    title: 'Mascotforge - A Ai Power Custom Logo & Branding Platform',
    description:
      'A Ai power comprehensive custom logo making, svg editor, designing & branding platform with features like logo making, svg editor, designing & branding platform and more ',
    image: '/project/mascot-frog-svg-editor.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/mascotforge.mp4',
    link: 'https://mascotforge.netlify.app/',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Fabric.js', icon: <FabricJs key="fabricjs" /> },
      { name: 'Netlify', icon: <Netlify key="netlify" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
      { name: 'Firebase', icon: <Firebase key="firebase" /> },
    ],
    github: 'https://github.com/HprogrammerArif/darkdot.git',
    live: 'https://mascotforge.netlify.app/',
    details: false,
    projectDetailsPageSlug: '/projects/mascotforge',
    isWorking: false,
  },



  {
    title: 'SamNexus | A multivendor e-commerce platform',
    description:
      'A web platform designed for multivendor e-commerce. Built with a modern tech stack, it ensures an easy-to-use, visually appealing, and responsive experience and more.',
    image: '/project/sam-nexus-ecommerc.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/notesbuddy.mp4?tr=orig',
    link: 'https://www.samnexus.com/',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Firebase', icon: <Firebase key="firebase" /> },
      { name: 'DaisyUi', icon: <DaisyUi key="daisyui" /> },
    ],
    github: 'https://github.com/HprogrammerArif/Sam-Nexus.git',
    live: 'https://www.samnexus.com/',
    details: false,
    projectDetailsPageSlug: '/projects/sam-nexus',
    isWorking: false,
  },



    {
    title: 'Swish - A Project Bidding Platform',
    description:
      'A comprehensive project bidding web platform for different types of companies and freelancers where they can post their projects and bid on them and more.',
    image: '/project/swish-job-bidding.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/swish.mp4',
    link: 'https://swishmaa.netlify.app/',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Netlify', icon: <Netlify key="netlify" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
      { name: 'Socket.io', icon: <SocketIo key="socketio" /> },
      { name: 'Firebase', icon: <Firebase key="firebase" /> },
    ],
    github: 'https://github.com/HprogrammerArif/swish.git',
    live: 'https://swishmaa.netlify.app/',
    details: false,
    projectDetailsPageSlug: '/projects/swish',
    isWorking: true,
  },



  // {
  //   title: 'NotesBuddy',
  //   description:
  //     'A web platform designed for students to read and share notes, study materials and lesson easily. Built with a modern tech stack, it ensures an easy-to-use, visually appealing, and responsive experience.',
  //   image: '/project/notesbuddy.png',
  //   video: 'https://ik.imagekit.io/hokb3mrdr/notesbuddy.mp4?tr=orig',
  //   link: 'https://notesbuddy.in',
  //   technologies: [
  //     { name: 'Next.js', icon: <NextJs key="nextjs" /> },
  //     { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
  //     { name: 'React', icon: <ReactIcon key="react" /> },
  //     { name: 'Vercel', icon: <Vercel key="vercel" /> },
  //     { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
  //     { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
  //     { name: 'Firebase', icon: <Firebase key="firebase" /> },
  //     { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
  //     { name: 'MDX', icon: <MDXIcon key="mdx" /> },
  //   ],
  //   github: 'https://github.com/ramxcodes/notesbuddy',
  //   live: 'https://notesbuddy.in',
  //   details: true,
  //   projectDetailsPageSlug: '/projects/notesbuddy',
  //   isWorking: true,
  // },









  // {
  //   title: 'Appwrite MCP Server',
  //   description:
  //     'Model Context Protocol server for seamless Appwrite database operations with 7 powerful tools and 99.9% success rate',
  //   image: '/project/appwrite.png',
  //   video: 'https://ik.imagekit.io/hokb3mrdr/appwrite.mp4',
  //   link: 'https://mcp.ramx.in/',
  //   technologies: [
  //     { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
  //     { name: 'Bun', icon: <Bun key="bun" /> },
  //     { name: 'Vercel', icon: <Vercel key="vercel" /> },
  //     { name: 'Appwrite', icon: <Appwrite key="appwrite" /> },
  //   ],
  //   github: 'https://github.com/ramxcodes/mcp-server',
  //   live: 'https://mcp.ramx.in/',
  //   details: true,
  //   projectDetailsPageSlug: '/projects/appwrite-mcp-server',
  //   isWorking: true,
  // },


  // {
  //   title: 'Syncify',
  //   description:
  //     'Real-time music streaming platform with synchronized playback, live chat, and social listening features',
  //   image: '/project/syncify.png',
  //   video: 'https://ik.imagekit.io/hokb3mrdr/syncify.mp4',
  //   link: 'https://syncify.rocks',
  //   technologies: [
  //     { name: 'React', icon: <ReactIcon key="react" /> },
  //     { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
  //     { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
  //     { name: 'Vercel', icon: <Vercel key="vercel" /> },
  //     { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
  //     { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
  //     { name: 'Socket.io', icon: <SocketIo key="socketio" /> },
  //   ],
  //   github: 'https://github.com/ramxcodes/syncify',
  //   live: 'https://syncify.rocks',
  //   details: true,
  //   projectDetailsPageSlug: '/projects/syncify',
  //   isWorking: true,
  // },

  // {
  //   title: 'Pasandida Aurat',
  //   description:
  //     'Innovative dating platform featuring anonymous questions and authentic connections - currently in development',
  //   image: '/project/pasandida.png',
  //   video: 'https://ik.imagekit.io/hokb3mrdr/pasandida.mp4',
  //   link: 'https://www.pasandidaurat.com/',
  //   technologies: [
  //     { name: 'Next.js', icon: <NextJs key="nextjs" /> },
  //     { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
  //     { name: 'Prisma', icon: <Prisma key="prisma" /> },
  //     { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
  //     { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
  //     { name: 'Socket.io', icon: <SocketIo key="socketio" /> },
  //   ],
  //   live: 'https://www.pasandidaurat.com/',
  //   details: true,
  //   projectDetailsPageSlug: '/projects/pasandida-aurat',
  //   isWorking: false, // Currently in development
  // },
  // {
  //   title: 'The Quest',
  //   description:
  //     'Personal challenge tracker for completing 500 DSA problems, earning ₹300,000, and improving fitness within 6 months',
  //   image: '/project/quest.png',
  //   video: 'https://ik.imagekit.io/hokb3mrdr/quest.mp4',
  //   link: 'https://quest.ramx.in/',
  //   technologies: [
  //     { name: 'Next.js', icon: <NextJs key="nextjs" /> },
  //     { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
  //     { name: 'Vercel', icon: <Vercel key="vercel" /> },
  //     { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
  //     { name: 'MDX', icon: <MDXIcon key="mdx" /> },
  //     { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
  //   ],
  //   github: 'https://github.com/ramxcodes/the-quest',
  //   live: 'https://quest.ramx.in/',
  //   details: true,
  //   projectDetailsPageSlug: '/projects/the-quest',
  //   isWorking: true,
  // },
  // {
  //   title: 'FestX',
  //   description:
  //     "Comprehensive event management platform for college festivals and hackathons built for NMIMS'24 Hackathon",
  //   image: '/project/festx.png',
  //   video: 'https://ik.imagekit.io/hokb3mrdr/fest-x.mp4',
  //   link: 'https://fest-x.ramx.in/',
  //   technologies: [
  //     { name: 'Next.js', icon: <NextJs key="nextjs" /> },
  //     { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
  //     { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
  //     { name: 'Vercel', icon: <Vercel key="vercel" /> },
  //     { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
  //     { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
  //   ],
  //   github: 'https://github.com/ramxcodes/fest-x',
  //   live: 'https://fest-x.ramx.in/',
  //   details: true,
  //   projectDetailsPageSlug: '/projects/fest-x',
  //   isWorking: true,
  // },
  // {
  //   title: "I'm a chill guy",
  //   description:
  //     'AI-powered GitHub profile roaster with intelligent analysis, witty commentary, and social sharing features',
  //   image: '/project/chillguy.png',
  //   link: 'https://chillguy.ramx.in',
  //   technologies: [
  //     { name: 'React', icon: <ReactIcon key="react" /> },
  //     { name: 'Express.js', icon: <ExpressJs key="expressjs" /> },
  //     { name: 'Vercel', icon: <Vercel key="vercel" /> },
  //     { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
  //     { name: 'Netlify', icon: <Netlify key="netlify" /> },
  //     { name: 'GitHub', icon: <Github key="github" /> },
  //   ],
  //   github: 'https://github.com/ramxcodes/chill-guy',
  //   live: 'https://chillguy.ramx.in',
  //   details: true,
  //   projectDetailsPageSlug: '/projects/chill-guy',
  //   isWorking: true,
  // },
  // {
  //   title: "Ram's Space",
  //   description:
  //     'Personal poetry and blog platform featuring emotional stories, poems, and creative writing with dark/light theme support',
  //   image: '/project/ramspace.png',
  //   video: 'https://ik.imagekit.io/hokb3mrdr/ramspace.mp4',
  //   link: 'https://blog.ramx.in/',
  //   technologies: [
  //     { name: 'Next.js', icon: <NextJs key="nextjs" /> },
  //     { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
  //     { name: 'React', icon: <ReactIcon key="react" /> },
  //     { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
  //     { name: 'MDX', icon: <MDXIcon key="mdx" /> },
  //   ],
  //   live: 'https://blog.ramx.in/',
  //   details: true,
  //   projectDetailsPageSlug: '/projects/poems-blog',
  //   isWorking: true,
  // },
  // {
  //   title: 'Intent JS',
  //   description:
  //     'Modern JavaScript library website with advanced animations, interactive playground, and comprehensive documentation',
  //   image: '/project/intent.png',
  //   video: 'https://ik.imagekit.io/hokb3mrdr/intent.mp4',
  //   link: 'https://intent-js.ramx.in',
  //   technologies: [
  //     { name: 'Next.js', icon: <NextJs key="nextjs" /> },
  //     { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
  //     { name: 'React', icon: <ReactIcon key="react" /> },
  //     { name: 'Motion', icon: <Motion key="motion" /> },
  //     { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
  //     { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
  //   ],
  //   github: 'https://github.com/ramxcodes/intent-js',
  //   live: 'https://intent-js.ramx.in',
  //   details: true,
  //   projectDetailsPageSlug: '/projects/intent-js',
  //   isWorking: true,
  // },
  // {
  //   title: 'Moonstone 2K25',
  //   description:
  //     "Official website for Medicaps University's premier annual college festival with event management and registration",
  //   image: '/project/moonstone.png',
  //   video: 'https://ik.imagekit.io/hokb3mrdr/moonstone.mp4',
  //   link: 'https://moonstone.ramx.in/',
  //   technologies: [
  //     { name: 'Next.js', icon: <NextJs key="nextjs" /> },
  //     { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
  //     { name: 'React', icon: <ReactIcon key="react" /> },
  //     { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
  //     { name: 'Motion', icon: <Motion key="motion" /> },
  //     { name: 'Three.js', icon: <ThreeJs key="threejs" /> },
  //     { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
  //   ],
  //   github: 'https://github.com/ramxcodes/moonstone-fest',
  //   live: 'https://moonstone.ramx.in/',
  //   details: true,
  //   projectDetailsPageSlug: '/projects/moonstone-fest',
  //   isWorking: true,
  // },
  // {
  //   title: 'Valorant Remastered',
  //   description:
  //     'Gaming website with immersive 3D animations, agent showcases, and performance-optimized Valorant experience',
  //   image: '/project/valorant.png',
  //   video: 'https://ik.imagekit.io/hokb3mrdr/valorant.mp4',
  //   link: 'https://valorant.ramx.in',
  //   technologies: [
  //     { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
  //     { name: 'React', icon: <ReactIcon key="react" /> },
  //   ],
  //   github: 'https://github.com/ramxcodes/valorant-remastered',
  //   live: 'https://valorant.ramx.in',
  //   details: true,
  //   projectDetailsPageSlug: '/projects/valorant-remastered',
  //   isWorking: true,
  // },
  // {
  //   title: 'That Startup',
  //   description:
  //     'Startup listing and pitching platform where entrepreneurs can submit ideas, vote on concepts, and connect with founders',
  //   image: '/project/that-startup.png',
  //   video: 'https://ik.imagekit.io/hokb3mrdr/that-startup.mp4',
  //   link: 'https://that-startup.ramx.in/',
  //   technologies: [
  //     { name: 'Next.js', icon: <NextJs key="nextjs" /> },
  //     { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
  //     { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
  //     { name: 'Sanity', icon: <Sentry key="sanity" /> },
  //     { name: 'Vercel', icon: <Vercel key="vercel" /> },
  //   ],
  //   github: 'https://github.com/ramxcodes/that-startup',
  //   live: 'https://that-startup.ramx.in/',
  //   details: true,
  //   projectDetailsPageSlug: '/projects/that-startup',
  //   isWorking: true,
  // },
];
