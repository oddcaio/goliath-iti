import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom';
import Erro from './Erro';
import Certificados from './pages/Certificados';

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" />
        <Route path="/certificados" element={<Certificados />} />
        <Route path="/estrutura" />
        <Route path="*" element={<Erro />} />
      </Routes>
    </div>
  );
}

export default App
