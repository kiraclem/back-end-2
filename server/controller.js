const database = require("./db.json")
let HouseId = 4

module.exports = {

getAllHouses: (req, res) => {
    res.status(200).send(database)
},

deleteHouse: (req, res) => {
    let { id } = req.params
    let index = database.findIndex(houseObj => houseObj.id === +id)
    database.splice(index,1)
    res.status(200).send(database)
},


createHouse: (req, res) => {
    let { address, price, imageURL } = req.body
    let newHouse = {
        id: newID,
        address,
        price, 
        imageURL
    }
    database.push(newHouse)

    res.status(200).send(database)

    newID++
},


updateHouse: (req, res) => {
    let { id } = req.params
    let { type } = req.body 
    let index = houses.findIndex(house => +house.id === +id)

    
    if (houses[index].price <= 10000 && type === 'minus') {
        houses[index].price = 0
        res.status(200).send(houses)
    } else if (type === 'plus') {
        houses[index].price += 10000
        res.status(200).send(houses)
    } else if (type === 'minus') {
        houses[index].price -= 10000
        res.status(200).send(houses) 
    } else {
        res.sendStatus(400)
    }
    res.status(200).send(database)
}
}














