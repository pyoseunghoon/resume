import { Row, Col } from 'reactstrap';
import { PropsWithChildren } from 'react';
import { Style } from '../common/Style';
import { IIntroduce } from './IIntroduce';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = IIntroduce.Payload;

// 인라인 스타일 파싱 함수
function parseInlineStyles(text: string): JSX.Element {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          const boldText = part.slice(2, -2);
          return (
            <span key={index} style={{ fontWeight: 600 }}>
              {boldText}
            </span>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}

export const Introduce = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  const renderContent = (content: string, index: number) => {
    // 빈 문자열은 간격을 위한 것
    if (content === '') {
      return <div key={index} style={{ height: '0.25rem' }} />;
    }
    
    // **로 시작하는 것은 제목으로 처리 (들여쓰기 없음)
    if (content.startsWith('**') && content.endsWith('**')) {
      return (
        <div key={index} style={{ marginBottom: '0.15rem', marginTop: index > 0 ? '0.5rem' : '0' }}>
          {parseInlineStyles(content)}
        </div>
      );
    }
    
    // 일반 텍스트는 들여쓰기 적용
    return (
      <div key={index} style={{ marginLeft: '1.5rem', marginBottom: '0.15rem' }}>
        {parseInlineStyles(content)}
      </div>
    );
  };

  return (
    <div className="mt-5">
      <Row>
        <Col sm={12} md={3}>
          <h2 style={Style.blue}>INTRODUCE</h2>
        </Col>
        <Col sm={12} md={9}>
          {payload.contents.map((content, index) => renderContent(content, index))}
        </Col>
      </Row>
    </div>
  );
}
