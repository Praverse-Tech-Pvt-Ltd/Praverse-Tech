
"use server";

import { z } from "zod";

const newsletterSchema = z.object({
  email: z.string().email(),
});

export async function subscribeToNewsletter(data: z.infer<typeof newsletterSchema>) {
  const validatedFields = newsletterSchema.safeParse(data);

  if (!validatedFields.success) {
    return { success: false, message: "Invalid email address." };
  }
  
  // Here you would typically save the email to a database (e.g., Firestore)
  // For demonstration, we'll just log it and return success.
  console.log("New newsletter subscription:", validatedFields.data.email);

  return { success: true, message: "Successfully subscribed!" };
}

const contactFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    email: z.string().email("Invalid email address."),
    company: z.string().optional(),
    message: z.string().min(10, "Message must be at least 10 characters."),
    interest: z.string(),
});

export async function submitContactForm(data: z.infer<typeof contactFormSchema>) {
    const validatedFields = contactFormSchema.safeParse(data);

    if (!validatedFields.success) {
        return { success: false, message: "Invalid form data." };
    }

    // In a real app, you would use an email service like Resend or Nodemailer
    // to send this data to your desired email address.
    console.log("New contact form submission. Send to praversetech@gmail.com:", validatedFields.data);

    return { success: true, message: "Your message has been sent!" };
}

const innovateFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  projectName: z.string().min(2, "Project name must be at least 2 characters."),
  pitch: z.string().min(10, "Pitch must be at least 10 characters.").max(140, "Pitch must be 140 characters or less."),
  description: z.string().min(50, "Description must be at least 50 characters."),
  stage: z.string({ required_error: "Please select a stage." }),
  ipAck: z.literal<boolean>(true, {
    errorMap: () => ({ message: "You must acknowledge the IP statement." }),
  }),
});

export async function submitInnovationPitch(data: z.infer<typeof innovateFormSchema>) {
    const validatedFields = innovateFormSchema.safeParse(data);

    if (!validatedFields.success) {
        return { success: false, message: "Invalid form data." };
    }

    // In a real app, you would use an email service like Resend or Nodemailer
    // to send this data to your desired email address.
    console.log("New innovation pitch submission. Send to praversetech@gmail.com:", validatedFields.data);

    return { success: true, message: "Your pitch has been submitted! We'll be in touch." };
}
