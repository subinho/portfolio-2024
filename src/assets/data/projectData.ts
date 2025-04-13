import { quiz_app, krasaaduse, todo, ecom, insurance, capstone } from '../images';
import { ProjectProps } from '../interfaces/global';

const projectData: ProjectProps[] = [
  {
    id: 1,
    image: insurance,
    heading: 'Insurance App',
    desc: 'A web app for managing client insurance policies, featuring user authentication, policy creation (life & health insurance), and an account dashboard to view existing policies',
    badges: [
      { name: 'Laravel', bgColor: '#e74430', color: '#fff' },
      { name: 'MySQL', bgColor: '#00758F', color: '#fff' },
      { name: 'Bootstrap', bgColor: '#8312FA', color: '#fff' },
    ],
    badgeColor: '#EBD54D',
    refer: '#',
    github: 'https://github.com/subinho/insurance',
  },
  {
    id: 2,
    image: krasaaduse,
    heading: 'Krasa a Duse',
    desc: "A website that is a digital platform for a small beauty business, offering a glimpse into the owner's background and services including therapy and cosmetics",
    badges: [{ name: 'Wordpress CSS', bgColor: '#0f8cc4', color: '#fff' }],
    badgeColor: '#1f9af1',
    refer: 'https://www.krasaaduse.cz',
    github: '#',
  },
  {
    id: 3,
    image: capstone,
    heading: 'Capstone',
    desc: 'A responsive website for small italian restaurant. It allows users to book a table online by selecting a date and avaible time slots, or they can order food online.',
    badges: [
      { name: 'React', bgColor: '#0081A3', color: '#fff' },
      { name: 'CSS', bgColor: '#38bdf8', color: '#fff' },
    ],
    badgeColor: '#EBD54D',
    refer: 'https://subinho.github.io/capstone/',
    github: 'https://github.com/subinho/capstone',
  },
  {
    id: 4,
    image: ecom,
    heading: 'E-Commerce',
    desc: 'A full-stack web app for online stores, featuring product browsing, cart management, and checkout. Includes an admin panel to manage products, categories, and orders—ideal for small businesses or personal projects',
    badges: [
      { name: 'Laravel', bgColor: '#e74430', color: '#fff' },
      { name: 'MySQL', bgColor: '#00758F', color: '#fff' },
      { name: 'Bootstrap', bgColor: '#8312FA', color: '#fff' },
      { name: 'Livewire', bgColor: '#fb70a9', color: '#fff' },
    ],
    badgeColor: '#EBD54D',
    refer: '#',
    github: 'https://github.com/subinho/ecom',
  },
  {
    id: 5,
    image: quiz_app,
    heading: 'Quiz App',
    desc: 'A dynamic trivia game where players answer timed questions to beat their high score',
    badges: [
      { name: 'HTML', bgColor: '#ff6d00', color: '#fff' },
      { name: 'JavaScript', bgColor: '#ffd600', color: '#000' },
      { name: 'Tailwind CSS', bgColor: '#38bdf8', color: '#fff' },
    ],
    badgeColor: '#EBD54D',
    refer: 'https://subinho.github.io/Quiz_app/index.html',
    github: 'https://github.com/subinho/Quiz_app',
  },
  {
    id: 6,
    image: todo,
    heading: 'To-do app',
    desc: 'A productivity web app where users create time-sensitive tasks (24h deadline) with complete/incomplete toggle functionality. Features full CRUD operations with visual task tracking',
    badges: [
      { name: 'Laravel', bgColor: '#e74430', color: '#fff' },
      { name: 'SQLite', bgColor: '#00758F', color: '#fff' },
      { name: 'Tailwind CSS', bgColor: '#38bdf8', color: '#fff' },
    ],
    badgeColor: '#EBD54D',
    refer: '#',
    github: 'https://github.com/subinho/to-do-assignment',
  },
];

export default projectData;
