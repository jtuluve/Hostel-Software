'use server'
import { auth, signIn, signOut } from '@/auth'
import { createUser } from '@/backend'

export async function LogIn({email,password}) {
  await signIn('credentials', { email, password, redirect: false })
}

export async function signup(data) {
   await createUser(data.name,data.usn,data.email,data.hashedPassword,data.image,data.phNo,data.role,data.departmentName)
}

export async function logOut() {
  return await signOut()
}