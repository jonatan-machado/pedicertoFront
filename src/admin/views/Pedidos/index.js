import React, { useState, useEffect } from 'react';

import { Accordion, Card, Row, Col, Form, Button, Table } from 'react-bootstrap';
import Api from '../../../services/api';
import { Container, Column } from './styles';

import HeaderTop from '../../components/HeaderTop';
import HeaderVertical from '../../components/HeaderVertical';
import MainAdmin from '../../components/MainAdmin';

function Pedidos() {
  const token = JSON.parse(localStorage.getItem('userToken'));

  const [orders, setOrders] = useState([]);
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

      setOrders(request.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <HeaderTop />
      <HeaderVertical />

      <MainAdmin>
        <Table>
          <thead>
            <tr>
              <th>STATUS</th>
              <th>CLIENTE</th>
              <th>PEDIDO</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr>
                <td>status</td>
                <td>cliente</td>
                <td>pedido</td>
                <td>total</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </MainAdmin>
    </>
  );
}

export default Pedidos;
