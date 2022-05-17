import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

function Confirmacion() {
    //invitados
    const [invitados, setInvitados] = useState([]);
    const id_family = window.location.pathname.split('/')[1];

    //obtener invitados de la base de datos
    const getInvitados = () => {
        fetch(`https://eflqr9xz2e.execute-api.us-east-1.amazonaws.com/prod/invitados/${id_family}`)
            .then(res => res.json())
            .then(inv=> {
                setInvitados(inv);
            })
            .catch(err => console.log(err));
    };

    //creacion del componente
    useEffect(() => {
        if (id_family) {
            getInvitados();
        }
    }, []);

  return (
    <Container className='bg-dark'>
      <Row className="justify-content-center text-center m-5">
        <Col className="text-center text-white">
            <h1 className="py-4">PERO NECESITO TU CONFIRMACIÓN</h1>
            <div className="py-4">
                <Container>
                    <Row className="justify-content-center text-center">
                        <Col className="text-center" sm="4">
                            <h3 className="py-4">Invitado</h3>
                        </Col>
                        <Col className="text-center" sm="4">
                            <h3 className="py-4">¿Asistirá?</h3>
                        </Col>
                    </Row>
                </Container>

                {invitados.map((invitado, index) => (
                    <Container>
                        <Row className="justify-content-center text-center">
                            <Col className="text-center" sm="4">
                                <p key={index}> {invitado.invitado}</p>
                            </Col>
                            <Col className="text-center" sm="4">
                                <Form.Check 
                                    inline
                                    type="radio"
                                    label="Sí"
                                    onChange={() => invitado.confirmado = 1}
                                />
                                <Form.Check 
                                    inline
                                    type="radio"
                                    label="No"
                                    onChange={() => invitado.confirmado = 0}
                                />
                            </Col>
                        </Row>
                    </Container>
                ))}
            </div>
            <div className="py-4">
                <Button variant="light" size="lg">
                    Enviar
                </Button>
            </div>
            <h3 className="py-4">UNA VEZ HECHA TU CONFIRMACIÓN TU CÓDIGO QR SE ACTIVARÁ Y <br/> CON ESE MISMO PODRÁS INGRESAR A LA PACHANGA</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default Confirmacion;
