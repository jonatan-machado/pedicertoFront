import React, { useState, useEffect } from 'react';
import { Accordion, Card, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import { Container } from './styles';
import HeaderTop from '../../components/HeaderTop';
import HeaderVertical from '../../components/HeaderVertical';
import MainAdmin from '../../components/MainAdmin';
import Api from '../../../services/api';

function Categorias() {
  const [categoriesList, setCategoriesList] = useState([]);
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState('');

  const userData = JSON.parse(localStorage.getItem('userData'));
  const userId = userData.id;
  const token = JSON.parse(localStorage.getItem('userToken'));

  useEffect(() => {
    getCategoriesList();
  }, []);

  const getCategoriesList = async () => {
    try {
      const request = await Api.get(`/category/${userId}`);
      setCategoriesList(request.data);
      console.log(request.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const onChangeCategoryName = (e) => {
    setCategoryName(e.target.value);
  };

  const registerCategory = async () => {
    try {
      if (categoryName === '') {
        throw new Error('Preencha o nome da categoria');
      }
      const request = await Api.post(
        '/categories',
        { name: categoryName },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(request);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <HeaderTop />
      <HeaderVertical />

      <MainAdmin>
        <Button onClick={() => setShow(true)} style={{ marginBottom: 20 }}>
          Nova Categoria
        </Button>
        {categoriesList.map((category) => (
          <Accordion key={category.id}>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  {category.name}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        ))}
      </MainAdmin>

      <Modal centered show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Preencha para criar uma nova categoria</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Group>
              <Form.Label>Nome da Categoria</Form.Label>
              <Form.Control
                onChange={onChangeCategoryName}
                value={categoryName}
                type="text"
                placeholder="Digite o nome da categoria aqui"
              />
            </Form.Group>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => registerCategory()} variant="outline-success">
            Concluir
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Categorias;
