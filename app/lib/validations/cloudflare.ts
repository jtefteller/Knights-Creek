import * as z from "zod";
export const contactMessage = z.object({
  email: z
    .string({
      error: "Please select an email to display.",
    })
    .email(),
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  phone_number: z.string().min(1, "Phone number is required"),
  message: z
    .string()
    .min(1, "Message is required")
    .max(250, "Message must not exceed 250 characters"),
  website: z.string().url().optional(),
});
