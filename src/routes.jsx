// import { Backdrop, CircularProgress } from '@material-ui/core';
// import React, { Suspense } from 'react';
import React from 'react';
import { Routes as Router, Route } from 'react-router';

/**
 * Paginas
 */
import Dashboard from './pages/Dashboard';
import Dashboard2 from './pages/Dashboard2';

export default function Routes() {
  return (
    <Router>
      <Route path="/" element={<Dashboard />} />
      <Route path="/2" element={<Dashboard2 />} />
    </Router>
  );
}
