// src/routes/notes.ts
import { Router } from "express";
import db from "../models/db";
import { createNoteSchema } from "../validators/noteValidator";

const router = Router();

router.post("/", (req, res) => {
  const parse = createNoteSchema.safeParse(req.body);
  if (!parse.success) return res.status(400).json(parse.error.format());

  const stmt = db.prepare("INSERT INTO notes (patientId, title, createdAt) VALUES (?, ?, ?)");
  const info = stmt.run(parse.data.patientId, parse.data.title, new Date().toISOString());
  res.json({ id: info.lastInsertRowid, ...parse.data });
});

router.get("/", (req, res) => {
  const notes = db.prepare("SELECT * FROM notes").all();
  res.json(notes);
});

export default router;
