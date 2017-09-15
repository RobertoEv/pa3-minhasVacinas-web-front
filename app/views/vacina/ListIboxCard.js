import React from 'react';
import IboxCard from './IboxCard'

class ListIboxCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {dados: []};
    this.playVideo = this.playVideo.bind(this);
    this.editarCurso = this.editarCurso.bind(this);
  }

  playVideo(dados){
    console.log(dados)
    this.props.playVideo(dados);
  }

  editarCurso(dados){
    this.props.editarCurso(dados);
  }




  render() {
      let dados = this.props.dados;
      let novaLista = [];
      let aux = [];
      for (let k = 0; k < dados.length; k++) {
        aux.push(dados[k]);
        if(aux.length == this.props.qtdPorLinha){
            novaLista.push(aux);
            aux = [];
        }else if(k == dados.length - 1){
            novaLista.push(aux);
        }
      }

      let tamanhoCol = "col-md-"+this.props.tamanhoCol;

      let listarCartoes = function(grupo,self){
        return grupo.map(function(item, index){
            return (
              <div key={index} className={tamanhoCol}>
                <IboxCard dados={item} playVideo={self.playVideo} editarCurso={self.editarCurso} />
              </div>
            );
        });
      }
      let self = this;
      let linha = novaLista.map(function(grupo, index){
        return (
          <div key={index} className="row" >
            {listarCartoes(grupo,self)}
          </div>
        );
      });

      linha = (linha.length == 0 ? (
        <div className="text-center m-t-lg animated bounceIn">
            <h1>
                Nenhuma vacina encontrada
            </h1>
            <small>
                Utilize o botão "Nova vacina" para cadastrar uma nova vacina.
            </small>
        </div>
      ) : linha);

      return (
        <div>
            {linha}
        </div>
      )
  }
}

export default ListIboxCard
