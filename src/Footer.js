import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

function Footer() {
  return (
    <Container className='hashtag'>
      <Row className="d-flex flex-column justify-content-center align-items-center text-center pt-4 text-light">
        <Col className="text-center pt-2">
            <h4 className="fs-3 fw-lighter">NO TE OLVIDES DE USAR</h4>
            <h1 className="fs-1 fw-bold pb-3"> <strong>#Alefest</strong></h1>
        </Col>
        <Col className="text-center pb-4">
            <h3>Prepárate para beber, bailar y divertirte.</h3>
            <h3>¡Te espero!</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
