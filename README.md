# Uniesp: Front-end III
Este repositório é dedicado à disciplina Front-end III do curso de Sistemas para Internet da universidade Uniesp, onde utilizamos JavaScript e a biblioteca React.


## Exercício 06:
### Temas abordados:
- React Router dom
- Axios

### Exercícios:

#### Exercício 01:
Crie um BrowserRouter através de React Router no componente principal do seu projeto React.
- Vamos simular alguns links do site da uniesp:
- "https://www.iesp.edu.br/institucional/a-faculdade"
- "https://www.iesp.edu.br/institucional/dpo-lgpd"
- "https://www.iesp.edu.br/noticias"
- Crie Rotas para simularmos cada um dessesitens.
- O conteúdo de cada uma das páginasfaremos nos próximos exercícios.
- Por enquanto vamos deixar apenas um<h1> como o título que diferencia cadapágina/componente.

#### Exercício 02:
Crie uma Navbar que contenha os links necessários para abrir cada um das nossas futuras páginas.
- Mostre o funcionamento da sua Navbar na página inicial.
- Copie e cole os conteúdos das páginas: “A Faculdade” e “DPOLgpd” para seus respectivos
componentes. (Apenas os textos).
- O Componente principal não precisa ter conteúdo.
- No próximo exercício trabalharemos com o link “notícias”

#### Exercício 03:
Agora vamos criar o componente (página) de notícias da UNIESP.
- Faça um back-end fake no seu projeto que tenha no banco de dados as 3 notícias mais recentes do site da uniesp.
- Cada notícia deve ter as seguintes propriedades:
  • Título
  • Subtítulo
  • Texto da Notícia
  • Não é necessário ter imagens.
  • O componente que lista todas as notícias deve listar apenas Título e Subtítulo de cada notícia
  • O componente que abre uma notícia (através do clique em seu título) deve exibir todas as propriedades da notícia (menos o id)

#### Exercício 04:
- Traga o conteúdo do DPO LGPD para o backend fake e consequentemente para o componente do front.
- Utilizando axios.




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
