import React from 'react';
import { Routes as Router, Route } from 'react-router';

/**
 * Paginas
 */
import Dashboard from './pages/Dashboard';
import PrepareStage from './pages/PrepareStage';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';

export default function Routes() {
  return (
    <Router>
      <Route path="/" element={<Dashboard />} />
      <Route path="/prepare" element={<PrepareStage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/result" element={<ResultPage />} />
    </Router>
  );
}
