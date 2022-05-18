import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ItinerarioImg from './images/itinerario.jpg';

const Itinerario = ({ value, type, isDanger }) => {
  return (
    <Container fluid className='p-0'>
      <Row className="justify-content-center text-center  mx-md-4">
        <Col className="text-center" md="12" lg="9">
            <h3 className='pt-4 itinerario'>Itinerario</h3>
            <img src={ItinerarioImg} alt="Itinerario" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default Itinerario;
