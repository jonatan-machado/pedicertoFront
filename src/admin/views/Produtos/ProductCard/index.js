import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export default function ProductCard({ product, category }) {
  const parsedUser = JSON.parse(localStorage.getItem('userData'));
  const userId = parsedUser?.id;
  const token = JSON.parse(localStorage.getItem('userToken'));
  const history = useHistory();

  return (
    <Card style={{ width: 220, height: 400, margin: 8 }}>
      <Card.Img style={{ height: 180 }} variant="top" src={product.img_product} />
      <Card.Body>
        <Card.Title>
          {product.name}, R$ {product.price}
        </Card.Title>
        <Card.Text>{product.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button
          onClick={() => history.push(`/additionals/${userId}/${category.id}/${product.id}`)}
          variant="outline-primary"
        >
          Ver Adicionais
        </Button>
      </Card.Footer>
    </Card>
  );
}
