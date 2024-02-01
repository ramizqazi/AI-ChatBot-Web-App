import React from 'react';
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';

import Chat from '../containers/Chat';
import Layout from '../components/Layout';

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
          {/* <Route path="face-verification" element={<FaceVerification />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
};

/* Export
============================================================================= */
export default AppNavigation;
