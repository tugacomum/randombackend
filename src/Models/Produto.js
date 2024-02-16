import mongoose, { Schema } from "mongoose";
 
const Produto = new Schema({
    nome: {
        type: String,
        required: true
    },
    preco: {
        type: Number,
        required: true
    }
},
    { timestamps: true }
);
 
export default mongoose.model('Produtos', Produto);