import { Badge, Col, Row } from 'reactstrap';
import React, { PropsWithChildren } from 'react';
import { ISkill } from './ISkill';

export default function SkillRow({
  skill,
  index,
}: PropsWithChildren<{ skill: ISkill.Skill; index: number }>) {
  return (
    <div>
      {index > 0 ? <hr /> : ''}
      <Row>
        <Col sm={12} md={6}>
          {/* {skill.items.map((item) => JSON.stringify(item, null, 2))} */}
          {createCalculatedSkillItems(skill.items)} {/* isVerticalScreen을 인자로 전달 */}
        </Col>
      </Row>
    </div>
  );
}

function createCalculatedSkillItems(items: ISkill.Item[]) {
  return (
    <Row className="mt-2">
      <Col xs={12} className="d-flex flex-wrap align-items-center">
        {items.map((skill, skillIndex) => (
          <Badge
            key={skillIndex.toString()}
            color="primary" // 🔹 배지 색상
            style={{
              fontSize: '1rem', // 폰트 크기 조정
              padding: '8px 12px', // 배지 내부 간격 조정
              marginRight: '10px', // 아이템 간 간격
              marginBottom: '5px', // 줄바꿈 시 여백 추가
              borderRadius: '20px', // 둥근 모양
              fontWeight: 'bold', // 글씨 강조
            }}
          >
            {createBadge(skill.level)} {skill.title}
          </Badge>
        ))}
      </Col>
    </Row>
  );
}

function createBadge(level?: ISkill.Item['level']) {
  if (!level) {
    return '';
  }

  const color = (() => {
    switch (level) {
      case 3: {
        return 'primary';
      }
      case 2: {
        return 'secondary';
      }
      case 1:
      default: {
        return 'light';
      }
    }
  })();

  return (
    <span>
      <Badge pill color={color}>
        {level}
      </Badge>{' '}
    </span>
  );
}
