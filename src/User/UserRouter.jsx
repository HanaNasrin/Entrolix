// import { Route, Routes } from "react-router-dom";
// import Payment from "./Payment";
// import UploadDocuments from "./UploadDocuments";
// import UserAlerts from "./UserAlerts";
// import UserChat from "./UserChat";
// import UserDashboard from "./UserDashboard";
// import ViewDetails from "./ViewDetails";



// const UserRouter=()=>{
//     return(

// <Routes>
//             <Route path="/upload" element={<UploadDocuments />} />
//             <Route path="/useralerts" element={<UserAlerts />} />
//             <Route path="/userchat" element={<UserChat />} />
//             <Route path="/dashboard" element={<UserDashboard />} />
//             <Route path="/details" element={<ViewDetails />} />
//             <Route path="/payment" element={<Payment />} />
// </Routes>
//     );
// }

// export default UserRouter;
import { Route, Routes } from "react-router-dom";
import Payment from "./Payment";
import UploadDocuments from "./UploadDocuments";
import UserAlerts from "./UserAlerts";
import UserChat from "./UserChat";
import UserDashboard from "./UserDashboard";
import ViewDetails from "./ViewDetails";

const UserRouter = () => {
  return (
    <Routes>
      {/* Dashboard Route with children */}
      <Route path="/dashboard" element={<UserDashboard />}>
        <Route path="upload" element={<UploadDocuments />} />
        <Route path="payment" element={<Payment />} />
        <Route path="useralerts" element={<UserAlerts />} />
        <Route path="userchat" element={<UserChat />} />
        <Route path="details" element={<ViewDetails />} />
      </Route>
    </Routes>
  );
};

export default UserRouter;
