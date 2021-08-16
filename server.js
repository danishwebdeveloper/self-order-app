const express = require('express');
// Import mongoose
const mongoose = require('mongoose');
// mongo db connection come from mongoose environment
const dotenv = require('dotenv');

const data = require('./data');

const app = express();

// req below use in post api, fir this use 2 middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


dotenv.config();

//1.  Connect DB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

//2.  After connection time to make model and scheme
const Product = mongoose.model('products',
    new mongoose.Schema({
        name: String,
        description: String,
        image: String,
        price: Number,
        calorie: Number,
        category: String

    }))

// 3. Seeder for the product
app.get('/api/products/seed', async(req, res) => {
    const products = await Product.insertMany(data.products);
    res.send({ products });
});

// 4. go to the data now to make products api


// New APi for products
app.get('/api/products', async(req, res) => {
    const { category } = req.query;
    const products = await Product.find(category ? { category } : {});
    // For Send to frontend 
    res.send(products);
})

// New api that created  by user and tested through POSTMAN
app.post('/api/products', async(req, res) => {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.send(savedProduct);
})

app.get('/api/categories', (req, res) => {
    res.send(data.categories);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);
});