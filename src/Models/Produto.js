import Produto from "../Models/Produto";
 
export async function GetProdutos(req, res){
    try {
        const produtos = await Produto.find({});
        res.send(produtos);
    } catch (error) {
        return res.status(400).json({ error });
    }
}
 
export async function PostProduto(req, res){
    try {
        const params = req.body;
        const produto = await Produto.create({...params});
        await produto.save();
        res.send(produto);
    } catch (error) {
        return res.status(400).json({ error });
    }
}