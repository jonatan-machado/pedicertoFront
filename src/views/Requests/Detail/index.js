import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import { Container, Main, Food, ImgProducts, ListFood } from './styles';

import Header from '../../../components/Header';

import Burguer from '../../../assets/images/hamburger.jpg';

import { Link } from 'react-router-dom';
import Api from '../../../services/api';
import { currentUserId, userToken } from '../../../utils/User';

function Detail() {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const userId = currentUserId();
  const token = userToken();
  const categoryId = location.state.category.id;

  useEffect(() => {
    getProductsData();
  }, []);

  const getProductsData = async () => {
    try {
      const request = await Api.get(`/category/products/${userId}/${categoryId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      setProducts(request.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Main>
      <Header />
      <Container>
        <ul>
          {products.map((product) => (
            <ListFood key={product.id}>
              <Link
                to={{
                  pathname: '/add',
                  state: { product: product }
                }}
              >
                <Row className="">
                  <Col xs={5} md={3} className="img-food">
                    <ImgProducts src={product.img_product} />
                  </Col>
                  <Col xs={7} md={8} className="desc-food">
                    <Food>
                      <h3 className="title-food">{product.name}</h3>
                      <p className="description-food">{product.description}</p>
                      <p className="price">R$ {product.price}</p>
                    </Food>
                  </Col>
                </Row>
              </Link>
            </ListFood>
          ))}
        </ul>
      </Container>
    </Main>
  );
}

export default Detail;
