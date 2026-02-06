import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        "text-sm font-medium mr-6 py-2 border-b-2 border-transparent hover:border-slate-200 " +
        (isActive ? "border-slate-900" : "text-slate-600")
      }
    >
      {children}
    </NavLink>
  );
}

export default function Header() {
  return (
    <header className="py-6 border-b">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-slate-900 to-indigo-600 flex items-center justify-center text-white font-bold">
            A
          </div>
          <div>
            <div className="text-xl font-serif">Astria</div>
            <div className="text-xs text-slate-500">Curated | Contemporary | Fine</div>
          </div>
        </Link>

        <nav className="flex items-center">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/gallery">Gallery</NavItem>
          <NavItem to="/artists">Artists</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </nav>
      </div>
    </header>
  );
}
