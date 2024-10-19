import express from 'express';
import router from './routes/index.mjs'
import path from 'path'
import { fileURLToPath } from 'url'; // instead of __dirname in CommonJS
import cors from 'cors'
import corsOptions from './config/corsOptions.mjs'

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const app = express();

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))




app.use(cors(corsOptions))
app.use(router)


const PORT = process.env.PORT || 3000;


app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
