const express = require("express");
const Cal_Cont = require("./Controler/Cal_Cont");

const app = express();
app.use(express.json());

const port = 3000;

app.get("/soma", Cal_Cont.soma);
app.listen(port, () => console.log('Servidor rodando na porta 3000'));
module.exports = app;