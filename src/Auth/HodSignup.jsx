// import { useEffect, useState } from "react";
// import axios from "axios";

// const StudentDash = () => {
//     const [notifications, setNotifications] = useState([]);

//     useEffect(() => {
//         fetchNotifications();
//     }, []);

//     const fetchNotifications = () => {
//         axios.get("http://localhost:8000/api/notifications/", {
           
//         })
//         .then((response) => {
//             setNotifications(response.data);
//         })
//         .catch((error) => {
//             console.error("Failed to fetch notifications:", error);
//         });
//     };

//     return (
//         <div>
//             <h2>Notifications</h2>
//             {notifications.length > 0 ? (
//                 notifications.map((notif) => (
//                     <div key={notif.id} style={{ padding: "10px", background: "#f8f9fa", margin: "5px 0" }}>
//                         {notif.message}
//                     </div>
//                 ))
//             ) : (
//                 <p>No new notifications.</p>
//             )}
//         </div>
//     );
// };

// export default StudentDash;



// useEffect(()=>{

//     axios
//   .get('http://localhost:8000/api/notifications/')
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
    
// },[])