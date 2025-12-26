// src/validators/summaryValidator.ts
import { z } from "zod";

export const createSummarySchema = z.object({
  noteId: z.number().int(),
  text: z.string().min(1),
});
