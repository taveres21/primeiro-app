import logo from './logo.svg';
import './App.css';
import Relogio from './components/Relogio';
import Letreiro from './components/Letreiro';

function App() {
  return (
    <>
      <h1>Relógio</h1>
     <Relogio />
      <br />
      <h1>Letreiro</h1>
     <Letreiro />
    </>
  );
}

export default App;
