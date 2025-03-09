import { Route,Routes } from "react-router-dom";
import AddAlertsChats from "./AddAlertsChats";
import ClerkDashboard from "./ClerkDashboard";
import ClerkReports from "./ClerkReports";
import Scholarships from "./Scholarships";

const ClerkRouter = () =>{

    return(
<Routes>
        <Route path="/addalert" element={<AddAlertsChats/>} />
        <Route path="/clerkdash" element={<ClerkDashboard />} />
        <Route path="/reports" element={<ClerkReports/>} />
        <Route path="/scholarships" element={<Scholarships />} />
</Routes>
    );
}
export default ClerkRouter;