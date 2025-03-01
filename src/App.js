import './App.css';
import {BrowserRouter,Routes,Route, useLocation} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './Auth/Login';
import UserSignUp from './Auth/UserSignUp';
import AdminLogin from './Auth/AdminLogin';
import HodSignup from './Auth/HodSignup';
import ClerkSignup from './Auth/ClerkSignup';
import AdminDashboard from './Admin/AdminDashbord';
import ClerkDashboard from './Clerk/ClerkDashboard';
import SubAdminSignup from './Auth/SubAdminSignup';
// import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
        <BrowserRouter>
         <Layout/>
        </BrowserRouter>
      {/* <Footer/> */}
    </div>
  );
}


const Layout=()=>{
  const location= useLocation();
  const ShouldHideNavbar =['/clerkdashboard']
  const hideNavbar= ShouldHideNavbar.includes(location.pathname)
  return(
    <div>

      
   {!hideNavbar && <Navbar/>}
      <div>
      <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/login' element={<Login/>}/>
              <Route path='/usersignup' element={<UserSignUp/>}/>
              <Route path='/adminlogin' element={<AdminLogin/>}/>
              <Route path='/hodsignup' element={<HodSignup/>}/>
              <Route path='/clerkdashboard' element={<ClerkDashboard/>}/>
              <Route path='/clerksignup' element={<ClerkSignup/>}/>
              <Route path='/subadminsignup' element={<SubAdminSignup/>}/>

          </Routes>  
      </div>

    </div>
  )
}


export default App;
