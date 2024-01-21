import { renderToPipeableStream } from './node_modules/react-dom/server';

function App() {
  return <div>Hello World</div>;
}

function handleRequest(res) {
  // ... in your server handler ...
  const stream = renderToPipeableStream(<App />, {
    onShellReady() {
      res.statusCode = 200;
      res.setHeader('Content-type', 'text/html');
      stream.pipe(res);
    },
    // ...
  });
}