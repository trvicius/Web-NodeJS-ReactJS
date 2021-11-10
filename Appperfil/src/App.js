import React,{ Component,text } from 'react';
import './App.css';
import Foto from './Foto';
import Dados from './Dados';

class App extends Component {
  render() {
    return (
      <div>
        <h1>App Meu Perfil</h1>
        <Foto />
        
        <h2>Dados Pessoais:</h2>
        <p>Nome:Vinicius Galvão</p>
        <p>Idade:23 anos</p>
        <p>Estado civil:Solteiro</p>
        
        <h2> Formação:</h2>
        <p> Analise e Desenvolvimento de Sistemas</p>

        <h2> Experiência:</h2>
        <p>Accenture - Analista de sistemas</p>

        <h2> Projetos:</h2>
        <p>SAP</p>
        
        
      </div>
    );
  }
}
export default App;