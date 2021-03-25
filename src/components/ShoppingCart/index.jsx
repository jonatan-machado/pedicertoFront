import React, { useState, useEffect } from 'react';
import { useCart } from '../../contexts/CartContext';
import { useHistory } from 'react-router-dom';
import { Modal, Button, Col, Row } from 'react-bootstrap';

export default function ShoppingCart({ show, handleClose }) {
  const { cartItems } = useCart();
  const history = useHistory();
  const [total, setTotal] = useState('');

  const getTotalPrice = () => {
    const totalValue = cartItems.reduce((total, item) => {
      return total + item.totalPrice;
    }, 0);

    setTotal(totalValue);
  };

  useEffect(() => {
    getTotalPrice();
  }, []);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Carrinho</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.map((item) => {
          return (
            <p>
              {' '}
              {item.product.qtd} und. - {item.product.name} -- valor: {item.totalPrice}
            </p>
          );
        })}

        <hr />
        <h3>
          Total:{' '}
          {total.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
          })}
        </h3>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
        <Button variant="success" onClick={() => history.push('/finalizar')}>
          Finalizar Compra
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
