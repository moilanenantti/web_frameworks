const express = require('express')
const router = express.Router()
//let cartData = require('../json/cart.json')

//let cart = cartData.items
var cart = []
var firstDeletion = false;

router.get('/', (req, res) => {
    res.send(cart)
})

/*router.get('/sum', (req, res) => {
    let total = cart.reduce((prev, next) => prev + next.price, 0);
    parseInt(total);
    if(total == undefined || total == null || total == ''){
        //console.log("total sum not readable or doesnt exist")
    } else {
        res.json(total)  
    }
})*/

router.post('/', (req, res) => {
    var lastID = cart.length;
    var nextID = lastID + 1;

    var variable = '';
    if (req.body.addedCartItems.rating == 1){
        variable = 'http://localhost:8080/images/one_star.png'
    } else if (req.body.addedCartItems.rating == 2){
        variable = 'http://localhost:8080/images/two_star.png'
    } else if (req.body.addedCartItems.rating == 3){
        variable = 'http://localhost:8080/images/three_star.png'
    } else if (req.body.addedCartItems.rating == 4){
        variable = 'http://localhost:8080/images/four_star.png'
    } else if (req.body.addedCartItems.rating == 5){
        variable = 'http://localhost:8080/images/five_star.png'
    }

    cart.push({
        id: nextID,
        title: req.body.addedCartItems.title,
        description: req.body.addedCartItems.description,
        price: req.body.addedCartItems.price,
        discountPercentage: 0,
        rating: req.body.addedCartItems.rating,
        rating_img: variable,
        stock: 100,
        category: req.body.addedCartItems.category,
        brand: req.body.addedCartItems.brand,
        thumbnail: req.body.addedCartItems.thumbnail,
        images: []
    },)
        //console.log("Item with id: " + nextID + " added to cart")
        res.send(cart)

        // tällä skippaan ihmeellisen bugin jossa ensimmäinen ostoskärryn
        // tuote saa tyhjiä arvoja
        if(firstDeletion == false){
            let foundId = cart.findIndex(u => u.id == nextID)
            cart.splice(foundId, 1)
            firstDeletion = true;
        }
})

router.delete('/:itemId', (req, res) => {
    let foundId = cart.findIndex(u => u.id == req.params.itemId)
    if(foundId === -1) {
        res.sendStatus(404)
    } else {
        cart.splice(foundId, 1)
        //console.log("deleted item with id: " + req.params.itemId + " from cart")
        res.send(cart)
    }
})

module.exports = router