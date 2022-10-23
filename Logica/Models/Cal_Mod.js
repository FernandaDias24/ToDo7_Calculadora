class Cal_Cont{
    static async soma (n1, n2){
        if (Number(n1) & Number(n2)){
            const resultatoSoma = n1 + n2
            return resultatoSoma;
        }
        else throw new Error("Pelo menos um dos caracteres não são numeros");
    }

    static async subitracao (n1, n2){
        if (Number(n1) & Number(n2)){
            const resultatoSubitracao = n1 - n2
            return resultatoSubitracao;
        }
        else throw new Error("Pelo menos um dos caracteres não são numeros");
    }

    static async multiplicacao (n1, n2){
        if (Number(n1) & Number(n2)){
            const resultatoMultiplicacao = n1 * n2
            return resultatoMultiplicacao;
        }
        else throw new Error("Pelo menos um dos caracteres não são numeros");
    }

    static async divisao (n1, n2){
        if (Number(n1) & Number(n2)){
            const resultatoDivisao = n1 / n2
            return resultatoDivisao;
        }
        else throw new Error("Pelo menos um dos caracteres não são numeros");
    }

}

module.exports = Cal_Cont;