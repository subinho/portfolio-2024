import { notes, quiz_app, krasaaduse } from '../images';
import { ProjectProps } from '../interfaces/global';

const projectData: ProjectProps[] = [
  {
    id: 1,
    image: notes,
    heading: 'Notes app',
    desc: 'A notes application, where you can create notes and store them in your database on your account',
    badges: ['PHP', 'MySQL', 'Tailwind CSS'],
    badgeColor: '#EBD54D',
    refer: 'https://github.com/subinho/notes',
  },
  {
    id: 2,
    image: quiz_app,
    heading: 'Quiz App',
    desc: 'Series of questions, try to beat yours highest score',
    badges: ['HTML', 'JavaScript', 'Tailwind CSS'],
    badgeColor: '#EBD54D',
    refer: 'https://subinho.github.io/Quiz_app/index.html',
  },
  {
    id: 3,
    image: krasaaduse,
    heading: 'Krasa a Duse',
    desc: 'Small bussines page, which offers cosmetic and terapeutic services.',
    badges: ['Wordpress'],
    badgeColor: '#1f9af1',
    refer: 'https://www.krasaaduse.cz',
  },
];

export default projectData;
