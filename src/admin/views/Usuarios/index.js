import React, { useState } from 'react';

import {
  Accordion,
  Card, 
  Row,
  Col,
  Modal,
  Form,
  Button,
} from 'react-bootstrap';
import { ChevronDown } from 'react-bootstrap-icons';

import HeaderTop from '../../components/HeaderTop';
import HeaderVertical from '../../components/HeaderVertical';
import MainAdmin from '../../components/MainAdmin';


import { Content } from './styles';

function Usuario() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return(
    <>
        <HeaderTop />
        <HeaderVertical />

        <MainAdmin>
            <div className="text-right mt-3 mb-5">
                <Button variant="primary" onClick={handleShow}>
                    Novo Usuário
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Incluir novo usuário</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" placeholder="" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Confirmar senha</Form.Label>
                            <Form.Control type="password" placeholder="" />
                        </Form.Group>
                        
                        <div className="text-right">
                            <Button variant="primary" type="submit">
                                Cadastrar
                            </Button>
                        </div>
                        </Form>    
                    </Modal.Body>
                    <Modal.Footer className="text-left">
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div> 


            <Content>

                
            <div class="breadcrumb">
                {/* <Row>
                    <Col xs={3}></Col>
                    <Col xs={4}>
                        <h4>
                            Nome
                        </h4>    
                    </Col>
                    <Col xs={5}>
                        <h4>
                            E-mail
                        </h4>
                    </Col>
                </Row> */}
            </div>
                <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            <ul>
                                <li>
                                    <ChevronDown size={30} />
                                </li>
                                <li>
                                    Mônica Duarte
                                </li>
                                <li>
                                    monica@gmail.com
                                </li>
                            </ul>
                        </Accordion.Toggle>
                    </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <Form>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Nome</Form.Label>
                                                <Form.Control type="text" placeholder="Mônica" />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>E-mail</Form.Label>
                                                <Form.Control type="email" placeholder="monica@gmail.com" />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Senha</Form.Label>
                                                    <Form.Control type="password" placeholder="**********" />
                                                </Form.Group>

                                                <Form.Group controlId="formBasicPassword">
                                                    <Form.Label>Confirmar senha</Form.Label>
                                                    <Form.Control type="password" placeholder="**********" />
                                                </Form.Group>

                                                <div className="">
                                                    <Button variant="primary" type="submit">
                                                        Alterar
                                                    </Button>
                                                </div>
                                            </Form>  
                                        </Col>
                                    </Row>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>    
            </Content>
            
        </MainAdmin>
    </>
  );
}

export default Usuario;