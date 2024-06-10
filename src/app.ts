//routes
//db connec
//listen
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import userRouter from './api/workspace/workspace';

const app = express();
const port = process.env.PORT || 3000;

//connect to database
mongoose.connect(process.env.DATABASE_URL!)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

app.use(express.json());

app.use('/api', userRouter);

//route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

//start the server
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});