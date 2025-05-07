import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Footer from './Components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home';
import Login from './Auth/Login';
import UserSignUp from './Auth/UserSignup';
import UserRouter from './User/UserRouter';
import AdminRouter from './Admin/AdminRouter';
import SubAdminRouter from './SubAdmin/SubAdminRouter';
import TestAPI from './Clerk/Scholarships';
import ForgotPassword from './Auth/ResetPassword';
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

  return (
    <div>
          <Routes>
            
           <Route path='/' element={<Home />} />
           <Route path="/login" element = { <Login/> } />
           <Route path="/forgot" element = { <ForgotPassword/> } />
           <Route path='/usersignup' element={<UserSignUp />} />
           <Route path="/*" element={<UserRouter />} />
           <Route path="/admin/*" element={<AdminRouter />} />
           <Route path="/subadmin/*" element={<SubAdminRouter />} />
           <Route path='/test-api' element={<TestAPI/>} />
    
         </Routes>
      
            
    </div>
  );
};

export default App;
