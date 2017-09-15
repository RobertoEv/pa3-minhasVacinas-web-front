import React, { Component } from 'react';

class VacinaModal extends Component {

    render() {
        return (
          <div className="modal inmodal" id={this.props.id} role="dialog" aria-hidden="true">
              <div className="modal-dialog">
                  <div className="modal-content animated bounceInRight">
                      <div className="modal-header">
                          <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                          <h4 className="modal-title"><i className="fa fa-tint" aria-hidden="true"></i> Vacina</h4>
                          <p>(<i id="state">Cadastro</i>)</p>
                      </div>

                      <div className="modal-body">

                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Sigla</label>
                                <input id="in_sigla" type="text" className="form-control"/>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Nome</label>
                                <input id="in_nome" type="text" className="form-control"/>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label>Descrição do curso</label>
                                  <textarea id="tx_descricao" maxLength="200" className="form-control" />
                                </div>
                              </div>
                          </div>

                      </div>
                      <div className="modal-footer">
                          <button type="button" className="btn btn-white" data-dismiss="modal">Cancelar</button>
                          <button type="button" className="btn btn-primary">Salvar</button>
                      </div>
                  </div>
              </div>
              <input type="hidden" id="vacina_id"/>
          </div>
        )
    }

}

export default VacinaModal
