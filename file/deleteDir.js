const fs = require('fs')

fs.rmdir('./newDir',(error,files) =>{
    if(error) return console.error('Error: ',error)
    console.log('Carpeta borrada sin problemas')
})