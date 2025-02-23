import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsWithChildren } from 'react';
import { Row, Col } from 'reactstrap';
import { IProfile } from './IProfile';
import { HrefTargetBlank } from '../common';
import styled from 'styled-components';

const ContactBadge = styled.span`
  background-color: #f8f9fa; /* 밝은 회색 배경 */
  color: #000; /* 검정색 글자 */
  font-weight: 500; /* 가독성 좋은 폰트 두께 */
  padding: 2px 6px; /* ✅ 내부 여백 줄이기 */
  border-radius: 3px; /* ✅ 둥근 정도 축소 */
  display: inline-block;
  font-size: 12px; /* ✅ 폰트 크기 줄이기 */
  border: 0.5px solid #bbb; /* ✅ 테두리 축소 */
  white-space: nowrap; /* ✅ 텍스트 줄바꿈 방지 */
  line-height: 1.2; /* ✅ 텍스트 높이 조정 */
`;

export default function ProfileContact({
                                         payload,
                                       }: PropsWithChildren<{ payload: IProfile.Contact }>) {
  return (
    <Row className="pb-2">
      <Col xs={1} className="text-right">
        <FontAwesomeIcon icon={payload.icon} />
      </Col>
      <Col xs="auto">{createLink(payload)}</Col>
    </Row>
  );
}

function createLink(payload: IProfile.Contact) {
  if (payload.badge) {
    return <ContactBadge>{payload.title || payload.link}</ContactBadge>;
  }
  return payload.link ? (
    <HrefTargetBlank url={payload.link} text={payload.title} />
  ) : (
    <ContactBadge>{payload.title}</ContactBadge>
  );
}
