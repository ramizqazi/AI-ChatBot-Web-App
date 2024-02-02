import React from 'react';
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';

import Chat from '../containers/Chat';
import Layout from '../components/Layout';
import Settings from '../containers/Settings';

/* =============================================================================
<AppNavigation />
============================================================================= */
const AppNavigation = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/chat" />} />
          <Route path="chat" element={<Chat />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  );
};

/* Export
============================================================================= */
export default AppNavigation;
