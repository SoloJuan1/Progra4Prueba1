// Iniciando servidor http
const http= require('http')
const host= "localhost"
const port=8080
const server =http.createServer(function(peticion,respuesta){
    respuesta.writeHead(200,{'Content-Type':'application/json'})
    swithc(peticion.url){
       case '1':

       case '2':

       case '3':

       case '4':

       case '5':

       case '6':

       case '7':

       case '8':

       case '9':

       case '10':

       default:
        respuesta.writeHead(404,{'Content-Type':'text/plain'})
        respuesta.write('Pagina no Disponible')

    }


    respuesta.end()
})

server.listen(port,host,function(){
    console.log(`Servidor Inicializado: http://${host}:${port}`)
})


