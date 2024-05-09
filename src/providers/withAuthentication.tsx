import { useSession } from "next-auth/react";
import React from "react";
import { redirect } from "next/navigation";
const withAuthentication = (Component: any) => (props: any) => {
  const { data: session } = useSession();
  return session ? <Component {...props} /> : redirect("/login");
};
export default withAuthentication;
