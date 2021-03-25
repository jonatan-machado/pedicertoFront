import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../admin/views/Login';
import Produtos from '../admin/views/Produtos';
import NovoProduto from '../admin/views/Produtos/Novo';
import Clientes from '../admin/views/Clientes';
import Pedidos from '../admin/views/Pedidos';
import Usuarios from '../admin/views/Usuarios';
import NovoUsuario from '../admin/views/Usuarios/Novo';
import Categorias from '../admin/views/Categorias';

import Categories from '../views/Products/Categories';
import Add from '../views/Requests/Add';
import Checkout from '../views/Requests/Checkout';
import Detail from '../views/Requests/Detail';
import Finish from '../views/Requests/Finish';
import MetodosPagamento from '../admin/views/MetodosPagamento';
import Additionals from '../admin/views/Additionals';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Categories} />

      <Route path="/add" exact component={Add} />
      <Route path="/finalizar" exact component={Checkout} />
      <Route path="/detail" exact component={Detail} />
      <Route path="/fim" exact component={Finish} />

      <Route path="/login" exact component={Login} />
      <Route isPrivate path="/pedidos" exact component={Pedidos} />
      <Route isPrivate path="/clientes" exact component={Clientes} />
      <Route isPrivate path="/produtos" exact component={Produtos} />
      <Route isPrivate path="/novo-produto/:id_category" exact component={NovoProduto} />
      <Route isPrivate path="/usuarios" exact component={Usuarios} />
      <Route isPrivate path="/usuarios/novo" exact component={NovoUsuario} />
      <Route isPrivate path="/metodos-de-pagamento" exact component={MetodosPagamento} />
      <Route isPrivate path="/categorias" exact component={Categorias} />
      <Route isPrivate path="/additionals/:id_user/:id_category/:id_product" exact component={Additionals} />
    </Switch>
  );
}
