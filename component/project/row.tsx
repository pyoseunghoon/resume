import { DateTime } from 'luxon';
import { PropsWithChildren } from 'react';
import { IProject } from './IProject';
import { CommonRows } from '../common/CommonRow';
import { IRow } from '../common/IRow';
import Util from '../common/Util';
import { EmptyRowCol } from '../common';

export default function ProjectRow({ payload }: PropsWithChildren<{ payload: IProject.Payload }>) {
  return (
    <EmptyRowCol>
      {payload.list.map((item, index) => {
        return <CommonRows key={index.toString()} payload={serialize(item)} index={index} />;
      })}
    </EmptyRowCol>
  );
}

function serialize(payload: IProject.Item): IRow.Payload {
  const DATE_FORMAT = Util.LUXON_DATE_FORMAT;
  const startedAt = DateTime.fromFormat(payload.startedAt, DATE_FORMAT.YYYY_LL).toFormat(
    DATE_FORMAT.YYYY_DOT_LL,
  );
  const title = (() => {
    if (payload.endedAt) {
      const endedAt = DateTime.fromFormat(payload.endedAt, DATE_FORMAT.YYYY_LL).toFormat(
        DATE_FORMAT.YYYY_DOT_LL,
      );
      return `${startedAt} ~ ${endedAt}`;
    }
    return `${startedAt} ~`;
  })();

  const subTitle = (() => {
    if (payload.team) {
      return (
        <span>
          {payload.where}{' '}
          <span style={{ fontSize: '90%', fontStyle: 'italic', color: '#6c757d' }}>
            {payload.team}
          </span>
          {payload.teamSize && (
            <div style={{ fontSize: '85%', marginTop: '4px', color: '#868e96' }}>
              {payload.teamSize}
            </div>
          )}
        </span>
      );
    }
    return payload.teamSize ? `${payload.where} | ${payload.teamSize}` : payload.where;
  })();

  return {
    left: {
      title,
    },
    right: {
      title: payload.title,
      titleHref: payload.href,
      subTitle,
      descriptions: payload.descriptions,
    },
  };
}
