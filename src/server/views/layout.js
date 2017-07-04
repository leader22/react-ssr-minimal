export default ({
  title,
  children,
}) => `
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>${title}</title>
  </head>
  <body>
    <div id="react-root">
      ${children}
    </div>
    <script src="./dist/client.bundle.js"></script>
  </body>
</html>
`;
