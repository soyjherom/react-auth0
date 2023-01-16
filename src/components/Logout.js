import React, { useCallback } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export const LogOut = () => {
    const { logout } = useAuth0()
    const handleLogOut = useCallback(()=>{
        logout({returnTo: window.location.origin })
    },[logout])
    return <button onClick={handleLogOut}>LogOut</button>
}