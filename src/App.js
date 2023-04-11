import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Home } from './Components/Home';
import Footer from './Components/Footer';
import Main  from './Components/Main';
import Details from './Components/Detail';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Details/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
