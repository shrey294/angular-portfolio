const path = require("path");

module.exports = async (req, res) => {
  const { default: app } = await import(
    path.join(process.cwd(), "dist/app-porfolio/server/server.mjs")
  );
  return app(req, res);
};
