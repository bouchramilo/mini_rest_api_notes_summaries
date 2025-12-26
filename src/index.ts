// src/index.ts
import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
dotenv.config();

import patientsRouter from "./routes/patients";
import notesRouter from "./routes/notes";
import summariesRouter from "./routes/summaries";
import { apiKeyMiddleware } from "./middleware/apiKey";

const app = express();
app.use(express.json());

// Health check (Exempt from API key)
app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "ok" });
});

// Middleware simple pour l’API key (Applies to routes below)
app.use(apiKeyMiddleware);

// Routes
app.use("/patients", patientsRouter);
app.use("/notes", notesRouter);
app.use("/summaries", summariesRouter);

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
