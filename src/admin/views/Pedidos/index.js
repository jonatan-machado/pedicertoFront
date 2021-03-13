import React, { useState, useEffect } from 'react';

import { Accordion, Card, Row, Col, Form, Button } from 'react-bootstrap';
import Api from '../../../services/api';
import { Container } from './styles';

import HeaderTop from '../../components/HeaderTop';
import HeaderVertical from '../../components/HeaderVertical';
import MainAdmin from '../../components/MainAdmin';

function Pedidos() {
  const token = localStorage.getItem('userToken');
  const [waitingConfirmation, setWaitingConfirmation] = useState([]);
  const [confirmed, setconfirmed] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [done, setDone] = useState([]);

  useEffect(() => {
    getOrdersData();
  }, []);

  const getOrdersData = async () => {
    try {
      const request = await Api.get('/order', { headers: { Authorization: `Bearer ${token}` } });
      // request.data?.map((order) => {

      // })
      console.log(request.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <HeaderTop />
      <HeaderVertical />

      <MainAdmin>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Card.Header} eventKey="0"></Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Card.Header} eventKey="1">
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
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Click me!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Card.Header} eventKey="1">
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

export default Pedidos;
