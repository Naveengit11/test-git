import logo from './logo.svg';
import './App.css';
import Comp from './trial-component/Trial-component.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Comp />
      </header>
    </div>
  );
}

export default App;
