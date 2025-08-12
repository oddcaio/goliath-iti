import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom';
import Erro from './Components/Erro';
function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/"></Route>
        <Route path="*" element={<Erro/>}></Route>
      </Routes>
    </div>
  );
}

export default App
