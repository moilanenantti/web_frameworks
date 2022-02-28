const express = require('express');
const router = express.Router();
let product_list = require('../json/products.json');
let user_list = require('../json/users.json');

let products = product_list.products;
let users = user_list.users;

const invoices = [
    {
        id: 1,
        customerId: users[0].id,
        customer: users[0].name,
        products: [
            products[2].title,
            products[3].title
        ],
        sum: products[2].price + products[3].price
    },
    {
        id: 2,
        customerId: users[1].id,
        customer: users[1].name,
        products: [
            products[5].title,
            products[6].title
        ],
        sum: products[5].price + products[6].price
    },
    {
        id: 3,
        customerId: users[1].id,
        customer: users[1].name,
        products: [
            products[8].title,
            products[9].title
        ],
        sum: products[8].price + products[9].price
    }
]

router.get('/', (req, res) => {
    res.send(invoices)
})

router.get('/:userId', (req, res) => {
    let invoicesFound = invoices.filter(u => u.customerId == req.params.userId)

    if(invoicesFound == undefined || invoicesFound.length == 0) {
        console.log("Invoice with user id " + req.params.userId +" not found")
        res.sendStatus(404)
    } else {
        res.json(invoicesFound)
    }
})

router.get('/single/:id', (req, res) => {
    let foundId = invoices.findIndex(u => u.id == req.params.id)
    if(foundId == -1) {
        res.sendStatus(404)
        console.log("Invoice with id " + req.params.id + " not found")
    } else {
        res.json(invoices[foundId])
    }
})

// katso readme testataksesi toimintoja postmanilla
router.post('/', (req, res) => {
    var lastID = invoices.length
    var nextID = lastID + 1

    let u1 = users.findIndex(u => u.id == req.body.userId)
    let p1 = products.findIndex(u => u.id == req.body.prod1)
    let p2 = products.findIndex(u => u.id == req.body.prod2)

    if(u1 == -1 || p1 == -1 || p2 == -1){
        res.sendStatus(404)
        console.log("user ID, or one or more product IDs do not match")
    } else {
        invoices.push({
            id: nextID,
            customerId: users[u1].id,
            customer: users[u1].name,
            products: [
                products[p1].title,
                products[p2].title
            ],
            sum: products[p1].price + products[p2].price
        })

        console.log("NEW INVOICE ADDED:")
        console.log("id: " + nextID)
        console.log("customerId: " + users[u1].id)
        console.log("customer: " + users[u1].name)
        console.log("products: " + [products[p1].title, products[p2].title])
        console.log("total sum: "),
        console.log(products[p1].price + products[p2].price)
        
        res.sendStatus(201)
    }
})

router.delete('/:deleteByInvoiceId', (req, res) => {
    let foundId = invoices.findIndex(u => u.id == req.params.deleteByInvoiceId)
    
    if(foundId == -1) {
        res.sendStatus(404)
    } else {
        invoices.splice(foundId, 1)
        res.sendStatus(202)
        console.log("Invoice with id " + req.params.deleteByInvoiceId + " deleted")
        res.send(invoices)
        
    }
})

module.exports = router