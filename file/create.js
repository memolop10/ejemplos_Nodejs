const { writeFile, writeFileSync} = require('fs')


// const Obj ={
//     saludo:'me caes mal',
//     despedida: 'No no es cierto'
// } 

// const content = JSON.stringify(Obj)

// writeFile('./created.json', content,error =>{
//     if(error) return console.error('Error : ',error)
//     console.warn('Archivo creado')
// })

//Sincrono

// try{
//     writeFileSync('./noexiste/created.txt',content);
// }catch(error){
//     console.error("Error : ", error)
// }

//     console.warn('sigo live')


try{
    const x = 2;
    if(x === 1) throw new Error('No me gusta el 1 >-<')
    console.log('WUJU!')
}catch(error){
    console.error('Error catched: ',error)
}

    console.warn('Esto se ejecuto :D')