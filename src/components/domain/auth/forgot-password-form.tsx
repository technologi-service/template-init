"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import Link from "next/link";
import { Loader2 } from "lucide-react";

import { authClient } from "@/lib/auth/client";
import { AuthCard } from "./auth-card";
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

const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
});

type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>;

export function ForgotPasswordForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ForgotPasswordValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: ForgotPasswordValues) {
    setIsLoading(true);
    try {
      const { error } = await authClient.requestPasswordReset({
        email: values.email,
        redirectTo: "/reset-password", // Page where user lands after clicking email link
      });

      if (error) {
        toast.error(error.message || "An error occurred");
        return;
      }

      setIsSuccess(true);
      toast.success("Password reset email sent!");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  if (isSuccess) {
    return (
      <AuthCard
        title="Check your email"
        description="We have sent you a password reset link."
        footer={
          <Button asChild className="w-full" variant="outline">
            <Link href="/sign-in">Back to Sign In</Link>
          </Button>
        }
      >
        <div className="text-center text-sm text-muted-foreground pb-4">
          If you don&apos;t see the email, check your spam folder.
        </div>
      </AuthCard>
    );
  }

  return (
    <AuthCard
      title="Forgot Password"
      description="Enter your email to reset your password"
      footer={
        <div className="text-sm text-muted-foreground text-center w-full">
          Remember your password?{" "}
          <Link
            href="/sign-in"
            className="underline underline-offset-4 hover:text-primary"
          >
            Sign in
          </Link>
        </div>
      }
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="m@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Send Reset Link
          </Button>
        </form>
      </Form>
    </AuthCard>
  );
}
