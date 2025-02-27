import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './Auth/Login';
import SignUp from './Auth/SignUp';
import AdminLogin from './Admin/AdminLogin';
// import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div className="App">
      <Navbar/>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/login' element={<Login/>}/>
              <Route path='/signup' element={<SignUp/>}/>
              <Route path='/adminlogin' element={<AdminLogin/>}/>
              
          </Routes>  
        </BrowserRouter>
      <Footer/>
    </div>
  );
}
export default App;
