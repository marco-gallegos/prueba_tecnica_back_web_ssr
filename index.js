const express = require('express')
const app = express()
const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post('/', (req, res) => {
    console.log(req.body);
    let name = req.body.name;
    if(name === undefined){
        name="developer"
    }
    res.send(`Hello ${name}`)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
