# Desafio 01 - Bootcamp GoStack 10

<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

<h3 align="center">
  Desafio 1: Conceitos do NodeJS
</h3>

<blockquote align="center">“Sua única limitação é você mesmo”!</blockquote>

# Get Starting 
Essas instruções fornecerão uma cópia do projeto em execução na sua máquina local para fins de desenvolvimento e teste.

## Sobre o desafio
Criar uma aplicação para armazenar projetos e suas tarefas do zero utilizando [Express](https://expressjs.com/pt-br/).

### Rotas

- `POST /projects`: A rota deve receber `id` e `title` dentro do corpo e cadastrar um novo projeto dentro de um array no seguinte formato: `{ id: "1", title: 'Novo projeto', tasks: [] }`; Certifique-se de enviar tanto o ID quanto o título do projeto no formato string com aspas duplas.

- `GET /projects`: Rota que lista todos projetos e suas tarefas;

- `PUT /projects/:id`: A rota deve alterar apenas o título do projeto com o `id` presente nos parâmetros da rota;

- `DELETE /projects/:id`: A rota deve deletar o projeto com o `id` presente nos parâmetros da rota;

- `POST /projects/:id/tasks`: A rota deve receber um campo `title` e armazenar uma nova tarefa no array de tarefas de um projeto específico escolhido através do `id` presente nos parâmetros da rota;

### Middlewares

- Crie um middleware que será utilizado em todas rotas que recebem o ID do projeto nos parâmetros da URL que verifica se o projeto com aquele ID existe. Se não existir retorne um erro, caso contrário permita a requisição continuar normalmente;

- Crie um middleware global chamado em todas requisições que imprime (`console.log`) uma contagem de quantas requisições foram feitas na aplicação até então;


## Pré-requisitos
O que você precisa para instalar o projeto
````
├── Node
├── Yarn
├── Express
├── Nodemon
````

## Instalação
Após clonar o projeto e instalar o NodeJS, siga os passos abaixo:

- Instalar o Yarn
````
yarn install
````

- Após realizar a instalação do Yarn, verificar se todas as dependencias foram instaladas:
````
├── Express
├── Nodemon
````

- Rodar o Nodemon
````
yarn dev
````

### Autor
Jonas Borges - Desenvolvedor Front End
Redes Sociais:
- [Linkedin](https://www.linkedin.com/in/jonasborgesweb/)
- [Instagram](https://www.instagram.com/jonasborgesweb/)

### Agradecimentos
Gostaria de agradecer a [Rocketseat](https://rocketseat.com.br/) por proporcionar essa experiência íncrivel aos aluno e também todas as pessoas que me apoiam nessa jornada de inicio de carreira, especialmente a toda minha familia e meus amigos que sempre estão me apoiando.

