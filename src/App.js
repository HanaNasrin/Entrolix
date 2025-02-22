import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";



function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Navbar/>
=======
      <Navbar>
    
>>>>>>> 3098f06511344db2a817efd1eabe2bc519c9c1de
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>} />
          </Routes>  
        </BrowserRouter>
<<<<<<< HEAD
      <Footer/>
     
   
=======
      </Navbar>
      <Home/>
>>>>>>> 3098f06511344db2a817efd1eabe2bc519c9c1de
    </div>
  );
}
export default App;
