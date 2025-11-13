import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import MainContent from './pages/store';

function App() {
  return (
    <div className="App">
      <Nav />
      <MainContent />
    </div>
  );
}

export default App;