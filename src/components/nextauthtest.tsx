'use client'

import { signOut } from "next-auth/react"
import { Button } from "react-bootstrap"

export const SignOutButton = () => {
    return(
    
    <Button variant="danger" onClick={() => signOut()}>Sign out</Button>
    )
}