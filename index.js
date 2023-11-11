const express = require('express')
const app = express()
const port = 3000
const router = require('./routes/web')

app.use(express.json()) // for get request.body with json
app.use(router)

app.get('/', (req, res) => {
    res.send('Hello World Express JS MVC')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
