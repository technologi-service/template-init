import { auth } from "@/lib/auth/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in");
  }

  // Robust redirection to role-specific dashboard
  const userRole = (session.user as { role?: string }).role || "user";
  redirect(`/dashboard/${userRole}`);
}
