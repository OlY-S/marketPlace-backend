import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
import './config/firebase.js';

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Health check route
app.get('/', (req, res) => {
  res.status(200).send('Marketplace Backend Running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
