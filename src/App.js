import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './Components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";



function App() {
  return (
    <div className="App">
      <Navbar>
    
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>} />
          </Routes>  
        </BrowserRouter>
      </Navbar>
      <Home/>
    </div>
  );
}
export default App;
