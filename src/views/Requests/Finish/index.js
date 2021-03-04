import React, { useState } from 'react';

import {
  Row,
  Col,
  Card,
  Button,
  Form,
  Modal,
  Accordion,
} from 'react-bootstrap';

import {
  Container,
  Main,
  Food,
  ImgProducts,
  ListFood,
  ListCheckout,
  ListTotalCheckout,
  Hr,
} from './styles';

import HeaderFim from '../../../components/HeaderFim';

import Burguer from '../../../assets/images/hamburger.jpg';

import { Link } from 'react-router-dom';

function Checkout() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <Main>
      <HeaderFim />

      <Container>
        <Card className="mt-5">
          <Row className="mb-4">
            
            <Col sm={12} className="text-center">
              <h4 class="name-client">
                  Uhuu! Pedido finalizado!
              </h4>
              <p>Acompanhe o status do seu pedido pelo seu Whats.</p>
            </Col>
            <Col sm={12} className="text-center">
                <a target="_blank" href="https://api.whatsapp.com/send?phone=5551995793844" class="btn btn-success">
                    Voltar para WhatsApp
                </a>
            </Col>
            <Col sm={12} className="text-center mt-4">
                <Link to="/" class="btn btn-primary">
                    Voltar para Início
                </Link>
            </Col>
          </Row>
        </Card>
      </Container>

     
    </Main>
  );
}

export default Checkout;