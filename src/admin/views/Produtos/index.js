import React, { useState, useEffect } from 'react';

import { Accordion, Card, Row, Col, Form, Button } from 'react-bootstrap';

import HeaderTop from '../../components/HeaderTop';
import HeaderVertical from '../../components/HeaderVertical';
import MainAdmin from '../../components/MainAdmin';
import { Container, ProductsList } from './styles';
import Api from '../../../services/api';
import ProductCard from './ProductCard';

function Produtos({ history }) {
  const parsedUser = JSON.parse(localStorage.getItem('userData'));
  const userId = parsedUser?.id;

  const [categoriesList, setCategoriesList] = useState([]);
  const [productsList, setProductsList] = useState([]);

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

  const listProducts = async (categoryId) => {
    try {
      const request = await Api.get(`/category/products/${userId}/${categoryId}`);

      if (!request) throw new Error('Erro ao buscar categorias, atualize a página');

      setProductsList(request?.data);
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
          {categoriesList.map((category) => (
            <Card key={category.id}>
              <Card.Header style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Accordion.Toggle
                  onClick={() => listProducts(category.id)}
                  as={Button}
                  variant="link"
                  eventKey={category.id}
                >
                  {category.name}
                </Accordion.Toggle>
                <Button variant="outline-primary" onClick={() => history.push(`/novo-produto/${category.id}`)}>
                  Cadastrar produto nesta categoria
                </Button>
              </Card.Header>
              <Accordion.Collapse eventKey={category.id}>
                <Card.Body style={{ display: 'flex', flexWrap: 'wrap' }}>
                  <ProductsList>
                    {productsList.map((item) => (
                      <ProductCard product={item} category={category} />
                    ))}
                  </ProductsList>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
        </Accordion>
      </MainAdmin>
    </>
  );
}

export default Produtos;
