import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Mensajes() {
    //mensajes
    const [mensajes, setMensajes] = useState([]);
    const api = `https://eflqr9xz2e.execute-api.us-east-1.amazonaws.com/prod/mensajes`

    //obtener mensajes de la base de datos
    const getMensajes = async () => {
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
            .then(msj=> {
                setMensajes(msj);
            })
            .catch(err => console.log(err));
        console.log("Fetching mensajes");
    };

    //creacion del componente
    useEffect(() => {
        getMensajes();
    }, []);

  return (
    <Container fluid className='p-5 mensajes'>
        <Row className="justify-content-center align-items-center">
            {mensajes.map((msj, index) => {
                if(msj.familia === 'AMIGOS') {
                    return(
                        <Col key={index} className="text-start p-2 p-md-4" sm="11" md="5" xl="3">
                            <Card bg='dark' text='white'>
                                <Card.Header as="h5" className='border-bottom'>{msj.familia}</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                    {msj.mensaje}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }else{
                    return(
                        <Col key={index} className="text-start p-2 p-md-4" sm="11" md="5" xl="3">
                            <Card bg='dark' text='white'>
                                <Card.Header as="h5" className='border-bottom'>FAMILIA {msj.familia}</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                    {msj.mensaje}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
            })}
        </Row>
    </Container>
  );
};

export default Mensajes;
