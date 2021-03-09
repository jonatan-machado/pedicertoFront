import React, { useState, useEffect } from 'react';
import { Accordion, Card, Row, Col, Form, Button } from 'react-bootstrap';
import { Container } from './styles';
import HeaderTop from '../../components/HeaderTop';
import HeaderVertical from '../../components/HeaderVertical';
import MainAdmin from '../../components/MainAdmin';
import Api from '../../../services/api';

function Categorias() {
  const [categoriesList, setCategoriesList] = useState([]);

  const userData = JSON.parse(localStorage.getItem('userData'));
  const userId = userData.id;

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

  return (
    <>
      <HeaderTop />
      <HeaderVertical />

      <MainAdmin>
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
    </>
  );
}

export default Categorias;
