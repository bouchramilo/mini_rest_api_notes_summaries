// src/routes/summaries.ts
import { Router } from "express";
import db from "../models/db";
import { createSummarySchema } from "../validators/summaryValidator";

const router = Router();

router.post("/", (req, res) => {
  const parse = createSummarySchema.safeParse(req.body);
  if (!parse.success) return res.status(400).json(parse.error.format());

  const stmt = db.prepare("INSERT INTO summaries (noteId, text, createdAt) VALUES (?, ?, ?)");
  const info = stmt.run(parse.data.noteId, parse.data.text, new Date().toISOString());
  res.json({ id: info.lastInsertRowid, ...parse.data });
});

router.get("/", (req, res) => {
  const summaries = db.prepare("SELECT * FROM summaries").all();
  res.json(summaries);
});

export default router;
