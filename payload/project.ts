import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'CTI(사이버 위협 인텔리전스) 자사 서비스 웹 클라이언트/벡엔드 유지보수',
      startedAt: '2021-03',
      endedAt: '2021-06',
      where: '(주)윈스',
      descriptions: [
        {
          content: '위협 정보에 대한 분석 화면 유지보수 및 상태관리 개선',
          weight: 'THIN',
          descriptions: [
            {
              content: 'ngrx 사용하여 redux 패턴 적용',
            },
          ],
        },
      ],
    },
    {
      title: 'SIEM(보안 정보 및 이벤트 관리) 보안 관제 솔루션 웹 개발',
      startedAt: '2021-05',
      endedAt: '2022-12',
      where: '(주)윈스',
      descriptions: [
        {
          content:
            '보안 관제사에 관점의 UX/UI 개선 및 신규 Needs 에 맞는 비즈니스 로직 구현 통해 사내 AI 보안 관제 솔루션 개발',
          weight: 'SEMI_BOLD',
          descriptions: [
            { content: '2025년 02월 기준 기존 사내 보안 관제 솔루션 80% 대체' },
            { content: '2025년 02월 기준 15개의 기업에 서비스 제공중' },
          ],
        },
        {
          content: '회원가입 및 로그인 화면 개발',
          weight: 'DEFAULT',
        },
        {
          content: '자체 쿼리 문법을 사용한 통합 검색 화면 개발',
          weight: 'DEFAULT',
        },
        {
          content: "이용자의 권한을 '멀티 테넌시' 개념으로 설계 및 개발 ",
          weight: 'DEFAULT',
        },
        {
          content: '관제사들의 업무 관리 시스템 설계 및 화면',
          weight: 'DEFAULT',
        },
        {
          content:
            '위협 탐지를 위한 장비 등록 화면 개발 및 장비에서 제공하는 로그에 대한 내부 파싱규칙 설정 기능 개발',
          weight: 'DEFAULT',
        },
        {
          content: 'Playwright를 사용하여 웹 클라이언트 테스트 코드 작성',
          weight: 'DEFAULT',
        },
      ],
    },
    {
      title: 'REST API 서버 구축 및 API 개발',
      startedAt: '2022-05',
      endedAt: '2022-07',
      where: '(주)윈스',
      descriptions: [
        {
          content: '서비스에 붙여서 사용가능한 Open API 서버를 Loopback 프레임워크를 사용하여 개발',
        },
        {
          content: '고객사 Needs 에 맞는 REST API 개발',
        },
      ],
    },
    {
      title: '레거시 스타일 구조 개편 및 Style Guide 제공에 기여',
      startedAt: '2024-06',
      endedAt: '2024-10',
      where: '(주)윈스',
      descriptions: [
        {
          content: '디자인팀과 및 퍼블리셔 용역 1분과 함께 SIEM의 웹 디자인 개선',
          weight: 'SEMI_BOLD',
          descriptions: [
            {
              content:
                '관제사의 특성상 야간근무가 많아 WHITE 계열의 테마 제공 및 총 5가지의 테마 제공',
            },
            {
              content:
                '유지보수 및 개발 효율성 증대를 위해 사내 제품에 맞는 Style Guide 서브 프로젝트 참여',
            },
          ],
        },
      ],
    },
    {
      title: 'KT,LG U+ 주요 통신사 SOAR 서비스 개발',
      startedAt: '2023-02',
      endedAt: '2024-10',
      where: '(주)윈스',
      descriptions: [
        {
          content:
            '고객사 Needs 에 맞는 비즈니스 로직 구현 통해 AI SOAR(자동화 관제) 서비스 웹 프론트엔드 개발',
          weight: 'SEMI_BOLD',
          descriptions: [{ content: '2024년 회사내 서비스부문 판매 최대 실적 달성' }],
        },
        {
          content: '사용자 정의 대시보드를 ag grid, echart, gridstack, EntityService를 통해 구현',
        },
        {
          content: '고객사의 메인화면으로 사용되는 트래픽 대시보드 화면 개발',
        },
        {
          content: 'Node 서버 성능 튜닝을 위해 Nginx 적용하여 로드밸런싱 적용',
        },
        {
          content: '기존 통합검색 기능의 성능 저하로 인해 페이징 기능을 도입',
        },
        {
          content: '트래픽 프로파일링 설정 기능 화면 개발',
        },
        {
          content: '외부 서비스를 플러그인 설정을 통해 내부 서비스에서 연동 할 수 있는 기능 개발',
        },
      ],
    },
    {
      title: '클라우드 기반 보안 서비스 개발',
      startedAt: '2024-05',
      where: '(주)윈스',
      descriptions: [
        {
          content:
            'Angular 빌트인 i18n 라이브러리를 사용하여 3가지 다국어 지원 가능한 구조 설계 및 개발',
          weight: 'SEMI_BOLD',
          descriptions: [{ content: '국내 고객사뿐 아니라 일본 고객사 유치를 위한 초석 마련' }],
        },
        {
          content: '클라우드 환경에 제품을 올리기 위한 웹 모듈화 작업',
          weight: 'SEMI_BOLD',
          descriptions: [
            { content: '라이센스별 기능 분리를 위해 MSA 패턴 적용' },
            { content: 'module-federation 기술을 사용하여 모듈화 진행' },
          ],
        },
      ],
    },
    {
      title: '레거시 청산 및 기존 비즈니스 로직 유지보수',
      startedAt: '2024-05',
      where: '(주)윈스',
      descriptions: [
        {
          content: '모니터링 메모리 누수 개선 및 웹 초기 로드 성능 개선',
          weight: 'SEMI_BOLD',
          descriptions: [
            {
              content:
                '실제 많은 양의 데이터를 모니터링하는 상황에서도 브라우저 메모리 부족현상 개선',
            },
            { content: '초기 로드 속도를 약 50%이상 감소 시켜 UX 향상' },
          ],
        },
        {
          content: '유저, 장비 등록등.. 중요 백엔드로직에 Mysql 트랜잭션 적용',
          weight: 'SEMI_BOLD',
          descriptions: [{ content: '자사 관제시 서비스 설정 관련 버그 문의사항 80% 감소' }],
        },
        {
          content: 'Angular 및 Nodejs의 버전 업그레이드작업을 메인으로 맡아 진행',
        },
        {
          content: 'SIEM 제품 버전별 유지보수 및 관리',
        },
      ],
    },
  ],
};

export default project;
