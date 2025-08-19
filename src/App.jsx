import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";

import { ToastContainer } from "react-toastify";
import Home from "./Pages/Home";

const App = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.3 }}
    >
      <BrowserRouter>
        <ToastContainer position="top-right" theme="colored" autoClose={3000} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </motion.div>
  );
};

export default App;
