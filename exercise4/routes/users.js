const express = require('express');
const router = express.Router();
let user_list = require('../json/users.json');
let users = user_list.users;

// katso toimintaohjeet readme -tiedostosta toimintojen kokeiluun postmanilla

router.get('/', (req, res) => {
    res.send(users)
})

router.post('/', (req, res) => {
    var lastID = users.length
    var nextID = lastID + 1

    if(req.body.name.length === 0 || req.body.address.length === 0 || req.body.phone.length === 0 || req.body.email.length === 0 ) {
        res.sendStatus(400)
        console.log("missing parameter")
    } else {
        users.push({
            id: nextID,
            name: req.body.name,
            address: req.body.address,
            phone: req.body.phone,
            email: req.body.email
        })
        console.log("NEW USER ADDED:")
        console.log("id: " + nextID)
        console.log("name: " + req.body.name)
        console.log("address: " + req.body.address)
        console.log("phone: " + req.body.phone)
        console.log("email: " + req.body.email)

        res.sendStatus(201)
    }
})

module.exports = router