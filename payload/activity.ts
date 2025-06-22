import { IActivity } from '../component/activity/IActivity';

const activity: IActivity.Payload = {
  list: [
    {
      title: '항해 플러스 프론트엔드 5기',
      subTitle: '팀스파르타(주)',
      descriptions: [
        {
          content: '저는 항해에서 아래와 같은 활동을 했습니다.',
          descriptions: [
            {
              content:
                '국내 탑 티어 시니어 개발자들과 JavaScript & React 심화, 클린 코드, 테스트 및 성능 최적화 과정을 포함한 120시간 이상의 집중적인 프론트엔드 커리큘럼을 이수',
            },
            {
              content: '디자인 패턴과 함수형 프로그래밍 과제 전형 Best Practice 선정',
              href: 'https://github.com/pyoseunghoon/front_5th_chapter2-2',
            },
          ],
        },
      ],
      startedAt: '2025-03',
      endedAt: '2024-05',
    },
  ],
};

export default activity;
