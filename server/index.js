const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const { 
    getAllHouses,
    deleteHouse,
    createHouse,
    updateHouse
     } = require("./controller")

app.get('/api/houses',getAllHouses)
app.post('/api/houses',createHouse)
app.delete('/api/houses',deleteHouse)
app.put("/api/houses/:id", updateHouse)

app.listen(4004, console.log('server is running on 4004'))