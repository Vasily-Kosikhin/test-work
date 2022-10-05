import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, Outlet } from 'react-router-dom';
import './App.scss';
import ContentPage from './components/ContentPage/ContentPage';
import Layout from './components/Layout/Layout';
import Navbar from './components/Navbar/Navbar';
import NotExistingPage from './components/NotExistingPage/NotExistingPage';
import { useActions } from './hooks/useActions';
import OrderVps from './pages/OrderVps';
import { appPaths } from './utils/constants';

function App() {
  const fetchVpsConfig = useActions();
  useEffect(() => {
    fetchVpsConfig();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path={appPaths.order} element={<Layout></Layout>}>
          <Route index element={<ContentPage />} />
          <Route path="*" element={<NotExistingPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
