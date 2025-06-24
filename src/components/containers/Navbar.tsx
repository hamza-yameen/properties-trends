import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Data Visualization
              </h1>
            </div>
            <div className="flex space-x-4">
              <Link to="/">
                <Button variant="ghost" className="text-slate-700 hover:text-blue-600 transition-colors">
                  Home
                </Button>
              </Link>
              <Link to="/tables">
                <Button variant="ghost" className="text-slate-700 hover:text-blue-600 transition-colors">
                  Tables
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar
