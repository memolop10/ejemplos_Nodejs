const fs = require ('fs')
const dirContent = fs.readdirSync('./folder-to-delete/')
const isEmptyDir = !dirContent[0]

if (!isEmptyDir){
  console.log('Voy a borrar archivos')
  dirContent.forEach(file => fs.unlinkSync(`./folder-to-delete/${file}`))
} else {
  console.log('no voy a borrar archivos')
}
fs.rmdirSync('./folder-to-delete/')

// fs.readdir('./newDir', (error,file) => {
//     file.forEach( file => {
//         fs.unlink(`./newDir/ $(file)`,(error)=>{
//                 if(error) return console.error("Error :" ,error)

//                 console.log('files eliminados')
//         })
//     });if(error) return console.log("Error :",error)
//     console.log('carpeta DELETE')

//     fs.rmdir("./newDir",(error) => {
//         if(error) return console.error("Error en  : ",error);
//         console.warn("Carpeta final eliminada");
//     })
// })  

