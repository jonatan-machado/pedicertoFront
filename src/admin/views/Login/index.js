import React from 'react';
import { Link } from 'react-router-dom';

import { 
    Form,
    Button,
} from 'react-bootstrap';

import { Container, Content } from './styles';


function Login() {
  return(
    <Container>
        {/* <img src={logo} alt="MultiImob" /> */}
        <Content>
            <h2>PEDICERTO</h2>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    {/* <Form.Label>E-mail</Form.Label> */}
                    <Form.Control type="email" placeholder="E-mail" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Senha" />
                </Form.Group>
                
                <Link to="/pedidos" class="btn btn-primary">Entrar</Link>

                {/* <Button variant="primary" type="submit">
                    Entrar
                </Button> */}
            </Form>
        </Content>
    </Container>
  );
}

export default Login;