import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Layout from '../components/Layout6';

/* =============================================================================
<AppNavigation />
============================================================================= */
const AppNavigation = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* <Route path="add-user" element={<AddUser />} />
          <Route path="face-verification" element={<FaceVerification />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
};

/* Export
============================================================================= */
export default AppNavigation;
