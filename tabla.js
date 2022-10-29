// Iniciando servidor http
const http= require('http')
const host= "localhost"
const port=80
const server =http.createServer(function(peticion,respuesta){
    respuesta.writeHead(200,{'Content-Type':'application/txt'})
    respuesta.write('Probando servidor');
    respuesta.end()
})

server.listen(80,host,function(error){
    console.log(`Servidor Inicializado: http://${host}/${port}`)
})

