import React from "react";
import Router from "./components/routerProtected/router";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Router />}></Route>
    </Routes>
  );
}

export default App;
