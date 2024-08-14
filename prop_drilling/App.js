import './App.css';
import Component1 from './Component1';
function App() {
  const obj = {
    name: "John",
    age: 30
  }
  return (
   <>
    <Component1 msg={obj}/>
  
   </>
    
  );
}

export default App;
