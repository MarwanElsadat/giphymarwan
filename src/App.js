import logo from './logo.svg';
import './App.css';
import Giphy from './components/ghiphy';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div id="head">
    <div className="App" style={{background: 'linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)'}}>
      
      <Giphy />
    </div>
    </div>
  );
}

export default App;
