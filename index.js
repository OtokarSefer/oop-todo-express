import express from 'express'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())

app.get('/json-test', (req, res) => {
    res.send({
        message: 'ok'
    })
})

app.listen(3009, () => {
    console.log("server, localhost:3009")
})