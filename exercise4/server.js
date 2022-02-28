const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const products = require('./routes/products');
const users = require('./routes/users');
const invoices = require('./routes/invoices');

app.use('/products', products)
app.use('/users', users)
app.use('/invoices', invoices)
app.use('/images', express.static('./public/images'));

// here port is absolute since some product
//images rely on the localhost/8080 path!
app.listen(8080, () => {
    console.log("listening on port 8080");
})