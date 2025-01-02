
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import { getUser } from "./backend";
import {JWT} from "next-auth/jwt"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: 'Email and Password',
      credentials: {
        email: { label: "Email", type: "Email", placeholder: "you@example.com", required: true },
        password: { label: "Password", type: "password",required: true }
      },async authorize(credentials, req) {
        if(!credentials?.email && !credentials?.password){
          return null;
        }
        const  user = await getUser(credentials.email as string)
        
        if(!user)
            return null

        const password = await bcrypt.compareSync(credentials.password, user.data.hashedPassword);

        if(!password)
            return null

        return user.data
      }
    })
    ],
    session : {
        strategy : "jwt",
      },
      secret: process.env.NEXTAUTH_SECRET,
      debug: process.env.NODE_ENV === "development",
      callbacks: {
        jwt({ token, user }) {
          if(user) 
          token = {
            name: user.name,
            email: user.email,
            image: user.image,
            role: user.role,
            departmentName: user.departmentName,
            phNo: user.phNo,

          };
            return token
        },
        session({ session, token }) {
          session.user.role = (token as JWT).role as string;
          session.user.departmentName = (token as JWT).departmentName as string;
          session.user.phNo = (token as JWT).phNo as number;
          return session
        }
      }
})