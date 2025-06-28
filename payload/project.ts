import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      // 비록 도입 진행중에 사업이 틀어지고, 팀을 옮기게되어 진행을 마무리 하지 못했지만(몰래 받아서 진행할 수 있으면 어느정도 해보자.. 전체 다가 아니다라도 일부 기능만 떼어보는식으로라도
      // , 이 경험을 바탕으로 사이드 프로젝트를 만들어 레거시한 앵귤러 프로젝트를 FSD 구조와 NX, Module Federation 기술을 적용
      title: 'SaaS형 클라우드 서비스를 위한 웹 프론트엔드 모듈화 설계 및 도입 준비',
      startedAt: '2025-05',
      where: '(주)윈스테크넷',
      team: '서비스개발팀',
      descriptions: [
        {
          content: '라이선스별 기능 분리 및 클라우드 환경에서의 유연한 배포를 목표로 마이크로 프론트엔드 아키텍쳐 도입 추진',
          weight: 'SEMI_BOLD',
          descriptions: [
            {
              content:
                '**NX** 도입을 통해 기능 단위 모듈화를 진행하고, 라이브러리 기반 스캐폴딩 및 배포 최적화 구조 설계',
                useInlineStyles: true
            },
            {
              content:
                '**FSD 아키텍처**의 트레이드 오프 파악 후 페이지 기준으로 설계된 기존 폴더 구조를 리팩토링 진행 중',
                useInlineStyles: true
            },
            {
              content: '**Module Federation**을 활용하여 기능별 개별 빌드 및 런타임 조합 구조를 설계하고, 고객사별 기능 조합에 맞춰 동적으로 제공하는 배포 방식을 준비',
              useInlineStyles: true
            }
          ],
        },
      ],
    },
    {
      title: 'SOAR 솔루션의 보안 관제 워크플로우 자동화 기능 PL 및 웹 프론트엔드 개발',
      startedAt: '2025-04',
      endedAt: '2025-06',
      where: '(주)윈스테크넷',
      team: '서비스개발팀',
      teamSize: '참여 인원: FE 1명, BE 2명',
      descriptions: [
        {
          content: 'SOAR 제품의 flow 라이센스의 주요 기능인 워크플로우 프로젝트 리딩',
          weight: 'BOLD',
          href: 'https://velog.io/@pyoseunghoon/%EC%9E%90%EB%8F%99%ED%99%94-Orchestration-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EB%A6%AC%EB%94%A9',
          descriptions: [
            {
              content:
                '【 문제상황 】 고객사별 다른 폼 구조 요구사항 (10여 개 폼), 초기 일정 지연, 한정된 개발완료 일정 및 인적 자원, 팀 내 온라인 협업 프로세스 미흡',
            },
            {
              content: '【 해결방안 】 기술적 의사결정 및 프로세스 개선',
              descriptions: [
                {
                  content:
                    '**Angular Formly**를 활용한 JSON 스키마 기반 동적 렌더링 및 유효성 검사 자동화',
                    useInlineStyles: true
                },
                {
                  content:
                    'Apache Airflow 채택 (vs Prefect) - 생태계 규모, RBAC 설정, 상세 로그 수집 우수성',
                },
                {
                  content:
                    'Web server와 Airflow간 Middleware 배치로 보안 및 플랫폼 교체 자유도 확보',
                },
                { 
                  content: '**Notion, Figzam** 협업도구 도입으로 오프라인 회의 효율성 개선',
                  useInlineStyles: true
                 },
              ],
            },
            { 
              content: '【 성과 】 폼 개발 시간 80% 단축, 고객 요구사항 대응 시간 1주 → 1일 단축'
            },
          ],
        },
        {
          content: '워크플로우 설정 기능 웹 프론트엔드 파트 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '**Formly를 활용한 커스텀 Field Type 10개 개발**, 조건부 필드 표시 로직 구현, 기존 제품의 스타일에 맞춘 래퍼 클래스 구현',
                useInlineStyles: true
            },
            {
              content:
                '**Cytoscape** 오픈 소스 및 **Angular CDK/Drag-Drop**을 활용하여 복잡한 플로우 차트 설정 기능 개발',
                useInlineStyles: true
            },
            {
              content:
                '워크플로우의 Loop 설정 개발 – 하나의 워크플로우 안에서도 반복 가능한 형태의 데이터 주입 시 반복적으로 동작 가능',
            },
            {
              content:
                'Express 기반 API 레이어 - 웹 서버에서 미들웨어 REST API 호출 및 설정값 CRUD 엔드포인트 구현',
            },
          ],
        },
        {
          content: '워크플로우 감사로그 모니터링 웹 프론트엔드 파트 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'AG Grid 기반 감사 로그 모니터링 대시보드 구현 – 주기적 폴링으로 로그 데이터를 자동 갱신하고 즉시 조회·필터링 제공',
            },
            {
              content:
                "실행 로그 대시보드에 '중지(Stop)'·'재시도(Retry)' 액션 버튼을 추가해, 운영자가 실시간으로 작업을 제어·복구할 수 있도록 개선",
            },
          ],
        },
      ],
    },
    {
      title: '다국어 적용 기반 SOAR/SIEM 솔루션 국제화(I18n) 고도화 및 DX 개선',
      startedAt: '2025-01',
      endedAt: '2025-03',
      where: '(주)윈스테크넷',
      team: '서비스개발팀',
      teamSize: '참여 인원: FE/BE 1명',
      href: 'https://velog.io/@pyoseunghoon/%EB%8B%A4%EA%B5%AD%EC%96%B4i18n-%EC%8B%9C%EC%8A%A4%ED%85%9C-%EB%8F%84%EC%9E%85-%EB%B0%8F-%EA%B5%AD%EC%A0%9C%ED%99%94-%EA%B5%AC%EC%A1%B0-%EA%B0%9C%EC%84%A0',
      descriptions: [
        {
          content:
            '단일 언어(한국어)만 지원하던 기존 SOAR / SIEM 웹 솔루션의 다국어 지원 설계 및 개발',
          weight: 'BOLD',
          descriptions: [
            {
              content:
                '【 문제상황 】 매 릴리즈마다 개발자가 git diff를 수동으로 확인하여 번역이 필요한 키 값을 Google Sheet에 복사해 마케팅팀과 번역 협업 수행 (시간 소모, 휴먼 에러 발생 우려)',
            },
            {
              content: '【 해결방안 】 **기술적 자동화 및 협업 프로세스 효율화**',
              useInlineStyles: true,
              descriptions: [
                {
                  content:
                    '**git diff 기반 번역 키 자동 추출 및 Google Sheets API 연동을 통한 자동 시트 생성**, **번역 시트 자동 병합 스크립트**로 마케팅팀과의 번역 협업 과정 효율화',
                  useInlineStyles: true,
                },
              ],
            },
            {
              content: '【 성과 】',
              descriptions: [
                { 
                  content: '번역 키 전달 프로세스 자동화로 번역 협업 소요시간 단축 **(평균 1일 → 0.5일)**, **휴먼 에러 최소화**',
                  useInlineStyles: true,
                 },
                { content: '일본 고객사 유치를 위한 기반 마련' },
              ],
            },
          ],
        },
        {
          content:
            '개발자 경험 향상을 위한 i18n 설계 구조 개선 및 Pre-commit, CI 단계 다국어 Key 무결성 검사 도입',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '공통 메시지 구조 정의, 기능별 key 관리 체계 수립',
            },
            {
              content: '**ngx-translate-extract**를 통한 자동 키 수집으로 효율성 확대',
              useInlineStyles: true
            },
            {
              content: '**CI 파이프라인을 활용한 i18n key 무결성 검사** 자동화 구현',
              useInlineStyles: true
            },
          ],
        },
      ],
    },
    {
      title: '기존 웹 솔루션의 성능 최적화 및 코드 리팩토링 주도 (Angular, Node.js)',
      startedAt: '2024-08',
      endedAt: '2024-12',
      where: '(주)윈스테크넷',
      team: '서비스개발팀',
      teamSize: '참여 인원: FE/BE 1명',
      descriptions: [
        {
          content: 'AG Grid 기반 실시간 보안 관제 모니터링 시스템 성능 개선',
          weight: 'BOLD',
          href: 'https://velog.io/@pyoseunghoon/%EB%8B%A8%EC%88%9C-%EC%84%B1%EB%8A%A5-%EC%9D%B4%EC%8A%88%EC%9D%B8-%EC%A4%84-%EC%95%8C%EC%95%98%EB%8A%94%EB%8D%B0-%EA%B5%AC%EC%A1%B0%EC%A0%81-%EB%AC%B8%EC%A0%9C%EC%98%80%EB%8D%98-AG-Grid-%EB%A0%8C%EB%8D%94%EB%A7%81-%EB%AC%B8%EC%A0%9C',
          descriptions: [
            {
              content: '【 문제상황 】 보안 관제 업무 특성상 초당 최대 8만개 데이터가 수집되어 5초 간격으로 실시간 업데이트되는 AG Grid 모니터링 화면을 수개월간 연속 운영. 실제 운영 서버에서 몇 주간 화면을 띄워놓은 상태에서 메모리 누수(3GB와 성능 저하로 모니터링 업무 지장 발생',
            },
            {
              content: '【 해결방안 】** Chrome DevTools 분석 결과, AG Grid와 Angular의 lifecycle 불일치 문제 구조적 해결**',
              useInlineStyles: true,
              descriptions: [
                {
                  content: 'AG Grid 버전 일치 및 getRowId 설정으로 row identity 기준 고정, 커스텀 renderer refresh() 구현, **signal과 TanStack Query 도입으로 불필요한 change detection 제거**',
                  useInlineStyles: true,
                },
              ],
            },
            {
              content: '【 성과 】',
              descriptions: [
                {
                  content: '24시간 기준 1000EPS 모니터링시 평균 **메모리 누수 70% 감소**, **렌더링 성능 90% 향상**, **API 호출 50% 절감**',
                  useInlineStyles: true,
                },
              ],
            },
          ],
        },
        {
          content: 'Angular 애플리케이션 초기 로딩 성능 개선',
          weight: 'BOLD',
          href: 'https://velog.io/@pyoseunghoon/%EB%B3%B4%EC%95%88%EC%9E%A5%EB%B9%84%EC%97%90-%EB%A7%89%ED%9E%8C-Angular-%EC%95%B1-%EB%A1%9C%EB%94%A9-%EC%86%8D%EB%8F%84%EB%A5%BC-%EB%8B%A4%EC%8B%9C-%EC%83%9D%EA%B0%81%ED%95%B4%EB%B3%B4%EB%8B%A4%EB%8B%88-%EB%A6%AC%ED%8C%A9%ED%86%A0%EB%A7%81%EA%B9%8C%EC%A7%80',
          descriptions: [
            {
              content: '【 문제상황 】 보안장비 환경에서 Angular CSR 앱의 대용량 번들 파일(vendor.js 4MB, main.js 3.8MB)로 인한 초기 로딩 지연 및 WAF에서 ACK STORM으로 인식되어 웹 접속 차단 현상 발생',
            },
            {
              content: '【 해결방안 】 번들 최적화 및 구조적 개선',
              descriptions: [
                {
                  content: '**Tree-shaking을 위한 lodash → lodash-es 마이그레이션**, 불필요한 라이브러리 제거, **gzip 압축 적용**, **컴포넌트 단위 lazy loading 도입** 및 모듈화',
                  useInlineStyles: true,
                },
              ],
            },
            {
              content: '【 성과 】',
              descriptions: [
                {
                  content: 'Angular **번들 크기 75% 감소**, 초기 로딩 속도 대폭 단축으로 사용자 경험 개선',
                  useInlineStyles: true,
                },
              ],
            },
          ],
        },
        {
          content: 'Angular 버전 업그레이드 및 안정화',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '【 수행내용 】 단계별 **Angular 마이그레이션** (13→18), Node.js 버전 관리 포함',
              useInlineStyles: true,
            },
            {
              content: '【 주요 이슈 해결 】',
              descriptions: [
                {
                  content: '의존성 트리 정상화: legacy-peer-deps 제거 및 불필요 라이브러리 정리',
                },
                {
                  content: 'View Engine → Ivy 전환 대응: 종속 라이브러리 Ivy 호환성 확보',
                },
                {
                  content: 'RouterEvent 타입 명시로 라우팅 에러 해결',
                },
                {
                  content: 'AgGridModule.withComponents 제거하여 Grid 빌드 오류 수정',
                },
                {
                  content: 'Webpack 5 CSS 경로 참조 이슈(swiper) 해결 및 uuid 라이브러리 버전 명시',
                },
                {
                  content: '**DOM 렌더링 최적화 및 zone-less 환경 전환을 위해 Signal 기반 리팩토링 적용**',
                  useInlineStyles: true,
                }
              ],
            },
            {
              content: '【 향후 대응방안 마련 】 **보안 취약점, 성능 개선, 심각한 결함 발생 시에만 업데이트 진행 원칙 수립** 및 테스트 프로세스 필요성 확인',
              useInlineStyles: true,
            },
          ],
        },
        {
          content: '사용자, 장비 등록 등 중요 백엔드 로직에 MySQL 트랜잭션 적용',
          weight: 'MEDIUM',
          descriptions: [{ content: '관제 서비스 관련 버그 문의 80% 감소' }],
        },
        // {
        //   content: 'SOAR 제품 3가지 버전 동시 유지보수 관리',
        // },
      ],
    },
    {
      title: '제품의 스타일 가이드 제공 및 SOAR 웹 테마 5종 개발',
      startedAt: '2024-09',
      endedAt: '2024-10',
      where: '(주)윈스테크넷',
      team: '서비스개발팀',
      teamSize: '참여 인원: FE 1명, Publisher 1명, Designer 1명',
      descriptions: [
        {
          content: '사내 맞춤형 스타일 가이드 프로젝트 참여',
          weight: 'SEMI_BOLD',
          descriptions: [
            {
              content: '【 문제상황 】 프로젝트별 상이한 스타일 적용으로 인한 일관성 부족 및 신규 입사자들의 빠른 제품 적응 어려움',
            },
            {
              content: '【 해결방안 】 재사용 가능한 컴포넌트 및 엘리먼트 기반 스타일 가이드 구축',
              descriptions: [
                {
                  content: '**Angular Material Design 기반 재사용성 높은 UI 요소 정의**, 웹 기반 스타일 가이드 제작',
                  useInlineStyles: true,
                },
              ],
            },
            {
              content: '【 성과 】',
              descriptions: [
                {
                  content: '프로젝트 전반의 **스타일 일관성 확보**, 디자인-개발 협업 효율성 증대',
                  useInlineStyles: true,
                },
              ],
            },
          ],
        },
        {
          content: '관제사의 야간 근무 환경을 고려한 화이트 테마 포함 총 5가지 테마 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '**Sass 기반 변수, 믹스인, 모듈화**를 활용하여 복잡한 CSS 구조를 체계적으로 정리하고, 고객별 맞춤 테마 제공으로 사용자 만족도 향상',
                useInlineStyles: true,
            },
          ],
        },
      ],
    },
    {
      title: '보안 오케스트레이션, 자동화 및 대응을 할 수 있는 솔루션인 \'SOAR\'의 웹 프론트엔드 개발 및 Express api 개발',
      startedAt: '2023-02',
      endedAt: '2024-11',
      where: '(주)윈스테크넷',
      team: '서비스개발팀',
      teamSize: '참여 인원: PL 1명, FE 2명, BE 3명, Publisher 1명, Designer 1명',
      descriptions: [
        {
          content:
            '회사내 관제팀, 고객사의 요구사항에 맞는 비즈니스 로직 구현을 통해 자동화 관제 서비스 웹 프론트엔드 개발',
          weight: 'SEMI_BOLD',
          descriptions: [
            { 
              content: '매출: 서비스 부문 **전년 대비 500% 달성** (1억 → 5억)',
              useInlineStyles: true,
             },
            { content: '고객: KT,LG U+ 주요 통신사 계약' }
          ],
        },
        {
          content: '고객 맞춤형 실시간 관제 대시보드 개발',
          weight: 'BOLD',
          descriptions: [
            {
              content: '【 문제상황 】 기존 고정형 관제 화면으로는 고객사별 상이한 관제 요구사항과 데이터 분석 니즈를 충족할 수 없어 계약 확장 및 신규 고객 유치에 한계 발생',
            },
            {
              content: '【 해결방안 】 사용자 정의 가능한 실시간 대시보드 구현',
              descriptions: [
                {
                  content: '**AG Grid(대용량 실시간 데이터 처리)**, **eCharts(다양한 차트 시각화)**, **NgRx 패턴(복잡한 상태 관리)**, **EntityService(데이터 정규화)**를 조합한 확장 가능한 구조 설계',
                  useInlineStyles: true,
                },
                {
                  content: '제품 내 통합검색 쿼리 엔진과 연동하여 사용자 정의 쿼리 기반 실시간 데이터 추출 및 시각화 기능 구현',
                },
              ],
            },
            {
              content: '【 성과 】',
              descriptions: [
                {
                  content: 'Grid, Bar, Pie, Line 차트를 자유롭게 조합 가능한 대시보드 제공으로 고객사별 맞춤형 관제 환경 구축, **KT·LG U+ 등 주요 통신사 계약 성사에 기여**',
                  useInlineStyles: true,
                },
              ],
            },
          ],
        },
        {
          content: '수집 데이터에 대한 프로파일 및 상관분석 설정 페이지 개발',
          weight: 'SEMI_BOLD',
          descriptions: [
            {
              content: '【 문제상황 】 조건 선택시 복잡한 조건에 대한 설정 UX가 떨어짐. 여러 데이터 타입에 대한 조건 및 괄호 처리 불가능함',
            },
            {
              content: '【 해결방안 】 비개발자 관제사를 위한 직관적 UI 설계 및 조건식에 대한 Database 구조 개선',
              descriptions: [
                {
                  content: '연산자, 괄호를 사용자가 Drag & Drop 혹은 다음에 올 수 있는 연산자를 유추하여 자동 완성시켜주는 기능 구현',
                },
                {
                  content: 'Database의 조건식 데이터들을 가공하는 pipeline 구현',
                },
              ],
            },
            {
              content: '【 성과 】비개발자 관제사의 복잡한 조건 설정 가능해짐으로써 설정 관련 기술지원 문의 제로화, 사용자 만족도 향상으로 해당 UI 패턴을 통합검색 등 타 기능 확장 적용 요청 발생',
            },
          ],
        },
        {
          content: '트래픽 대시보드 Line Chart 기능 개발',
          weight: 'SEMI_BOLD',
          descriptions: [
            {
              content: '【 문제상황 】 테넌트 내 최대 50대 장비의 실시간 트래픽 모니터링 시 4개 차트에서 총 200개 라인 렌더링으로 인한 성능 저하 (전체 렌더링 15초 이상 소요)',
            },
            {
              content: '【 해결방안 】ECharts 렌더링, Angular 컴포넌트, 서버사이드 최적화를 통해 개선',
              descriptions: [
                {
                  content: '**Canvas에서 SVG 모드 변경**으로 대량 라인 차트 성능 향상',
                  useInlineStyles: true,
                },
                {
                  content: '**replaceMerge: [\'series\'] 옵션 적용**하여 복잡한 diff 계산 제거',
                  useInlineStyles: true,
                },
                // 하나의 차트 업데이트 시 다른 차트까지 재렌더링되는 문제 해결 위해
                {
                  content: '**ChangeDetectionStrategy.OnPush**와 **NgZone.runOutsideAngular()** 적용',
                  useInlineStyles: true,
                },
                {
                  content: 'Zone.js의 HTTP 변경 감지로 인한 불필요한 전체 컴포넌트 재렌더링 방지',
                },
                {
                  content: '다중 For문에서 Map 구조로 변경하여 데이터 가공 시간 단축',
                },
              ],
            },
            {
              content: '【 성과 】초기 차트 로딩 3-4초 → 1초로 **70% 성능 향상**',
              useInlineStyles: true,
            },
          ],
        },
        {
          content: '폴링 방식의 실시간 위협 이벤트 모니터링 페이지 개발, 그리드의 컬럼순서 변경 상태 저장 기능, 컬럼 필터 기능 제공',
        },
        {
          content: '통합검색 기능에서 사용자가 제품의 데이터를 통계를 낼 수 있도록 설정하고 만들어진 통계를 쿼리화 하여 재사용할 수 있는 기능 개발',
        },
        {
          content: '수동으로 생성하던 업무 보고서를 예약 보고서 생성 가능하도록 기능 개발',
        },
        {
          content: '사용자별 가청, 가시 경보 알림 기능 개발하여 백그라운드에서 완료된 작업들을 확인 가능',
        },
        {
          content: '고객사별 특화 위젯(디도스 모니터링, 위협 평판 관리, 검색바, 장비 상태 관리 등 총 10개) 개발',
        },
        {
          content: '외부 서비스 연동을 위한 플러그인 설정 페이지 개발',
        },
      ],
    },
    {
      title: '외부 고객사 및 분석가에게 제공하는 Open API 서버 개발 및 SIEM 서비스의 데이터를 제공하는 REST API 개발',
      startedAt: '2022-05',
      endedAt: '2022-07',
      where: '(주)윈스테크넷',
      team: '서비스개발팀',
      teamSize: '1인 프로젝트',
      descriptions: [
        {
          content: '서비스에 연동 가능한 Open API 서버를 **Loopback3** 프레임워크를 사용하여 개발',
          useInlineStyles: true,
        },
        {
          content: '사내 제품의 고객 등급에 맞추어 역할 권한 제어, Model(기능)별 **유연한 ACL 설정 제공**',
          useInlineStyles: true,
        },
        {
          content: '고객사 요구사항에 맞춘 REST API 개발',
        },
      ],
    },
    {
      title: '보안 분석가분들이 다양한 보안 로그 및 이벤트를 수집,분석하여 잠재적인 보안 위협을 탐지 및 대응 가능한 솔루션 \'SIEM\'의 웹 프론트엔드 개발 및 Express api 개발',
      startedAt: '2021-05',
      endedAt: '2023-01',
      where: '(주)윈스테크넷',
      team: '서비스개발팀',
      teamSize: '참여 인원: PL 1명, FE 3명, BE 5명, Designer 1명',
      descriptions: [
        {
          content:
            '보안 관제사의 관점에서 UX/UI 개선 및 신규 니즈(Needs)에 맞춘 비즈니스 로직 구현을 통한 사내 AI 보안 관제 솔루션 개발',
          weight: 'SEMI_BOLD',
          descriptions: [
            { content: '2025년 02월 기준 기존 사내 보안 관제 솔루션 80% 대체' },
            { content: '2025년 02월 기준 15개 기업에 서비스 제공 중' },
          ],
        },
        {
          content: '품질 테스트 자동화 시스템에서 E2E 테스트 진행',
          weight: 'SEMI_BOLD',
          descriptions: [
            {
              content: '프로파일, 상관분석, 검색, 보고서 등 주요 기능에 대한 **Playwright 기반 E2E 테스트** 시나리오 작성 및 검증',
              useInlineStyles: true,
            },
            {
              content: '실시간 DB 상태 변경으로 테스트 신뢰도가 낮아지는 문제를 해결하기 위해 **MSW(Mock Service Worker)를 도입**하여, 테스트 실행 시 API 응답을 가상화하고 정제된 mock 데이터를 반환하는 방식으로 안정적인 테스트 환경 구성',
              useInlineStyles: true,
            }
          ]
        },
        {
          content: "내부 자산정보 연동 및 Lookup 기능 개발",
          descriptions: [
            {
              content: "【 기능 구현 】 CSV, JSON, API 형태의 내부 자산정보를 SIEM 솔루션에 연동하여 분석 가능한 'Lookup' 기능",
              descriptions: [
                {
                  content: "자동/수동 Import 기능 및 자산정보 스키마 설정 기능 구현",
                },
                {
                  content: "통합검색 페이지에서 내부 데이터와 외부 데이터 Join 조회(상관분석) 지원",
                },
                {
                  content: "Material Stepper 및 Prefix Directive 활용해 파일 경로 타입 자동화",
                }
              ]
            },
            {
              content: "【 주요 이슈 해결 】 파일 업로드 취소 시 Angular 이벤트 버블링으로 자식 컴포넌트가 제거되는 이슈",
              descriptions: [
                {
                  content: "**이벤트 버블링 현상**에 따라 **Angular Output 이벤트명이 DOM 이벤트명과 충돌**할 때 발생하는 이슈 인지 및 **stopPropagation** 적용하여 해결",
                  useInlineStyles: true,
                }
              ]
            }
          ]
        },
        {
          content: 'Splunk의 DSL 문법을 참고하여 자체 검색 쿼리 기반의 통합 검색 기능 개발',
          descriptions: [
            {
              content: '【 문제상황 】 Express 서버에서 대용량 통합 검색 쿼리 처리로 인한 응답 지연 상황 발생',
            },
            {
              content: '【 해결방안 】 ',
              descriptions: [
                {
                  content: '검색 요청 시 로딩 애니메이션 도입으로 사용자 체감 대기 시간 개선',
                },
                {
                  content: '동일한 검색 조건일 경우 Map 기반 캐싱을 적용하여 중복 요청 방지 및 결과 재활용',
                },
                {
                  content: '최근 검색 이력 기능을 구현하여 이전 검색 조건 및 결과를 손쉽게 복원 가능하도록 UX 개선',
                },
              ],
            },
            {
              content: '【 성과 】',
              descriptions: [
                {
                  content: '관제 사용자의 반복 검색 패턴을 반영해 캐싱 및 검색 이력 기능을 구현함으로써, 분석 업무 효율 향상 및 실사용자 피드백에서 긍정적 반응 확보',
                  weight: 'SEMI_BOLD',
                },
                {
                  content: '프론트엔드 UX 최적화 및 부하 제어를 통해 백엔드 성능 개선 작업에 필요한 안정적 대응 시간을 확보',
                },
              ],
            },
            // {
            //   content: '사용자 정의 쿼리를 입력하여 다양한 조건 검색이 가능한 UI 구성 및 결과 출력 처리 구현'
            // },
            // {
            //   content: '유연한 쿼리 입력이 가능하도록 입력 에러 및 구문 오류에 대한 실시간 검증 및 에러 메시지 강화에 주력하여 사용자 경험 개선'
            // }
          ]
        },
        {
          content: '멀티 테넌시 기반 권한 설계 및 페이지 개발',
          descriptions: [
            {
              content: '보안 솔루션 도메인 요구사항에 따라, IP Pool 기반 장비 등록 구조에 맞춰 테넌시(논리 구분 단위)를 정의하고 멀티 테넌시 구조 설계에 참여'
            },
            {
              content: 'IP Pool 기반 장비 등록 구조를 반영하여 테넌시 구조를 설계하고, 사용자-장비 매핑 및 Role 기반 UI 권한 제어 로직 구현'
            },
            {
              content: '**싱글톤 AuthService를 구현**하여 사용자 권한 정보를 전역 관리하고, UI 요소 접근을 일관되게 제어하여 유지보수성과 확장성 확보',
              useInlineStyles: true,
            }
          ]
        },
        {
          content: '장비 연동 설정 페이지의 **복잡한 상태관리를 EntityCollectionService + Facade 패턴으로 구조화**',
          useInlineStyles: true,
          descriptions: [
            {
              content: '30개 이상의 컴포넌트가 각기 다른 설정값을 관리하는 화면에서 중앙 집중식 상태관리를 적용하고, 자식 컴포넌트 인터페이스를 단일화하여 복잡도 해소',
            }
          ]
        },
        {
          content: '폐쇄망 기반 보안 솔루션 웹 환경에서 동작하도록, **JWT 기반의 인증 구조(accessToken + refreshToken)**를 설계 및 기능 개발',
          useInlineStyles: true,
          descriptions: [
            {
              content: 'accessToken의 만료 시간을 짧게 설정하고, refreshToken 기반 자동 갱신 로직을 적용하여 보안성과 UX를 모두 고려한 구조 구현'
            },
            {
              content: '동일한 secret key를 활용하여 사내 RMS(정책 제어) 시스템과의 사용자 인증 연동이 가능하도록 구성, 서비스 간 인증 정보 공유가 가능한 유연한 구조를 프론트엔드 측에서 대응'
            }
          ]
        },
        {
          content: '사용자가 요일, 공휴일, 시간대(범위)를 조합하여 다중 알람 발생 조건을 등록할 수 있도록 설계 및 기능 개발',
          descriptions: [
            {
              content: '조건 간 중복을 자동 검출하여 실시간 유효성 검증 로직 구현' // 일정 term의 debounce를 두었고 invalid시 snackbar를통해 사용자가 설정중일떄 불편함을 느끼지 않도록 구현
            },
            {
              content: '폐쇄망 환경으로 공휴일 API 사용이 불가능해, 배포단계에서 연 단위 공휴일 데이터를 JSON 파일로 포함, 공휴일 변경에 대비해 관리자가 직접 등록 가능한 UI를 제공하여 유연성 확보',
              weight: 'SEMI_BOLD'
            },
          ]
        },
        {
          content: 'Scale out 환경을 고려한 서버 상태 관리 페이지 개발',
          descriptions: [
            {
              content: '【 주요 이슈 해결 】 서버의 설치된 모듈 리스트를 전부 교체하는 방식으로 인해 리스트 전체가 다시 렌더링',
              descriptions: [
                {
                  content: '**Ngrx reducer**에서 replace 대신 update하도록 수정',
                  useInlineStyles: true,
                },
                {
                  content: '모듈 상태 컴포넌트를 분리한 뒤, **NgRx selector**를 통해 각 컴포넌트가 자신에게 필요한 모듈 상태만 선택적으로 구독하도록 구현',
                  useInlineStyles: true,
                },
                {
                  content: 'Angular에서 **trackBy**를 활용해 불필요한 재렌더링을 막아 UX를 개선',
                  useInlineStyles: true,
                },
              ],
            }
          ]
        },
        // {
        //   content: '위협 탐지 장비 등록 화면 및 로그 파싱 규칙 설정 기능 개발',
        //   weight: 'BOLD',
        // },
        // {
        //   content: '관제사 업무 관리 시스템 설계 및 화면 개발',
        // },
        // {
        //   content: '시스템 상태 모니터링 및 관리자 사용자 관리 화면 개발',
        // },
        // {
        //   content: '관리자 웹 감사 로그 모니터링 화면 개발',
        // },
      ],
    },
    {
      title: '수집된 위협 정보를 분석하여 누가, 어떤 방식으로, 어떤 목적으로 공격하는지 인텔리전스를 제공하는 CTI 솔루션의 웹 프론트엔드 및 백엔드 유지보수',
      startedAt: '2021-03',
      endedAt: '2021-06',
      where: '(주)윈스테크넷',
      team: '서비스개발팀',
      teamSize: '참여 인원: FE 1명, BE 1명',
      descriptions: [
        {
          content: '폐쇄망 환경 npm sqlite3 설치 이슈 해결',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '【 문제상황 】 폐쇄망 환경에서 sqlite3 Native 패키지 설치 실패 (node-gyp 컴파일 및 바이너리 이슈)',
            },
            {
              content: '【 대응방안 】 sqlite3 커스텀 패키지(.tgz) 제작 및 관리',
              descriptions: [
                {
                  content: 'CentOS7 가상환경에서 node-pre-gyp로 sqlite3 바이너리(.node) 포함된 커스텀 tgz 파일 생성',
                },
                {
                  content: '생성된 tgz를 내부 npm 레포지토리에 배포하여 오프라인 설치 지원',
                }
              ]
            },
            {
              content: '【 성과 】 폐쇄망 환경에서 안정적인 **sqlite3 패키지 재구성**, node_modules를 Git에서 분리하여 관리 효율성 향상',
              useInlineStyles: true,
            }
          ]
        },
        {
          content: '위협 정보 분석 페이지 유지보수',
          descriptions: [
            {
              content: 'NgRx를 도입하여 상태 관리 복잡도를 해소하고 비동기 데이터 관리 구조화 및 디버깅 환경 개선',
            },
            {
              content: '관제팀의 요구사항을 분석하여 분석 플로우 프로토타입 UI 개선 작업 수행',
            },
          ]
        },
      ],
    },
  ],
};

export default project;
