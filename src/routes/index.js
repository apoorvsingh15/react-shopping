import * as React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../containers/Home";

const AppRoutes = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter >
  );
}

export default AppRoutes;