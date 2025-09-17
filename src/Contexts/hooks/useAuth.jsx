import React, { use } from 'react'
import { AuthContext } from '../AuthContexts'

export default function useAuth() {
 const authInfo= use(AuthContext)
 return authInfo
}
