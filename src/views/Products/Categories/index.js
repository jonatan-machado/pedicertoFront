import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import { Button } from 'react-bootstrap';
import { Main, MenuInicial, Card, ImgProducts, Logo, Menu, TitleCard } from './styles';
import Burguer from '../../../assets/images/hamburger.jpg';
import Pizza from '../../../assets/images/pizza.jpg';
import Sushi from '../../../assets/images/sushi.jpg';
import Massas from '../../../assets/images/massas.jpg';
import FrutosdoMar from '../../../assets/images/frutos-mar.jpg';
import Bebidas from '../../../assets/images/bebidas.jpg';
import HeaderFim from '../../../components/HeaderFim';
import { Link } from 'react-router-dom';
import Api from '../../../services/api';

function Categories() {
  const [categoriesList, setCategoriesList] = useState([]);

  const userData = JSON.parse(localStorage.getItem('userData'));
  const userId = userData?.id;
  const token = localStorage.getItem('userToken');

  useEffect(() => {
    getCategoriesList();
  }, []);

  const getCategoriesList = async () => {
    try {
      const request = await Api.get(`/category/${userId}`, { headers: { Authorization: `Bearer ${token}` } });
      setCategoriesList(request.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Main>
      <HeaderFim />

      <MenuInicial>
        <Row>
          {categoriesList.map((category) => (
            <Col xs={6} className="" key={category.id}>
              <Link to={{ pathname: '/detail', state: { category: category } }}>
                <Card className="">
                  <ImgProducts src={Burguer} />
                  <TitleCard>
                    <h6>{category.name}</h6>
                  </TitleCard>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </MenuInicial>
    </Main>
  );
}

export default Categories;
