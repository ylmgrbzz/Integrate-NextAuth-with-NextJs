import NextAuth , { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Enter Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials || credentials.email || credentials.password)
          return null;
        const user = users.find((user) => user.email === credentials.email);
        if (user && user.password === credentials.password) {
          return user;
        }
        return null;
      },
    }),
  ],
  secret: process.env.SECRET,
};

const handler = NextAuth(authOptions);

export default handler;
