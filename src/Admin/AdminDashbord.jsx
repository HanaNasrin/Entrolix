import React from "react";

const AdminDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold">Manage Sub Admin</h2>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold">Manage Clerk</h2>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold">Manage HOD</h2>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold">Monitor Students</h2>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold">View Reports & Analysis</h2>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;