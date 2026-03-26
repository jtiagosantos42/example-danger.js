import express from "express";
import { generateId } from "./helpers/generate-id.js";

const app = express();
const PORT = 3000;

app.get("/hello", (req, res) => {
  res.json({ ok: true });
});

app.get("/id", (req, res) => {
  const uuid = generateId();
  res.json({ id: uuid });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
