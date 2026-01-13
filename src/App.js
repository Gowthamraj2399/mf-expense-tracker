import React, { useState, useEffect } from "react";
import { Routes, Route, Router, Navigate } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";

import Dashboard from "./components/Dashboard";

export default ({ history }) => {
  return (
    <div>
      <StyledEngineProvider injectFirst>
        <Dashboard />
      </StyledEngineProvider>
    </div>
  );
};
