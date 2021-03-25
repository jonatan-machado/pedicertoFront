import React, { useState, useEffect } from 'react';
import Api from '../../../services/api';
import { Accordion, Card, Row, Col, Modal, Form, Button } from 'react-bootstrap';
import { ChevronDown } from 'react-bootstrap-icons';

import HeaderTop from '../../components/HeaderTop';
import HeaderVertical from '../../components/HeaderVertical';
import MainAdmin from '../../components/MainAdmin';
import { Content } from './styles';

function Usuarios() {
  const token = JSON.parse(localStorage.getItem('userToken'));

  const [show, setShow] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  useEffect(() => {
    listEmployees();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCreateEmployee = async () => {
    try {
      if (name === '' || password === '' || email === '' || passwordConfirmation === '') {
        alert('Por favor preencha todos os campos!');
      }

      if (password !== passwordConfirmation) {
        alert('A senha e a confirmação de senha não conferem.');
      }

      const request = await Api.post(
        '/employee',
        { name, password, email },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log(request);

      employees.push(request?.data);
      handleClose();
      alert('Usuário criado com sucesso');
    } catch (error) {
      console.log(error);
    }
  };

  const listEmployees = async () => {
    try {
      const request = await Api.get('/employee', { headers: { Authorization: `Bearer ${token}` } });

      setEmployees(request.data);
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
            Novo Funcionário
          </Button>

          <Modal centered show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Incluir novo Funcionário</Modal.Title>
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
                  <Button variant="primary" onClick={handleCreateEmployee}>
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
          <Accordion>
            {employees.map((employee) => (
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                    <ul>
                      <li>
                        <ChevronDown size={30} />
                      </li>
                      <li>{employee.name}</li>
                      <li>{employee.email}</li>
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
                            <Form.Control type="text" placeholder={employee.name} />
                          </Form.Group>

                          <Form.Group controlId="formBasicEmail">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" placeholder={employee.email} />
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
            ))}
          </Accordion>
        </Content>
      </MainAdmin>
    </>
  );
}

export default Usuarios;
