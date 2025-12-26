# Notes & Summaries API

A simple REST API built with **Node.js + TypeScript + Express** to manage patients,
voice-note metadata, and text summaries (AI-like, no real AI).

This project was created as part of a technical challenge, with a focus on clarity,
structure, and validation.

---

## Tech Stack

- Node.js
- TypeScript
- Express
- Zod (validation)
- SQLite (better-sqlite3)
- dotenv

---

## Prerequisites

Make sure you have installed:

- Node.js
- npm

Check versions:
```bash
node -v
npm -v
```


1. Clone the Project
```bash
git clone https://github.com/bouchramilo/mini_rest_api_notes_summaries.git
cd mini_rest_api_notes_summaries
```

2. Install Dependencies
```bash
npm install
```

3. Environment Variables
Create a `.env` file at the root of the project:
```bash
PORT=3000
API_KEY=demo-api-key
```

4. Run the Application
Start the API using ts-node:
```bash
npx ts-node src/index.ts
```

If everything works, you should see: 
```bash
Server running on http://localhost:3000
```

---

5. API Authentication
All requests require an API key.
Add this header to every request:
```bash
x-api-key: demo-api-key
```

6. Test the API with Postman
Health Check

GET `/health`

URL:
```bash
http://localhost:3000/health
```

Response:
```bash
{
  "status": "ok"
}
```

---

Create a Patient

POST `/patients`

Headers:
```bash
Content-Type: application/json
x-api-key: demo-api-key
```

Body:
```bash
{
  "name": "Nom Prenom",
  "age": 24
}
```

List Patients

GET `/patients`

Headers:
```bash
x-api-key: demo-api-key
```

---

Create a Voice Note (metadata only)

POST `/notes`

Headers:
```bash
Content-Type: application/json
x-api-key: demo-api-key
```

Body:
```bash
{
  "patientId": 1,
  "title": "Consultation générale"
}
```

List Note

GET `/notes`

Headers:
```bash
x-api-key: demo-api-key
```

---

Create a Summary

POST `/summaries`

Headers:
```bash
Content-Type: application/json
x-api-key: demo-api-key
```

Body:
```bash
{
  "noteId": 1,
  "text": "Le patient va bien."
}
```

List Summaries

GET `/summaries`

Headers:
```bash
x-api-key: demo-api-key
```

---
Fin 😊



