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
            'Angular 및 Express 기반의 보안 관제 솔루션 웹 프론트엔드/백엔드 개발을 담당',
            '클라우드 기반 보안 서비스의 프론트엔드 개발',
            '레거시 코드 개선 및 기존 비즈니스 로직 유지보수',
            'KT SOAR 제품 개발',
            'LG U+ SIEM 제품 커스터마이징',
            '레거시 스타일 구조 개편 및 스타일 가이드 작성 참여',
            'REST API 서버 구축 및 고객사 Needs에 맞는 API 개발',
            '사내 SIEM 제품과 타 서비스의 연동 기능 개발',
          ],
          skillKeywords: [
            'Angular',
            'TypeScript',
            'JavaScript',
            'NgRx',
            'RxJS',
            'Express.js',
            'Node.js',
            'LoopBack',
            'MySQL',
            'MongoDB',
            'Linux',
          ],
        },
      ],
    },
  ],
};

export default experience;
