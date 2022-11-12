import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Connection from './database/db.js';
import Routes from './routes/route.js';
import {join} from 'path';
const app = express();

dotenv.config();
const PORT = 8000 || process.env.PORT;
const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;

Connection(username,password);


// Middleware
app.use(express.json());
app.use(cors());

// loading static files
app.use(express.static(join(process.cwd(), 'public')));

app.get('/', (req, res) => {
    // res.send('Hello World!');
    res.sendFile(join(process.cwd(), 'views', 'index.html'));
    
});

// loading routes 
app.use('/',Routes);



app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});