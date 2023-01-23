import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { authRouter } from './routes/aurhRouter';


const app = express();
const PORT = process.env.PORT || 5000;

app.use(authRouter);

app.get('/', (req, res) => {
  res.send('Hello')
});

app.listen(PORT);