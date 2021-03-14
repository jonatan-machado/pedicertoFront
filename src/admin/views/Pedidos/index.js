import React, { useState, useEffect } from 'react';

import { Accordion, Card, Row, Col, Form, Button } from 'react-bootstrap';
import Api from '../../../services/api';
import { Container, Column } from './styles';

import HeaderTop from '../../components/HeaderTop';
import HeaderVertical from '../../components/HeaderVertical';
import MainAdmin from '../../components/MainAdmin';

function Pedidos() {
  const token = JSON.parse(localStorage.getItem('userToken'));
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
        <Container>
          <Column>
            <header>
              <h6 style={{ color: 'red' }}>Aguardando Confirmação</h6>
            </header>
          </Column>
          <Column>
            <header>
              <h6 style={{ color: 'blue' }}>Pedidos Confirmados</h6>
            </header>
          </Column>
          <Column>
            <header>
              <h6 style={{ color: 'yellow' }}>Pedidos em andamento</h6>
            </header>
          </Column>
          <Column>
            <header>
              <h6 style={{ color: 'green' }}>Saiu para entrega</h6>
            </header>
          </Column>
        </Container>
      </MainAdmin>
    </>
  );
}

export default Pedidos;
