// src/routes/patients.ts
import { Router } from "express";
import db from "../models/db";
import { createPatientSchema } from "../validators/patientValidator";

const router = Router();

router.post("/", (req, res) => {
  const parse = createPatientSchema.safeParse(req.body);
  if (!parse.success) return res.status(400).json(parse.error.format());

  const stmt = db.prepare("INSERT INTO patients (name, email) VALUES (?, ?)");
  const info = stmt.run(parse.data.name, parse.data.email);
  res.json({ id: info.lastInsertRowid, ...parse.data });
});

router.get("/", (req, res) => {
  const patients = db.prepare("SELECT * FROM patients").all();
  res.json(patients);
});

export default router;
