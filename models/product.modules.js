const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema({
    pdf : {
        type: String,
        required : [true, "Please enter product name"],
    },

    audio:{
        type: String,
        required: true,
        default : 0
    },
    video: {
        type : String,
        required: true,
        default : 0
    },
    image:{
        type : String, 
        required : false
    },
    },
    {
        timestamps : true 

    }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
