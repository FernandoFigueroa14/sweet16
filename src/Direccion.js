import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Direccion() {
  return (
    <Container fluid>
      <Row className="justify-content-center text-center m-5">
        <Col className="text-start" md="12" lg="6" xl="5">
            <h3 className='fs-2 fw-bolder pb-5'><strong>NO TE PIERDAS <br/>NINGÚN MOMENTO</strong></h3>
            <h6 className='fs-3 fw-semibold pb-5'>AQUÍ DAREMOS GRACIAS Y <br/>FESTEJAREMOS</h6>

            <p className='fs-5 fw-light pb-5'>
                <strong>Danzalagua</strong><br/>
                C. Cerro de las Campanas 3-A-3-A, <br/>
                San Andres Atenco, 54040 <br/>
                Tlalnepantla de Baz, Méx.
            </p>
            <Button href='https://www.google.com/maps?ll=19.542045,-99.214668&z=17&t=m&hl=es-419&gl=US&mapclient=embed&cid=11966378282739979065' className='fs-5 fw-bold' variant="primary">Abrir Mapa</Button>
        </Col>
        <Col className="text-center map" md="12" lg="6" xl="5">
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe width="100%" height="100%" id="gmap_canvas" 
                    src="https://maps.google.com/maps?q=Danzalagua&t=&z=17&ie=UTF8&iwloc=&output=embed" 
                    frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                    </iframe>
                    <a href="https://www.embedgooglemap.net">google map link html</a>
                </div>
            </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Direccion;
