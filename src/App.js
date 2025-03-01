import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';

import Footer from './Components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './Auth/Login';
import UserSignUp from './Auth/UserSignUp';
import AdminLogin from './Auth/AdminLogin';
import HodSignup from './Auth/HodSignup';
import ClerkSignup from './Auth/ClerkSignup';
import AdminDashboard from './Admin/AdminDashbord';
import SubAdminSignup from './Auth/SubAdminSignup';
// import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */} 
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/login' element={<Login/>}/>
              <Route path='/usersignup' element={<UserSignUp/>}/>
              <Route path='/adminlogin' element={<AdminLogin/>}/>
              <Route path='/hodsignup' element={<HodSignup/>}/>
              <Route path='/admindashboard' element={<AdminDashboard/>}/>
              <Route path='/clerksignup' element={<ClerkSignup/>}/>
              <Route path='/subadminsignup' element={<SubAdminSignup/>}/>

          </Routes>  
        </BrowserRouter>
      <Footer/>
    </div>
  );
}
export default App;
