import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    // {
    //   title: 'SaaS형 클라우드 서비스를 위한 웹 프론트엔드 모듈화 설계 및 도입 준비',
    //   startedAt: '2025-04',
    //   where: '(주)윈스테크넷',
    //   descriptions: [
    //     {
    //       content: '기존 Angular 기반 프론트엔드 모노레포를 SaaS 환경에 적합한 모듈화 구조로 전환 기획 중',
    //       weight: 'SEMI_BOLD',
    //       descriptions: [
    //         {
    //           content:
    //             '라이선스별 기능 분리 및 클라우드 환경에서의 유연한 배포를 목표로 MSA 패턴 도입 추진',
    //         },
    //         {
    //           content:
    //             'Nx와 Module Federation 기술을 활용하여 핵심 기능부터 독립 가능한 모듈로 점진적 분리 기획',
    //         },
    //         // {
    //         //   content:
    //         //     '단계적 전환을 위해 Shell-App ↔ Remote-App 구조를 시범 설계하여 고객사별 맞춤형 기능 선택 제공이 가능한 SaaS형 서비스 전환 기반 마련',
    //         // },
    //       ],
    //     },
    //   ],
    // },
    {
      title: '보안 오케스트레이션 자동화 대응을 위한 워크플로우 기능 설계 및 웹 개발',
      startedAt: '2025-04',
      endedAt: '2025-06',
      where: '(주)윈스테크넷',
      descriptions: [
        {
          content: 'SOAR 제품의 flow 라이센스의 주요 기능인 워크플로우 프로젝트 리딩 (참여 인원: FE 1명 / BE 2명)',
          weight: 'BOLD',
          href: 'https://velog.io/@pyoseunghoon/%EC%9E%90%EB%8F%99%ED%99%94-Orchestration-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EB%A6%AC%EB%94%A9',
          descriptions: [
            { content: "고객들의 많은 요구 사항에 맞춰 빠르게 개발하기 위해 Angular Formly를 활용하여 JSON 기반 동적 UI 개발, UI 개발 시간을 평균 2일에서 0.5일 이하로 단축" },
            { content: "워크플로우 오케스트레이션 프레임워크 Apache Airflow와 Prefect를 비교, 생태계가 크고 Role-Based Access Control 설정 및 상세 로그 수집에 유용한 Airflow 채택" },
            { content: "보안 게이트 및 추후 플랫폼 교체의 자유도, 단방향 Flow를 고려하여 웹과 오케스트레이터 사이에 미들웨어 배치" },
            { content: "초기 일정 지연을 극복하기 위한 기능 우선순위 조정 및 협업 방법 개선" }
          ],
        },
        {
          content: '워크플로우 설정 화면 웹 프론트엔드 파트 개발',
          weight: 'BOLD',
          descriptions: [
            { content: "Cytoscape 오픈 소스 및 Angular CDK/Drag-Drop을 활용하여 복잡한 플로우 차트 설정 기능 개발" },
            { content: "워크플로우의 Loop 설정 개발 – 하나의 워크플로우 안에서도 반복 가능한 형태의 데이터 주입 시 반복적으로 동작 가능" },
            { content: "Angular Formly를 활용한 JSON 기반 동적 커스터마이징 플러그인 설정 화면 개발" },
            { content: "Express 기반 API 레이어 ― 웹 서버에서 미들웨어 REST API 호출 및 설정값 CRUD 엔드포인트 구현" },
          ],
        },
        {
          content: '워크플로우 감사로그 모니터링 웹 프론트엔드 파트 개발',
          weight: 'BOLD',
          descriptions: [
            { content: "AG Grid 기반 감사 로그 모니터링 대시보드 구현 – 주기적 폴링으로 로그 데이터를 자동 갱신하고 즉시 조회·필터링 제공" },
            { content: "실행 로그 대시보드에 ‘중지(Stop)’·‘재시도(Retry)’ 액션 버튼을 추가해, 운영자가 실시간으로 작업을 제어·복구할 수 있도록 개선" },
          ],
        },
      ],
    },
    {
      title: 'SOAR, SIEM 솔루션의 다국어 적용',
      startedAt: '2025-01',
      endedAt: '2025-03',
      where: '(주)윈스테크넷',
      descriptions: [
        {
          content:
            '다국어 지원 웹 애플리케이션 아키텍처 설계 및 구현',
          weight: 'BOLD',
          href: 'https://velog.io/@pyoseunghoon/%EB%8B%A4%EA%B5%AD%EC%96%B4i18n-%EC%8B%9C%EC%8A%A4%ED%85%9C-%EB%8F%84%EC%9E%85-%EB%B0%8F-%EA%B5%AD%EC%A0%9C%ED%99%94-%EA%B5%AC%EC%A1%B0-%EA%B0%9C%EC%84%A0',
          descriptions: [
            {
              content: 'ngx-translate를 활용하여 3개 언어(한국어, 영어, 일본어)를 지원하는 글로벌화(i18n) 구조를 설계 및 구현',
            },
            {
              content: '국내 및 일본 고객사 유치를 위한 기반 마련'
            }
          ],
        },
      ],
    },
    {
      title: '레거시 코드 개선 및 기존 비즈니스 로직 유지보수',
      startedAt: '2024-08',
      endedAt: '2024-12',
      where: '(주)윈스테크넷',
      descriptions: [
        {
          "content": "메모리 누수 개선 및 성능 최적화 사례",
          weight: 'BOLD',
          descriptions: [
            {
              content: "AG Grid 렌더링 최적화로 24시간 기준 메모리 누수 70% 감소, 렌더링 성능 90% 최적화 및 API 호출 50% 절감",
              weight: 'SEMI_BOLD',
              href: 'https://velog.io/@pyoseunghoon/%EB%8B%A8%EC%88%9C-%EC%84%B1%EB%8A%A5-%EC%9D%B4%EC%8A%88%EC%9D%B8-%EC%A4%84-%EC%95%8C%EC%95%98%EB%8A%94%EB%8D%B0-%EA%B5%AC%EC%A1%B0%EC%A0%81-%EB%AC%B8%EC%A0%9C%EC%98%80%EB%8D%98-AG-Grid-%EB%A0%8C%EB%8D%94%EB%A7%81-%EB%AC%B8%EC%A0%9C'
            },
            {
              content: "Angular 번들 크기 75% 감소 및 초기 로딩 속도 단축으로 웹 성능 최적화",
              weight: 'SEMI_BOLD',
              href: 'https://velog.io/@pyoseunghoon/%EB%B3%B4%EC%95%88%EC%9E%A5%EB%B9%84%EC%97%90-%EB%A7%89%ED%9E%8C-Angular-%EC%95%B1-%EB%A1%9C%EB%94%A9-%EC%86%8D%EB%8F%84%EB%A5%BC-%EB%8B%A4%EC%8B%9C-%EC%83%9D%EA%B0%81%ED%95%B4%EB%B3%B4%EB%8B%A4%EB%8B%88-%EB%A6%AC%ED%8C%A9%ED%86%A0%EB%A7%81%EA%B9%8C%EC%A7%80'
            },
          ],
        },
        {
          content: '사용자, 장비 등록 등 중요 백엔드 로직에 MySQL 트랜잭션 적용',
          weight: 'BOLD',
          descriptions: [{ content: '관제 서비스 관련 버그 문의 80% 감소' }],
        },
        {
          content: '웹 클린 코드 작성을 위한 리팩토링 진행',
          weight: 'SEMI_BOLD',
          descriptions: [
            { content: '모노레포 확장에 따른 상태 관리 재조정으로 DX 향상 및 유지보수 용이성 개선' },
          ],
        },
        {
          content: 'Angular 및 Node.js 버전 업그레이드 진행'
        },
        {
          content: 'SIEM 제품 3가지 버전 동시 유지보수 관리',
        },
      ],
    },
    {
      title: '레거시 스타일 구조 개편 및 스타일 가이드 제공 기여',
      startedAt: '2024-06',
      endedAt: '2024-10',
      where: '(주)윈스테크넷',
      descriptions: [
        {
          content: '디자인팀 및 퍼블리셔와 협력하여 SIEM 웹 디자인 개선',
          weight: 'SEMI_BOLD',
          descriptions: [
            {
              content:
                '관제사의 야간 근무 환경을 고려한 화이트 테마 구현 (총 5가지 테마 중 주요 담당), 디자인팀과 협력하여 UI 완성',
            },
            {
              content:
                '사내 제품 맞춤형 스타일 가이드 작성 참여, 주요 UI 요소 정의 및 프로젝트 전반의 스타일 일관성 유지',
            },
          ],
        },
      ],
    },
    {
      title: 'KT,LG U+ 주요 통신사 보안 관제 솔루션 서비스 개발',
      startedAt: '2023-02',
      endedAt: '2024-11',
      where: '(주)윈스테크넷',
      descriptions: [
        {
          content:
            '고객사의 요구사항에 맞는 비즈니스 로직 구현을 통해 AI SOAR(자동화 관제) 서비스 웹 프론트엔드 개발',
          weight: 'BOLD',
          descriptions: [{ content: '2024년 회사 내 서비스 부문 판매 최대 실적 달성' }],
        },
        {
          content: '사용자 정의 대시보드를 ag-Grid, eCharts, Gridstack, EntityService를 활용하여 구현',
          weight: 'BOLD',
        },
        {
          content: '고객사별 특화 위젯(디도스 모니터링, 위협 평판 관리, 검색바, 장비 상태 관리 등 총 10개) 개발',
          weight: 'SEMI_BOLD',
        },
        {
          content: '복잡한 이벤트/트래픽 프로파일링 조건 기반 상관분석 설정 화면 개발',
          weight: 'SEMI_BOLD',
        },
        {
          content: '이벤트/트래픽 프로파일링을 통한 사용자 경보 알림 설정 화면 개발',
        },
        {
          content: '등록된 장비의 실시간 위협 이벤트 모니터링 화면 개발',
        },
        {
          content: '트래픽 대시보드 및 경보 알람 메인 화면 개발',
        },
        {
          content: '통합검색 성능 개선을 위한 페이징 기능 도입',
        },
        {
          content: '업무 관련 보고서 생성 설정 화면 개발',
        },
        {
          content: '외부 서비스 연동을 위한 플러그인 설정 화면 개발',
        },
      ],
    },
    {
      title: 'REST API 서버 구축 및 API 개발',
      startedAt: '2022-05',
      endedAt: '2022-07',
      where: '(주)윈스테크넷',
      descriptions: [
        {
          content: '서비스에 연동 가능한 Open API 서버를 Loopback 프레임워크를 사용하여 개발',
          weight: 'SEMI_BOLD',
        },
        {
          content: '고객사 요구사항에 맞춘 REST API 개발'
        },
        {
          content: '사내 제품과 연동 가능한 플러그인 설정 화면 개발',
        },
      ],
    },
    {
      title: 'SIEM(보안 정보 및 이벤트 관리) 보안 관제 솔루션 웹 개발',
      startedAt: '2021-05',
      endedAt: '2023-01',
      where: '(주)윈스테크넷',
      descriptions: [
        {
          content:
            '보안 관제사의 관점에서 UX/UI 개선 및 신규 니즈(Needs)에 맞춘 비즈니스 로직 구현을 통한 사내 AI 보안 관제 솔루션 개발',
          weight: 'BOLD',
          descriptions: [
            { content: '2025년 02월 기준 기존 사내 보안 관제 솔루션 80% 대체' },
            { content: '2025년 02월 기준 15개 기업에 서비스 제공 중' },
          ],
        },
        {
          content: '자체 쿼리 문법을 활용한 통합 검색 화면 개발',
          weight: 'BOLD',
        },
        {
          content:
            '위협 탐지 장비 등록 화면 및 로그 파싱 규칙 설정 기능 개발',
          weight: 'MEDIUM',
        },
        {
          content: 'Playwright를 활용한 웹 클라이언트 테스트 코드 작성',
          weight: 'DEFAULT',
        },
        {
          content: '회원가입 및 로그인 화면 개발',
          weight: 'DEFAULT',
        },
        {
          content: "멀티 테넌시 개념을 적용한 이용자 권한 설계 및 개발",
          weight: 'DEFAULT',
        },
        {
          content: '관제사 업무 관리 시스템 설계 및 화면 개발',
          weight: 'DEFAULT',
        },
        {
          content:
            '시스템 상태 모니터링 및 관리자 사용자 관리 화면 개발',
          weight: 'DEFAULT',
        },
        {
          content:
            '관리자 웹 감사 로그 모니터링 화면 개발',
          weight: 'DEFAULT',
        },
      ],
    },
    {
      title: 'CTI(사이버 위협 인텔리전스) 자사 서비스 웹 클라이언트/벡엔드 유지보수',
      startedAt: '2021-03',
      endedAt: '2021-06',
      where: '(주)윈스테크넷',
      descriptions: [
        {
          content: '위협 정보 분석 화면 유지보수',
        },
        {
          content: "NgRx 도입으로 상태 관리 복잡도 해소 및 비동기 데이터 관리 구조화, 디버깅 환경 개선"
        }
      ],
    },
  ],
};

export default project;
