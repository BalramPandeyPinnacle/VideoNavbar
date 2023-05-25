import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Home'
import About from './About'

export default function ReactRouter() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/home" element={<h3>Home </h3>}>

        </Route>
      </Routes>
      </BrowserRouter>
      
    </>
  )
}
