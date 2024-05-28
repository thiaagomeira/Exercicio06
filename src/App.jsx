import React from 'react'
import Navbar from './components/Navbar'
import Inicial from './pages/Inicial';
import Afaculdade from './pages/Afaculdade';
import DpoLgpd from './pages/DpoLgpd';
import Noticias from './pages/Noticias';
import VisualizaNoticia from './pages/ViazualizaNoticia';
import AdminNoticias from './pages/admin/AdminNoticias';
import EditarNoticia from './pages/admin/EditarNoticia';
import CadastroNoticia from './pages/admin/CadastroNoticia';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container, Box } from '@mui/material'
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Box display="flex" alignItems="center" justifyContent="space-between" p={2}>
          <img src='uniesp.jpg' width={100} height={100} alt="Uniesp Logo" />
          <Navbar />
        </Box>
        <Box mt={4}>
          <Routes>
            <Route path='/' element={<Inicial />} />
            <Route path='/a-faculdade' element={<Afaculdade />} />
            <Route path='/dpo-lgpd' element={<DpoLgpd/>} />
            <Route path='/noticias' element={<Noticias />} />
            <Route path='/visualiza-noticia/:id' element={<VisualizaNoticia />} />
            <Route path="/admin-noticias" element={<AdminNoticias />} />
            <Route path="/cadastrar-noticia" element={<CadastroNoticia />} />
            <Route path="/editar-noticia/:id" element={<EditarNoticia />} />
          </Routes>
        </Box>
      </Container>
    </BrowserRouter>
  )
}

export default App