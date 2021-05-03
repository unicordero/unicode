const express = require('express'); 
const app = express(); 
const port = 3000; 
app.get('/', (req, res) => { 
  res.send('Hola, ten una cordial bienvenida a nuestra plataforma educativa, aquí aprenderás muchas cosas relacionadas con la programación'); 
}) 

app.listen(port, () => { 
  console.log(`Example app listening at http://localhost:${port}`); 
}) 
process.env.RUNKIT_ENDPOINT_URL;
