import {Link} from 'react-router-dom'
export default function Navbar(){
    return (
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-white text-xl font-bold">MyApp</div>
            <div className="space-x-4">
              <Link to="/register" className="text-gray-300 hover:text-white">Register</Link>
              <Link to="/login" className="text-gray-300 hover:text-white">Login</Link>
              <Link to="/logout" className="text-gray-300 hover:text-white">Logout</Link>
             
            </div>
          </div>
        </nav>
      );
    
}