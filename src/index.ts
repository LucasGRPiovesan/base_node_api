import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('API funcionando! 🚀')
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
