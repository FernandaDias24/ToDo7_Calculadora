class Cal_Cont{
    static async soma (n1, n2){
        if (Number(n1) & Number(n2)){
            const resultatoSoma = n1 + n2
            return resultatoSoma;
        }
        else throw new Error("Pelo menos um dos caracteres não são numeros");
    }

}

module.exports = Cal_Cont;