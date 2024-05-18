const express = require('express')
const mongoose = require('mongoose');
const app = express()
const Product = require('./models/product.modules');
const productRoute = require("./routes/product.route.js");
app.use(express.json());

app.get('/', (req,res) => {
    res.send("sneak");
});


app.use("/api/products", productRoute);
app.get('/api/products', async(req, res) =>{
    try{
        const products = await Product.find({});
        res.status(200).json(products);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});


app.get('/api/products/:id', async(req,res) =>{
    try{
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
})


mongoose.connect("mongodb+srv://admin:M1o2n3g4o5@backend.vbqrqf8.mongodb.net/")
.then(() =>{
    console.log("Connected to database!");
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    })
})

.catch(() => {
    console.log("Connection failed");
})