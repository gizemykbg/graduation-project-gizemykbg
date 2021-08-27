import React from "react";

import Sidebar from "../components/admin/sidebar";

function AdminPage() {
  return (
    <div className="welcome">
      <Sidebar />
      <div>
        <h2>Welcome Admin</h2>
      </div>
    </div>
  );
}

export default AdminPage;
