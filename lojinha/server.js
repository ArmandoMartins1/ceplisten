const express = require('express')
const app = express()
const port = 3000
produtos=[
{codigo:1, nome:'Fone de Ouvido', preco:219.56},
{codigo:2, nome:'Caneca', preco:7.12},
{codigo:3, nome:'Mochila', preco: 120} ]

app.get('/produtos', (req, res) => {
 res.send(produtos);
 })
 
 app.get('/', (req, res) => {
 res.send("<h1>Bem Vindos</h1> <br> <p>Essa é a nossa loja!</p>");
})
app.listen(port, () => {
 console.log(`Esta aplicação está escutando a porta
${port}`)
})