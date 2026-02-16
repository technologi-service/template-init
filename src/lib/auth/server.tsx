import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../db/client";
import { authConfig } from "./config";
import * as schema from "./schema";
import { sendEmail } from "../resend/send";
import { VerifyEmail } from "./emails/verify-email";
import { ForgotPassword } from "./emails/forgot-password";

export const auth = betterAuth({
  secret: authConfig.server.secret,
  baseURL: authConfig.server.url,
  trustedOrigins: [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://localhost:3001",
    "http://127.0.0.1:3001",
  ],
  basePath: "/api/auth",
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    async sendResetPassword(data) {
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
    async sendVerificationEmail(data) {
      // data: { user, url, token }
      await sendEmail({
        to: data.user.email,
        subject: "Verify your email address",
        react: <VerifyEmail url={data.url} name={data.user.name} />,
      });
    },
  },
});
