import { CSSProperties, PropsWithChildren } from 'react';

import { IRow } from './IRow';

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

/** Description Recusion Generator */
export function CommonDescription({
  descriptions,
  option,
}: PropsWithChildren<{ descriptions: IRow.Description[]; option?: { padding?: boolean } }>) {
  return (
    <>
      {descriptions ? (
        <ul className={option?.padding ? 'pt-2' : ''}>
          {descriptions.map((description, descIndex) => {
            return (
              <>
                <Description description={description} key={descIndex.toString()} />
                {description.descriptions ? (
                  <DescriptionRecursion
                    descriptions={description.descriptions}
                    key={descIndex.toString()}
                  />
                ) : (
                  ''
                )}
              </>
            );
          })}
        </ul>
      ) : (
        ''
      )}
    </>
  );
}

// ul 태그 depth 표현을 위한 재귀
function DescriptionRecursion({
  descriptions,
}: PropsWithChildren<{ descriptions: IRow.Description[] }>) {
  return (
    <ul>
      {descriptions.map((description, index) => {
        return (
          <>
            <Description description={description} key={index.toString()} />
            {description.descriptions ? (
              <DescriptionRecursion
                descriptions={description.descriptions}
                key={index.toString()}
              />
            ) : (
              ''
            )}
          </>
        );
      })}
    </ul>
  );
}

function Description({ description }: PropsWithChildren<{ description: IRow.Description }>) {
  const { content, href, postImage, postHref, weight, useInlineStyles } = description;

  const getContentElement = () => {
    if (useInlineStyles) {
      return parseInlineStyles(content);
    }
    return content;
  };

  const component = (() => {
    if (href && postImage) {
      return (
        <li style={getFontWeight(weight)} className="relative flex items-center space-x-2">
          <span>{getContentElement()}</span>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              marginLeft: '8px', 
              color: '#0056b3', 
              cursor: 'pointer',
              textDecoration: 'none',
              fontSize: '0.9em'
            }}
            aria-label="외부 링크"
          >
            ↗
          </a>
          <img src={postImage} alt={postImage} style={{ marginLeft: '8px' }} />
        </li>
      );
    }

    if (href) {
      return (
        <li style={getFontWeight(weight)} className="relative flex items-center space-x-2">
          <span>{getContentElement()}</span>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              marginLeft: '8px', 
              color: '#0056b3', 
              cursor: 'pointer',
              textDecoration: 'none',
              fontSize: '0.9em'
            }}
            aria-label="외부 링크"
          >
            ↗
          </a>
        </li>
      );
    }

    if (postHref && postImage) {
      return (
        <li style={getFontWeight(weight)} className="relative flex items-center space-x-2">
          <span>{getContentElement()}</span>
          <a
            href={postHref}
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              marginLeft: '8px', 
              color: '#0056b3', 
              cursor: 'pointer',
              textDecoration: 'none',
              fontSize: '0.9em'
            }}
            aria-label="외부 링크"
          >
            ↗
          </a>
          <img src={postImage} alt={postImage} style={{ marginLeft: '8px' }} />
        </li>
      );
    }

    if (postHref) {
      return (
        <li style={getFontWeight(weight)} className="relative flex items-center space-x-2">
          <span>{getContentElement()}</span>
          <a
            href={postHref}
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              marginLeft: '8px', 
              color: '#0056b3', 
              cursor: 'pointer',
              textDecoration: 'none',
              fontSize: '0.9em'
            }}
            aria-label="외부 링크"
          >
            ↗
          </a>
        </li>
      );
    }

    if (postImage) {
      return (
        <li style={getFontWeight(weight)} className="relative flex items-center space-x-2">
          <span>{getContentElement()}</span>
          <img src={postImage} alt={postImage} style={{ marginLeft: '8px' }} />
        </li>
      );
    }

    return (
      <>
        <meta name="format-detection" content="telephone=no" />
        <li style={getFontWeight(weight)}>{getContentElement()}</li>
      </>
    );
  })();

  return component;
}

function getFontWeight(weight?: IRow.Description['weight']): CSSProperties {
  if (!weight) {
    // style 에 fontWeight 범벅 되는것을 방지
    return {};
  }
  return {
    fontWeight: fontWeight[weight || 'DEFAULT'],
  };
}

// Pretendard Weights: 100, 200, 300, 400, 500, 600, 700, 800, 900
const fontWeight: Record<IRow.FontWeightType, number> = {
  DEFAULT: 300,
  //
  THIN: 100,
  EXTRA_LIGHT: 200,
  LIGHT: 300,
  REGULAR: 400,
  MEDIUM: 500,
  SEMI_BOLD: 600,
  BOLD: 700,
  EXTRA_BOLD: 800,
  BLACK: 900,
};
