import { create } from 'zustand'
import Cookies from 'js-cookie'

interface AuthProps {
  userCookie: string
  addUser: (cookie: string) => void
}

export const useAuthState = create<AuthProps>(set => ({
  userCookie: '',
  addUser: (cookie: string) =>
    set(state => {
      Cookies.set('userId', cookie)

      return {
        ...state,
        userCookie: cookie
      }
    })
}))
