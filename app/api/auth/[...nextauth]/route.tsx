import authOptions from "@/app/auth/authOptions";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/prisma/client";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
