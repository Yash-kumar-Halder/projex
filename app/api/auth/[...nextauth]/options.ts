import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import { connectToDB } from "@/db/connectDB";
import User from "@/models/user.model";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider(
    {
        id: "credentials",
        name: "Credentials",
        credentials: {
            email: {
            label: "Email",
            type: "email",
            placeholder: "example@gmail.com",
            },
            password: { label: "Password", type: "password" },
        },
        async authorize(credentials: any): Promise<any> {
            try {
                await connectToDB();

                if(!credentials.email || !credentials.password) {
                    throw new Error("Missing credentials")
                }

            // Add your authentication logic here
            const user = await User.findOne({
                $or: [
                { email: credentials.email }
                ],
            });
            if (!user) {
                throw new Error("No user found with this email");
            }

            console.log("User = ", user)

            const isPasswordCorrect = await bcrypt.compare(
                credentials.password,
                user.password
            );
            if (!isPasswordCorrect) {
                throw new Error("Invalid password");
            } else {
                return {
                    id: user._id.toString(),
                    name: user.name,
                    email: user.email
                };
            }
            } catch (error: any) {
            throw new Error(error);
            }
        },
    }
    ),
    GoogleProvider(
        {
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGEL_CLIENT_SECRET!
        }
    )
  ],
  callbacks: {
    async signIn({user, account}) {
        await connectToDB();

        if(account?.provider === "google") {
            const existingUser = await User.findOne({email: user.email});

            if(!existingUser) {
                await User.create(
                    {
                        name: user.name,
                        email: user.email,
                        authProvider: "google"
                    }
                )
            }
        }

        return true;
    },
    async jwt({ token, user }) {
      if (user) {
        (token.id = user.id?.toString()),
        (token.email = user.email),
        (token.name = user.name);
      }
      return token;
    },
    async session({ session, token }) {
        if (token) {
          session.user.id = token.id as string;
        }
        return session;
      },    
  }
//   secret: process.env.NEXT_AUTH_SECRET,
};
