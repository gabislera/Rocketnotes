/* eslint-disable dot-notation */
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../services/api'

interface AuthProviderProps {
  children: ReactNode
}

interface SignInProps {
  email?: string | undefined
  password?: string | undefined
}

// interface UpdateUserProps {
//   name?: string | undefined
//   email?: string | undefined
//   passwordOld?: string | undefined
//   passwordNew?: string | undefined
// }

interface AuthContextProps {
  signIn: (props: SignInProps) => Promise<void>
  signOut: () => void
  updateProfile: (data: any) => Promise<void>
  user: any
}

interface UserDataProps {
  user?: any
  token?: string
}

const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {
  const [userData, setUserData] = useState<UserDataProps>({})

  async function signIn(data: SignInProps) {
    try {
      const response = await api.post('/sessions', data)
      const { user, token } = response.data

      localStorage.setItem('@rocketnotes:user', JSON.stringify(user))
      localStorage.setItem('@rocketnotes:token', token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setUserData({ user, token })
    } catch (err: any) {
      if (err.response) {
        alert(err.response.data.message)
      }
    }
  }

  function signOut() {
    localStorage.removeItem('@rocketnotes:token')
    localStorage.removeItem('@rocketnotes:user')

    setUserData({})
  }

  async function updateProfile(data: any) {
    const { userData: user, avatarFile } = data
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append('avatar', avatarFile)

        const response = await api.patch('/users/avatar', fileUploadForm)
        user.avatar = response.data.avatar
      }

      await api.put('/users', user)
      localStorage.setItem('@rocketnotes:user', JSON.stringify(user))
      setUserData({ user, token: userData.token })

      alert('Perfil atualizado com sucesso')
    } catch (err: any) {
      if (err.response) {
        alert(err.response.data.message)
      } else {
        alert('Não foi possível atualizar o perfil')
      }
    }
  }

  useEffect(() => {
    console.log(userData)
  }, [userData])

  useEffect(() => {
    const token = localStorage.getItem('@rocketnotes:token')
    const user = localStorage.getItem('@rocketnotes:user')

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setUserData({
        token,
        user: JSON.parse(user),
      })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, updateProfile, user: userData.user }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
