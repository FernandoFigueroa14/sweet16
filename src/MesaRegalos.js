import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Liverpool from './images/liverpool.png';

function MesaRegalos() {
  return (
    <Container fluid>
      <Row className="justify-content-center text-center m-5">
        <Col className="text-center" md="10" lg="7">
            <h1 className="fs-1 fw-bold">TU PRESENCIA LO ES TODO PARA MI.</h1>
            <h4 className="fs-4 fw-semibold py-4"> Pero si gustas llevar un detalle te dejo algunas ideas:</h4>
        </Col>
      </Row>
      <Row className="justify-content-center text-center m-5">
        <Col className="text-start" md="12" lg="6" xl="5">
            <h3 className='fs-2 fw-bolder pb-5'><strong>MESA DE REGALOS LIVERPOOOL</strong></h3>
            <p className='fs-5 fw-light pb-5'>
                Regalos...
            </p>
        </Col>
        <Col className="text-center" md="12" lg="6" xl="5">
            <img src={Liverpool} alt="Liverpool" className="img-fluid" />
        </Col>
      </Row>
      <Row className="justify-content-center text-center m-5">
        <Col className="text-center" md="10" lg="7">
            <h1 className="fs-4 fw-bolder">RECUERDA TRAER TODAS LAS GANAS DE BAILAR, BEBER Y FESTEJAR.</h1>
            <h4 className="fs-4 fw-semibold py-4">TE ESPERO!</h4>
        </Col>
      </Row>
    </Container>
  );
};

export default MesaRegalos;
