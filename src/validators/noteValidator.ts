// src/validators/noteValidator.ts
import { z } from "zod";

export const createNoteSchema = z.object({
  patientId: z.number().int(),
  title: z.string().min(1),
});
