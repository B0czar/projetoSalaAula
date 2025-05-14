/* aula 1
const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes');

// Configura o mecanismo de views para EJS
app.set('view engine', 'ejs');

// Define onde ficam as views
app.set('views', path.join(__dirname, 'views'));

// Define a pasta pública com CSS e outros arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Usa o arquivo de rotas
app.use('/', routes);

// Inicia o servidor na porta 3000
app.listen(3001, () => {
  console.log('Servidor rodando em http://localhost:3001');
}); */



const express = require('express');
const app = express();
const path = require('path');
const alunosRoutes = require('./routes/alunos');
const bodyParser = require('body-parser');
require('dotenv').config();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/alunos', alunosRoutes);

app.get('/', (req, res) => {
  res.redirect('/alunos');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

const cursosRoutes = require('./routes/cursos');
app.use('/cursos', cursosRoutes);

const professoresRoutes = require('./routes/professores');
app.use('/professores', professoresRoutes);