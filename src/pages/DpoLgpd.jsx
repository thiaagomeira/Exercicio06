import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const DpoLgpd = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" gutterBottom>LGPD e o Papel do DPO</Typography>
      
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>O que é a LGPD?</Typography>
        <Typography variant="body1">
          A Lei Geral de Proteção de Dados (LGPD) é a legislação brasileira criada para regular o uso de dados pessoais. 
          Ela estabelece diretrizes para a coleta, armazenamento, processamento e compartilhamento de informações, garantindo os direitos de privacidade e proteção dos dados dos cidadãos.
        </Typography>
      </Paper>
      
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>O Papel do DPO</Typography>
        <Typography variant="body1">
          O Data Protection Officer (DPO) é o profissional encarregado de zelar pela conformidade da organização com a LGPD. 
          Suas funções incluem a implementação de políticas de privacidade, a supervisão das práticas de tratamento de dados, a realização de treinamentos internos e a comunicação com a Autoridade Nacional de Proteção de Dados (ANPD).
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>Importância da LGPD</Typography>
        <Typography variant="body1">
          A LGPD é essencial para assegurar a proteção dos dados pessoais dos indivíduos, promovendo transparência e responsabilidade no uso dessas informações. 
          Cumprir a LGPD ajuda a evitar sanções legais e melhora a confiança e a reputação das organizações junto aos seus clientes.
        </Typography>
      </Paper>
      
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>Como a UNIESP se Adequa à LGPD</Typography>
        <Typography variant="body1">
          A UNIESP adota uma série de medidas para garantir a conformidade com a LGPD, incluindo políticas rigorosas de segurança da informação, treinamentos regulares para os funcionários e auditorias periódicas. 
          Nosso DPO está disponível para esclarecer dúvidas e assegurar que todas as práticas de tratamento de dados estejam alinhadas com a legislação vigente.
        </Typography>
      </Paper>
    </Box>
  );
}

export default DpoLgpd;
