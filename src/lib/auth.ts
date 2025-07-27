import NextAuth, { NextAuthOptions } from "next-auth";
import SequelizeAdapter from "@auth/sequelize-adapter";
import sequelize from "../../database/config/db_connection"; 
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
// import InstagramProvider from "next-auth/providers/instagram";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
    // InstagramProvider({
    //   clientId: process.env.FACEBOOK_CLIENT_ID!,
    //   clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    // }),
  ],
  adapter: SequelizeAdapter(sequelize),
  session: {
    strategy: "database", // Use DB-based session
  },
  // pages: {
  //   signIn: "/api/auth/signin", // Optional: custom pages
  // },
  debug: process.env.NODE_ENV === "development",
};

export const { handlers, auth, signIn, signOut }  = NextAuth(authOptions);