'use client'

import { signOut } from "next-auth/react"

export const SignOutButton = () => {
    return(
    
    <button className="btn btn-danger" onClick={() => signOut()}>Sign out</button>
    )
}