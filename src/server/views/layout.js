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
    <main>${children}</main>
    <script src="./dist/client.bundle.js"></script>
  </body>
</html>
`;
