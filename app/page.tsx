'use client'
import "@/styles/style.css";
import Template from "./templates";
import {auth, signOut} from '@/auth'
import { useEffect } from "react";
import {useSession} from "next-auth/react"
import { logOut } from "@/lib/auth-action";
export default  function Home() {
  const session =  useSession()
  console.log(session.data)
  return (
    <>
    <Template />
    <button onClick={() => (async()=>{
      await logOut()
    })()}>Sign out</button>
    </>
  );
}
