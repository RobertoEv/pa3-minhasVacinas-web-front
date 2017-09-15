import React, { Component } from 'react';

class TermosCompromisso extends Component {

    render() {
        return (
          <div className="modal inmodal" id={this.props.id} role="dialog" aria-hidden="true">
              <div className="modal-dialog">
                  <div className="modal-content animated bounceInRight">
                      <div className="modal-header">
                          <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                          <h4 className="modal-title">Termos de Compromisso e Responsabilidade</h4>
                      </div>

                      <div className="modal-body">
                        <p><label>Termo em elaboração.</label></p>



                      </div>
                      <div className="modal-footer">
                          <button type="button" className="btn btn-success" data-dismiss="modal">OK</button>
                      </div>
                  </div>
              </div>
          </div>
        )
    }

}

export default  TermosCompromisso
