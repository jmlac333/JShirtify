import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import dalleRoutes from './routes/dalle.routes.js';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" })); // Moved up
app.use('/api/v1/dalle', dalleRoutes);



app.get('/', (req, res) => {
  res.status(200).json({ message: "Hello, server is up and running!" })
})


app.listen(3000, () => console.log('Server has started on port 3000'))
