import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'Angular, TypeScript 기반의 5년 차 웹 프론트엔드 개발자로, B2B 형태의 보안 웹 서비스를 맞춤형 솔루션 형태로 제공한 경험이 있습니다. JavaScript, TypeScript, Angular, Node.js, MySQL, Git, Linux 등을 활용하여 서비스를 설계하고 개발한 경험을 바탕으로, 가독성, 유지보수성, UX를 모두 고려하는 개발을 고민하고 있습니다.',
    '서비스 개발에서 가장 중요한 요소는 개발자와 고객 간의 원활한 의사소통과 성과라고 생각합니다. 고객의 니즈를 분석하고 실제 사용자의 관점을 고려하여 비즈니스 발전에 기여하고자 노력합니다. 이를 위해 여러 직군과 협업할 때 적극적이고 능동적인 커뮤니케이션을 지향합니다.',
    '개발 블로그를 운영하며, 개발 경험을 공유하고 기록하는 것을 중요하게 생각합니다. 항상 새로운 기술에 대한 관심과 배움에 대한 열정을 바탕으로 업무에 임하겠습니다.',
  ],
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
