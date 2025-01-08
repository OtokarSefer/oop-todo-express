import express from 'express'
import bodyParser from 'body-parser'

import TodoRoutes from './routes/todos.js'

const app = express()
app.use(bodyParser.json())

app.use(express.urlencoded({extended: true}))

app.use('/todos', TodoRoutes)

app.listen(3009, () => {
    console.log("server, localhost:3009")
})