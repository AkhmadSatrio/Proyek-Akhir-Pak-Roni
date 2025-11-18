import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter } from 'react-router-dom';
import Routing from './components/Routing';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
    <Routing />
    </BrowserRouter>
  );
}

export default App;