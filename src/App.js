import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AdminNavbar from './Components/AdminNavbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home';
import Login from './Auth/Login';
import UserSignUp from './Auth/UserSignup';
import UserRouter from './User/UserRouter';
import AdminRouter from './Admin/AdminRouter';
import SubAdminRouter from './SubAdmin/SubAdminRouter';
import TestAPI from './Clerk/Scholarships';
import AdmissionScheduleForm from './SubAdmin/AdmissionScheduleForm';
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
  const isAdmin=true

  return (
    <div>
          {isAdmin?<AdminNavbar/>:<Navbar/>}
          <Routes>
            
           <Route path='/' element={<Home />} />
           <Route path="/login" element = { <Login/> } />
           <Route path='/usersignup' element={<UserSignUp />} />
           <Route path="/*" element={<UserRouter />} />
           <Route path="/admin/*" element={<AdminRouter />} />
           <Route path="/subadmin/*" element={<SubAdminRouter />} />
           <Route path='/test-api' element={<TestAPI/>} />

         </Routes>
      
         {isAdmin?null:<Footer/>}       
    </div>
  );
};

export default App;
