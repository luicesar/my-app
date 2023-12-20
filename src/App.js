import './App.css';
import Header from './components/Header';

/** 
 * Entendendo props e componentes
 * O componente BemVindo, não tem estados
*/
const BemVindo = (props) => {
  return (
      <div>
          <h2>Bem vindo, {props.nome} !!</h2>
      </div>
  );
}

function App() {
  return (
    <div className="App">
      <BemVindo nome="César" />
      <Header />
    </div>
  );
}

export default App;
