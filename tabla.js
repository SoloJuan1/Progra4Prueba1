// Iniciando servidor http
const http= require('http')
const host= "localhost"
const port=8080
const server =http.createServer(function(peticion,respuesta){
    respuesta.writeHead(200,{'Content-Type':'text/plain'})
    respuesta.write('Probando servidor');
    respuesta.end()
})

server.listen(port,host,function(){
    console.log(`Servidor Inicializado: http://${host}:${port}`)
})

