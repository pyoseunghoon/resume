import { ISkill } from '../component/skill/ISkill';

const techStack: ISkill.Skill = {
  category: 'Languages',
  items: [
    {
      title: 'Javascript',
    },
    {
      title: 'Typescript',
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
