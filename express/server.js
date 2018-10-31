const http = require('http')

const server = http.createServer((req,res)=>{
    console.warn('req.url:', req.url)
        res.writeHead(200,{
            'Content-Type':'application/json',
            'Kodemia':'white'
        })
        
//     res.writeHead(200,{'Content-Type': 'text/html'})
//     res.write('<!DOCTYPE HTML>')
//     res.write('<h1>Koder\'s server </h1>')
//     res.end()
// })

//     server.listen('8080',() =>{
//         console.log('servidor levantado')




            switch (req.url) {
                case '/':
                        res.write(JSON.stringify({Hola:'root'}))                  
                    break;

                case '/kodemia':
                        res.write(JSON.stringify({Hola:'Kodemia'}))
                    break;
            
                default:
                    res.write(JSON.stringify({Hola:'Default'}))
                    break;
            }
            res.end()
    })

    server.listen('8080',() =>{
          console.log('servidor levantado')
        })


        