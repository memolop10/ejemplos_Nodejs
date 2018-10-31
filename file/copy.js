const {copyFile: meCopeo} = require('fs')

meCopeo('./file.txt', './copied2.txt',error =>{
    if(error) return console.error('Error: ',error)
    console.log('copiado sin problemas')
})