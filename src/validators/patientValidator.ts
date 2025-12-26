// src/validators/patientValidator.ts
import { z } from "zod";

export const createPatientSchema = z.object({
  name: z.string().min(1),
  email: z.string().email().optional(),
});
