'use client'

import { useEffect } from 'react'
import { useAuthState } from '../context/authContext'

const Button = ({ cook }: { cook: string }) => {
  const { addCookie } = useAuthState(state => ({
    addCookie: state.addUser
  }))

  const testServer = async () => {
    const response = await fetch('https://server-ten-opal.vercel.app')
    const data = await response.json()
    console.log(data)
    return data as {
      msg: string
      cook: string
      sess: string
    }
  }

  useEffect(() => {
    testServer()
  }, [])

  return <button onClick={() => addCookie(cook)}>Push</button>
}

export default Button
