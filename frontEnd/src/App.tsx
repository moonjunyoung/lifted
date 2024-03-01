import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import AuthPage from './page/AuthPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/AuthPage' element={<AuthPage />} />
          <Route />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
