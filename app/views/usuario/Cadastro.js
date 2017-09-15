import React, { Component } from 'react';
import {Link, browserHistory} from 'react-router';

import { APPLICATION } from '../../config/config';
import { validateEmail, requestInfoObjPost } from '../../components/layouts/Helpers';
import TermosCompromisso from '../../components/common/TermosCompromisso';

import toastr from '../../../public/js/plugin/toastr/toastr.min.js';
import '../../../public/js/plugin/mask/jquery.mask.min.js';
import '../../../public/styles/plugin/toastr/toastr.min.css';

class Cadastro extends Component {

    constructor(props){
      super(props);
      this.cadastrar = this.cadastrar.bind(this);
      this.valida = this.valida.bind(this);
      this.usuario = {};
    }

    componentDidMount(){
      this.init();
      this.mask();
    }


    init(){
      toastr.options = {
        closeButton: true,
        progressBar: true,
        showMethod: 'slideDown',
        timeOut: 3000
      };

      $("#btn_cadastra").attr("disabled", true);
      $("#ck_termos").change(function(){
        if(this.checked){
          $("#btn_cadastra").removeAttr("disabled");
        }else{
          $("#btn_cadastra").attr("disabled", true);
        }
      });
    }

    cadastrar(){
      if( this.valida() ){
          toastr.clear();
          $("#btn_cadastra").attr("disabled", true);
          fetch(APPLICATION.CADASTRO_USUARIO, requestInfoObjPost(this.adapterUsuario()) )
          .then(response => {
              if(response.ok){
                  return response.text();
              }else {
                  throw new Error("Ocorreu um erro. (Código "+response.status+")");
              }
          })
          .then(resposta => {
              toastr.success('Seu cadastro foi realizado com sucesso!', 'Aviso');
              browserHistory.push('/login');
          })
          .catch(error => {
              $("#btn_cadastra").removeAttr("disabled");
              toastr.error(error.message, 'Erro');
          });
      }
    }

    adapterUsuario(){
      var usuario ={
        nome: this.usuario.nome.value,
        cnpj: this.usuario.cnpj.value,
        email: this.usuario.email.value,
        telefone:this.usuario.fone.value,
        senha: this.usuario.senha.value,
        confirmSenha:this.usuario.confirmSenha.value
      }

      return usuario;
    }

    mask(){
        $(this.usuario.fone).mask('(00) 0000-00009', {clearIfNotMatch: true});
    }

    valida(){
      toastr.options = {
        closeButton: true,
        progressBar: true,
        showMethod: 'slideDown',
        preventDuplicates: true,
        timeOut: 4000
      };
      $("#formCadastro [id*=form]").removeClass("has-error");
      toastr.clear();
      var valida = true;
      var form_nome = $(this.form_nome);
      var form_cnpj = $(this.form_cnpj);
      var form_email = $(this.form_email);
      var form_senha = $(this.form_senha);
      var form_confirm = $(this.form_confirm);

      var usuario = this.adapterUsuario();

      if(usuario.nome.trim() == "" ){
          form_nome.addClass("has-error");
          valida = false;
          toastr.error('O Campo \"Nome Completo\" é de preenchimento obrigatório!', 'Aviso');
      }
      if(usuario.cnpj.trim() == "" ){
          form_cnpj.addClass("has-error");
          valida = false;
          toastr.error('O Campo \"Como gostaria de ser chamado(a)\" é de preenchimento obrigatório!', 'Aviso');
      }
      if(usuario.email.trim() == "" ){
          form_email.addClass("has-error");
          valida = false;
          toastr.error('O Campo \"E-Mail\" é de preenchimento obrigatório!', 'Aviso');
      }else if(!validateEmail(usuario.email)){
        form_email.addClass("has-error");
        valida = false;
        toastr.error('Insira um \"E-Mail\" valido!', 'Aviso');
      }

      if(usuario.senha.trim() == "" ){
          form_senha.addClass("has-error");
          valida = false;
          toastr.error('O Campo \"Senha\" é de preenchimento obrigatório!', 'Aviso');
      }
      if(usuario.confirmSenha.trim() == "" ){
          form_confirm.addClass("has-error");
          valida = false;
          toastr.error('O Campo \"Confirme sua senha\" é de preenchimento obrigatório!', 'Aviso');
      }else if(usuario.senha != usuario.confirmSenha ){
        form_confirm.addClass("has-error");
        valida = false;
        toastr.error('Senha não confere!', 'Aviso');
      }
      return valida;
    }


    render() {
        return (
            <div className="col-md-6 col-md-offset-3 text-center loginscreen animated fadeInDown">
              <div>
                  <div>
                      <h1 className="logo-name"><i className="fa fa-paw" aria-hidden="true"></i></h1>
                  </div>
                  <h3>Minhas vacinas</h3>
                  <p>Suas informações são muito importantes! Por isso, preencha seus dados corretamente.</p>
                  <form className="m-t" role="form" id="formCadastro" >
                      <div className="m-b row">
                        <div id="form_nome" ref={(form) => this.form_nome = form} className="col-md-6">
                            <input ref={(input) => this.usuario.nome = input} type="text" className="form-control" placeholder="Razão social *" required="" />
                        </div>
                        <div id="form_apelido" ref={(form) => this.form_cnpj = form} className="col-md-6">
                            <input ref={(input) => this.usuario.cnpj = input} type="text" className="form-control" placeholder="CNPJ *" required="" />
                        </div>
                      </div>

                      <div className=" m-b row">
                        <div id="form_email"className="col-md-6" ref={(form) => this.form_email = form}>
                            <input ref={(input) => this.usuario.email = input} type="email" className="form-control" placeholder="E-Mail (Será seu usuário) *" required="" />
                        </div>
                        <div className="col-md-6">
                            <input ref={(input) => this.usuario.fone = input} type="text" className="form-control" placeholder="Fone"  />
                        </div>
                      </div>

                      <div className=" m-b row">
                        <div id="form_senha" className="col-md-6" ref={(form) => this.form_senha = form}>
                            <input ref={(input) => this.usuario.senha = input} type="password" className="form-control" placeholder="Crie uma senha *" required="" />
                        </div>
                        <div id="form_confirm" className="col-md-6" ref={(form) => this.form_confirm = form}>
                            <input type="password" ref={(input) => this.usuario.confirmSenha = input} className="form-control" placeholder="Confirme sua Senha *" required="" />
                        </div>
                      </div>
                      <div className="form-group">
                              <div className="checkbox i-checks"><label> <input id="ck_termos" type="checkbox" /><i></i> Concordo com os <a data-toggle="modal" data-target="#termos">Termos de Compromisso e Responsabilidade</a></label></div>
                      </div>
                      <button type="button" id="btn_cadastra" className="btn btn-primary block full-width m-b" onClick={this.cadastrar}>Register</button>
                      <p className="text-muted text-center"><small>Você já é cadastrado?</small></p>
                      <Link to="/login"><span className="btn btn-sm btn-white btn-block" >Login</span></Link>
                  </form>
                  <p className="m-t"> <small><strong>Copyright</strong> Minhas Vacinas &copy; 2017</small> </p>
              </div>
              <TermosCompromisso id="termos" />
            </div>
        )
    }

}

export default Cadastro
