import express from 'express'
import produtosRoutes from './routes/produto.routes.js'


const app =express()


app.use(express.json());

app.use('/produtos',produtosRoutes);

export default app;
