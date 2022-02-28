const express = require('express')
const router = express.Router()
let productData = require('../json/products.json')

let products = productData.products

router.get('/', (req, res) => {
    res.send(products)
})

router.get('/:productId', (req, res) => {
    let foundId = products.findIndex(p => p.id == req.params.productId)
    if(foundId === -1) {
        let searchedItem = req.params.productId
        let foundProducts = products.filter(p => p.description.toLowerCase().includes(searchedItem.toLowerCase()))
        if(foundProducts.length > 0) {
            res.json(foundProducts)
            console.log("desc found");
        } else {
            foundProducts = products.filter(p => p.price == Number(searchedItem))
            if(foundProducts.length > 0) {
                res.json(foundProducts)
                console.log("price found");
            } else {
                foundProducts = products.filter(p => p.amount == Number(searchedItem))
                if(foundProducts.length > 0) {
                    res.json(foundProducts)
                    console.log("amount found");
                } else {
                    res.sendStatus(404)
                }
            }
        }
    } else {
        res.json(products[foundId])
    }
})


// katso readme kokeillaksesi postmanilla
router.post('/', (req, res) => {
    var lastItem = products[products.length-1]
    var lastId = parseInt(lastItem.id);
    var nextID = lastId + 1;

    if(req.body.addedProduct.title.length === 0 ||
    req.body.addedProduct.description.length === 0 ||
    req.body.addedProduct.price.length === 0 ||
    req.body.addedProduct.rating.length === 0 ||
    req.body.addedProduct.category.length === 0 ||
    req.body.addedProduct.brand.length === 0 ||
    req.body.addedProduct.thumbnail.length === 0 ) {

        res.sendStatus(400)
        console.log("missing parameter")

    } else {
        if (req.body.addedProduct.rating < 1 || req.body.addedProduct.rating > 5) {
            res.sendStatus(400)
            console.log("rating over bounds")
        } else {

            var variable = ''
            if (req.body.addedProduct.rating == 1){
                variable = 'http://localhost:8080/images/one_star.png'
            } else if (req.body.addedProduct.rating == 2){
                variable = 'http://localhost:8080/images/two_star.png'
            } else if (req.body.addedProduct.rating == 3){
                variable = 'http://localhost:8080/images/three_star.png'
            } else if (req.body.addedProduct.rating == 4){
                variable = 'http://localhost:8080/images/four_star.png'
            } else if (req.body.addedProduct.rating == 5){
                variable = 'http://localhost:8080/images/five_star.png'
            } else {
                console.log("Rating not an integer :/")
            }
        }

        products.push({
            id: nextID,
            title: req.body.addedProduct.title,
            description: req.body.addedProduct.description,
            price: Number(req.body.addedProduct.price),
            discountPercentage: 0,
            rating: Number(req.body.addedProduct.rating), //kokonaisluku min 1 max 5
            rating_img: variable,
            stock: 100,
            category: req.body.addedProduct.category,
            brand: req.body.addedProduct.brand, // sama kuin manufacturer
            thumbnail: req.body.addedProduct.thumbnail, // url
            images: []
        })
        console.log("Product with id: " + nextID + " added")
        res.sendStatus(201)
    }
})

router.put('/:id', (req, res) => {
    let x = products.find(p => p.id == req.params.id)

    var variable = ''
        if (req.body.modifiedProduct.rating == 1){
            variable = 'http://localhost:8080/images/one_star.png'
        } else if (req.body.modifiedProduct.rating == 2){
            variable = 'http://localhost:8080/images/two_star.png'
        } else if (req.body.modifiedProduct.rating == 3){
            variable = 'http://localhost:8080/images/three_star.png'
        } else if (req.body.modifiedProduct.rating == 4){
            variable = 'http://localhost:8080/images/four_star.png'
        } else if (req.body.modifiedProduct.rating == 5){
            variable = 'http://localhost:8080/images/five_star.png'
        } else {
            console.log("Rating not an integer :/")
        }
        

    if(x) {
        x.title = req.body.modifiedProduct.title,
        x.description = req.body.modifiedProduct.description,
        x.price = Number(req.body.modifiedProduct.price),
        x.rating = Number(req.body.modifiedProduct.rating),
        x.rating_img = variable, // esim min: "one_star.png" tai max: "five_star.png"
        x.category = req.body.modifiedProduct.category,
        x.brand = req.body.modifiedProduct.brand,
        x.thumbnail = req.body.modifiedProduct.thumbnail // url
        
        res.sendStatus(202)
        console.log(" product with id: " + req.params.id + " modified")
    } else {
        res.sendStatus(404)
    }   
})

router.delete('/:productId', (req, res) => {
    let foundId = products.findIndex(u => u.id == req.params.productId)
    console.log(req.params.productId);
    if(foundId === -1) {
        res.sendStatus(404)
    } else {
        products.splice(foundId, 1)
        res.sendStatus(202)
    }
})
module.exports = router