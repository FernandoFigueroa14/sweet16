import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import swal from 'sweetalert';

function Confirmacion() {
    //invitados
    const id_family = window.location.pathname.split('/')[1];
    const [invitados, setInvitados] = useState([]);
    const [reloadInvitados, setReloadInvitados] = useState(false);
    const mensaje = useRef("");
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

    const setMensaje = () => {
        mensaje.current = document.getElementById("mensaje").value;
    }

    //funcion para confirmar invitado
    const confirmarInvitado = async () =>{
        let mensajeBody = {
            id_familia: id_family,
            mensaje: mensaje.current
        };
        if (mensaje.current.length > 0) {
            await fetch('https://eflqr9xz2e.execute-api.us-east-1.amazonaws.com/prod/mensajes', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(mensajeBody)
            });
            swal({
                title: "¡Listo!",
                text: "Gracias por tus palabras ❤️",
                icon: "success",
                button: "Aceptar",
            });
            mensaje.current = "";
            document.getElementById("mensaje").value = "";
        } else if (mensaje.current.length === 0 && invitados.length === 0) {
            swal("UPS!", "No has escrito un mensaje para Ale 💔", "error");
        } 
        if (invitados.length > 0) {
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
                swal("UPS!", "No has confirmado ningún invitado 💔", "error");
            }
        }
    }

    //creacion del componente
    useEffect(() => {
        if (id_family) {
            getInvitados();
        }
        setReloadInvitados(false);
    }, [reloadInvitados]);

  return (
    <Container className='confirmacion'>
      <Row className="justify-content-center text-center">
        <Col className="text-center">
            <h1 className="py-4 fw-bolder">SOLO NECESITAMOS TU <br/> CONFIRMACIÓN</h1>
            <p className="fs-4">
                Da click en el corazón al lado del nombre de los invitados que desees confirmar. <br/> No te olvides de dejar un mensaje bonito para la festejada 🥳
            </p>
            <div className="py-4">
                {invitados.map((invitado, index) => {
                    if(invitado.confirmado === 0){
                        return(
                            <Container key={index} fluid className='px-0'>
                                <Row className="justify-content-center text-center">
                                    <Col sm="0" md="3" xl="4">
                                    </Col>
                                    <Col className="text-start" sm="12" md="9" xl="8">
                                        <input type="checkbox" id={index} onChange= {() => { invitados[index].confirmado = invitados[index].confirmado === 0 ? 1 : 0; setInvitados(invitados);}}/>
                                        <label className='fs-4' for={index}>
                                            {invitado.invitado.toUpperCase()}
                                        </label>
                                    </Col>
                                </Row>
                            </Container>
                        )
                    }
                })}
            </div>
            {invitados.length === 0 ? <h1 className="py-4">Gracias por confirmar tu asistencia ❤️</h1> : <h1 className="d-none"></h1>}
            <div className="pt-4 d-flex justify-content-center">
                <Form.Control as="textarea" placeholder='Felicita a Alessandra' id='mensaje' rows={3} className="text-confirmacion" maxLength="1024" onChange={setMensaje} />
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
