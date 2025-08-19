import express from 'express';
import { join } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const distFolder = join(process.cwd(), 'dist/app-porfolio/browser');

app.use(express.static(distFolder, {
  maxAge: '1y',
  index: false
}));

app.get('*', (req, res) => {
  res.sendFile(join(distFolder, 'index.html'));
});

const port = process.env['PORT'] || 4000;

// ✅ Cross-compatible check for ESM
const isMainModule =
  typeof process !== 'undefined' &&
  process.argv[1] === fileURLToPath(import.meta.url);

if (isMainModule) {
  app.listen(port, () => {
    console.log(`✅ Angular Universal server running at http://localhost:${port}`);
  });
}

export default app;
