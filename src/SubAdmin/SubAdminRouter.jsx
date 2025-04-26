import { Routes,Route } from "react-router-dom";
import AdmissionSchedule from "./AdmissionSchedule";
import ManageAdmission from "./ManageAdmission";
import ManageUsers from "./ManageUsers";
import SubAdminReports from "./SubAdminReports";
import SubAdminDash from "./SubAdminDash";
import AdmissionScheduleForm from "./AdmissionScheduleForm";

const SubAdminRouter = () =>{

    return(
    <Routes>
            <Route path="/" element={<SubAdminDash/>} >
                <Route path="/schedule" element={<AdmissionSchedule />} />
                <Route path="/manageadmission" element={<ManageAdmission />} />
                <Route path="/manageusers" element={<ManageUsers />} />
                <Route path="/reports" element={<SubAdminReports />} />
                <Route path="/form" element={<AdmissionScheduleForm/>} />

            </Route>
    </Routes>
    );
}

export default SubAdminRouter;