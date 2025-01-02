import NextAuth from "next-auth";
import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {

  interface User extends DefaultUser {
    role?: string | null;
    departmentName?: string | null;
    phNo?: number | null;
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    user?: User;
  }
}