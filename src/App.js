import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AdminNavbar from './Components/AdminNavbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

const Layout = () => {
  // const location = useLocation();
  // const shouldHideNavbar = ['/clerkdashboard'];
  // const hideNavbar = shouldHideNavbar.includes(location.pathname);
  const isAdmin=false

  return (
    <div>
      {/* {!hideNavbar && <Navbar />} */}
      
        {/* <Routes> 
          {/* Define routes directly */}

          <Routes>
           {/* <Route path='/' element={<Home />} /> */}
         </Routes>



          {/* <Route path='/login' element={<Login />} />
          <Route path='/usersignup' element={<UserSignUp />} />
          <Route path='/adminlogin' element={<AdminLogin />} />
          <Route path='/hodsignup' element={<HodSignup />} />
          <Route path='/clerkdashboard' element={<ClerkDashboard />} />
          <Route path='/clerksignup' element={<ClerkSignup />} />
          <Route path='/subadminsignup' element={<SubAdminSignup />} />
          <Route path='/admindashboard' element={<AdminDashboard/>}/>
          <Route path='/hodalerts' element={<HodAlerts/>}/>
          <Route path='/addadmission' element={<AddAdmissionSchedule/>}/>
          <Route path='/editadmission' element={<EditAdmissionSchedule/>}/>
          <Route path='/hoddash' element={<HodDash/>}/> */} 

          {/* Mapping additional routes from Routers array if it's an array */}
          {/* {Array.isArray(Routers) &&
            Routers.map(({ path, element }, index) => (
              <Route key={index} path={path} element={element} />
            ))}
        </Routes>
      </div>
      {!hideNavbar && <Footer />} */}


        {isAdmin?<AdminNavbar/>:<Navbar/>}

          <Home/>

        <Footer/>
    </div>
  );
};

export default App;
