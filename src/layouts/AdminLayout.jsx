import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';

const AdminLayout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AdminLayout;
