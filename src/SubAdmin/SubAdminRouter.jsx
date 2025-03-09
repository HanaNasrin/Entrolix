import { Routes,Route } from "react-router-dom";
import AddAdmissionSchedule from "./AddAdmissionSchedule";
import EditAdmissionSchedule from "./EditAdmissionSchedule";
import AdmissionSchedule from "./AdmissionSchedule";
import ManageAdmission from "./ManageAdmission";
import ManageUsers from "./ManageUsers";
import SubAdminReports from "./SubAdminReports";

const SubAdminRouter = () =>{

    return(
    <Routes>
                <Route path="/add" element={<AddAdmissionSchedule/>} />
                <Route path="/edit" element={<EditAdmissionSchedule />} />
                <Route path="/schedule" element={<AdmissionSchedule />} />
                <Route path="/manageadmission" element={<ManageAdmission />} />
                <Route path="/manageusers" element={<ManageUsers />} />
                <Route path="/reports" element={<SubAdminReports />} />
    </Routes>
    );
}

export default SubAdminRouter;