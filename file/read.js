const fs = require('fs')

// asincrono  no bloqueante
fs.readFile('./file.txt','utf8',(error,data)=>{
    if(error) return console.error('>>error: ',error)
    console.log('>>FILE CONTENT',data)
})

//sincrono bloqueante
const txtContent = fs.readFileSync('./file.txt','utf8')
console.log('txt content: ', txtContent)