import { Route,Routes } from "react-router-dom";
import HodDash from "./HodDash";
import HodAlerts from "./HodAlerts";


const HodRouter = () =>{

    return(
<Routes>
    <Route path="/hoddash" element={<HodDash/>} />
    <Route path="/alerts" element={<HodAlerts />} />
</Routes>
    );
}

export default HodRouter;