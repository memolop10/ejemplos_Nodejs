const express = require('express')
const app = express()


const html = `
    <p> pumas</p>
    <strong>EL MEJOR EQUIPO</strong>
`

    const logger = (req,resp,next) =>{
        console.log(`> log ${req.path}`)
        next()
    }
    //middleware global
    app.use(logger)

        //end point
    app.get('/',(req,resp) =>{
        resp.send(html)
    })

        app.listen(8080,() =>{
            console.log('app listen on port 8080')
        })