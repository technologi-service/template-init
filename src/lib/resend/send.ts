import { resend } from "./client";
import { resendConfig } from "./config";

type SendEmailParams = {
  to: string | string[];
  subject: string;
  react: React.ReactElement;
  from?: string;
};

export async function sendEmail({ to, subject, react, from }: SendEmailParams) {
  try {
    const { data, error } = await resend.emails.send({
      from: from ?? resendConfig.server.fromEmail,
      to: Array.isArray(to) ? to : [to],
      subject,
      react,
    });

    if (error) {
      throw new Error(`Failed to send email: ${error.message}`);
    }

    return data;
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "⚠️ Email delivery failed. This is common in Resend sandbox mode.",
      );
      console.warn("📨 Destination:", to);
      console.warn("📝 Subject:", subject);
      // Try to extract URL if it's a verification/reset email
      if (
        react &&
        typeof react === "object" &&
        "props" in react &&
        react.props &&
        typeof react.props === "object" &&
        "url" in react.props
      ) {
        console.info(
          "🔗 Found link in email:",
          (react.props as { url: string }).url,
        );
      }
      return { id: "dev-simulated-id" };
    }
    throw error;
  }
}
