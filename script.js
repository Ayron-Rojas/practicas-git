/*const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('¿Cómo te llamas? ', (answer) => {
  console.log(`Hola , ${answer}!`);
  rl.close();
});*/

// const os = require('os')
// console.log(os.hostname())    

 


const fs = require('fs')
const http = require('http');

const PORT = 3000;
// request
const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    const nombre = req.url.split('?')[1];
    const edad = req.url.split('?')[2];
    const eleccion = req.url.split('?')[3];
  
    if(edad>=18) {
      res.end('hola ' + nombre + ' eres mayor de edad\n');
      fs.appendFileSync('texto2.txt', `${nombre} archivo creado usando librerias de NODE en ejercicio para practicas\n`)
    } else if(eleccion == 'si'){
      res.end('hola ' + nombre + ' eres menor de edad y no tienes permisos.\n');
    }


  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found\n');
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});