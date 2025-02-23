import { faPenNib, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { IProfile } from '../component/profile/IProfile';
const image = `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/asset/profile_pyozzi.png`;

const profile: IProfile.Payload = {
  disable: false,
  image,
  name: {
    title: '표승훈',
    role: '(프론트엔드 웹 개발자)',
    small: '가천대학교 컴퓨터공학과',
  },
  contact: [
    {
      title: 'p37579898@naver.com',
      link: 'mailto:p37579898@naver.com',
      icon: faEnvelope,
    },
    {
      title: '010-4118-0875',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/pyoseunghoon',
      icon: faGithub,
    },
    {
      link: 'https://velog.io/@pyoseunghoon/',
      icon: faPenNib,
    },
  ],
};

export default profile;
