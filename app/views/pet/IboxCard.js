import React from 'react';

class IboxCard extends React.Component {

  constructor(props){
     super(props);
     this.playVideo = this.playVideo.bind(this);
     this.editarCurso = this.editarCurso.bind(this);
   }

   playVideo(){
     this.props.playVideo(this.props.dados);
   }

   editarCurso(){
     this.props.editarCurso(this.props.dados);
   }
    render() {
        return (
          <div className="ibox">
            <div className="ibox-content product-box">
                <div className="product-imitation">
                    [ {this.props.dados.sigla} ]
                </div>
                <div className="product-desc">
                    <a href="#" className="product-name"> {this.props.dados.nome}</a>
                    <div className="small m-t-xs">
                        {this.props.dados.descricao}
                    </div>
                    <div className="m-t btn-group ">
                        <span className="btn btn-xs btn-outline btn-danger" >Excluir <i className="fa fa-trash-o"></i> </span>
                        <span onClick={this.editarCurso} className="btn btn-xs btn-outline btn-primary" >Editar <i className="fa fa-pencil"></i> </span>
                    </div>
                </div>
            </div>
          </div>
        )
    }
}

export default IboxCard
