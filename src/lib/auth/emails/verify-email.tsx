import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Link,
  Hr,
} from "@react-email/components";

type VerifyEmailProps = {
  url: string;
  name?: string;
};

export function VerifyEmail({ url, name }: VerifyEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          <Section style={sectionStyle}>
            <Text style={headingStyle}>Verify your email</Text>
            <Text style={textStyle}>
              {name ? `Hi ${name},` : "Hi,"} thanks for signing up! Please
              verify your email address by clicking the button below.
            </Text>
            <Link href={url} style={buttonStyle}>
              Verify Email Address
            </Link>
            <Hr style={hrStyle} />
            <Text style={footerStyle}>
              If you didn&apos;t create an account, you can safely ignore this
              email.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const bodyStyle: React.CSSProperties = {
  backgroundColor: "#f4f4f5",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
};

const containerStyle: React.CSSProperties = {
  maxWidth: "480px",
  margin: "40px auto",
  padding: "0 20px",
};

const sectionStyle: React.CSSProperties = {
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  padding: "40px 32px",
  border: "1px solid #e4e4e7",
};

const headingStyle: React.CSSProperties = {
  fontSize: "24px",
  fontWeight: "600",
  color: "#09090b",
  marginBottom: "16px",
};

const textStyle: React.CSSProperties = {
  fontSize: "15px",
  lineHeight: "24px",
  color: "#3f3f46",
  marginBottom: "24px",
};

const buttonStyle: React.CSSProperties = {
  display: "inline-block",
  backgroundColor: "#18181b",
  color: "#fafafa",
  fontSize: "14px",
  fontWeight: "500",
  padding: "12px 24px",
  borderRadius: "8px",
  textDecoration: "none",
};

const hrStyle: React.CSSProperties = {
  borderColor: "#e4e4e7",
  margin: "32px 0 16px",
};

const footerStyle: React.CSSProperties = {
  fontSize: "13px",
  color: "#71717a",
};
