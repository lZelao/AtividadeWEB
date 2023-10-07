const express = require('express');
const app = express();


// Configuração da pasta de arquivos estáticos (onde o HTML será servido)
app.use(express.static('public'));

// Rota para a página inicial
app.get('/', (req, res) => {
  res.render('/public/index.html');
});

// Inicia o servidor na porta especificada
app.listen(3030, () => {
  console.log(`Servidor rodando em http://localhost:3030`);
});
