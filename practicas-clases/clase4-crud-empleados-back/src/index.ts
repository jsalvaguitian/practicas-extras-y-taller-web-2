import express, {type Request, type Response} from 'express';

const app = express();

const port = 3000;

app.listen(port, ()=>{
    console.log(`Servidor escuchamdo en el puerto ${port}`);
});




/* CODIGO PURO DE NODE.SJ  
import http from 'http'; //cambiar en package.json el type: commonjs por module para que me acepte trabajar con importaciones y exportaciones


const server = http.createServer((req,res)=> {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain; charset-utf-8");
    res.end("HOla desde node.js + ts");
})

const port = process.env.PORT ? Number(process.env.PORT) : 3000

server.listen(port, ()=>{
    console.log("servidor escuchando en el puerto 3000");
})*/

/*
Para ejecutar nuestro codigo con npm run dev
Debenos crear un script para que se ejecute automaticamente cuando reciba algun cambio
"scripts": {
    "dev" :"tsx watch src/index.ts",
    ...
}

teoria
express es framework de node.js
*/