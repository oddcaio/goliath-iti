import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Erro from './Erro';
import Certificados from '../src/pages/certificados/Certificados';
import Home from '../src/pages/home/Home';
import Distribuicao from './pages/distribuicao/Distribuicao';
function App() {

  return (
    <BrowserRouter>
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/certificados" element={<Certificados />} />
        <Route path="/estrutura" />
        <Route path="/distribuicao" element={<Distribuicao />}/>
        <Route path="*" element={<Erro />} />
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App
