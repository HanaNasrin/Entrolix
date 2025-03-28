import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AdminNavbar from './Components/AdminNavbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home';
import Login from './Auth/Login';
import AdminLogin from './Auth/AdminLogin';
import UserSignUp from './Auth/UserSignup';
import HodSignup from './Auth/HodSignup';
import ClerkSignup from './Auth/ClerkSignup';
import SubAdminSignup from './Auth/SubAdminSignup';
import UserRouter from './User/UserRouter';
import AdminRouter from './Admin/AdminRouter';
import SubAdminRouter from './SubAdmin/SubAdminRouter';
import HodRouter from './HOD/HodRouter';
import ClerkRouter from './Clerk/ClerkRouter';
import TestAPI from './Clerk/Scholarships';

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

const Layout = () => {
  const location = useLocation();
  const shouldHideNavbar = ['/clerkdashboard'];
  // const hideNavbar = shouldHideNavbar.includes(location.pathname);
  const isAdmin=false

  return (
    <div>
          {isAdmin?<AdminNavbar/>:<Navbar/>}
          <Routes>
            
           <Route path='/' element={<Home />} />
           <Route path="/login" element = { <Login/> } />
           <Route path='/adminlogin' element={<AdminLogin />} />
           <Route path='/usersignup' element={<UserSignUp />} />
           <Route path='/hodsignup' element={<HodSignup />} />
           <Route path='/clerksignup' element={<ClerkSignup />} />
           <Route path='/subadminsignup' element={<SubAdminSignup />} />
           <Route path="/*" element={<UserRouter />} />
           <Route path="/admin/*" element={<AdminRouter />} />
           <Route path="/subadmin/*" element={<SubAdminRouter />} />
           <Route path="/clerk/*" element={<ClerkRouter />} />
           {/* <Route path="/hod/*" element={<HodRouter />} /> */}
           <Route path='/test-api' element={<TestAPI/>} />
           
         </Routes>
      
         <Footer/>    
    </div>
  );
};

export default App;
