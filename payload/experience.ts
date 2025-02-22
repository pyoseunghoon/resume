import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '(주)윈스',
      positions: [
        {
          title: 'Front-End Developer',
          startedAt: '2021-03',
          descriptions: [
            '보안 관제 솔루션 웹 프론트엔드/백엔드 개발',
            'REST API 서버 구축 및 고객사 Needs에 맞는 API 개발',
            '사내 SIEM 제품과 타 서비스의 연동 기능 개발',
            '레거시 스타일 구조 개편 및 Style Guide 제공에 참여',
            'KT SOAR 제품 개발',
            'LG U+ SIEM 제품 커스터마이징',
            '클라우드 기반 보안 서비스의 프론트엔드 개발',
            '레거시 청산 및 기존 비즈니스 로직 유지보수',
          ],
          skillKeywords: [
            'Angular',
            'TypeScript',
            'JavaScript',
            'Ngrx',
            'RxJS',
            'Express.js',
            'Nodejs',
            'Loopback',
            'MySQL',
            'MongoDB',
            'nginx',
            'Linux',
          ],
        },
      ],
    },
  ],
};

export default experience;
