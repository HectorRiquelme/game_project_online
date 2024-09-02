const http = require('http');

// Crear un servidor HTTP simple
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Servidor en ejecución. ¡Listo para agregar más lógica!\n');
});

// El servidor escucha en el puerto 8080 (dentro del contenedor)
server.listen(8080, () => {
  console.log('Servidor escuchando en el puerto 8080');
});
