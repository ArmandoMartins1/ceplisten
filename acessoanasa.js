const https = require('https');
https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',
(resp) => {
let dados = '';
// Um bloco de dados foi recebido.
resp.on('data', (chunk) => { dados += chunk; });
// Toda a resposta foi recebida. Exibir o resultado.
resp.on('end', () => {
console.log(dados);
});
}).on("error", (err) => {
console.log("Error: " + err.message);
});
