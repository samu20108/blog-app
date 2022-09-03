import React from "react";
import "./App.css";
import Main from "./Main";
import Admin from "./Admin";
import Editor from "./Editor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = (): React.ReactElement => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/editor" element={<Editor />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
