require('express')()
.get("/",(req, res) => { //req/ requisição vai me trazer mais informaçoes // res/resposta é oque vai mostrar pra min em tela
    return res.send("HI FROM NWL")                                // quando eu entrar na "/" essa função ira me retornar uma resposta
                                                                // "/" é a rota

})
.get("/study",(req,res) => {

    return res.send("hi from study")

})
.listen(5500)