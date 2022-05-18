import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Direccion() {
  return (
    <Container fluid className='p-0'>
      <Row className="justify-content-center text-center mx-md-4">
        <Col className="text-center bg-black text-light" md="12" lg="9">
            <h3 className='fs-2 fw-bolder pt-4'><strong>AMBOS SERÁN EN EL MISMO LUGAR</strong></h3>
        </Col>
        <Col className="text-center bg-black text-light d-flex flex-column justify-content-center dir" md="12" lg="4">
            <p className='fs-5 fw-light pb-lg-5'>
                <strong>Salón Danzalagua</strong><br/>
                C. Cerro de las Campanas 3-A-3-A, <br/>
                San Andres Atenco, 54040 <br/>
                Tlalnepantla de Baz, Méx.
            </p>
            <a href='https://www.google.com/maps?ll=19.542045,-99.214668&z=17&t=m&hl=es-419&gl=US&mapclient=embed&cid=11966378282739979065'>
                <button className='fs-5 fw-bold b-map py-2 px-5 mx-5'>VER EN MAPA</button>
            </a>
        </Col>
        <Col className="text-center map-column bg-black text-light p-4" lg="5">
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe width="100%" height="400rem" id="gmap_canvas" 
                    src="https://maps.google.com/maps?q=Danzalagua&t=&z=17&ie=UTF8&iwloc=&output=embed" 
                    frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                    </iframe>
                </div>
            </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Direccion;
