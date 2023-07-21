import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import NextAuth from "next-auth";
import {
    type DefaultSession,
  } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import DiscordProvider from "next-auth/providers/discord";
import AzureADProvider from "next-auth/providers/azure-ad";
import CredentialsProvider from "next-auth/providers/credentials";


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
    session: {
      strategy: "jwt",
      maxAge: 1 * 24 * 60 * 60,
      updateAge: 4 * 60 * 60,
      generateSessionToken: () => {
        return self.crypto.randomUUID?.() 
      }



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
        CredentialsProvider({
          // The name to display on the sign in form (e.g. "Sign in with...")
          name: "Credentials",
          // `credentials` is used to generate a form on the sign in page.
          // You can specify which fields should be submitted, by adding keys to the `credentials` object.
          // e.g. domain, username, password, 2FA token, etc.
          // You can pass any HTML attribute to the <input> tag through the object.
          credentials: {
            email: { label: "Email", type: "text", placeholder: "jsmith@example.com" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials: { email: string; password: string } | undefined, req) {
            const { email, password } = credentials || { email: "", password: "" }; // Add default values to handle undefined
        
            try {
              // Use Prisma to query the user with the provided username and password
              const user = await prisma.user.findFirst ({
                where: {
                  email: email,
                  password: password,
                },
              });
        
              if (user) {
                // If the user is found, return it. Any object returned will be saved in the `user` property of the JWT.
                return user;
              } else {
                // If the user is not found, return null to indicate login failure.
                return null;
              }
            } catch (error) {
              // Handle any potential errors that might occur during the database query.
              console.error('Error fetching user:', error);
              throw new Error('Error fetching user'); // You can also Reject this callback with an Error to redirect to the error page.
            }
          },
        })        
    ],
    adapter: PrismaAdapter(prisma),
  });

  export { handler as GET, handler as POST };

  