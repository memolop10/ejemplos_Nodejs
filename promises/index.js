const saludar = require('./promesas')

//callback

// saludar('Memolop',(error ,data)=>{
//     if (error) return console.error('Error: ',error)
//     console.log('Done : ',data)
// })



//promise
// saludar('Memolop10')
//     .then(response => {
//         console.warn('>> then ', response )
//     })

//     .catch(error => {
//         console.error('>> ERROR: ', error)
//     })




// async / await
async function main() {
    const result = await saludar('Memolop')
    console.warn('>>result: ', result)
}

main()