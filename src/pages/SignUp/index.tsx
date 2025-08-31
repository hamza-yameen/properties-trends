import React from 'react'
import Navbar from '@/components/containers/Navbar'
import Auth from '@/components/auth/Auth'

const SignUp = () => {
  return (
    <div>
      <Navbar />
      <Auth mode="signup" />
    </div>
  )
}

export default SignUp
