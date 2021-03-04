import React from 'react';

import { 
  Container, 
  Row,
  Col,
} from 'react-bootstrap';

// import Button from 'react-bootstrap/Button';

// import { Button } from 'react-bootstrap';

import { 
  Main,
  MenuInicial,
  Card,
  ImgProducts,
  Logo,
  Menu,
  TitleCard
} from './styles';

import Burguer from '../../../assets/images/hamburger.jpg';
import Pizza from '../../../assets/images/pizza.jpg';
import Sushi from '../../../assets/images/sushi.jpg';
import Massas from '../../../assets/images/massas.jpg';
import FrutosdoMar from '../../../assets/images/frutos-mar.jpg';
import Bebidas from '../../../assets/images/bebidas.jpg';

import HeaderFim from '../../../components/HeaderFim';

import { Link } from 'react-router-dom';

function Categories() {
  return (
    <Main>
      <HeaderFim />

      <MenuInicial>
          <Row>
            <Col xs={6} className="">
                <Link to="/detail">
                <Card className="">
                    <ImgProducts  src={Burguer}/>
                    <TitleCard>
                      <h6>
                          Hambúrguer
                      </h6>
                    </TitleCard>
                </Card>
                </Link>
            </Col>
            <Col xs={6}>
                <Link to="pratos_detail.html">
                <Card>
                    <ImgProducts src={Pizza}/>
                    <TitleCard>
                      <h6>
                          Pizza
                      </h6>
                    </TitleCard>
                </Card>
                </Link>
            </Col>
            <Col xs={6}>
                <Link to="pratos_detail.html">
                <Card>
                    <ImgProducts src={Sushi}/>
                    <TitleCard>
                      <h6>
                          Sushi
                      </h6>
                    </TitleCard>
                </Card>
                </Link>
            </Col>
            <Col xs={6}>
                <Link to="pratos_detail.html">
                <Card>
                    <ImgProducts src={Massas}/>
                    <TitleCard>
                      <h6>
                          Italiano
                      </h6>
                    </TitleCard>
                </Card>
                </Link>
            </Col>
            <Col xs={6}>
                <Link to="pratos_detail.html">
                <Card>
                    <ImgProducts src={FrutosdoMar}/>
                    <TitleCard>
                      <h6>
                          Frutos do Mar
                      </h6>
                    </TitleCard>
                </Card>
                </Link>
            </Col>
            <Col xs={6}>
                <Link to="pratos_detail.html">
                <Card>
                    <ImgProducts src={Bebidas}/>
                    <TitleCard>
                      <h6>
                          Bebidas
                      </h6>
                    </TitleCard>
                </Card>
                </Link>
            </Col>
          </Row>
     </MenuInicial>
    </Main>

  );
}

export default Categories;