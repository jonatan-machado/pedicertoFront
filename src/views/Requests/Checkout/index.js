import React, { useState } from 'react';

import { Row, Col, Card, Button, Form, Modal, Accordion } from 'react-bootstrap';

import { Container, Main, Food, ImgProducts, ListFood, ListCheckout, ListTotalCheckout, Hr } from './styles';

import Header from '../../../components/Header';

import Burguer from '../../../assets/images/hamburger.jpg';

import { Link } from 'react-router-dom';

function Checkout() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Main>
      <Header />

      <Container>
        <Card>
          <Row className="mb-4">
            <Col sm={12} className="text-center">
              <h4 className="name-client">Priscila Neu</h4>
            </Col>
            <Col sm={12} className="text-center">
              <h5 className="phone">51 99579-3844</h5>
            </Col>
            <Col sm={12} className="text-center">
              <Button className="btn btn-primary btn-edit btn-small">Confirmar Dados</Button>
            </Col>
          </Row>
        </Card>

        <Row className="mt-4">
          <Col>
            <Card className="p-4">
              <div className="title-finalizar text-center">
                <h4>Entrega/Retirada</h4>
              </div>
              <div className="mt-4">
                <Accordion>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Entrega/Delivery
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <Button variant="primary" onClick={handleShow}>
                          Informar endereço
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Endereço</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <Form>
                              <Form.Row>
                                <Form.Group as={Col} md="9">
                                  <Form.Label>Logradouro</Form.Label>
                                  <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group as={Col} md="3">
                                  <Form.Label>Nº</Form.Label>
                                  <Form.Control type="text" />
                                </Form.Group>
                              </Form.Row>
                              <Form.Row>
                                <Form.Group as={Col} md="6">
                                  <Form.Label>Bairro</Form.Label>
                                  <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group as={Col} md="3">
                                  <Form.Label>Cidade</Form.Label>
                                  <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group as={Col} md="3">
                                  <Form.Label>Estado</Form.Label>
                                  <Form.Control type="text" />
                                </Form.Group>
                              </Form.Row>
                              {/* <Button type="submit">Submit form</Button> */}
                            </Form>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                              Fechar
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                              Salvar
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Retirada no Local
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <Form>
                          <Form.Group>
                            {['radio'].map((type) => (
                              <div key={`default-${type}`} className="mb-3">
                                <Form.Check type={type} id={`default-${type}`} label={`Centro`} />
                                <p>Rua Andradas, 6666, Centro, Porto Alegre/RS</p>

                                <Form.Check type={type} label={`Zona Norte`} id={`default-${type}`} />
                                <p>Av Assis Brasil, 2563, Lindóia, Porto Alegre/RS</p>
                              </div>
                            ))}
                          </Form.Group>
                        </Form>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </Card>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <Card className="p-4">
              <div className="title-finalizar text-center">
                <h4>Forma de Pagamento</h4>
              </div>
              <div className="mt-4">
                <Accordion>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Dinheiro
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <Form>
                          <Form.Row>
                            <Form.Group as={Col} md="9">
                              <Form.Label>Precisa de Troco?</Form.Label>
                              <Form.Control type="text" placeholder="Para quanto?" />
                            </Form.Group>
                          </Form.Row>
                        </Form>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Cartão de Crédito
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <Form>
                          <fieldset>
                            <Form.Group>
                              <Form.Check
                                type="radio"
                                label="Visa"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                              />
                              <Form.Check
                                type="radio"
                                label="Master"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                              />
                              <Form.Check
                                type="radio"
                                label="Elo"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios3"
                              />
                              <Form.Check
                                type="radio"
                                label="Banri"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios3"
                              />
                            </Form.Group>
                          </fieldset>
                        </Form>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="p-4">
              <div className="title-finalizar text-center">
                <h4>CPF/CNPJ na nota?</h4>
              </div>
              <div className="mt-4">
                <Form>
                  <Form.Row>
                    <Form.Group as={Col} md="12">
                      <Form.Control type="text" placeholder="Informe seu CPF/CNPJ" />
                    </Form.Group>
                  </Form.Row>
                </Form>
              </div>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="p-4">
              <div className="title-finalizar text-center">
                <h4>Cupom de desconto?</h4>
              </div>
              <div className="mt-4 mb-5">
                <Form>
                  <Form.Row>
                    <Form.Group as={Col} md="12">
                      <Form.Control type="text" placeholder="Informe o código do seu cupom aqui" />
                    </Form.Group>
                  </Form.Row>
                </Form>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container>
        <Card>
          <ListTotalCheckout>
            <ul className="d-flex justify-content-between my-3">
              <ListFood>
                <p className="">SubTotal</p>
              </ListFood>
              <ListFood>
                <p className="">R$ 90,00</p>
              </ListFood>
            </ul>

            <Hr />

            <ul className="d-flex justify-content-between">
              <ListFood>
                <p className="">Entrega</p>
              </ListFood>
              <ListFood>
                <p className="">R$ 8,00</p>
              </ListFood>
            </ul>

            <Hr />

            <ul className="d-flex justify-content-between mb-2">
              <ListFood>
                <h4 className="text-uppercase font-weight-bold">Total</h4>
              </ListFood>
              <ListFood>
                <h4 className="font-weight-bold">R$ 98,00</h4>
              </ListFood>
            </ul>
          </ListTotalCheckout>
        </Card>
      </Container>

      <Row>
        <Col>
          <div className="div-btn">
            <Link to="/fim" className="btn btn-success btn-lg btn-block btn-cart">
              Concluir Pedido
            </Link>
          </div>
        </Col>
      </Row>
    </Main>
  );
}

export default Checkout;
