"use server";

import { z } from "zod";
import {
  saveBlogIdeas,
  saveBriefingRequest,
  saveContactSubmission,
  saveInnovationPitch,
  saveMediaRequest,
  saveNewsletterSubscriber,
  saveWaitlistSubmission,
} from "@/lib/forms-db";

const newsletterSchema = z.object({
  email: z.string().email(),
});

export async function subscribeToNewsletter(
  data: z.infer<typeof newsletterSchema>,
) {
  const validatedFields = newsletterSchema.safeParse(data);

  if (!validatedFields.success) {
    return { success: false, message: "Invalid email address." };
  }

  try {
    await saveNewsletterSubscriber(validatedFields.data.email);
  } catch {
    return { success: false, message: "Could not save subscription." };
  }

  return { success: true, message: "Successfully subscribed!" };
}

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters."),
  interest: z.string(),
});

export async function submitContactForm(
  data: z.infer<typeof contactFormSchema>,
) {
  const validatedFields = contactFormSchema.safeParse(data);

  if (!validatedFields.success) {
    return { success: false, message: "Invalid form data." };
  }

  try {
    await saveContactSubmission(validatedFields.data);
  } catch {
    return { success: false, message: "Could not save contact submission." };
  }

  return { success: true, message: "Your message has been submitted!" };
}

const innovateFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  projectName: z.string().min(2, "Project name must be at least 2 characters."),
  pitch: z
    .string()
    .min(10, "Pitch must be at least 10 characters.")
    .max(140, "Pitch must be 140 characters or less."),
  description: z
    .string()
    .min(50, "Description must be at least 50 characters."),
  stage: z.string({ required_error: "Please select a stage." }),
  ipAck: z.literal<boolean>(true, {
    errorMap: () => ({ message: "You must acknowledge the IP statement." }),
  }),
});

export async function submitInnovationPitch(
  data: z.infer<typeof innovateFormSchema>,
) {
  const validatedFields = innovateFormSchema.safeParse(data);

  if (!validatedFields.success) {
    return { success: false, message: "Invalid form data." };
  }

  try {
    await saveInnovationPitch(validatedFields.data);
  } catch {
    return { success: false, message: "Could not save innovation pitch." };
  }

  return {
    success: true,
    message: "Your pitch has been submitted! We'll be in touch.",
  };
}

const waitlistFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  org: z.string().min(2, "Organization must be at least 2 characters."),
  role: z.string().min(2, "Role must be at least 2 characters."),
  useCase: z
    .string()
    .min(10, "Please describe your use case in at least 10 characters."),
  consent: z.literal<boolean>(true, {
    errorMap: () => ({ message: "You must consent to join the waitlist." }),
  }),
});

export async function submitHealthMateWaitlist(
  data: z.infer<typeof waitlistFormSchema>,
) {
  const validatedFields = waitlistFormSchema.safeParse(data);

  if (!validatedFields.success) {
    return { success: false, message: "Invalid form data." };
  }

  try {
    await saveWaitlistSubmission(validatedFields.data);
  } catch {
    return { success: false, message: "Could not save waitlist submission." };
  }

  return { success: true, message: "You're on the list!" };
}

const briefingFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  org: z.string().min(2, "Organization must be at least 2 characters."),
  website: z.string().url("Please enter a valid website URL."),
  purpose: z
    .string()
    .min(
      20,
      "Please provide more details on your purpose (min. 20 characters).",
    ),
  region: z.string().min(2, "Region is required."),
  consent: z.literal<boolean>(true, {
    errorMap: () => ({ message: "You must consent to proceed." }),
  }),
});

export async function submitNdaBriefingRequest(
  data: z.infer<typeof briefingFormSchema>,
) {
  const validatedFields = briefingFormSchema.safeParse(data);

  if (!validatedFields.success) {
    return { success: false, message: "Invalid form data." };
  }

  try {
    await saveBriefingRequest(validatedFields.data);
  } catch {
    return { success: false, message: "Could not save briefing request." };
  }

  return { success: true, message: "Request submitted." };
}

const mediaRequestFormSchema = z.object({
  name: z.string().min(2, "Name is required."),
  email: z.string().email("Invalid email address."),
  publication: z.string().min(2, "Publication name is required."),
  link: z.string().url("Please enter a valid publication link."),
  embargoAck: z.literal<boolean>(true, {
    errorMap: () => ({ message: "You must acknowledge the embargo." }),
  }),
});

export async function submitMediaKitRequest(
  data: z.infer<typeof mediaRequestFormSchema>,
) {
  const validatedFields = mediaRequestFormSchema.safeParse(data);

  if (!validatedFields.success) {
    return { success: false, message: "Invalid form data." };
  }

  try {
    await saveMediaRequest(validatedFields.data);
  } catch {
    return { success: false, message: "Could not save media request." };
  }

  return { success: true, message: "Media kit request submitted." };
}

const blogIdeasSchema = z.object({
  topic: z.string().min(1),
  ideas: z.array(z.string().min(1)).min(1),
});

export async function saveBlogIdeasGeneration(
  data: z.infer<typeof blogIdeasSchema>,
) {
  const validatedFields = blogIdeasSchema.safeParse(data);

  if (!validatedFields.success) {
    return { success: false, message: "Invalid blog ideas payload." };
  }

  try {
    await saveBlogIdeas(validatedFields.data.topic, validatedFields.data.ideas);
  } catch {
    return { success: false, message: "Could not save blog ideas." };
  }

  return { success: true, message: "Blog ideas saved." };
}
