import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';

const Inicial = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" gutterBottom>Bem-vindo à Faculdade UNIESP</Typography>
      
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>Sobre a Faculdade</Typography>
        <Typography variant="body1">
          A Faculdade UNIESP é uma instituição de ensino superior comprometida com a formação de profissionais qualificados para o mercado de trabalho. 
          Oferecemos uma ampla gama de cursos de graduação e pós-graduação, com uma infraestrutura moderna e professores altamente qualificados.
        </Typography>
      </Paper>
      
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>Nosso Curso</Typography>
        <Typography variant="body1">
          O curso de Engenharia Aeroespacial da UNIESP é reconhecido pela sua excelência acadêmica e pelas oportunidades de pesquisa e desenvolvimento tecnológico. 
          Os alunos têm acesso a laboratórios de última geração e participam de projetos inovadores na área.
        </Typography>
      </Paper>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Notícias</Typography>
            <Typography variant="body1">
              Fique por dentro das novidades e eventos da UNIESP. Nossa seção de notícias mantém você informado sobre palestras, competições acadêmicas, 
              projetos de pesquisa em andamento e muito mais. Acesse nossa página de notícias para mais detalhes.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Área Administrativa</Typography>
            <Typography variant="body1">
              Acesse a área administrativa para gerenciar eventos e notícias da faculdade. Esta seção é exclusiva para administradores e oferece 
              funcionalidades como criação, edição e exclusão de conteúdo. Certifique-se de ter as permissões adequadas para acessar.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Inicial;
