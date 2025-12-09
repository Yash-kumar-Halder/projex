"use client"
import LoginForm from "@/components/login-form"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <div className="w-full h-screen flex items-center justify-center" >
        <LoginForm />
    </div>
  )
}