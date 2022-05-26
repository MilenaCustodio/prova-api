import { Router } from "express";
import { corPrimaria, frequenciaCaracter, ingresso, maiorNumero } from "./services.js";
const server = Router();





server.get('/dobro/:numero',(req,resp)=>{
    const numero =Number(req.params.numero);
   

    let resposta = {
        dobro: String(dobro)
    }
    resp.send(resposta);
})



server.get('/somar',(req,resp)=>{
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    

    resp.send({
        soma: x
    })
})


server.post('/somar', (req, resp) => {
    try{
        const { valores: {a,b}}  = req.body;
   
        
    
        resp.send({
            soma: x
        })
    } catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }

})

/* server.post('/media', (req, resp) => {
    const { a,b,c} = req.body;
   
    const x = a+b+c /3;

    resp.send({
        media: x
    })
}) */


server.get('/dia2/corprimaria/:cor', (req,resp)=> {
    try{
        const { cor }  = req.params;
        const primaria = corPrimaria (cor);
        resp.send({
            primaria : primaria
        });
    } catch(err) {
            resp.send({
                erro: err.message
            })
        }
})
   
server.post('/dia2/ingressocinema' , (req,resp) => {
    try {
        const {qtdInteiras, qtdMeias, diaSemana, nacionalidade} = req.body;
        const total = ingresso(qtdInteiras,qtdMeias, diaSemana, nacionalidade);
        resp.send({
            total: total
        });
    } catch (err) {
        resp.send({
            erro: err.message
        })
    }
})

server.get('/dia2/freqcaractere/:texto/:caractere', (req, resp) => {
    try {
        const { texto, caractere } = req.params;
        const freq = frequenciaCaracter(texto, caractere);
        resp.send({
            freq: freq
        });
    } catch(err) {
        resp.send({
            erro: err.message
        })
    }
})

server.post('/dia2/maiorNumero' , (req , resp) => {
    try {
        const numeros = req.body;
        const maior = maiorNumero (numeros);
        resp.send({
            maior : maior
        });
    } catch (err) {
        resp.send({
            erro:err.message
        })
    }
})

export default server;