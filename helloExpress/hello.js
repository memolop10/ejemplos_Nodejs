const express = require('express')
const app = express()

const json = JSON.stringify({
    equipo:'PUMAS',
    torneos:7
})

app.post('/',(req,resp)=>{
    resp.send(json)
})

app.listen(8080,()=>{
    console.log('app listen on port 8080')
})