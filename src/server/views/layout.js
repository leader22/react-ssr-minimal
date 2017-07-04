export default ({
  title,
  children,
  state,
}) => `
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>${title}</title>
  </head>
  <body>
    <main>${children}</main>
    <script>window.__INITIAL_STATE__ = ${state}</script>
    <script src="./dist/client.bundle.js"></script>
  </body>
</html>
`;
