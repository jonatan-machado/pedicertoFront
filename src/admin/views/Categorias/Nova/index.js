import React from 'react';

import {
    Form,
    Button,
  } from 'react-bootstrap';
  
import { Container } from './styles';

import HeaderTop from '../../../components/HeaderTop';
import HeaderVertical from '../../../components/HeaderVertical';
import MainAdmin from '../../../components/MainAdmin';

function NovaCategoria() {
  return (
      <>
        <HeaderTop />
        <HeaderVertical />
        
        <MainAdmin>
            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </MainAdmin>
      </>
  );
}

export default NovaCategoria;