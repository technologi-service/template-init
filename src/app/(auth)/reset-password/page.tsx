import { ResetPasswordForm } from "@/components/domain/auth/reset-password-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Password",
  description: "Set a new password",
};

export default function ResetPasswordPage() {
  return <ResetPasswordForm />;
}
