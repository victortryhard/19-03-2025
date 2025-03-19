const express = require('express')
const app = express();
const port = 3000;

app.get('/',(request, response) => {
    response.send('olá Codespaces!!!');
});

app.get('/',(request, response) => {
    response.send('Boa Tarde');
});



app.listen(port,() => {
    console.log('aplicação em execução na porta') +port

});