import emplooye from "../models/emplooyeModel.js";

class emplooyeControllers{
    async login(req, res){
        try {
            const{email,senha} = req.body;
            const newEmplooye = await emplooye.login({
                email,
                senha
               
            });
            res.status(201).json({newEmplooye, message: "usuário criado!"});
        } catch (error) {
            console.log(error)
            res.status(500).json({message: "erro ao criar usuário"});
        }
    }



}

export default new emplooyeControllers