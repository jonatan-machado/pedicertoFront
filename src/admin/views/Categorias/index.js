import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import { CategoriesWrapper, PreviewProductAvatar, InputWrapper } from './styles';
import HeaderTop from '../../components/HeaderTop';
import HeaderVertical from '../../components/HeaderVertical';
import MainAdmin from '../../components/MainAdmin';
import Api from '../../../services/api';

function Categorias() {
  const userData = JSON.parse(localStorage.getItem('userData'));
  const userId = userData.id;
  const token = JSON.parse(localStorage.getItem('userToken'));

  const [categoriesList, setCategoriesList] = useState([]);
  const [productsList, setProductsList] = useState([]);
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productRegisterModal, setProductRegisterModal] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);

  useEffect(() => {
    getCategoriesData();
  }, []);

  const getCategoriesData = async () => {
    try {
      const categories = await Api.get(`/category/${userId}`);
      setCategoriesList(categories.data);
      console.log(categories.data, 'categories');
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

      categoriesList.push(request.data);

      setShow(false);
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

        <CategoriesWrapper>
          <Row style={{ width: '100%' }}>
            {categoriesList.map((category) => (
              <Col key={category.id} lg="4">
                <Card style={{ width: '100%' }}>
                  <Card.Body>
                    <Card.Title>{category.name}</Card.Title>

                    <Button variant="primary">Sub-categorias</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </CategoriesWrapper>
      </MainAdmin>

      <Modal centered show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Preencha para criar uma nova categoria</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Nome da Categoria</Form.Label>
            <Form.Control
              onChange={onChangeCategoryName}
              value={categoryName}
              type="text"
              placeholder="Digite o nome da categoria aqui"
            />
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
