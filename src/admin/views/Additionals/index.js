import React, { useState, useEffect } from 'react';

import { Accordion, Card, Row, Col, Form, Button, Table, Container, Modal } from 'react-bootstrap';
import Api from '../../../services/api';
import { useParams } from 'react-router-dom';
import HeaderTop from '../../components/HeaderTop';
import HeaderVertical from '../../components/HeaderVertical';
import MainAdmin from '../../components/MainAdmin';

function Additionals({ history }) {
  const parsedUser = JSON.parse(localStorage.getItem('userData'));
  const userId = parsedUser?.id;
  const token = JSON.parse(localStorage.getItem('userToken'));
  const params = useParams();

  const [additionalsList, setAdditionalsList] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    getAdditionalsData();
  }, []);

  const getAdditionalsData = async () => {
    try {
      const request = await Api.get(`/additionals/${userId}/${params.id_category}/${params.id_product}`);

      setAdditionalsList(request.data);
      console.log(request.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const openRegisterCategory = () => setShow(true);

  const createCategory = async () => {
    try {
      const name = document.getElementById('name').value;
      const price = document.getElementById('price').value;
      const description = document.getElementById('description').value;

      const request = await Api.post(
        '/additional',
        {
          name: name,
          description: description,
          disponivel: true,
          id_category: params.id_category,
          id_product: params.id_product,
          price: Number(price)
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      additionalsList.unshift(request.data);
      setShow(false);
      name.value = '';
      price.value = '';
      description.value = '';
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <HeaderTop />
      <HeaderVertical />

      <MainAdmin>
        <Button onClick={() => openRegisterCategory()} variant="outline-primary">
          Cadastrar Adicional
        </Button>
        <hr />
        <Table bordered hover>
          <thead>
            <tr>
              <th># ID</th>
              <th>Nome</th>
              <th>Preço</th>
              <th>Diponibilidade</th>
            </tr>
          </thead>
          <tbody>
            {additionalsList.map((additional) => (
              <tr>
                <td>{additional.id}</td>
                <td>{additional.name}</td>
                <td>{additional.price}</td>
                <td>{additional.disponivel ? 'Disponível' : 'Indisponível'}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </MainAdmin>

      <Modal centered show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastrar novo Adicional</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col xs="6">
                <Form.Group>
                  <Form.Label>Nome do Adicional</Form.Label>
                  <Form.Control id="name" />
                </Form.Group>
              </Col>
              <Col xs="6">
                <Form.Group>
                  <Form.Label>Preço</Form.Label>
                  <Form.Control id="price" type="number" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <Form.Group>
                  <Form.Label>Descrição</Form.Label>
                  <Form.Control id="description" as="textarea" />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => createCategory()} variant="outline-success">
            Cadastrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Additionals;
