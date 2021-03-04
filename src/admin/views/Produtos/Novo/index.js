import React from 'react';

import { ChevronDown } from 'react-bootstrap-icons';

import {
  Accordion,
  Card, 
  Row,
  Col,
  Form,
  Button,
} from 'react-bootstrap';

import { Container } from './styles';

import HeaderTop from '../../../components/HeaderTop';
import HeaderVertical from '../../../components/HeaderVertical';
import MainAdmin from '../../../components/MainAdmin';


function NovoProduto() {
  return(
    <>
      <HeaderTop />
      <HeaderVertical />

      <MainAdmin> 
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <ul>
                    <li>
                      <ChevronDown size={32}/>
                    </li>
                    <li>
                      Status
                    </li>
                    <li>
                      Cliente
                    </li>
                    <li>
                      Valor
                    </li>
                    <li>
                      Hora do Pediddo: 19:40
                    </li>
                    <li>
                    <Form>
                      <Form.Check 
                        type="switch"
                        id="custom-switch"
                        label="Disponível"
                      />
                    </Form>
                    </li>
                  </ul>
                
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Click me!
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>


          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Click me!
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Click me!
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>

        
      </MainAdmin>
    </>
  );
}

export default NovoProduto;