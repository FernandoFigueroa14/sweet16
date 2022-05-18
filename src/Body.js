import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <Container fluid className='p-0'>
      <Row className="justify-content-center text-center p-4 bg-black text-light">
        <Col className="text-center fs-2 fw-light text-wrap" xs="12">
        24 JUNIO 2022
        </Col>
      </Row>
      <Row className="justify-content-center text-center m-3">
        <Col className="text-center fs-1 fw-bold" xs="12">
          <strong>ERES MUY ESPECIAL PARA MÍ</strong>
        </Col>
      </Row>
      <Row className="justify-content-center text-center m-3">
        <Col className="text-center fs-3 fw-light text-wrap" xs="12">
          Y me gustaría que me acompañaras
        </Col>
      </Row>
      <Row className="justify-content-center text-center m-md-4 mb-md-0">
        <Col className="ceremonia fs-1 fw-bold text-light d-flex flex-column justify-content-center" sm="12" md="5">
            <p className='pb-3'>CEREMONIA DE <br/> AGRADECIMIENTO</p>
            <p>7:30 PM</p>
        </Col>
        <Col className="reven fs-1 fw-bold text-light d-flex flex-column justify-content-center" sm="12" md="5">
            <p className='pb-3'>INICIO REVEN</p>
            <p>8:00 PM</p>
        </Col>
      </Row>
    </Container>
  );
};

export default DateTimeDisplay;
