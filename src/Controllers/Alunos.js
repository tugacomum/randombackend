import Aluno from "../Models/Aluno";

export async function GetAlunos(req, res){
    try {
        const alunos = await Aluno.find({});
        res.send(alunos);
    } catch (error) {
        return res.status(400).json({ error });
    }
}

export async function PostAluno(req, res){
    try {
        const params = req.body;
        const aluno = await Aluno.create({...params});
        await aluno.save();
        res.send(aluno);
    } catch (error) {
        return res.status(400).json({ error });
    }
}