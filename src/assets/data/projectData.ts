import { notes, quiz_app, krasaaduse } from '../images';
import { ProjectProps } from '../interfaces/global';

const projectData: ProjectProps[] = [
  {
    id: 1,
    image: notes,
    heading: 'Notes app',
    desc: 'A notes application, where you can create notes and store them in your database on your account',
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
    id: 2,
    image: quiz_app,
    heading: 'Quiz App',
    desc: 'Series of questions, try to beat yours highest score',
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
    id: 3,
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
