import React, { useState } from 'react';
import { ChevronLeft, CartPlus } from 'react-bootstrap-icons';
import history from '../../services/history';
import { Row, Col } from 'react-bootstrap';

import { Container, Logo } from './styles';
import ShoppingCart from '../ShoppingCart';

function Header({ hideGoBack }) {
  const [showCart, setShowCart] = useState(false);

  return (
    <Container>
      <Row className="mx-0 align-items-center">
        <Col xs={3} className="pl-md-4">
          {hideGoBack ? null : <ChevronLeft cursor="pointer" size={32} onClick={() => history.goBack()} />}
        </Col>
        <Col xs={6}>
          <Logo className="text-center">
            <h1>PediCerto</h1>
          </Logo>
        </Col>
        <Col xs={3} className="text-right pr-md-5">
          <CartPlus size={28} onClick={() => setShowCart(true)} />
        </Col>
      </Row>

      <ShoppingCart show={showCart} handleClose={() => setShowCart(false)} />
    </Container>
  );
}

export default Header;
