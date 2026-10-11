import { createReadStream, existsSync } from 'node:fs';
import { stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import { extname, join, normalize, resolve } from 'node:path';

const root = resolve(process.argv[2] ?? '.');
const port = Number(process.env.PORT ?? 5173);

const types = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
};

const server = createServer(async (request, response) => {
  const url = new URL(request.url ?? '/', `http://${request.headers.host}`);
  const requestedPath = normalize(decodeURIComponent(url.pathname)).replace(/^(\.\.[/\\])+/, '');
  let filePath = resolve(join(root, requestedPath));

  if (!filePath.startsWith(root)) {
    response.writeHead(403);
    response.end('Forbidden');
    return;
  }

  if (!existsSync(filePath) || (await stat(filePath)).isDirectory()) {
    filePath = resolve(root, 'index.html');
  }

  response.writeHead(200, {
    'Content-Type': types[extname(filePath)] ?? 'application/octet-stream',
  });
  createReadStream(filePath).pipe(response);
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Serving ${root} at http://localhost:${port}`);
});
