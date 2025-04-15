import express from 'express';
import dotenv from 'dotenv';
import { profileRouter } from './routes/profile';
import { userRouter } from './routes/user';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/profile', profileRouter);
app.use('/user', userRouter);

app.listen(PORT, async () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

export default app;