import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '(주)윈스테크넷',
      positions: [
        {
          title: '윈스테크넷은 통신 서버에서 대규모 트래픽에 대해 악성 패킷을 탐지하거나 차단하는 하드웨어 제품(IPS)을 판매하며 자체 보안 관제 솔루션을 제공하여 관제 사업을 하고 있는 회사입니다',
          startedAt: '2021-03',
          descriptions: [
            '보안 워크플로우 기능 리딩 및 클라이언트 개발',
            'SOAR, SIEM 솔루션의 다국어 지원',
            '웹 레거시 코드 개선 및 기존 비즈니스 로직 유지보수',
            '레거시 스타일 구조 개선 및 스타일 가이드 개발',
            '자사 SOAR 보안 관제 솔루션 서비스 개발',
            'REST API 서버 구축 및 API 개발',
            'SIEM(보안 정보 및 이벤트 관리) 보안 관제 솔루션 웹 개발',
            'CTI(사이버 위협 인텔리전스) 자사 서비스 웹 클라이언트/백엔드 유지보수',
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
