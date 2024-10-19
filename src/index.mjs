import express from 'express';
import router from './routes/index.mjs'

const app = express();
app.use(express.static('public'));
app.use(router);


const PORT = process.env.PORT || 3000;


app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
