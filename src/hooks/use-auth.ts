"use client";

import { useSession, signOut } from "@/lib/auth/client";
import { useRouter } from "next/navigation";

/**
 * Custom hook to handle authentication state and actions.
 * Follows the "Wrapper Pattern" required by the System Architect Protocol.
 */
export function useAuth() {
  const { data: session, isPending, error } = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/");
            router.refresh();
          },
        },
      });
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return {
    session,
    user: session?.user,
    isPending,
    error,
    signOut: handleSignOut,
    isAuthenticated: !!session,
  };
}
