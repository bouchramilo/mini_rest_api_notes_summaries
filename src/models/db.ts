// src/models/db.ts
import Database from "better-sqlite3";
import path from "path";

const db = new Database(path.join(__dirname, "../../data.sqlite"));

// Création des tables
db.prepare(`
CREATE TABLE IF NOT EXISTS patients (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT
);
`).run();

db.prepare(`
CREATE TABLE IF NOT EXISTS notes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  patientId INTEGER NOT NULL,
  title TEXT NOT NULL,
  createdAt TEXT NOT NULL,
  FOREIGN KEY(patientId) REFERENCES patients(id)
);
`).run();

db.prepare(`
CREATE TABLE IF NOT EXISTS summaries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  noteId INTEGER NOT NULL,
  text TEXT NOT NULL,
  createdAt TEXT NOT NULL,
  FOREIGN KEY(noteId) REFERENCES notes(id)
);
`).run();

export default db;
