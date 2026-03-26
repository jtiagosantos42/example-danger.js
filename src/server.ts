import express from "express";

const app = express();
const PORT = 3000;

app.get("/hello", (req, res) => {
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
