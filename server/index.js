import express from 'express';
import cors from 'cors';
import productRoutes from './routes/product.routes.js';

const app = express();

let debug = true;
if (debug){
    app.use(cors({
        "origin":"*",
        "methods":"GET,HEAD,PUT,POST,DELETE",
    }))
} else {
    app.use(cors({
        "origin":"http://localhost:5173/",
        "methods":"GET,HEAD,PUT,POST,DELETE",
    }))
}

app.use(express.json());

app.use('/api', productRoutes);

app.listen(8000, function(){
    if (debug){
        console.log('\n ➜ API funcionando en el puerto 8000.\n ➜ CORS deshabilitado.\n ➜ Debug activado.\n')
    } else {
        console.log('\n ➜ API funcionando en el puerto 8000.\n ➜ CORS habilitado.\n ➜ Debug desactivado.\n')
    }
});