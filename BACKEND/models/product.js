const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const productSchema = new Schema({
    pCategory: {
        type: String,
        required: true
    },
    pName: {
        type: String,
        required: true
    },
    pCode: {
        type: Number,
        required: true
    },
    uCode: {
        type: Number,
        required: true
    },
    pDescription: {
        type: String,
        required: true
    },
    fdate: {
        type: Date,
        required: true
    },
    ldate: {
        type: Date,
        required: true
    },

    price: {
        type: String,
        required: true
    }
})

const Product = mongoose.model("Product", productSchema);

module.exports = Product;