import NextAuth from "next-auth";
import type { AuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req): Promise<any> {
        const user = {
          email: credentials?.email,
          password: credentials?.password
        };
        if (user) {
          return user;
        } else {
          return null;
        }
      }
    })
  ],
  session: { strategy: "jwt", maxAge: 1 * 60 * 60 },
  callbacks: {
    async session({ session, token, user }) {
      //   const sanitizedToken = Object.keys(token).reduce((p, c) => {
      //     // strip unnecessary properties
      //     if (c !== "iat" && c !== "exp" && c !== "jti" && c !== "apiToken") {
      //       return { ...p, [c]: token[c] };
      //     } else {
      //       return p;
      //     }
      //   }, {});
      return { ...session, user: session.user, apiToken: token.apiToken };
    },
    async jwt({ token, user, account, profile }) {
      if (typeof user !== "undefined") {
        return user as unknown as JWT;
      }
      return token;
    }
  }
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
