import { useState, useEffect, createContext, useContext } from "react"

interface AuthContext {
  payload?: JWTPayload
  setAuth: (payload: JWTPayload) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContext>({
  setAuth: () => {},
  logout: () => {},
})

export const AuthContextProvider = ({ children }: any) => {
  const [payload, setPayload] = useState<JWTPayload>()
  const setAuth = (payload: JWTPayload) => {
    localStorage.setItem("payload", JSON.stringify(payload))
    setPayload(payload)
  }

  const logout = () => {
    localStorage.removeItem("payload")
    setPayload(undefined)
  }

  useEffect(() => {
    const str = localStorage.getItem("payload")
    if (str) {
      const payload = JSON.parse(str) as JWTPayload
      setPayload(payload)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ payload, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export interface JWTPayload {
  user_id: number
  email: string
  name: string
}

export const useAuth = () => {
  return useContext(AuthContext)
}
