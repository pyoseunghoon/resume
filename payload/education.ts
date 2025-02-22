import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '가천대학교',
      subTitle: '컴퓨터공학과',
      startedAt: '2015-03',
      endedAt: '2021-08',
    },
    {
      title: '서울 광남고등학교',
      subTitle: '자연계 졸업',
      startedAt: '2012-03',
      endedAt: '2015-02',
    },
  ],
};

export default education;
