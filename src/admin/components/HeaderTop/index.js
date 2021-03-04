import React from 'react';
import { CartPlus } from 'react-bootstrap-icons';

import { 
    Row,
    Col,
  } from 'react-bootstrap';

import { Container, Logo } from './styles';

function HeaderTop() {
  return (
    <Container className="">
        <Row className="mx-0 align-items-center">
            <Col xs={6}>
            <Logo className="text-left">
                <h1>PediCerto</h1>
            </Logo>
            </Col>
            <Col xs={6} className="text-right pr-md-5">
                <CartPlus size={28}/>
            </Col>
        </Row>
    </Container>
  );
}

export default HeaderTop;