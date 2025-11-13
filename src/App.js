import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter } from 'react-router-dom';
import Routing from './components/Routing';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routing />
      </div>
    </BrowserRouter>
  );
}

export default App;