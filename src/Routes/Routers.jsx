import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../Auth/Login'
import AdminLogin from '../Auth/AdminLogin'
import UserSignUp from '../Auth/UserSignUp'
import SubAdminSignUp from '../Auth/SubAdminSignup'
import ClerkSignUp from '../Auth/ClerkSignup'
import HodSignUp from '../Auth/HodSignup'

import AdminDashboard from '../Admin/AdminDashbord'

function Routers() {
  return (
    <div>
      <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/login' element={<Login/>}/>
              <Route path='/adminlogin' element={<AdminLogin/>}/>
              <Route path='/usersignup' element={<UserSignUp/>}/>
              <Route path='/subadminsignup' element={<SubAdminSignUp/>}/>
              <Route path='/clerksignup' element={<ClerkSignUp/>}/>
              <Route path='/hodsignup' element={<HodSignUp/>}/>
              
              <Route path='/admindashboard' element={<AdminDashboard/>}/>
              {/* <Route path='/clerkdashboard' element={<ClerkDashboard/>}/> */}
              
              

          </Routes>  
    </div>
  )
}

export default Routers
