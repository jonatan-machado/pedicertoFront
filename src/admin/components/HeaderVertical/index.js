import React from 'react';

import { Row, Col, Nav } from 'react-bootstrap';

import { Container } from './styles';

function HeaderVertical() {
  return (
    <Container>
      <Nav defaultActiveKey="/pedidos" className="flex-column">
        <Nav.Link href="/pedidos">Pedidos</Nav.Link>
        <Nav.Link href="/categorias">Categorias</Nav.Link>
        <Nav.Link href="/produtos">Produtos</Nav.Link>
        <Nav.Link href="/clientes">Clientes</Nav.Link>
        <Nav.Link href="/usuarios">Usuários</Nav.Link>
        <Nav.Link href="/metodos-de-pagamento">Métodos de pagamento</Nav.Link>
      </Nav>
    </Container>
  );
}

export default HeaderVertical;
