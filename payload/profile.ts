import { IProfile } from '../component/profile/IProfile';
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '/resume';
const image = `${BASE_PATH}/asset/profile_pyozzi.png`;

const profile: IProfile.Payload = {
  disable: false,
  image,
  name: {
    title: '표승훈',
    role: '(프론트엔드 웹 개발자)',
  },
  contact: [
    {
      title: 'p37579898@naver.com',
      link: 'mailto:p37579898@naver.com',
      icon: { iconName: 'envelope' } as any,
    },
    {
      title: '010-4118-0875',
      icon: { iconName: 'phone' } as any,
      badge: true,
    },
    {
      link: 'https://github.com/pyoseunghoon',
      icon: { iconName: 'github' } as any,
    },
    {
      link: 'https://velog.io/@pyoseunghoon/',
      icon: { iconName: 'pen-nib' } as any,
    },
  ],
};

export default profile;
