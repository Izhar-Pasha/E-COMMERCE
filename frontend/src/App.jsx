import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home';
import Success from './Pages/Success';
import NotFound from './Pages/NotFound';
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Success' element={<Success />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Toaster />
      </Router>
      <Analytics />
    </>

  )
}

export default App