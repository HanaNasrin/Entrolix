import { Route,Routes } from "react-router-dom";
import AdminDashboard from "./AdminDashbord";
import AdminReports from "./AdminReports";
import SubAdminManageUsers from "./SubAdminManageUsers";

const AdminRouter = () =>{
    return(

    <Routes>
        <Route path="/admindash" element={<AdminDashboard/>} />
        <Route path="/manageuser" element={<SubAdminManageUsers />} />
        <Route path="/reports" element={<AdminReports/>} />
    </Routes>
    );
}

export default AdminRouter;