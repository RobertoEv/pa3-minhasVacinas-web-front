import React, { Component } from 'react';
import { APPLICATION } from '../../config/config';
import {Link, browserHistory} from 'react-router';

import { requestInfoObjPost } from '../../components/layouts/Helpers';
import toastr from '../../../public/js/plugin/toastr/toastr.min.js';
import '../../../public/styles/plugin/toastr/toastr.min.css';

class Login extends Component {

    constructor(props){
        super(props);
        this.enviar = this.enviar.bind(this);
        localStorage.removeItem('auth-token');

        toastr.options = {
          closeButton: true,
          progressBar: true,
          showMethod: 'slideDown',
          timeOut: 3000
        };
    }

    adapterUsuario(){
      var usuario ={
        username: this.username.value,
        password: this.password.value
      }
      return usuario;
    }

    enviar(){
        toastr.clear();
        /* fetch(APPLICATION.AUTHENTICATION, requestInfoObjPost(this.adapterUsuario()) )
        .then(response => {
            if(response.ok){
                return response.text();
            } else {
                throw new Error('Usuario ou senha inválida');
            }
        })
        .then(token => {
            localStorage.setItem("auth-token",token);
            browserHistory.push('/main');
        })
        .catch(error => {
            toastr.error(error.message, 'Aviso');
        });
        */
        browserHistory.push('/main');
    }

    render() {
        return (
            <div className="loginColumns animated fadeInDown">
                <div className="row">

                    <div className="col-md-6">
                    <h2 className="font-bold"><i className="fa fa-paw" aria-hidden="true"></i> Minhas Vacinas</h2>
                    <p>
                        Olá, Bem-Vindo(a)!
                    </p>

                    </div>
                    <div className="col-md-6">
                        <div className="ibox-content">
                            <form className="m-t" role="form">
                                <div className="form-group">
                                    <input type="text" className="form-control form-border" placeholder="E-mail" required="true"
                                        ref={(input) => this.username = input}/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control form-border" placeholder="Senha" required="true"
                                        ref={(input) => this.password = input}/>
                                </div>
                                <button type="button" onClick={this.enviar} className="btn btn-primary block full-width m-b">
                                    <i className="fa fa-external-link"></i> Entrar
                                </button>
                                <Link to="/cadastro"> <span className="btn btn-success block full-width m-b"> Inscreva-se </span> </Link>
                                <a href="#">
                                    <small>Esqueceu senha?</small>
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-md-6">
                        Copyright Minhas vacinas - Todos os direitos reservados.
                    </div>
                    <div className="col-md-6 text-right">
                    <small>© Minhas Vacinas 2017</small>
                    </div>
                </div>
            </div>
        )
    }

}

export default Login
