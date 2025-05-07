import { ISkill } from '../component/skill/ISkill';

const techStack: ISkill.Skill = {
  category: 'Languages',
  items: [
    {
      title: 'JavaScript',
    },
    {
      title: 'TypeScript',
    },
    {
      title: 'Angular',
    },
    {
      title: 'Node.js',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [techStack],
};

export default skill;
