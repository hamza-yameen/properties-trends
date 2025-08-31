import Navbar from '@/components/containers/Navbar'
import Auth from '@/components/auth/Auth'

const SignIn = () => {
  return (
    <>
      <Navbar />
      <Auth mode="signin" />
    </>
  )
}

export default SignIn
