import dotenv from 'dotenv';
import app from './src/app.js';
import { connectDB } from './src/config/database.js';

dotenv.config({ path: "./.env" });

console.log("MONGO_URI:", process.env.MONGO_URI);

connectDB();

app.listen(3000, () => {
    console.log('Servidor rodando');
});