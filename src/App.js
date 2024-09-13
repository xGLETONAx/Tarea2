import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';  
import CursoDesarrolloWeb from './components/CursoDesarrolloWeb';
import CursoArquitecturaComputadoras from './components/CursoArquitecturaComputadoras';
import CursoAnalisisSistemas from './components/CursoAnalisisSistemas';
import CursoEticaProfesional from './components/CursoEticaProfesional';
import CursoRedesComputadoras from './components/CursoRedesComputadoras';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/desarrollo-web" element={<CursoDesarrolloWeb />} />
        <Route path="/arquitectura-computadoras" element={<CursoArquitecturaComputadoras />} />
        <Route path="/analisis-sistemas" element={<CursoAnalisisSistemas />} />
        <Route path="/etica-profesional" element={<CursoEticaProfesional />} />
        <Route path="/redes-computadoras" element={<CursoRedesComputadoras />} />
      </Routes>
    </Router>
  );
}

export default App;
