const app = require("./app.js");
const request = require("supertest");

describe("Testando rotas da Controller", () => {
    test("Teste Soma", async () => {
        try {
            const res = await request(app).get("/soma").query([1, 1]);
            expect(res.body.resultado).toBe(2);
            expect(res.body.erro).toBe(false);
        } catch (error) {
            console.log(error);
        }
    })

    test("Teste Subitracao", async () => {
        try {
            const res = await request(app).get("/subitracao").query([10, 1]);
            expect(res.body.resultado).toBe(9);
            expect(res.body.erro).toBe(false);
        } catch (error) {
            console.log(error);
        }
    })
})
