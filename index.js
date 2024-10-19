const express = require('express')
const router = require('./src/routes/pessoa')

//instanciar express
const app = express()

//middlewares json - aceita json no body
app.use(express.json())

//adicionar as rotas  ao express
 app.use(router)

//inicializar o servidor
app.listen(3000, () => "Servidor inicializado na porta 3000")





