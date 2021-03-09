import React, { useState } from 'react';
import Api from '../../../services/api';
import { Accordion, Card, Row, Col, Modal, Form, Button } from 'react-bootstrap';
import { ChevronDown } from 'react-bootstrap-icons';

import HeaderTop from '../../components/HeaderTop';
import HeaderVertical from '../../components/HeaderVertical';
import MainAdmin from '../../components/MainAdmin';
import { Content } from './styles';

function Usuario() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCreateUser = async () => {
    try {
      if (name === '' || password === '' || email === '' || passwordConfirmation === '') {
        alert('Por favor preencha todos os campos!');
      }

      if (password !== passwordConfirmation) {
        alert('A senha e a confirmação de senha não conferem.');
      }

      const request = await Api.post('/users', { name, email, password });

      handleClose();
      alert('Usuário criado com sucesso');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <HeaderTop />
      <HeaderVertical />

      <MainAdmin>
        <div className="text-right mt-3 mb-5">
          <Button variant="primary" onClick={handleShow}>
            Novo Usuário
          </Button>

          <Modal centered show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Incluir novo usuário</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder=""
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Confirmar senha</Form.Label>
                  <Form.Control
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    type="password"
                    placeholder=""
                  />
                </Form.Group>

                <div className="text-right">
                  <Button variant="primary" onClick={handleCreateUser}>
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
          <div className="breadcrumb">
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
                    <li>Mônica Duarte</li>
                    <li>monica@gmail.com</li>
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
