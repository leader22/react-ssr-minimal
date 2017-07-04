import path from 'path';
import express from 'express';
import morgan from 'morgan';

import indexRouter from './routes/index';

const port = process.env.PORT || 3000;
const app = express();

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.use(express.static(path.resolve('./static')));
app.use('/', indexRouter);

app.listen(port, function() {
  console.log(`Server listening on http://localhost:${port}`);
});
