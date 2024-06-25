import { under_construction, krasaaduse, quiz_app } from '../images';
import { ProjectProps } from '../interfaces/global';

const projectData: ProjectProps[] = [
  {
    id: 1,
    image: quiz_app,
    heading: 'Quiz App',
    desc: 'Series of questions, try to beat yours highest score',
    badge: 'JavaScript',
    badgeColor: '#EBD54D',
    refer: 'https://subinho.github.io/Quiz_app/index.html',
  },
  {
    id: 2,
    image: under_construction,
    heading: 'E-Commerce',
    desc: 'An online shop which sells shoes',
    badge: 'Next JS',
    badgeColor: '#000',
    refer: '#',
  },
  {
    id: 3,
    image: under_construction,
    heading: 'Book of Recipes',
    desc: 'A website with build in recipes and personal recipes',
    badge: 'JavaScript',
    badgeColor: '#EBD54D',
    refer: '#',
  },
  {
    id: 4,
    image: krasaaduse,
    heading: 'Krasa a Duse',
    desc: 'Small bussines page, which offers cosmetic and terapeutic services.',
    badge: 'Wordpress',
    badgeColor: '#1f9af1',
    refer: 'https://www.krasaaduse.cz',
  },
];

export default projectData;
