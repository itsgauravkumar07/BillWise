import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import { useState } from 'react';

function Navbar(){
    const[menuOpen, setMenuOpen] = useState(false);
    const links = [
    { name: "Dashboard", to: "/" },
    { name: "Add Subscription", to: "/add" },
    { name: "Setting", to: "/setting" },
  ];

  return (
    <nav className="w-full bg-white flex items-center justify-between mt-5 relative">
      {/* Logo */}
      <div>
        <img src={logo} alt="logo" className="h-14" />
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6 items-center">
        {links.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `px-3 py-2 font-medium hover:text-indigo-500 ${
                isActive ? "text-indigo-500" : "text-gray-800"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      {/* Hamburger Button */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-gray-200 flex flex-col p-2 rounded shadow-md md:hidden">
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `px-3 py-2 font-medium hover:text-indigo-500 ${
                  isActive ? "text-indigo-500" : "text-gray-800"
                }`
              }
              onClick={() => setMenuOpen(false)} // closes menu on click
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;