import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

function MesaRegalos() {
  return (
    <Container className='bg-mesa'>
      <Row className="d-flex flex-column justify-content-center align-items-center text-center pt-4">
        <Col className="text-center pt-2">
            <h1 className="fs-1 fw-bold">TU PRESENCIA LO ES TODO PARA MÍ</h1>
            <h4 className="fs-5 fw-semibold pb-4"> PERO SI DESEAS AGREGAR UN DETALLE TE DEJO UNAS IDEAS</h4>
        </Col>
        <Col className="text-center">
            <h3 className='py-4 mesa-regalos'><strong>mesa de regalos liverpool</strong></h3>
        </Col>
        <Col className="fs-1 fw-lighter text-center py-4">
            NO. DE EVENTO: 50882319
        </Col>
      </Row>
    </Container>
  );
};

export default MesaRegalos;
