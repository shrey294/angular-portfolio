const express = require('express');
const path = require('path');

const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, 'dist/app-porfolio/browser')));

// Handle SSR
app.get('*', (req, res) => {
  const server = require('./dist/app-porfolio/server/main');
  server.app(req, res);
});

// Use PORT provided by Render
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Angular Universal running on http://localhost:${port}`);
});
