import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Connection from './database/db.js';
import Routes from './routes/route.js';

const app = express();

dotenv.config();
const PORT = 8000 || process.env.PORT;
const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;

Connection(username,password);

// Middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// loading routes 
app.use('/',Routes);



app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});