
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { submitInnovationPitch } from "@/app/actions";
import { Checkbox } from "../ui/checkbox";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  projectName: z.string().min(2, "Project name must be at least 2 characters."),
  pitch: z.string().min(10, "Your one-line pitch must be at least 10 characters.").max(140, "Pitch must be 140 characters or less."),
  description: z.string().min(50, "Please provide a more detailed description (min. 50 characters)."),
  stage: z.string({ required_error: "Please select the current stage of your project." }),
  ipAck: z.literal<boolean>(true, {
    errorMap: () => ({ message: "You must acknowledge the IP statement." }),
  }),
});

export function InnovateForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      projectName: "",
      pitch: "",
      description: "",
      ipAck: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await submitInnovationPitch(values);

    if (result.success) {
      toast({
        title: "Pitch Submitted!",
        description: "Thank you for sharing your idea. Our team will review it and be in touch if there's a potential fit.",
      });
      form.reset();
    } else {
      toast({
        variant: "destructive",
        title: "Something went wrong.",
        description: result.message,
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
            <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                    <Input {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                    <Input {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
        </div>
        <FormField
          control={form.control}
          name="projectName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project / Idea Name</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Project HealthVision" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pitch"
          render={({ field }) => (
            <FormItem>
              <FormLabel>One-Line Pitch</FormLabel>
              <FormControl>
                <Input placeholder="A short, compelling summary of your idea." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Detailed Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Describe the problem you're solving, your solution, and its potential impact." {...field} rows={5}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
            control={form.control}
            name="stage"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Current Stage</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                    <SelectTrigger>
                        <SelectValue placeholder="Select the current stage" />
                    </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                    <SelectItem value="concept">Concept/Idea</SelectItem>
                    <SelectItem value="prototype">Prototype (Working Demo)</SelectItem>
                    <SelectItem value="pre-seed">Pre-Seed/Early Funding</SelectItem>
                    <SelectItem value="research">Academic Research</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                </Select>
                <FormMessage />
                </FormItem>
            )}
        />
        <FormField
            control={form.control}
            name="ipAck"
            render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      I acknowledge that this submission is for review purposes and does not create a binding partnership. I confirm I have the right to share this idea.
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
            )}
        />
        <Button type="submit" disabled={form.formState.isSubmitting} className="w-full">
          {form.formState.isSubmitting ? 'Submitting...' : 'Submit Pitch'}
        </Button>
      </form>
    </Form>
  );
}
