import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";


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
    </div>
  );
}
export default App;
