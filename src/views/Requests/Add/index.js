import React, { useState, useEffect } from 'react';

import { Row, Col, Button, Form } from 'react-bootstrap';

import {
  Container,
  Main,
  Food,
  ImgProducts,
  ListFood,
  Adicionals,
  ListAdicionals,
  ListTotalAdicionals,
  Hr
} from './styles';

import Header from '../../../components/Header';

import { Link, useHistory, useLocation } from 'react-router-dom';
import Api from '../../../services/api';
import { currentUserId } from '../../../utils/User';
import { useCart } from '../../../contexts/CartContext';

function Add() {
  const history = useHistory();
  const location = useLocation();
  const product = location?.state?.product;
  const userId = currentUserId();
  const { addOrderToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(Number(product.price));
  const [requestedAdditional, setRequestedAdditional] = useState([]);
  const [observations, setObservations] = useState('');

  useEffect(() => {
    getAdditionalsData();
  }, []);

  const getAdditionalsData = async () => {
    try {
      const request = await Api.get(`/additionals/${userId}/${product.id_category}/${product.id}`);

      setRequestedAdditional(() =>
        request.data.map((item) => {
          return { ...item, qtd: 0 };
        })
      );
    } catch (error) {}
  };

  const addOneProduct = () => {
    setQuantity(quantity + 1);
    setTotalPrice(totalPrice + Number(product.price));
  };

  const removeOneProduct = () => {
    if (quantity <= 1) {
      return false;
    } else {
      setQuantity(quantity - 1);
      setTotalPrice(totalPrice - Number(product.price));
    }
  };

  const addAdditional = (additional) => {
    const index = requestedAdditional.findIndex((item, index, array) => item.name === additional.name);
    requestedAdditional[index].qtd += 1;

    setTotalPrice(totalPrice + Number(additional.price));
  };

  const removeAdditonal = (additional) => {
    const index = requestedAdditional.findIndex((item, index, array) => item.name === additional.name);

    if (requestedAdditional[index].qtd <= 0) {
      return false;
    } else {
      requestedAdditional[index].qtd -= 1;
    }

    setTotalPrice(totalPrice - Number(additional.price));
  };

  const addItemToCart = () => {
    const filteredAdditionals = requestedAdditional.filter(function (obj) {
      return obj.qtd >= 1;
    });

    try {
      const formatedOrder = {
        product: {
          name: product.name,
          qtd: quantity,
          unitaryPrice: Number(product.price),
          additionals: filteredAdditionals
        },

        obs: observations,
        totalPrice: totalPrice
      };

      addOrderToCart(formatedOrder);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Main>
      <Header />
      <Container>
        <ul>
          <ListFood>
            <Row className="">
              <Col sm={3} className="img-food">
                <ImgProducts src={product.img_product} />
              </Col>
              <Col sm={8}>
                <Food>
                  <h3 className="title-food">{product.name}</h3>
                  <p className="description-food">{product.description}</p>
                  <p className="price">R$ {product.price}</p>
                </Food>
              </Col>
            </Row>
          </ListFood>
        </ul>
      </Container>

      <Container>
        <Adicionals>
          <ul className="adicionals list-food">
            <Row>
              <Col xs={6}>
                <ListAdicionals>
                  <h4 className="text-uppercase">QUANTIDADE: {quantity}</h4>
                </ListAdicionals>
              </Col>
              <Col xs={6}>
                <div className="btn-add">
                  <ListAdicionals>
                    <Button onClick={() => addOneProduct()} className="btn-circle mais">
                      +
                    </Button>
                  </ListAdicionals>
                  <ListAdicionals>
                    <Button
                      disabled={quantity <= 1 ? true : false}
                      onClick={() => removeOneProduct()}
                      className="btn-circle menos"
                    >
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
            <h4 className="text-uppercase">Adicionais</h4>
          </div>

          <ul className="adicionals list-food">
            {requestedAdditional.map((additional) => (
              <div key={additional.id}>
                <Row>
                  <Col xs={6}>
                    <ListAdicionals>
                      <h5 className="">{additional.name}</h5>
                      <h6 className="price">
                        {Number(additional.price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                      </h6>
                    </ListAdicionals>
                  </Col>
                  <Col xs={6}>
                    <div className="btn-add">
                      <ListAdicionals>
                        <Button type="button" onClick={() => addAdditional(additional)} className="btn-circle mais">
                          +
                        </Button>
                      </ListAdicionals>
                      {additional.qtd}
                      <ListAdicionals>
                        <Button
                          onClick={() => removeAdditonal(additional)}
                          disabled={additional.qtd <= 0 ? true : false}
                          className="btn-circle menos"
                        >
                          -
                        </Button>
                      </ListAdicionals>
                    </div>
                  </Col>
                </Row>
                <Hr />
              </div>
            ))}
          </ul>
        </Adicionals>
      </Container>

      <Container>
        <Adicionals>
          <div className="adicionals list-food">
            <h4 className="text-uppercase mt-2 mb-4">Observações</h4>
          </div>
          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              {/* <Form.Label>Observações</Form.Label> */}
              <Form.Control
                value={observations}
                onChange={(e) => setObservations(e.target.value)}
                as="textarea"
                rows={5}
                placeholder="Informe aqui informações adicionais ao seu pedido."
              />
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
              <h4 className="font-weight-bold">
                {totalPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
              </h4>
            </ListFood>
          </ul>
        </ListTotalAdicionals>
      </Container>

      <Row>
        <Col>
          <div className="div-btn">
            <Link to="/" onClick={() => addItemToCart()} className="btn btn-primary btn-lg btn-block btn-add-cart">
              Adicionar e continuar comprando
            </Link>
            <Link to="/finalizar" onClick={() => addItemToCart()} className="btn btn-success btn-lg btn-block btn-cart">
              Finalizar compra
            </Link>
          </div>
        </Col>
      </Row>
    </Main>
  );
}

export default Add;
