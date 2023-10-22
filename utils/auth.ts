import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/app/libs/prismadb";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { NextAuthOptions, User, getServerSession } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: User & {
            isAdmin: Boolean;
        };
    }
}
declare module "next-auth/jwt" {
    interface JWT {
        isAdmin: Boolean;
    }
}

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "email", type: "text" },
                password: { label: "password", type: "text" }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) throw new Error("Invalid credentials");

                const user = await prisma.user.findUnique({
                    where: { email: credentials.email }
                })

                if (!user || !user?.hashedPassword) throw new Error("Invalid credentials");

                const isValidPassword = await bcrypt.compare(credentials.password, user.hashedPassword);

                if (!isValidPassword) throw new Error("Invalid credentials");

                return user;
            }
        }),
    ],
    callbacks: {
        async session({ token, session }) {
            if (token) {
                session.user.isAdmin = token.isAdmin;
            }
            return session;
        },
        async jwt({ token }) {
            const existingUser = await prisma.user.findUnique({
                where: {
                    email: token.email!,
                },
            });
            token.isAdmin = existingUser?.isAdmin!;
            return token;
        },
    },
    secret: process.env.NEXTAUTH_SECRET
};

export const getAuthSession = () => getServerSession(authOptions);