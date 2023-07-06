import { ReactNode, createContext, useContext, useState } from 'react'
import { api } from '../services/api'

interface AuthProviderProps {
  children: ReactNode
}

interface SignInProps {
  email?: string | undefined
  password?: string | undefined
}

interface AuthContextProps {
  signIn: (props: SignInProps) => Promise<void>
  // user: any
}

const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {
  const [userData, setUserData] = useState({})

  async function signIn(data: SignInProps) {
    try {
      const response = await api.post('/sessions', data)
      const { user, token } = response.data
      console.log(user, token)

      api.defaults.headers.authorization = `Bearer ${token}`
      setUserData({ user, token })
    } catch (err: any) {
      if (err.response) {
        alert(err.response.data.message)
      }
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, user: userData.user }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
