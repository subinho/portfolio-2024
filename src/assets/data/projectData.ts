import { notes, quiz_app, krasaaduse, todo } from '../images';
import { ProjectProps } from '../interfaces/global';

const projectData: ProjectProps[] = [
  {
    id: 1,
    image: todo,
    heading: 'To-do app',
    desc: 'A todo web application, you can create, edit, delete and show your tasks, each task has 24 hours to be completed',
    badges: [
      { name: 'PHP', bgColor: '#777BB3', color: '#fff' },
      { name: 'Laravel', bgColor: '#e74430', color: '#fff' },
      { name: 'SQLite', bgColor: '#00758F', color: '#fff' },
      { name: 'Tailwind CSS', bgColor: '#38bdf8', color: '#fff' },
    ],
    badgeColor: '#EBD54D',
    refer: '#',
    github: 'https://github.com/subinho/to-do-assignment',
  },
  {
    id: 2,
    image: notes,
    heading: 'Notes app',
    desc: 'A notes application, where you can create notes which are linked to your account and store them in your database.',
    badges: [
      { name: 'PHP', bgColor: '#777BB3', color: '#fff' },
      { name: 'MySQL', bgColor: '#00758F', color: '#fff' },
      { name: 'Tailwind CSS', bgColor: '#38bdf8', color: '#fff' },
    ],
    badgeColor: '#EBD54D',
    refer: '#',
    github: 'https://github.com/subinho/notes',
  },
  {
    id: 3,
    image: quiz_app,
    heading: 'Quiz App',
    desc: 'Series of questions, try to beat your highest score.',
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
    id: 4,
    image: krasaaduse,
    heading: 'Krasa a Duse',
    desc: 'Small bussines page, which offers cosmetic and terapeutic services.',
    badges: [{ name: 'Wordpress CSS', bgColor: '#0f8cc4', color: '#fff' }],
    badgeColor: '#1f9af1',
    refer: 'https://www.krasaaduse.cz',
    github: '#',
  },
];

export default projectData;
