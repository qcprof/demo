import express from 'express';

const app = express();
app.use(express.static('public'));


const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
