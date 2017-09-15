import React from 'react'

import Main from '../components/layouts/Main';
import Blank from '../components/layouts/Blank';

import MainView from '../views/Main';
import VacinaView from '../views/vacina/Vacina';
import Login from '../views/login/Login';
import CadastroView from '../views/usuario/Cadastro';

import { Route, Router, IndexRedirect, browserHistory} from 'react-router';

function checkAuthentication(nextState,replace){
    if(localStorage.getItem('auth-token') === null){
        //replace('/');
    }
}

function checkLogado(nextState,replace){
    if(localStorage.getItem('auth-token') != null){
        replace('/main');
    }
}

export default (
    <Router history={browserHistory}>
      <Route path="/" component={Blank} onEnter={checkLogado} > //-> Paginas sem o menu lateral (layout Blank)
        <IndexRedirect to="/login" />
        <Route path="login" component={Login}> </Route>
        <Route path="cadastro" component={CadastroView}> </Route>
      </Route>

      <Route path="/" component={Main} onEnter={checkAuthentication} > //-> Acrescenta ao layout o menu de navegação lateral e o TOP header
          <Route path="main" component={MainView}> </Route>
          <Route path="vacinas" component={VacinaView}> </Route>
          <Route path="atendimento" component={VacinaView}> </Route>
      </Route>
    </Router>
);
