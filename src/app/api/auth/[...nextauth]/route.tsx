import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import NextAuth from "next-auth";
import {
    getServerSession,
    type NextAuthOptions,
    type DefaultSession,
  } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import DiscordProvider from "next-auth/providers/discord";
import AzureADProvider from "next-auth/providers/azure-ad";

const prisma = new PrismaClient();

declare module "next-auth" {
    interface Session extends DefaultSession {
      user: {
        id: string;
        // ...other properties
        // role: UserRole;
      } & DefaultSession["user"];
    }
}

const handler = NextAuth({ 
    callbacks: {
        session: ({ session, user }) => ({
        ...session,
        user: {
            ...session.user,
            id: user.id,
        },
        }),
  },    
    providers: [
      
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID as string,
            clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
        }),
        AzureADProvider({
            name: "Microsoft 365",
            clientId: process.env.AZURE_AD_CLIENT_ID as string,
            clientSecret: process.env.AZURE_AD_CLIENT_SECRET as string,
            tenantId: process.env.AZURE_AD_TENANT_ID,
        }),
        EmailProvider({
            server: {
            host: process.env.EMAIL_SERVER_HOST,
            port: process.env.EMAIL_SERVER_PORT,
            auth: {
                user: process.env.EMAIL_SERVER_USER,
                pass: process.env.EMAIL_SERVER_PASSWORD,
            },
            },
            from: process.env.EMAIL_FROM,
        }),
    ],
    adapter: PrismaAdapter(prisma),
  });

  export { handler as GET, handler as POST };