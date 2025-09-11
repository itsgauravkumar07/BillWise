import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'

function Navbar(){

    return(
        <nav className='w-full bg-white h-15 flex items-center justify-between mt-6 mb-6' >
            <div>
                <img src={logo} alt="logo" className='h-16'/>
            </div>

            <div className='flex gap-8 items-center mr-5'>

                <NavLink to="/"
                    className={({ isActive }) => 
                         `px-3 py-2 font-medium hover:text-indigo-500 ${
                         isActive ? "text-indigo-500" : "text-gray-800"
                        }`}
                >
                    Dashboard
                </NavLink>

                <NavLink to="/add"
                    className={({ isActive }) => 
                         `px-3 py-2 font-medium hover:text-indigo-500 ${
                         isActive ? "text-indigo-500" : "text-gray-800"
                        }`}
                >
                    Add subscription
                </NavLink>

                
                <NavLink to="/setting"
                    className={({ isActive }) => 
                         `px-3 py-2 font-medium hover:text-indigo-500 ${
                         isActive ? "text-indigo-500" : "text-gray-800"
                        }`}
                >
                    Setting
                </NavLink>
            </div>
           
        </nav>
    )
}

export default Navbar;