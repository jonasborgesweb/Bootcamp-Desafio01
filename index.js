const express = require('express');

//Instanciando o Express
const server = express();

//Adicionando o Formato JSON
server.use(express.json());

const projects = [];

//Middleware se existe um projeto
function checkProjectExists(req, res, next){
  const { id } = req.params;

  if(!projects[id]){
    return res.status(400).json({ error: "Projeto not found" })
  }

  return next();
}

//Middleware do Log de requisições
function logRequest(req, res, next){
  console.time('Request');

  console.log(`Método: ${req.method}; URL: ${req.url}`);
  console.count("Numero de Requisições");

  next();

  console.timeEnd('Request');
}

server.use(logRequest);

//Rota para Listar todos os projetos
server.get('/projects', (req,res) => {
  return res.json(projects);
})

//Rota para Cadastrar todos os projetos
server.post('/projects', (req, res) => {
  const { id , title } = req.body;

  const project = {
    id,
    title,
    tasks: []
  }

  projects.push(project);

  return res.json(project);
})

//Rota para Adicionar uma nova tarefa no projeto escolhido por ID
server.post('/projects/:id/tasks', checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;


  const project = projects.find( p => p.id == id);

  project.tasks.push(title);

  return res.json(project);
})

//Rota para Editar um projeto por ID
server.put('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find( p => p.id == id);

  project.title = title;

  return res.json(project);
})

//Rota para Excluir um projeto por ID
server.delete('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params;

  projects.splice( id , 1)

  return res.send();

})




server.listen(3000);