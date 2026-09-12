const express = require("express");
const { add, multiply, divide, increamentbyone } = require("./math");

const app = express();

app.get("/health", (req, res) => {
  res.json({
    status: "UP",
    service: "jenkins-node-demo",
    version: process.env.APP_VERSION || "dev",
  });
});

app.get("/api/add", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    return res.status(400).json({
      error: "a and b must be valid numbers",
    });
  }

  return res.json({
    result: add(a, b),
  });
});

app.get("/api/multiply", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    return res.status(400).json({
      error: "a and b must be valid numbers",
    });
  }

  return res.json({
    result: multiply(a, b),
  });
});

app.get("/api/divide", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    return res.status(400).json({
      error: "a and b must be valid numbers",
    });
  }

  return res.json({
    result: divide(a, b),
  });
});

app.get("/api/increamentbyone", (req, res) => {
  const a = Number(req.query.a);

  if (!Number.isFinite(a)) {
    return res.status(400).json({
      error: "a must be a valid number",
    });
  }

  return res.json({
    result: increamentbyone(a),
  });
});

module.exports = app;
