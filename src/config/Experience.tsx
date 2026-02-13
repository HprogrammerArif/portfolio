import Bun from '@/components/technologies/Bun';
import Expo from '@/components/technologies/Expo';
import ExpressJs from '@/components/technologies/ExpressJs';
import Figma from '@/components/technologies/Figma';
import Firebase from '@/components/technologies/Firebase';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NativeWind from '@/components/technologies/NativeWind';
import Netlify from '@/components/technologies/Netlify';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import Postman from '@/components/technologies/Postman';
import ReactIcon from '@/components/technologies/ReactIcon';
import Redux from '@/components/technologies/Redux';
import Sanetry from '@/components/technologies/Sanetry';
import Shadcn from '@/components/technologies/Shadcn';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: true,
    isBlur: true,
    company: 'Join Venture AI (JVAI)',
    position: 'Frontend Developer',
    location: 'Bangladesh (On-site)',
    image: '/company/jvai.jpg',
    description: [
      'Architected and developed the complete frontend infrastructure for the platform, a comprehensive solution for creating and managing promotional campaigns.',
      'Led a comprehensive codebase refactoring initiative that improved maintainability, scalability, and development velocity across the entire platform.',
      'Integrated and optimized backend API connections, implementing efficient data fetching strategies and error handling mechanisms.',
      'Enhanced user experience and interface design through implementation of consistent design systems, accessibility standards, and performance optimizations.',
    ],
    startDate: 'May 2025',
    endDate: 'Present',
    technologies: [
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        icon: <TailwindCss />,
      },
      {
        name: 'TypeScript',
        href: 'https://typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Figma',
        href: 'https://figma.com/',
        icon: <Figma />,
      },
      {
        name: 'Vercel',
        href: 'https://vercel.com/',
        icon: <Vercel />,
      },
     
      {
        name: 'Netlify',
        href: 'https://www.netlify.com/',
        icon: <Netlify />,
      },
      {
        name: 'Postman',
        href: 'https://www.postman.com/',
        icon: <Postman />,
      },
      {
        name: 'Bun',
        href: 'https://bun.sh/',
        icon: <Bun />,
      },
      {
      name: "Shadcn UI",
      href: "https://ui.shadcn.com/",
      icon: <Shadcn />,
      },
      {
        name: "Redux",
        href: "https://redux.js.org/",
        icon: <Redux />,
      }
    ],
    website: '#',
    github: '#',
    x: '#',
  },
  {
    isCurrent: true,
    isBlur: true,
    company: 'Join Venture AI (JVAI)',
    position: 'Mobile App Developer',
    location: 'Bangladesh (On-site)',
    image: '/company/jvai.jpg',
    description: [
      'Developed and maintained cross-platform mobile applications using React Native, ensuring high performance and seamless user experience across iOS and Android devices.',
      'Collaborated closely with UI/UX designers to translate wireframes and mockups into high-quality, responsive mobile interfaces using React Native and related libraries.',
      'Integrated mobile applications with backend services and APIs, implementing efficient data fetching, state management, and error handling strategies.',
      'Optimized application performance by implementing code splitting, lazy loading, and memory management techniques, resulting in faster load times and improved user engagement.',
      'Implemented secure authentication and authorization flows using OAuth 2.0 and JWT tokens, ensuring data privacy and security across all mobile applications.',
      'Conducted thorough testing, including unit testing, integration testing, and end-to-end testing, to identify and resolve bugs, ensuring application stability and reliability.',
      'Participated in code reviews and provided constructive feedback to peers, maintaining code quality standards and promoting knowledge sharing within the development team.',
      'Stayed updated with the latest trends and best practices in mobile development, continuously learning and implementing new technologies to enhance application functionality and user experience.',
    ],
    startDate: 'May 2025',
    endDate: 'Present',
    technologies: [
      {
        name: 'React Native',
        href: 'https://reactnative.dev/',
        icon: <ReactIcon />,
      },
      {
        name: "Native Wind",
        href: "https://nativewind.dev/",
        icon: <NativeWind />,
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        icon: <TailwindCss />,
      },
      {
        name: 'TypeScript',
        href: 'https://typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'Figma',
        href: 'https://figma.com/',
        icon: <Figma />,
      },
     
      
      {
        name: 'Postman',
        href: 'https://www.postman.com/',
        icon: <Postman />,
      },
      {
        name: 'Bun',
        href: 'https://bun.sh/',
        icon: <Bun />,
      },
      
      {
        name: "Redux",
        href: "https://redux.js.org/",
        icon: <Redux />,
      },
      {
        name: "Firebase",
        href: "https://firebase.google.com/",
        icon: <Firebase />,
      },
      {
        name: "Expo",
        href: "https://expo.dev/",
        icon: <Expo />,
      },
      {
        name: "Sanetry",
        href: "https://sentry.io/",
        icon: <Sanetry />,
      }
    ],
    website: '#',
    github: '#',
    x: '#',
  },

  // {
  //   isCurrent: false,
  //   company: 'Upsurge Labs',
  //   position: 'Backend Developer Intern',
  //   location: 'Bangalore, India (On-Site)',
  //   image: '/company/upsurge.png',
  //   description: [
  //     'Backend development for *Bhindi.io*, a flagship product of Upsurge Labs, focusing on core infrastructure and agent development.',
  //     'Engineered and deployed multiple high-performance agents, enhancing product capabilities and user experience.',
  //     'Testing agent functionality, authentication, automation, and system stability.',
  //     'Streamlined development workflows by optimizing internal tools and maintaining detailed technical documentation.',
  //   ],
  //   startDate: 'June 2025',
  //   endDate: 'July 2025',
  //   technologies: [
  //     {
  //       name: 'NestJS',
  //       href: 'https://nestjs.com/',
  //       icon: <NestJs />,
  //     },
  //     {
  //       name: 'Postman',
  //       href: 'https://www.postman.com/',
  //       icon: <Postman />,
  //     },
  //     {
  //       name: 'TypeScript',
  //       href: 'https://www.typescriptlang.org/',
  //       icon: <TypeScript />,
  //     },
  //     {
  //       name: 'Express',
  //       href: 'https://expressjs.com/',
  //       icon: <ExpressJs />,
  //     },
  //   ],
  //   website: 'https://bhindi.io',
  //   github: 'https://github.com/upsurgeio',
  //   x: 'https://x.com/upsurgelabs',
  //   linkedin: 'https://www.linkedin.com/company/upsurge-labs-pte-ltd',
  // },
  // {
  //   isCurrent: false,
  //   company: 'Prepeasy',
  //   position: 'Founding Engineer',
  //   location: 'Freelance',
  //   image: '/company/prepeasy.png',
  //   description: [
  //     'Independently architected and developed end-to-end full-stack solutions for core product features, resulting in 95% cost reduction in AI interview services.',
  //     'Single-handedly engineered and deployed a scalable AI Interview Platform, implementing real-time leaderboard analytics and automated personalized interview feedback system, reducing per-session costs from *$7* to *$0.30*.',
  //     'Designed and developed comprehensive AI Resume Builder with automated optimization features, increasing user engagement by generating tailored resume recommendations and industry-specific summaries.',
  //     'Built and integrated an AI-powered Cover Letter Generator with customizable templates, improving user application success rates through personalized content generation.',
  //     'Engineered a complete Learning Management System (LMS) with an integrated Quiz Platform, featuring progress tracking and performance analytics.',
  //   ],
  //   startDate: 'April 2025',
  //   endDate: 'June 2025',
  //   technologies: [
  //     {
  //       name: 'Next.js',
  //       href: 'https://nextjs.org/',
  //       icon: <NextJs />,
  //     },
  //     {
  //       name: 'Express',
  //       href: 'https://expressjs.com/',
  //       icon: <ExpressJs />,
  //     },
  //     {
  //       name: 'TypeScript',
  //       href: 'https://www.typescriptlang.org/',
  //       icon: <TypeScript />,
  //     },
  //     {
  //       name: 'React',
  //       href: 'https://react.dev/',
  //       icon: <ReactIcon />,
  //     },
  //     {
  //       name: 'Prisma',
  //       href: 'https://www.prisma.io/',
  //       icon: <Prisma />,
  //     },
  //     {
  //       name: 'PostgreSQL',
  //       href: 'https://www.postgresql.org/',
  //       icon: <PostgreSQL />,
  //     },
  //     {
  //       name: 'Vercel',
  //       href: 'https://vercel.com/',
  //       icon: <Vercel />,
  //     },
  //     {
  //       name: 'AWS',
  //       href: 'https://aws.amazon.com/',
  //       icon: <AWS />,
  //     },
  //     {
  //       name: 'Postman',
  //       href: 'https://www.postman.com/',
  //       icon: <Postman />,
  //     },
  //     {
  //       name: 'Bun',
  //       href: 'https://bun.sh/',
  //       icon: <Bun />,
  //     },
  //   ],
  //   website: 'https://prepeasy.ai',
  //   github: 'https://github.com/prepeasy',
  // },
  // {
  //   isCurrent: false,
  //   company: 'Expelee',
  //   position: 'SDE-1 (Full Stack) Intern',
  //   location: 'Dubai, UAE (Remote)',
  //   image: '/company/expelee.png',
  //   description: [
  //     '*Riskmitra (riskmitra.com)*: Built full-stack product with Next.js, Tailwind CSS, Framer Motion, shadcn, wallet integration, and GitBook integration.',
  //     '*Core AI (core-ai.me)*: Designed and developed with Next.js, Tailwind CSS, Framer Motion, shadcn, focusing on scalability and modular UI design.',
  //     '*GPU AI (gpuai.me)*: Integrated Three.js for interactive 3D elements alongside full-stack features from Core AI setup.',
  //     '*Altranium (gaming.altranium.com)*: Developed immersive gaming platform using Three.js, MERN, Tailwind, and Framer Motion.',
  //     '*Pars Network (parsnetwork.me)*: Engineered landing experience with MERN, Tailwind CSS, and GSAP for advanced animations and transitions.',
  //     '*TEQ Network (teq-network.vercel.app)*: Designed and developed landing page using MERN, Tailwind CSS, and Web3 wallet integration.',
  //   ],
  //   startDate: 'Aug 2023',
  //   endDate: 'April 2025',
  //   technologies: [
  //     {
  //       name: 'Bun',
  //       href: 'https://bun.sh/',
  //       icon: <Bun />,
  //     },
  //     {
  //       name: 'Express',
  //       href: 'https://expressjs.com/',
  //       icon: <ExpressJs />,
  //     },
  //     {
  //       name: 'Figma',
  //       href: 'https://figma.com/',
  //       icon: <Figma />,
  //     },
  //     {
  //       name: 'JavaScript',
  //       href: 'https://javascript.com/',
  //       icon: <JavaScript />,
  //     },
  //     {
  //       name: 'MongoDB',
  //       href: 'https://mongodb.com/',
  //       icon: <MongoDB />,
  //     },
  //     {
  //       name: 'Next.js',
  //       href: 'https://nextjs.org/',
  //       icon: <NextJs />,
  //     },
  //     {
  //       name: 'Node.js',
  //       href: 'https://nodejs.org/',
  //       icon: <NodeJs />,
  //     },
  //     {
  //       name: 'PostgreSQL',
  //       href: 'https://postgresql.org/',
  //       icon: <PostgreSQL />,
  //     },
  //     {
  //       name: 'Prisma',
  //       href: 'https://prisma.io/',
  //       icon: <Prisma />,
  //     },
  //     {
  //       name: 'React',
  //       href: 'https://react.dev/',
  //       icon: <ReactIcon />,
  //     },
  //     {
  //       name: 'TypeScript',
  //       href: 'https://typescriptlang.org/',
  //       icon: <TypeScript />,
  //     },
  //     {
  //       name: 'Postman',
  //       href: 'https://postman.com/',
  //       icon: <Postman />,
  //     },
  //     {
  //       name: 'Vercel',
  //       href: 'https://vercel.com/',
  //       icon: <Vercel />,
  //     },
  //     {
  //       name: 'AWS',
  //       href: 'https://aws.amazon.com/',
  //       icon: <AWS />,
  //     },
  //   ],
  //   website: 'https://expelee.com',
  //   x: 'https://x.com/0xExpelee',
  //   linkedin: 'https://www.linkedin.com/company/expelee',
  //   github: 'https://github.com/expeleeOfficial',
  // },

  {
    isCurrent: true,
    company: 'EzMart',
    position: 'Full Stack Developer',
    location: 'Dhaka, Bangladesh (Remote)',
    image: '/company/ezmartlogo.png',
    description: [
      '*EzMart (ezmartbd.com)*: Built full-stack product with Next.js, Node.js and shadcn.',
      "Implemented e-commerce features with Next.js, Node.js and shadcn.",
      "Handle product add to cart, checkout using redux toolkit and payment processing with sslcommerz.",
    ],
    startDate: 'July 2025',
    endDate: 'Present',
    technologies: [
      {
        name: 'Express',
        href: 'https://expressjs.com/',
        icon: <ExpressJs />,
      },
      {
        name: 'Figma',
        href: 'https://figma.com/',
        icon: <Figma />,
      },
      {
        name: 'JavaScript',
        href: 'https://javascript.com/',
        icon: <JavaScript />,
      },
      {
        name: 'MongoDB',
        href: 'https://mongodb.com/',
        icon: <MongoDB />,
      },
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'Node.js',
        href: 'https://nodejs.org/',
        icon: <NodeJs />,
      },
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'TypeScript',
        href: 'https://typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'Postman',
        href: 'https://postman.com/',
        icon: <Postman />,
      },
      {
        name: 'Vercel',
        href: 'https://vercel.com/',
        icon: <Vercel />,
      },
    ],
    website: 'https://ezmartbd.com',
    x: 'https://x.com/ezmartbd',
    linkedin: 'https://www.linkedin.com/company/ezmartbd',
    github: 'https://github.com/ezmartbd',
  },
  // {
  //   isCurrent: false,
  //   company: 'Flameloop',
  //   position: 'Junior Frontend Developer',
  //   location: 'Indore, India (offline)',
  //   image: '/company/loop.png',
  //   description: [
  //     'Developed and maintained web applications using HTML, CSS, and JavaScript.',
  //     'Collaborated with cross-functional teams to deliver high-quality software on time.',
  //     'Design & Developed multiple websites for clients.',
  //   ],
  //   startDate: 'June 2023',
  //   endDate: 'July 2023',
  //   website: 'https://flameloop.com',
  //   technologies: [
  //     {
  //       name: 'HTML',
  //       href: 'https://html.com/',
  //       icon: <Html />,
  //     },
  //     {
  //       name: 'CSS',
  //       href: 'https://css.com/',
  //       icon: <CSS />,
  //     },
  //     {
  //       name: 'JavaScript',
  //       href: 'https://javascript.com/',
  //       icon: <JavaScript />,
  //     },
  //     {
  //       name: 'Figma',
  //       href: 'https://figma.com/',
  //       icon: <Figma />,
  //     },
  //     {
  //       name: 'BootStrap',
  //       href: 'https://getbootstrap.com/',
  //       icon: <BootStrap />,
  //     },
  //   ],
  //   x: 'https://x.com/Flameloop149578',
  //   linkedin: 'https://www.linkedin.com/company/flameloop',
  // },
];
