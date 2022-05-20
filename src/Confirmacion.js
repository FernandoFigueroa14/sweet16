import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import swal from 'sweetalert';

function Confirmacion() {
    //invitados
    const id_family = window.location.pathname.split('/')[1];
    const [invitados, setInvitados] = useState([]);
    const [reloadInvitados, setReloadInvitados] = useState(false);
    const [mensaje, setMensaje] = useState({id_familia: id_family, mensaje: ''});
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
        if (mensaje.mensaje.length > 0) {
            await fetch('https://eflqr9xz2e.execute-api.us-east-1.amazonaws.com/prod/mensajes', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(mensaje)
            });
            swal({
                title: "¡Listo!",
                text: "Gracias por tus palabras ❤️",
                icon: "success",
                button: "Aceptar",
            });
            setMensaje({id_familia: id_family, mensaje: ''});
            document.getElementById("mensaje").value = "";
        } else if (mensaje.mensaje.length === 0 && invitados.length === 0) {
            swal("UPS!", "No has escrito un mensaje para Ale 💔", "error");
        } else {
            let enviar  = false
            invitados.map(inv => {
                if(inv.confirmado === 1){
                    enviar = true
                }
            });
            if (enviar) {
                await fetch(api, {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    body: JSON.stringify(invitados)
                });
                setReloadInvitados(true);
                swal({
                    title: "¡Listo!",
                    text: "Gracias por confirmar",
                    icon: "success",
                    button: "Aceptar",
                });
            } else {
                swal("UPS!", "No haz confirmado ningún invitado 💔", "error");
            }
        }
    }

    //creacion del componente
    useEffect(() => {
        if (id_family) {
            getInvitados();
        }
    }, [reloadInvitados]);

  return (
    <Container className='confirmacion'>
      <Row className="justify-content-center text-center">
        <Col className="text-center">
            <h1 className="py-4 fw-bolder">SOLO NECESITAMOS TU <br/> CONFIRMACIÓN</h1>
            <p className="fs-4">
                Selecciona la casilla a lado del nombre de los invitados <br/> que desees confirmar
            </p>
            <div className="py-4">
                {invitados.map((invitado, index) => {
                    if (invitado.confirmado === 0) {
                        return(
                            <Container key={index} fluid className='px-0'>
                                <Row className="justify-content-center text-center">
                                    <Col sm="0" md="3" xl="4">
                                    </Col>
                                    <Col className="text-start" sm="12" md="9" xl="8">
                                        <input type="checkbox" id={index} onChange= {() => { invitados[index].confirmado = invitados[index].confirmado === 0 ? 1 : 0; setInvitados(invitados);}}/>
                                        <label className='fs-4' for={index}>
                                            {invitado.invitado}
                                        </label>
                                    </Col>
                                </Row>
                            </Container>
                        )
                    } 
                })}
            </div>
            {invitados.length === 0 ? <h1 className="py-4">Gracias por confirmar tu asistencia ❤️</h1> : <h1 className="d-none"></h1>}
            <div className="py-4 d-flex justify-content-center">
                <Form.Control as="textarea" placeholder='Felicita a Alessandra' id='mensaje' rows={3} className="text-confirmacion" onChange={event => {setMensaje({id_familia: id_family, mensaje: event.target.value});}} />
            </div>
            <div className="py-4">
                <button onClick={confirmarInvitado} className='fs-5 fw-bold b-map py-2 px-4 mx-5' size="lg">
                    CONFIRMAR
                </button>
            </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Confirmacion;
