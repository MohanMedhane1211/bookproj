const mongoose = require ('mongoose');
const productSchema = new mongoose.Schema({
    title: String,
    author: String,
    genre: String,
    description: String,
    price: Number,
    image: String,
});

const Product = mongoose.model('Book', productSchema);
module.exports = Product;
