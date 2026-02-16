import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../db/client";
import { authConfig } from "./config";
import { sendEmail } from "../resend/send";
import { VerifyEmail } from "./emails/verify-email";
import { ForgotPassword } from "./emails/forgot-password";

export const auth = betterAuth({
  secret: authConfig.server.secret,
  baseURL: authConfig.server.url,
  database: drizzleAdapter(db, {
    provider: "pg",
    usePlural: true,
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    async sendResetPassword(data, request) {
      // data: { user, url, token }
      await sendEmail({
        to: data.user.email,
        subject: "Reset your password",
        react: <ForgotPassword url={data.url} name={data.user.name} />,
      });
    },
  },
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    async sendVerificationEmail(data, request) {
      // data: { user, url, token }
      await sendEmail({
        to: data.user.email,
        subject: "Verify your email address",
        react: <VerifyEmail url={data.url} name={data.user.name} />,
      });
    },
  },
});
