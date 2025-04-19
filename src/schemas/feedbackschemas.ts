import { z } from "zod";



export const feedbackSchema = z.object({
  feedback: z
    .string()
    .min(1, "Please provide feedback")
    .max(1000, "Feedback must be less than 1000 words"),
  email: z.string().email("Please enter a valid email address"),
  type: z.enum(["General Contact", "Feedback", "Bug Report", "Feature Request"]),
  image: z
  .instanceof(File)
  .refine((file) => file.type.startsWith("image/"), {
    message: "Only image files are allowed",
  })
  .optional(),
  acceptTerms: z.boolean().refine((val) => val === true, "You must accept the privacy policy"),
});

export type FeedbackFormData = z.infer<typeof feedbackSchema>;