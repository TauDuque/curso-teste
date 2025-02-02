import express, { Request, Response } from "express";

const app = express();
const port = 5000;

app.get('/', (req: Request, res: Response) => {
    res.send('Olá, mundiça')
})

app.listen(port, () => {
    console.log(`Servidor correndo na porta:${port}`)
}) 