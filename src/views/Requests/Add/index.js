import React from 'react';

import {
  Row,
  Col,
  Button,
  Form,
} from 'react-bootstrap';

import {
  Container,
  Main,
  Food,
  ImgProducts,
  ListFood,
  Adicionals,
  ListAdicionals,
  ListTotalAdicionals,
  Hr,
} from './styles';

import Header from '../../../components/Header';

import Burguer from '../../../assets/images/hamburger.jpg';

import { Link } from 'react-router-dom';

function Add() {
  return (
    <Main>
      <Header />
      <Container>
        <ul>
          <ListFood>
              <Row className="">
                <Col sm={3} className="img-food">
                  <ImgProducts src={Burguer} />
                </Col>
                <Col sm={8}>
                  <Food>
                    <h3 className="title-food">
                      Burger Especial
                                  </h3>
                    <p className="description-food">
                      Pão tipo brioche, 2 burger de costela bovina, parmesan cream, cebola roxa, rúcula, queijo prato, molho chimichurri.
                                  </p>
                    <p className="price">
                      R$ 28,00
                      </p>
                  </Food>
                </Col>
              </Row>
          </ListFood>
        </ul>
      </Container>

      <Container>
        <Adicionals>
          <ul class="adicionals list-food">
            <Row>
              <Col xs={6}>
                <ListAdicionals>
                <h4 class="text-uppercase">
                  Quantidade
                </h4>
                </ListAdicionals>
              </Col>
              <Col xs={6}>
                <div class="btn-add">
                  <ListAdicionals>
                    <Button class="btn-circle mais">
                      +
                    </Button>
                  </ListAdicionals>
                  <ListAdicionals>
                    <Button class="btn-circle menos">
                      -
                    </Button>
                  </ListAdicionals>
                </div>
              </Col>
            </Row>
          </ul>
        </Adicionals>
      </Container>

      <Container>
        <Adicionals>
          <div className="adicionals list-food pb-4">
            <h4 class="text-uppercase">
              Adicionais
            </h4>
          </div>

          <ul class="adicionals list-food">
            <Row>
              <Col xs={6}>
                <ListAdicionals>
                  <h5 class="">
                    Cheddar
                  </h5>
                  <h6 class="price">
                    R$ 3,00
                  </h6>
                </ListAdicionals>
              </Col>
              <Col xs={6}>
                <div class="btn-add">
                  <ListAdicionals>
                    <Button class="btn-circle mais">
                      +
                    </Button>
                  </ListAdicionals>
                  <ListAdicionals>
                    <Button class="btn-circle menos">
                      -
                    </Button>
                  </ListAdicionals>
                </div>
              </Col>
            </Row>


            <Hr />

            <Row>
              <Col xs={6}>
                <ListAdicionals>
                  <h5 class="">
                      Maionese
                  </h5>
                  <h6 class="price">
                      R$ 2,00
                  </h6>
                </ListAdicionals>
              </Col>
              <Col xs={6}>
                <div class="btn-add">
                  <ListAdicionals>
                    <Button class="btn-circle mais">
                      +
                    </Button>
                  </ListAdicionals>
                  <ListAdicionals>
                    <Button class="btn-circle menos">
                      -
                    </Button>
                  </ListAdicionals>
                </div>
              </Col>
            </Row>

            <Hr />

            <Row>
              <Col xs={6}>
                <ListAdicionals>
                  <h5 class="">
                      Batata Rústica
                  </h5>
                  <h6 class="price">
                      R$ 10,00
                  </h6>
                </ListAdicionals>
              </Col>
              <Col xs={6}>
                <div class="btn-add">
                  <ListAdicionals>
                    <Button class="btn-circle mais">
                      +
                    </Button>
                  </ListAdicionals>
                  <ListAdicionals>
                    <Button class="btn-circle menos">
                      -
                    </Button>
                  </ListAdicionals>
                </div>
              </Col>
            </Row>

            <Hr />

            <Row>
              <Col xs={6}>
                <ListAdicionals>
                  <h5 class="">
                      Batata Frita
                  </h5>
                  <h6 class="price">
                      R$ 8,00
                  </h6>
                </ListAdicionals>
              </Col>
              <Col xs={6}>
                <div class="btn-add">
                  <ListAdicionals>
                    <Button class="btn-circle mais">
                      +
                    </Button>
                  </ListAdicionals>
                  <ListAdicionals>
                    <Button class="btn-circle menos">
                      -
                    </Button>
                  </ListAdicionals>
                </div>
              </Col>
            </Row>
          </ul>
        </Adicionals>
      </Container>

      <Container>
        <Adicionals>
          <div className="adicionals list-food">
            <h4 className="text-uppercase mt-2 mb-4">
              Observações
              </h4>
          </div>
          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              {/* <Form.Label>Observações</Form.Label> */}
              <Form.Control as="textarea" rows={5} placeholder="Informe aqui informações adicionais ao seu pedido." />
            </Form.Group>
          </Form>
        </Adicionals>
      </Container>

      <Container>
        <ListTotalAdicionals>
          <ul className="adicionals list-food d-flex justify-content-between">
            <ListFood>
              <h4 className="text-uppercase font-weight-bold">Total</h4>
            </ListFood>
            <ListFood>
              <h4 className="font-weight-bold">R$ 98,00</h4>
            </ListFood>
          </ul>
        </ListTotalAdicionals>
      </Container>

      <Row>
        <Col>
          <div className="div-btn">
            <Link to="/" class="btn btn-primary btn-lg btn-block btn-add-cart">Adicionar e continuar comprando</Link>
            <Link to="/finalizar" class="btn btn-success btn-lg btn-block btn-cart">Finalizar compra</Link>
          </div>
        </Col>
      </Row>
    </Main>
  );
}

export default Add;