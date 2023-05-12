import express from 'express';
const app = express()
import cors from 'cors';

// middle ware
//using cors
app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello World!')
  })

export default app;
