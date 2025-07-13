import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

// ✅ App Router expects named exports for HTTP methods
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };