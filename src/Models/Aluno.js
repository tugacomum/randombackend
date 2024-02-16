import mongoose, { Schema } from "mongoose";

const Aluno = new Schema({
    nome: {
        type: String,
        required: true
    },
    numeroAluno: {
        type: String,
        required: true
    }
},
    { timestamps: true }
);

export default mongoose.model('Alunos', Aluno);