import { SignUpForm } from "@/components/domain/auth/sign-up-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create an account",
};

export default function SignUpPage() {
  return <SignUpForm />;
}
