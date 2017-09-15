import React, { Component } from 'react';
import { APPLICATION } from '../../config/config';
import ListIboxCard from './ListIboxCard'
import VacinaModal from './VacinaModal';
import PageHeader from '../../components/common/PageHeader';

import { requestInfoObjPost } from '../../components/layouts/Helpers';
import toastr from '../../../public/js/plugin/toastr/toastr.min.js';
import '../../../public/styles/plugin/toastr/toastr.min.css'


import {Link, browserHistory} from 'react-router';

class Vacina extends Component {

    constructor(props){
      super(props);
      this.state = {dados: [], servidor:[]};
      this.editarCurso = this.editarCurso.bind(this);
      this.pesquisar = this.pesquisar.bind(this);
    }

    componentDidMount(){
      toastr.options = {
        closeButton: true,
        progressBar: true,
        showMethod: 'slideDown',
        timeOut: 3000
      };

      this.carregaCursos();
    }

    editarCurso(dados){
      this.limparModal();
      var modal = $("#cursoModal");
      modal.find("#in_sigla").val(dados.sigla)
      modal.find("#in_nome").val(dados.nome);;
      modal.find("#tx_descricao").val(dados.descricao);
      modal.find("#vacina_id").val(dados.id);
      modal.find("#state").html("Editar")
      $("#cursoModal").modal();
    }

    limparModal(){
      var modal = $("#cursoModal");
      modal.find("input, textarea").val("");
      modal.find("select").val(0);
      modal.find("#state").html("Cadastro")
    }

    pesquisar(event){
      let busca = this.busca.value.trim();
      let dados = this.state.servidor;
      let novaLista = dados.filter(function(item){
        if(item.nome.toUpperCase().indexOf(busca.toUpperCase()) > -1
        || item.descricao.toUpperCase().indexOf(busca.toUpperCase()) > -1
        || item.sigla.toUpperCase().indexOf(busca.toUpperCase()) > -1){
          return item;
        }
      });
      this.setState({dados: novaLista});
    }

    carregaCursos(){
      /*
      let self = this;
      fetch(APPLICATION.SERVICE_CURSO)
      .then(response => { return response.json(); })
      .then(dados => {
        self.setState({
          dados: dados,
          servidor: dados
        });
      })
      .catch(error => {
          toastr.error(error.message, 'Aviso');
      });
      */
      this.setState({
        dados: [
          {id:1,nome:'Vacina 1', descricao:'Cura alguma coisa.', sigla:"SIGLA TESTE"},
          {id:2,nome:'Vacina 2', descricao:'Melhora alguma coisa', sigla:"SIGLA TESTE"},
          {id:3,nome:'Vacina 3', descricao:'Faz algo', sigla:"SIGLA TESTE"},
          {id:4,nome:'Vacina 4', descricao:'Não o ela faz', sigla:"SIGLA TESTE"}
        ],
        servidor:[
          {id:1,nome:'Vacina 1', descricao:'Cura alguma coisa.', sigla:"SIGLA TESTE"},
          {id:2,nome:'Vacina 2', descricao:'Melhora alguma coisa', sigla:"SIGLA TESTE"},
          {id:3,nome:'Vacina 3', descricao:'Faz algo', sigla:"SIGLA TESTE"},
          {id:4,nome:'Vacina 4', descricao:'Não o ela faz', sigla:"SIGLA TESTE"}
        ]
      });
    }

    render() {
        let dados = this.state.dados;
        return (
            <div>
              <PageHeader title="Vacinas" icon="tint" gridHead="md-12">
                <div className="col-sm-5 m-t">
                    <input style={{border:"none"}} onKeyUp={this.pesquisar} ref={(input) => this.busca = input} type="text" placeholder="Pesquisar por sigla, nome ou descricao..." className="form-control" name="top-search" id="top-search"/>
                </div>

                <div className="col-sm-7 m-t  ">
                    <div className="pull-right">
                        <button onClick={this.limparModal} className="btn btn-primary" data-toggle="modal" data-target="#cursoModal">
                          Nova Vacina <i className="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
              </PageHeader>

              <div className="wrapper wrapper-content animated fadeInRight">
                  <ListIboxCard qtdPorLinha="4" tamanhoCol="3" editarCurso={this.editarCurso} dados={dados} />
              </div>
              <VacinaModal id="cursoModal" />
            </div>
        )
    }

}

export default Vacina
