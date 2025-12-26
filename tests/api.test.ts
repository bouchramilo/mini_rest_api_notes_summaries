// tests/api.test.ts
import { describe, it, expect } from "vitest";
import request from "supertest";
import express from "express";
import patientsRouter from "../src/routes/patients";

const app = express();
app.use(express.json());
app.use("/patients", patientsRouter);

describe("Patients API", () => {
  it("should create a patient", async () => {
    const res = await request(app)
      .post("/patients")
      .send({ name: "Alice", email: "alice@test.com" });
    expect(res.status).toBe(200);
    expect(res.body.name).toBe("Alice");
  });
});
