import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Route from './Route';

import Login from '../admin/views/Login';
import Produtos from '../admin/views/Produtos';
import NovoProduto from '../admin/views/Produtos/Novo';
import Clientes from '../admin/views/Clientes';
import Pedidos from '../admin/views/Pedidos';
import Usuarios from '../admin/views/Usuarios';
import NovoUsuario from '../admin/views/Usuarios/Novo';
import Categorias from '../admin/views/Categorias';
import NovaCategoria from '../admin/views/Categorias/Nova';


import Categories from '../views/Products/Categories';
import Add from '../views/Requests/Add';
import Checkout from '../views/Requests/Checkout';
import Detail from '../views/Requests/Detail';
import Finish from '../views/Requests/Finish';


export default function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={Categories} />
 
            <Route path="/add" exact component={Add}/>
            <Route path="/finalizar" exact component={Checkout}/>
            <Route path="/detail" exact component={Detail}/>
            <Route path="/fim" exact component={Finish}/>

            <Route path="/login" exact component={Login}/>
            <Route path="/pedidos" exact component={Pedidos}/>
            <Route path="/clientes" exact component={Clientes}/>
            <Route path="/produtos" exact component={Produtos}/>
            <Route path="/produtos/novo" exact component={NovoProduto}/>
            <Route path="/usuarios" exact component={Usuarios}/>
            <Route path="/usuarios/novo" exact component={NovoUsuario}/>
            <Route path="/categorias" exact component={Categorias}/>
            <Route path="/categorias/nova" exact component={NovaCategoria}/>
        </Switch>
    )
}