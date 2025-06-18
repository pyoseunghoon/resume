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
            'SOAR 제품의 보안 관제 워크플로우 자동화 기능 PL 및 웹 프론트엔드 개발',
            'SOAR 제품의 다국어 지원',
            '웹 레거시 코드 개선 및 개존 비즈니스 로직 유지보수',
            'SOAR 웹 테마 5종 개발 및 제품의 스타일 가이드 제공 기여',
            '보안 오케스트레이션, 자동화 및 대응을 할 수 있는 서비스인 SOAR(Security Orchestration, Automation and Response)의 웹 프론트엔드 개발',
            '외부 고객사 및 분석가에게 제공하는 Open API 서버 개발 및 SIEM 서비스의 데이터를 제공하는 REST API 개발',
            '보안 분석가분들이 조직의 IT 환경에서 발생하는 다양한 보안 로그 및 이벤트를 수집,분석하여 잠재적인 보안 위협을 탐지하고 대응할 수 있는 서비스인 SIEM(Security information and event management)의 웹 프론트엔드 개발',
            '수집된 위협 정보를 분석하여 누가, 어떤 방식으로, 어떤 목적으로 공격하는지 인텔리전스를 제공하는 CTI 서비스의 웹 프론트엔드 및 벡엔드 유지보수',
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
