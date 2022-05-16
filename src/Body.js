import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <Container fluid>
      <Row className="justify-content-center text-center m-5">
        <Col className="text-center fs-2 fw-bolder" md="10" lg="7">
        Eres muy especial para mí, y me gustaría que  enfiestemos juntos mis 16 el día
        </Col>
      </Row>
      <Row className="justify-content-center text-center m-5">
        <Col className="text-center fs-1 fw-bold" md="10" lg="7">
        VIERNES 24 DE JUNIO
        </Col>
      </Row>
      <Row className="justify-content-center text-center m-5">
        <Col className="text-center fs-2 fw-bolder" md="10" lg="7">
        Daremos gracias a las <strong>7:30 PM</strong> en punto
        </Col>
      </Row>
    </Container>
  );
};

export default DateTimeDisplay;
