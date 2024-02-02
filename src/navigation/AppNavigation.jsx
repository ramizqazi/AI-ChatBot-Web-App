import React from 'react';
import {
  Routes,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';

// import Chat from '../containers/Chat';
import Layout from '../components/Layout';
import Settings from '../containers/Settings';
import SpeechToText from '../containers/SpeechToText';

/* =============================================================================
<AppNavigation />
============================================================================= */
const AppNavigation = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<SpeechToText />} />
          <Route path="chat" element={<SpeechToText />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  );
};

/* Export
============================================================================= */
export default AppNavigation;
