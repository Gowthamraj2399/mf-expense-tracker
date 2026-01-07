import React, { useState, useEffect } from "react";
import { Routes, Route, Router, Navigate } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";

import Dashboard from "./components/Dashboard";

export default ({ history }) => {
  const [location, setLocation] = useState(history.location);

  useEffect(() => {
    // Listen to history changes and update location state
    const unlisten = history.listen((update) => {
      setLocation(update.location);
    });

    return unlisten; // Clean up the listener on unmount
  }, [history]);

  return (
    <div>
      <StyledEngineProvider injectFirst>
        <Router location={location} navigator={history}>
          <Routes>
            <Route path="/expense-tracker/dashboard" element={<Dashboard />} />
            <Route
              path="/expense-tracker"
              element={<Navigate to="/expense-tracker/dashboard" />}
            />
            <Route
              path="/"
              element={<Navigate to="/expense-tracker/dashboard" />}
            />
          </Routes>
        </Router>
      </StyledEngineProvider>
    </div>
  );
};
