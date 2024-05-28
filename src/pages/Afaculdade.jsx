import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';

const Afaculdade = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" gutterBottom>Sobre a Faculdade UNIESP</Typography>
      
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>Missão e Visão</Typography>
        <Typography variant="body1">
          Nossa missão é transformar vidas através da educação, oferecendo ensino de qualidade e acessível para todos. 
          Visamos ser líderes em educação inclusiva, inovando constantemente para atender às necessidades da sociedade moderna.
        </Typography>
      </Paper>
      
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>Infraestrutura</Typography>
        <Typography variant="body1">
          A Faculdade UNIESP possui um campus equipado com tecnologia de ponta, incluindo salas de aula interativas, laboratórios especializados, e um centro de inovação. 
          Nossas instalações são projetadas para criar um ambiente de aprendizado estimulante e colaborativo.
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>Cursos Oferecidos</Typography>
        <Typography variant="body1">
          A UNIESP oferece cursos variados, alinhados com as demandas do mercado de trabalho e as tendências globais. Entre os cursos disponíveis, destacam-se:
          <ul>
            <li>Medicina</li>
            <li>Engenharia Civil</li>
            <li>Design de Moda</li>
            <li>Ciências Biológicas</li>
            <li>Marketing Digital</li>
            <li>Fisioterapia</li>
            <li>Tecnologia da Informação</li>
          </ul>
          Nossos programas são desenhados para proporcionar uma formação completa e prática.
        </Typography>
      </Paper>
      
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>Programas de Extensão</Typography>
        <Typography variant="body1">
          A UNIESP promove uma série de programas de extensão, que incluem cursos de curta duração, workshops, seminários, e projetos comunitários. 
          Esses programas visam expandir o conhecimento e as habilidades dos alunos, além de promover a integração com a comunidade.
        </Typography>
      </Paper>
      
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>Contato</Typography>
        <Typography variant="body1">
          Para saber mais sobre a Faculdade UNIESP, entre em contato conosco:
          <ul>
            <li>Email: atendimento@uniesp.edu.br</li>
            <li>Telefone: (11) 9876-5432</li>
            <li>Endereço: Avenida do Conhecimento, 456, São Paulo, SP</li>
          </ul>
        </Typography>
      </Paper>
    </Box>
  )
}

export default Afaculdade;
