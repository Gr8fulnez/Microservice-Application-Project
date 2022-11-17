const express = require('express')

const app = express()

app.get('/', (req, res) => { 
    res.status(200).send('TALENT PLUS');
})

const port = 8000

app.listen(port, () => {
    console.log(`App running on ${port}`)
})

