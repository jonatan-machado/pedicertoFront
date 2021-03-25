import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button, Form, Modal, Accordion } from 'react-bootstrap';
import { Container, Main, Food, ImgProducts, ListFood, ListCheckout, ListTotalCheckout, Hr } from './styles';
import Header from '../../../components/Header';
import Burguer from '../../../assets/images/hamburger.jpg';
import { Link } from 'react-router-dom';
import { useCart } from '../../../contexts/CartContext';
import Api from '../../../services/api';

const mockClient = {
  name: 'Priscila Neu',
  phone: '51 99579-3844',
  address: { street: 'Rua dos bobos', number: '0', neighborhood: 'Centro', city: 'Porto Alegre', state: 'RS' }
};

function Checkout() {
  const { cartItems } = useCart();
  const parsedUser = JSON.parse(localStorage.getItem('userData'));
  const token = JSON.parse(localStorage.getItem('userToken'));

  const [show, setShow] = useState(false);
  const [total, setTotal] = useState('');
  const [deliveryTax, setDeliveryTax] = useState(8);
  const [optionDelivery, setOptionDelivery] = useState('');
  const [streetName, setStreetName] = useState(mockClient.address.street);
  const [houseNumber, setHouseNumber] = useState(mockClient.address.number);
  const [neighborhood, setNeighborhood] = useState(mockClient.address.neighborhood);
  const [city, setCity] = useState(mockClient.address.city);
  const [state, setState] = useState(mockClient.address.state);
  const [addressForWithdrawal, setAddressForWithdrawal] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cpfOrCnpj, setCpfOrCnpj] = useState('');
  const [paymentMethodsList, setPaymentMethodsList] = useState([]);
  const [changeVal, setChangeVal] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    getTotalPrice();
    getPaymentMethods();
  }, []);

  const getTotalPrice = () => {
    const totalValue = cartItems.reduce((total, item) => {
      return total + item.totalPrice;
    }, 0);

    setTotal(totalValue);
  };

  const getPaymentMethods = async () => {
    try {
      const request = await Api.get(`/method-payments/${parsedUser.id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      setPaymentMethodsList(request.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeStreet = (e) => setStreetName(e.target.value);
  const onChangeHouseNumber = (e) => setHouseNumber(e.target.value);
  const onChangeNeighborhood = (e) => setNeighborhood(e.target.value);
  const onChangeCity = (e) => setCity(e.target.value);
  const onChangeState = (e) => setState(e.target.value);
  const onChangeCpfCnpj = (e) => setCpfOrCnpj(e.target.value);
  const onChangeChangeVal = (e) => setChangeVal(e.target.value);

  const submitOrder = async () => {
    const finalOrder = {
      whats_confirmation: null,
      user_id: parsedUser.id,
      uf: state,
      total: total + deliveryTax,
      tax_value: deliveryTax,
      sub_total: total,
      status: 'Aguardando Confirmação',
      resume_order: null,
      option_delivery: optionDelivery,
      obs: null,
      neighborhood: neighborhood,
      msg_delivery: null,
      method_payment: paymentMethod,
      descount: 0,
      complemention: 'beco 0 apto 01',
      code_order: '0123456',
      city: city,
      change_value: changeVal,
      phone: mockClient.phone,
      address: streetName,
      name: mockClient.name,
      products: cartItems
    };

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    try {
      const request = await Api.post('/order', finalOrder, config);
    } catch (error) {}
  };

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
                      <Accordion.Toggle
                        onClick={() => setOptionDelivery('Entrega/Delivery')}
                        as={Button}
                        variant="link"
                        eventKey="0"
                      >
                        Entrega/Delivery
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <Button variant="primary" onClick={handleShow}>
                          Informar endereço
                        </Button>

                        <Modal centered show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Endereço</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <Form>
                              <Form.Row>
                                <Form.Group as={Col} md="9">
                                  <Form.Label>Logradouro</Form.Label>
                                  <Form.Control onChange={onChangeStreet} value={streetName} type="text" />
                                </Form.Group>
                                <Form.Group as={Col} md="3">
                                  <Form.Label>Nº</Form.Label>
                                  <Form.Control onChange={onChangeHouseNumber} value={houseNumber} type="text" />
                                </Form.Group>
                              </Form.Row>
                              <Form.Row>
                                <Form.Group as={Col} md="6">
                                  <Form.Label>Bairro</Form.Label>
                                  <Form.Control onChange={onChangeNeighborhood} value={neighborhood} type="text" />
                                </Form.Group>
                                <Form.Group as={Col} md="3">
                                  <Form.Label>Cidade</Form.Label>
                                  <Form.Control onChange={onChangeCity} value={city} type="text" />
                                </Form.Group>
                                <Form.Group as={Col} md="3">
                                  <Form.Label>Estado</Form.Label>
                                  <Form.Control onChange={onChangeState} value={state} type="text" />
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
                      <Accordion.Toggle
                        onClick={() => setOptionDelivery('Retirada no Local')}
                        as={Button}
                        variant="link"
                        eventKey="1"
                      >
                        Retirada no Local
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <Form>
                          <Form.Group>
                            {['radio'].map((type) => (
                              <div key={`default-${type}`} className="mb-3">
                                <Form.Check
                                  onClick={(e) => setAddressForWithdrawal(e.target.value)}
                                  name="addressWithdraw"
                                  type={type}
                                  id={`default-${type}`}
                                  label={`Centro`}
                                  value={'Rua Andradas, 6666, Centro, Porto Alegre/RS'}
                                />
                                <p>Rua Andradas, 6666, Centro, Porto Alegre/RS</p>

                                <Form.Check
                                  onClick={(e) => setAddressForWithdrawal(e.target.value)}
                                  name="addressWithdraw"
                                  type={type}
                                  label={`Zona Norte`}
                                  id={`default-${type}`}
                                  value={'Av Assis Brasil, 2563, Lindóia, Porto Alegre/RS'}
                                />
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
                  {paymentMethodsList.map((item) => {
                    const parsedItem = JSON.parse(item.name);

                    if (parsedItem.type === 'dinheiro') {
                      return (
                        <Card key={item.id}>
                          <Card.Header>
                            <Accordion.Toggle
                              onClick={() => setPaymentMethod(item.id)}
                              as={Button}
                              variant="link"
                              eventKey="0"
                            >
                              Dinheiro
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="0">
                            <Card.Body>
                              <Form>
                                <Form.Row>
                                  <Form.Group as={Col} md="9">
                                    <Form.Label>Precisa de Troco?</Form.Label>
                                    <Form.Control
                                      onChange={onChangeChangeVal}
                                      value={changeVal}
                                      type="text"
                                      placeholder="Para quanto?"
                                    />
                                  </Form.Group>
                                </Form.Row>
                              </Form>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      );
                    }
                  })}

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
                              {paymentMethodsList.map((item) => {
                                const parsedItem = JSON.parse(item.name);
                                if (parsedItem.type !== 'dinheiro') {
                                  return (
                                    <Form.Check
                                      key={item.id}
                                      onClick={() => setPaymentMethod(item.id)}
                                      type="radio"
                                      label={parsedItem.name}
                                      name="creditCardFlag"
                                      value={parsedItem.name}
                                    />
                                  );
                                }
                              })}
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
                      <Form.Control
                        onChange={onChangeCpfCnpj}
                        value={cpfOrCnpj}
                        type="text"
                        placeholder="Informe seu CPF/CNPJ"
                      />
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
            {cartItems.map((item) => {
              return (
                <div key={item.id}>
                  <ul className="d-flex justify-content-between my-3">
                    <ListFood>
                      <p className="">
                        {item.product.qtd} - {item.product.name}
                      </p>
                    </ListFood>
                    <ListFood>
                      <p>Adicionais: </p>
                      {item.product.additionals.map((additional) => (
                        <p key={additional.id}>{`${additional.qtd} - ${additional.name}`}</p>
                      ))}
                    </ListFood>
                  </ul>

                  <Hr />
                </div>
              );
            })}
          </ListTotalCheckout>
        </Card>
      </Container>

      <Container>
        <Card>
          <ListTotalCheckout>
            <ul className="d-flex justify-content-between my-3">
              <ListFood>
                <p className="">SubTotal</p>
              </ListFood>
              <ListFood>
                <p className="">
                  {total.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                  })}
                </p>
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
                <h4 className="font-weight-bold">
                  {(total + deliveryTax).toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                  })}
                </h4>
              </ListFood>
            </ul>
          </ListTotalCheckout>
        </Card>
      </Container>

      <Row>
        <Col>
          <div className="div-btn">
            <Link to="/fim" onClick={() => submitOrder()} className="btn btn-success btn-lg btn-block btn-cart">
              Concluir Pedido
            </Link>
          </div>
        </Col>
      </Row>
    </Main>
  );
}

export default Checkout;
