// import { Route,Routes } from "react-router-dom";
// import AdminDashboard from "./AdminDashbord";
// import AdminReports from "./AdminReports";
// import SubAdminManageUsers from "./SubAdminManageUsers";
// import AddSubadmin from "./AddSubadmin";

// const AdminRouter = () =>{
//     return(
//     <>
//     {/* <AdminDashboard/> */}
//     <Routes>
//         <Route path="/admindash" element={<AdminDashboard/>} />
//         <Route path="/manageuser" element={<SubAdminManageUsers />} />
//         <Route path="/reports" element={<AdminReports/>} />
//         <Route path="/addsubadmin" element={<AddSubadmin/>} />
//     </Routes>
//     </>
//     );
// }

// export default AdminRouter;
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./AdminDashbord"
import AdminReports from "./AdminReports";
import SubAdminManageUsers from "./SubAdminManageUsers";
import AddSubadmin from "./AddSubadmin";

const AdminRouter = () => {
  return (
    <Routes>
      {/* AdminDashboard remains as the parent */}
      <Route path="/" element={<AdminDashboard />}>
        <Route path="manageuser" element={<SubAdminManageUsers />} />
        <Route path="reports" element={<AdminReports />} />
        <Route path="addsubadmin" element={<AddSubadmin />} />
      </Route>
    </Routes>
  );
};

export default AdminRouter;
