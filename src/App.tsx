import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Dashboard from './components/dashboard';
import TaskPage from './components/TaskPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="*" element={<Navigate to="/" />} /> {/* Redirige cualquier ruta desconocida al Login */}
      </Routes>
    </Router>
  );
};

export default App;
