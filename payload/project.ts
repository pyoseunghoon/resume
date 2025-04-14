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
          content: '위협 정보 분석 화면 유지보수 및 상태 관리 개선',
          weight: 'DEFAULT',
          descriptions: [
            {
              content: 'ngrx 사용하여 Redux 패턴 적용',
            },
          ],
        },
      ],
    },
    {
      title: 'SIEM(보안 정보 및 이벤트 관리) 보안 관제 솔루션 웹 개발',
      startedAt: '2021-05',
      endedAt: '2023-01',
      where: '(주)윈스',
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
      title: 'REST API 서버 구축 및 API 개발',
      startedAt: '2022-05',
      endedAt: '2022-07',
      where: '(주)윈스',
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
      title: 'KT,LG U+ 주요 통신사 보안 관제 솔루션 서비스 개발',
      startedAt: '2023-02',
      endedAt: '2024-11',
      where: '(주)윈스',
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
      title: '레거시 스타일 구조 개편 및 스타일 가이드 제공 기여',
      startedAt: '2024-06',
      endedAt: '2024-10',
      where: '(주)윈스',
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
      title: '레거시 코드 개선 및 기존 비즈니스 로직 유지보수',
      startedAt: '2024-08',
      endedAt: '2024-11',
      where: '(주)윈스',
      descriptions: [
        {
          content: '메모리 누수 개선 및 웹 초기 로딩 성능 향상',
          weight: 'BOLD',
          descriptions: [
            {
              content: '대규모 데이터 모니터링 시 브라우저 메모리 부족 현상 개선',
            },
            { content: 'Lazy Loading 적용 및 모듈 세분화로 초기 로딩 속도 50% 이상 개선' },
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
      title: '클라우드 기반 보안 서비스 개발',
      startedAt: '2024-07',
      where: '(주)윈스',
      descriptions: [
        {
          content:
            'Angular의 빌트인 i18n 라이브러리를 활용하여 3가지 다국어 지원 구조 설계 및 개발',
          weight: 'BOLD',
          descriptions: [{ content: '국내 및 일본 고객사 유치를 위한 기반 마련' }],
        },
        {
          content:
            '보안 관제 워크플로우 자동화를 위한 FlowEngine 프로젝트 설계 및 개발',
          weight: 'BOLD',
          descriptions: [
            { content: 'Angular의 Formly를 사용하여 JSON 템플릿 기반 동적 UI 생성 구조 구현, 컴포넌트 재사용성 향상' },
            { content: 'Apache Airflow 엔진을 활용한 웹 기반 워크플로우 관리 아키텍처 설계' }
          ],
        },
        {
          content:
            '통합 검색 기능에 Drag & Drop 방식을 도입하여 사용자 편의성 개선',
        },
        {
          content:
            '제공하는 화면에 대한 데이터 필터링 공용 컴포넌트 개발',
        },
      ],
    },
    {
      title: 'SaaS형 클라우드 서비스를 위한 웹 프론트엔드 모듈화 설계 및 도입 준비',
      startedAt: '2025-04',
      where: '(주)윈스',
      descriptions: [
        {
          content: '기존 Angular 기반 프론트엔드 모노레포를 SaaS 환경에 적합한 모듈화 구조로 전환 기획 중',
          weight: 'SEMI_BOLD',
          descriptions: [
            {
              content:
                '라이선스별 기능 분리 및 클라우드 환경에서의 유연한 배포를 목표로 MSA 패턴 도입 추진',
            },
            {
              content:
                'Nx와 Module Federation 기술을 활용하여 핵심 기능부터 독립 가능한 모듈로 점진적 분리 기획',
            },
            // {
            //   content:
            //     '단계적 전환을 위해 Shell-App ↔ Remote-App 구조를 시범 설계하여 고객사별 맞춤형 기능 선택 제공이 가능한 SaaS형 서비스 전환 기반 마련',
            // },
          ],
        },
      ],
    },
  ],
};

export default project;
