import logo from './assets/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>Task: Add an image below</h1>
        <img 
        height={100}
        src={logo} 
        alt="logo" />
    </div>
  );
}

export default App;
