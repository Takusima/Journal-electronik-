import express from "express";
import cors from "cors";

const app = express();
const port = Number(process.env.PORT ?? 8080);

app.use(cors());
app.use(express.json());

app.get("/api/v1/health", (_req, res) => {
  res.json({ ok: true, service: "journal-kmk-api", version: "0.1.0" });
});

app.get("/api/v1/dashboard", (_req, res) => {
  res.json({
    groups: 4,
    gradesToday: 18,
    homeworkActive: 3,
    notifications: 2
  });
});

app.listen(port, () => {
  console.log(`Journal KMK API listening on http://localhost:${port}`);
});