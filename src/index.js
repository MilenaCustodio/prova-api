import 'dotenv/config'
import { dobro,somar } from './services.js'

import express from 'express'
import cors from 'cors'


const server = express();
server.use(cors());
server.use(express.json());

server.get('/ping', (req, resp) => {
    resp.send('pong');
})

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

server.post('/media', (req, resp) => {
    const { a,b,c} = req.body;
   
    const x = a+b+c /3;

    resp.send({
        media: x
    })
})


server.get('/dia2/corprimaria', (req,resp)=> {
    const 
})

server.listen(process.env.PORT, 
                () => console.log(`API online na porta ${process.env.PORT}`));




