import path from 'path';
import express from 'express';
import morgan from 'morgan';

const port = process.env.PORT || 3000;
const app = express();

app.use(morgan('dev'));
app.use(express.static(path.resolve('./static')));

const html = `
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>react-ssr-mock</title>
  </head>
  <body>
    <div id="react-root">
      Hello from SSR!
    </div>
    <script src="./dist/client.bundle.js"></script>
  </body>
</html>
`;

app.get('/', function(_req, res) {
  res.send(html);
});

app.listen(port, function() {
  console.log(`Server listening on http://localhost:${port}`);
});
