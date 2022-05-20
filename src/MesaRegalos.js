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
            <h3 className='py-4 mesa-regalos'>mesa de regalos liverpool</h3>
        </Col>
        <Col className="fs-1 fw-bolder text-center py-4">
            
            NO. DE EVENTO: 50882319 <br/>
            <a className='text-decoration-none fs-5 fw-light text-light mesa'  href='https://mesaderegalos.liverpool.com.mx/milistaderegalos/50882319?_ga=2.152722233.1819738152.1652495999-37385659.1652495999'>👉 Echale un ojo dando click aqui 👈 </a>
        </Col>
      </Row>
    </Container>
  );
};

export default MesaRegalos;
