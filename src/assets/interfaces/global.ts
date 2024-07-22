interface Badge {
  name: string;
  bgColor: string;
  color: string;
}

export interface ProjectProps {
  id?: number;
  image: string;
  heading: string;
  desc: string;
  badges: Badge[];
  badgeColor: string;
  refer: string;
  github: string;
}
