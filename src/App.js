import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            authenticated ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Login setAuthenticated={setAuthenticated} />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            authenticated ? <Dashboard /> : <Navigate to="/" replace />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
