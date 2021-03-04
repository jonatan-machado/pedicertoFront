import React from 'react';
import { ChevronLeft , CartPlus } from 'react-bootstrap-icons';

import { 
    Row,
    Col,
  } from 'react-bootstrap';

import { Container, Logo } from './styles';

function Header() {
  return (
    <Container className="">
        <Row className="mx-0 align-items-center">
            <Col xs={3} className="pl-md-4">
              {/* <ChevronLeft size={32}/> */}
            </Col>
            <Col xs={6}>
            <Logo className="text-center">
                <h1>PediCerto</h1>
            </Logo>
            </Col>
            <Col xs={3} className="text-right pr-md-5">
                {/* <CartPlus size={28}/> */}
            </Col>
        </Row>
    </Container>
  );
}

export default Header;