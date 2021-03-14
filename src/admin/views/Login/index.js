import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Api from '../../../services/api';
import { Container, Content } from './styles';
import history from '../../../services/history';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (event) => setEmail(event.target.value);

  const onChangePassword = (event) => setPassword(event.target.value);

  const handleLogin = async () => {
    try {
      if (email === '' || password === '') throw new Error('Credenciais Incorretas');

      const request = await Api.post('/sessions', { email, password });

      console.log(request);

      const userData = JSON.stringify(request?.data.user);
      const userToken = JSON.stringify(request?.data.token);

      localStorage.setItem('userData', userData);
      localStorage.setItem('userToken', userToken);

      history.push('/inicio');
    } catch (error) {
      alert('Credenciais Incorretas!');
    }
  };

  return (
    <Container>
      <Content>
        <h2>PEDICERTO</h2>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="E-mail" onChange={onChangeEmail} value={email} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Senha" onChange={onChangePassword} value={password} />
          </Form.Group>

          <Button variant="primary" onClick={handleLogin}>
            Entrar
          </Button>
        </Form>
      </Content>
    </Container>
  );
}

export default Login;
