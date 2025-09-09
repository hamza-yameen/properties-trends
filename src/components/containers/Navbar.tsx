import { Link, useLocation, useNavigate } from 'react-router-dom'
import { MenuBar } from '../ui/glow-menu'
import { BarChart3, Table, UserPlus, LogIn, Home, LogOut } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useAuth } from '@/context'

const Navbar: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [activeItem, setActiveItem] = useState<string>("Home")
  const { isAuthenticated, logout } = useAuth()

  // Update active item based on current route
  useEffect(() => {
    const path = location.pathname
    if (path === '/') setActiveItem("Home")
    else if (path === '/charts') setActiveItem("Charts")
    else if (path === '/tables') setActiveItem("Tables")
    else if (path === '/signup') setActiveItem("Signup")
    else if (path === '/login') setActiveItem("Login")
  }, [location])

  const menuItems = [
    {
      icon: Home,
      label: "Home",
      href: "/",
      gradient: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
      iconColor: "text-blue-500",
    },
    ...(isAuthenticated ? [] : [
      {
        icon: UserPlus,
        label: "Signup",
        href: "/signup",
        gradient: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(147,51,234,0.06) 50%, rgba(126,34,206,0) 100%)",
        iconColor: "text-purple-500",
      },
      {
        icon: LogIn,
        label: "Login",
        href: "/login",
        gradient: "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
        iconColor: "text-red-500",
      },
    ]),
    ...(isAuthenticated ? [
      {
        icon: BarChart3,
        label: "Charts",
        href: "/charts",
        gradient: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
        iconColor: "text-green-500",
      },
      {
        icon: LogOut,
        label: "Logout",
        href: null, // No href for logout
        gradient: "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
        iconColor: "text-red-500",
        isLogout: true, // Flag to identify logout action
      },
    ] : []),
  ]

  const handleItemClick = (label: string) => {
    setActiveItem(label)
    const item = menuItems.find(item => item.label === label)
    if (item) {
      if (item.isLogout) {
        // Handle logout
        logout()
        navigate('/')
      } else if (item.href) {
        // Handle navigation
        navigate(item.href)
      }
    }
  }

  return (
    <nav className="bg-[#F2F1EF] backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-2 sm:py-0 sm:h-16">
          {/* Logo - Full width on mobile, left-aligned on desktop */}
          <div className="flex items-center mb-2 sm:mb-0 w-full sm:w-auto justify-center sm:justify-start">
            <Link to="/">
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Data Visualization
              </h1>
            </Link>
          </div>
          
          {/* Navigation Menu - Centered on mobile, right-aligned on desktop */}
          <div className="flex items-center justify-center">
            <MenuBar
              items={menuItems}
              activeItem={activeItem}
              onItemClick={handleItemClick}
              className="bg-white/60 backdrop-blur-md border border-gray-200/50 w-full sm:w-auto"
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
