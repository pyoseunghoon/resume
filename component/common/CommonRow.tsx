import { PropsWithChildren } from 'react';
import { Row, Col } from 'reactstrap';
import { IRow } from './IRow';
import { Style } from './Style';
import { CommonDescription } from './CommonDescription';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons/faExternalLinkAlt';

export function CommonRows({
  index,
  payload,
}: PropsWithChildren<{ payload: IRow.Payload; index: number }>) {
  const { left, right } = payload;

  const isNeedDescriptionPadding = !!(right.title || right.subTitle);

  return (
    <div>
      {index > 0 ? <hr /> : ''}
      <Row>
        <Col sm={12} md={3} className="text-md-right">
          <Row>
            <Col md={12}>
              <h4 style={Style.gray}>{left.title}</h4>
            </Col>
            {left.subTitle ? <Col md={12}>{left.subTitle}</Col> : ''}
          </Row>
        </Col>
        <Col sm={12} md={9}>
          {right.title ? (
            <h4 style={{ display: 'flex', alignItems: 'center', flexWrap: 'nowrap' }}>
              <span>{right.title}</span>
              {right.titleHref && (
                <a
                  href={right.titleHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#0056b3', cursor: 'pointer', flexShrink: 0, marginLeft: '2px' }}
                  aria-label="외부 링크"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              )}
            </h4>
          ) : (
            ''
          )}
          {right.subTitle ? <i style={Style.gray}>{right.subTitle}</i> : ''}
          {right.descriptions ? (
            <CommonDescription
              descriptions={right.descriptions}
              option={{ padding: isNeedDescriptionPadding }}
            />
          ) : (
            ''
          )}
        </Col>
      </Row>
    </div>
  );
}
