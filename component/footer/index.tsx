import { Badge, Col, Row } from 'reactstrap';
import { PropsWithChildren } from 'react';
import { DateTime } from 'luxon';
import { EmptyRowCol } from '../common';
import { IFooter } from './IFooter';
import { Style } from '../common/Style';
import Util from '../common/Util';

export const Footer = {
  Component,
};

function Component({ payload }: PropsWithChildren<{ payload: IFooter.Payload }>) {
  const latestUpdated = DateTime.fromFormat(
    payload.latestUpdated,
    Util.LUXON_DATE_FORMAT.YYYY_LL_DD,
  );
  const latestUpdatedByNow = Math.floor(
    DateTime.local().diff(latestUpdated).milliseconds / 1000 / 60 / 60 / 24,
  );

  return (
    <Row>
      <Col style={Style.footerCover}>
        <div style={Style.footer} className="text-center mt-4">
          <EmptyRowCol>
            <small>
              <small>Latest Updated</small>{' '}
              <Badge color="secondary">
                {`${latestUpdated.toFormat(
                  Util.LUXON_DATE_FORMAT.YYYY_DOT_LL_DOT_DD,
                )} (D+${latestUpdatedByNow})`}
              </Badge>
            </small>
          </EmptyRowCol>
        </div>
      </Col>
    </Row>
  );
}
