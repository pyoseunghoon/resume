import { Badge, Col, Row } from 'reactstrap';
import React, { PropsWithChildren, useEffect, useState } from 'react';

import { ISkill } from './ISkill';
import { Style } from '../common/Style';
import Util from '../common/Util';

export default function SkillRow({
  skill,
  index,
}: PropsWithChildren<{ skill: ISkill.Skill; index: number }>) {
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    setIsMobileScreen(window.innerWidth < 768);
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {index > 0 ? <hr /> : ''}
      <Row>
        <Col sm={12} md={6}>
          {/* {skill.items.map((item) => JSON.stringify(item, null, 2))} */}
          {createCalculatedSkillItems(skill.items)}{' '}
          {/* isVerticalScreen을 인자로 전달 */}
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


function createCalculatedSkillItems2(items: ISkill.Item[], isVerticalScreen: boolean) {
  const log = Util.debug('SkillRow:createCalculatedSkillItems');

  /**
   * @developer_commentary 단을 3단, 4단을 시도해봤지만 생각보다 이쁘게 나오지 않았고, 우선은 3단으로 한다. 만약 이쪽을 발전시킨다면 조금 더 이쁘고 능동적이게 데이터를 쪼갤 수 있는 방법을 찾으면 될 듯..
   */
  const layer = 6;

  // const splitPoint = layer % 2 ? Math.ceil(items.length / layer) : Math.floor(items.length / layer);
  const splitPoint = Math.ceil(items.length / layer);

  const list: ISkill.Item[][] = [];

  for (let i = 0, splitAfter = splitPoint; i < layer; i += 1, splitAfter += splitPoint) {
    list.push(items.slice(splitAfter - splitPoint, i === layer - 1 ? undefined : splitAfter));
  }

  log('origin', items, items.length, splitPoint);
  log('list', list);

  if (isVerticalScreen) {
    return (
      <Row className="mt-2 mt-md-0">
        <Col xs={12}>
          <ul>
            {items.map((skill, skillIndex) => {
              return (
                <li key={skillIndex.toString()}>
                  {skill.title}
                </li>
              );
            })}
          </ul>
        </Col>
      </Row>
    );
  }

  return (
    <Row className="mt-2 mt-md-0">
      {list.map((skills, index) => {
        return (
          <Col md={4} xs={12} key={index.toString()}>
            <ul>
              {skills.map((skill, skillIndex) => {
                return (
                  <li key={skillIndex.toString()}>
                    {createBadge(skill.level)}
                    {skill.title}
                  </li>
                );
              })}
            </ul>
          </Col>
        );
      })}
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
