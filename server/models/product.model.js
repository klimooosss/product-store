import mongoose from "mongoose";

// creating the Schematic for the product.
const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type:Number,
        required: true
    },
    image:{
        type: String,
        required: true
    }
}, {
    timestamps: true //createdAt, updatedAt
});

// initializing the product schematic for use.
const Product = mongoose.model('Product', productSchema); // Product -> products

// exporting the Produc to use in different files
export default Product;