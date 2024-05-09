import React, { PropsWithChildren } from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AuthProvider from "./AuthProvider";
import { ThemeProvider } from "./ThemeProvider";
import { redirect } from "next/navigation";
async function AppProvider({ children }: PropsWithChildren) {
  const session = await getServerSession(authOptions);
  return (
    <AuthProvider session={session}>
      <ThemeProvider>{children}</ThemeProvider>
    </AuthProvider>
  );
}

export default AppProvider;
