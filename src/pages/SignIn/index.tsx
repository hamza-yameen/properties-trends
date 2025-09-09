import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '@/components/containers/Navbar'
import Auth from '@/components/auth/Auth'
import { useAuth } from '@/context'

const SignIn = () => {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/charts')
    }
  }, [isAuthenticated, navigate])

  return (
    <>
      <Navbar />
      <Auth mode="signin" />
    </>
  )
}

export default SignIn
