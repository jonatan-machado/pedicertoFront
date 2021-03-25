import React, { useState } from 'react';
import Api from '../../../../services/api';

import { ChevronDown } from 'react-bootstrap-icons';

import { Accordion, Card, Row, Col, Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

import { Container, PreviewProductAvatar, InputWrapper } from './styles';
import { useParams } from 'react-router-dom';

import HeaderTop from '../../../components/HeaderTop';
import HeaderVertical from '../../../components/HeaderVertical';
import MainAdmin from '../../../components/MainAdmin';

function NovoProduto({ history }) {
  const params = useParams();
  const parsedUser = JSON.parse(localStorage.getItem('userData'));
  const userId = parsedUser?.id;
  const token = JSON.parse(localStorage.getItem('userToken'));

  const [avatarProduct, setAvatarProduct] = useState(null);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');

  console.log(params);

  const handleImgProduct = (event) => {
    const file = event.target.files[0];
    const previewAvatar = document.getElementById('preview-product-avatar');
    previewAvatar.src = URL.createObjectURL(event.target.files[0]);
    setAvatarProduct(file);
  };

  const handleProductName = (event) => {
    setProductName(event.target.value);
  };

  const handleProductPrice = (event) => {
    setProductPrice(event.target.value);
  };

  const handleProductDescription = (event) => {
    setProductDescription(event.target.value);
  };

  const createProduct = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('avatar', avatarProduct);
      formData.append('name', productName);
      formData.append('description', productDescription);
      formData.append('price', Number(productPrice));
      formData.append('disponivel', true);
      formData.append('id_user', userId);
      formData.append('id_category', params.id_category);
      const request = await Api.post('products', formData, { headers: { Authorization: `Bearer ${token}` } });
      console.log(request);

      toast.success('Produto criado com sucesso');

      history.push('/produtos');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <HeaderTop />
      <HeaderVertical />

      <MainAdmin>
        <form>
          <div>
            <label htmlFor="img-product">
              <PreviewProductAvatar id="preview-product-avatar" />
              <p type="button">Selecionar Imagem</p>
            </label>
            <input
              style={{ display: 'none' }}
              type="file"
              name="img-product"
              id="img-product"
              onChange={(event) => handleImgProduct(event)}
            />
          </div>

          <hr />

          <Row>
            <Col lg="6">
              <InputWrapper>
                <input placeholder="&nbsp;" name="productName" value={productName} onChange={handleProductName} />
                <label>Nome do produto</label>
              </InputWrapper>
            </Col>

            <Col lg="6">
              <InputWrapper>
                <input
                  placeholder="&nbsp;"
                  type="number"
                  name="productPrice"
                  value={productPrice}
                  onChange={handleProductPrice}
                />
                <label>Preço</label>
              </InputWrapper>
            </Col>
          </Row>

          <InputWrapper>
            <input
              placeholder="&nbsp;"
              name="productDescription"
              value={productDescription}
              onChange={handleProductDescription}
            />
            <label>Descrição do produto </label>
          </InputWrapper>
        </form>

        <Button type="submit" onClick={(e) => createProduct(e)} variant="primary">
          Adicionar novo produto
        </Button>
      </MainAdmin>
    </>
  );
}

export default NovoProduto;
