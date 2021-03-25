import React, { useState, useEffect } from 'react';
import HeaderTop from '../../components/HeaderTop';
import HeaderVertical from '../../components/HeaderVertical';
import MainAdmin from '../../components/MainAdmin';
import { Table, Button, Modal } from 'react-bootstrap';
import Api from '../../../services/api';
import CustomInput from '../../components/CustomInput';

export default function MetodosPagamento() {
  const parsedUser = JSON.parse(localStorage.getItem('userData'));
  const userId = parsedUser.id;
  const token = JSON.parse(localStorage.getItem('userToken'));

  const [paymentMethods, setPaymentMethods] = useState([]);
  const [show, setShow] = useState(false);
  const [type, setType] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    getPaymentMethods();
  }, []);

  const toggleModal = () => setShow(!show);

  const getPaymentMethods = async () => {
    try {
      const request = await Api.get(`/method-payments/${userId}`);
      setPaymentMethods(request?.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const createPaymentMethod = async () => {
    try {
      const request = await Api.post(
        '/method-payments',
        { name: { type: type, name: name } },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setShow(false);
      setType('');
      setName('');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <HeaderTop />
      <HeaderVertical />

      <MainAdmin>
        <Button onClick={toggleModal} variant="primary">
          Cadastrar Método de Pagamento
        </Button>
        <hr />
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>TIPO</th>
              <th>Título</th>
            </tr>
          </thead>
          <tbody>
            {paymentMethods.map((method) => {
              const parsedItem = JSON.parse(method.name);
              return (
                <tr key={method.id}>
                  <td>{method.id}</td>
                  <td>{parsedItem.type}</td>
                  <td>{parsedItem.name}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </MainAdmin>

      <Modal centered show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastro de Método de Pagamento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CustomInput label="Tipo" value={type} handleChange={(e) => setType(e.target.value)} name="type" />

          <CustomInput label="Nome" value={name} handleChange={(e) => setName(e.target.value)} name="name" />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => createPaymentMethod()} variant="primary">
            Cadastrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
