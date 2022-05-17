import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import swal from 'sweetalert';

function Confirmacion() {
    //invitados
    const [invitados, setInvitados] = useState([]);
    const [disabled, setDisabled] = useState(false);
    const id_family = window.location.pathname.split('/')[1];
    const api = `https://eflqr9xz2e.execute-api.us-east-1.amazonaws.com/prod/invitados/${id_family}`

    //obtener invitados de la base de datos
    const getInvitados = async () => {
        await fetch(api, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(res => {
                return res.json();
            })
            .then(inv=> {
                setInvitados(inv);
            })
            .catch(err => console.log(err));
        console.log("Fetching invitados");
    };

    //funcion para confirmar invitado
    const confirmarInvitado = async () =>{
        await fetch(api, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(invitados)
        })
        setDisabled(true);
        swal({
            title: "¡Listo!",
            text: "Gracias por confirmar",
            icon: "success",
            button: "Aceptar",
          });
    }

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
                    <Container key={index}>
                        <Row className="justify-content-center text-center">
                            <Col className="text-center" sm="4">
                                <p> {invitado.invitado}</p>
                            </Col>
                            <Col className="text-center" sm="4">
                                <Form.Check 
                                    inline
                                    type="radio"
                                    label="Sí"
                                    onChange= {() => { invitados[index].confirmado = 1; setInvitados(invitados); }}
                                />
                                <Form.Check 
                                    inline
                                    type="radio"
                                    label="No"
                                    onChange={() => { invitados[index].confirmado = 0; setInvitados(invitados); }}
                                />
                            </Col>
                        </Row>
                    </Container>
                ))}
            </div>
            <div className="py-4">
                <Button onClick={confirmarInvitado} disabled={disabled} variant="light" size="lg">
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
