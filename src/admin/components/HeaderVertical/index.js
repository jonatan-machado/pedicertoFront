import React from 'react';

import { 
  Row,
  Col,
  Nav,
} from 'react-bootstrap';

import { 
    Container 
} from './styles';

function HeaderVertical() {
  return(
    <Container>
      <Nav defaultActiveKey="/pedidos" className="flex-column">
          <Nav.Link href="/pedidos">Pedidos</Nav.Link>
          <Nav.Link href="/categorias" eventKey="link-2">Categorias</Nav.Link>
          <Nav.Link href="/produtos" eventKey="link-2">Produtos</Nav.Link>
          <Nav.Link href="/clientes" eventKey="link-2">Clientes</Nav.Link>
          <Nav.Link href="/usuarios" eventKey="link-1">Usuários</Nav.Link>
          <Nav.Link href="/dados" eventKey="link-2">Informações</Nav.Link>
    </Nav>
  </Container>
  );
}

export default HeaderVertical;