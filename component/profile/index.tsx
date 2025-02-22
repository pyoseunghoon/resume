import { Row, Col, Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsWithChildren } from 'react';
import ProfileContact from './contact';
import ProfileImage from './image';
import { EmptyRowCol } from '../common';
import { IProfile } from './IProfile';
import { Style } from '../common/Style';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = IProfile.Payload;

export const Profile = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  const { image, contact, name } = payload;
  return (
    <div className="mt-5">
      <Row>
        <Col md={3} sm={12}>
          <ProfileImage src={image} />
        </Col>
        <Col md={9} sm={12}>
          {createNameArea(name)}
          <div style={{ marginTop: '25px'}}>
            {createProfileContactMap(contact)}
          </div>
        </Col>
      </Row>
    </div>
  );
}

function createNameArea(name: Payload['name']) {
  return (
    <Row>
      <Col className="text-center text-md-left">
        <h1 style={{ ...Style.blue, fontWeight: 'bold', display: 'inline' }}>
          {name.title}
        </h1>
        <span style={{ marginLeft: '8px' }}>{name.role}</span>
        <small style={{ color: 'rgba(0, 0, 0, 0.4)', marginLeft: '8px' }}>
          {name.small || ''}
        </small>
      </Col>
    </Row>
  );
}

function createProfileContactMap(contacts: Payload['contact']) {
  return (
    <Row>
      <Col className="pt-3">
        {contacts.map((contact, index) => (
          <ProfileContact key={index.toString()} payload={contact} />
        ))}
      </Col>
    </Row>
  );
}
