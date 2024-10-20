import express from 'express';
import router from './routes/index.mjs'
import cors from 'cors'
import corsOptions from './config/corsOptions.mjs'
import path from 'path'
import __dirname from './config/pathMJS.mjs';


const app = express();

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))




app.use(cors(corsOptions))
app.use(router)


const PORT = process.env.PORT || 3000;


app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
