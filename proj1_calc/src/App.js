import logo from './logo.svg';
import './App.css';
import CCCalc from './Class Comps/CCCalc';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CCCalc/>
      </header>
    </div>
  );
}

export default App;
