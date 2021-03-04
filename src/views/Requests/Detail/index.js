import React from 'react';

// import { Container } from './styles';
import { 
    Row,
    Col,
} from 'react-bootstrap';

import { 
    Container, 
    Main,
    Food,
    ImgProducts,
    ListFood
  } from './styles';

import Header from '../../../components/Header';

import Burguer from '../../../assets/images/hamburger.jpg';

import { Link } from 'react-router-dom';


function Detail() {
  return (
    <Main>
      <Header />
        <Container>
            <ul>
                <ListFood>
                    <Link to="/add">
                        <Row className="">
                            <Col xs={5} md={3} className="img-food">
                                <ImgProducts src={Burguer}/>
                            </Col>
                            <Col xs={7} md={8} className="desc-food">
                              <Food>
                                <h3 className="title-food">
                                      Burger Especial
                                  </h3>
                                  <p className="description-food">
                                      Pão tipo brioche, 2 burger de costela bovina, parmesan cream, cebola roxa, rúcula, queijo prato, molho chimichurri.
                                  </p>
                                  <p className="price">
                                      R$ 28,00
                                  </p>
                              </Food>
                            </Col>
                        </Row>
                    </Link>   
                </ListFood>

                <ListFood>
                    <Link to="/add">
                        <Row className="">
                            <Col xs={5} md={3} className="img-food">
                                <ImgProducts src={Burguer}/>
                            </Col>
                            <Col xs={7} md={8}>
                              <Food>
                                <h3 className="title-food">
                                      Burger Especial
                                  </h3>
                                  <p className="description-food">
                                      Pão tipo brioche, 2 burger de costela bovina, parmesan cream, cebola roxa, rúcula, queijo prato, molho chimichurri.
                                  </p>
                                  <p className="price">
                                      R$ 28,00
                                  </p>
                              </Food>
                            </Col>
                        </Row>
                    </Link>   
                </ListFood>

                <ListFood>
                    <Link to="/add">
                        <Row className="">
                            <Col xs={5} md={3} className="img-food">
                                <ImgProducts src={Burguer}/>
                            </Col>
                            <Col xs={7} md={8}>
                              <Food>
                                <h3 className="title-food">
                                      Burger Especial
                                  </h3>
                                  <p className="description-food">
                                      Pão tipo brioche, 2 burger de costela bovina, parmesan cream, cebola roxa, rúcula, queijo prato, molho chimichurri.
                                  </p>
                                  <p className="price">
                                      R$ 28,00
                                  </p>
                              </Food>
                            </Col>
                        </Row>
                    </Link>   
                </ListFood>
                
            </ul>
        </Container>
    </Main>
  );
}

export default Detail;