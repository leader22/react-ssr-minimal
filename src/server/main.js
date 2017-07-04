import express from 'express';
import morgan from 'morgan';

const port = process.env.PORT || 3000;
const app = express();

app.use(morgan('dev'));

app.get('/', function(_req, res) {
  res.send('Hello World!');
});

app.listen(port, function() {
  console.log(`Server listening on http://localhost:${port}`);
});
