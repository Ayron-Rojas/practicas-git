const http = require('http');

const PORT = 3000;
let users = [
  { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
  { id: 2, name: "Bob", age: 30, email: "bob@example.com" },
  { id: 3, name: "Charlie", age: 28, email: "charlie@example.com" }
];

// Crear el servidor HTTP
const server = http.createServer((req, res) => {
  // Manejar solo solicitudes GET
  if (req.method === 'GET') {

    const name = req.url.split("?")[1];
    

    const user = users.map(user => user.name === name);

    if (user) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(user));
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('User not found\n');
    }}
//   } else {
//     // Responder a otras solicitudes con un mensaje de error
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('404 Not Found\n');
//   }
});       

// Iniciar el servidor
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
