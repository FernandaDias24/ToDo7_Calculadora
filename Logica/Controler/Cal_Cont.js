const { run } = require("jest");
const Cal_Mod = require("../Models/Cal_Mod.js");

class Cal_Cont{
    static async soma (req, res){
        try{
            const query = req.query;
            console.log("query: ", query);
            const values = Object.values(query);
            console.log("values: ", values);
            const convertNum = values.map((numero) => {
                return Number (numero);
            });
            console.log("conversão: ", convertNum);
            const soma = await_Cal_Mod.soma(...convertNum);
            res.status(200).json({
                resultato: soma,
                erro: false
            });
        }  catch(erro){
            if(erro){
                res.status(400).json({mensagem: "", erro: true});
            }
        }
    }
};

module.exports = Cal_Cont;