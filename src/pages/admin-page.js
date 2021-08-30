import React from 'react';

import Sidebar from '../components/admin/sidebar';

import Table from '../components/admin/components/table';

function AdminPage() {
  return (
    <div className="welcome">
      <Sidebar />
      <div>
        <h2>Başvuru Listesi</h2>
        <Table />
      </div>
    </div>
  );
}

export default AdminPage;
