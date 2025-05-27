import { Link, useLocation } from "react-router"

export default function () {
     const { pathname } = useLocation()
     console.log(pathname)
     const nav_item = <>
          <li className="font-semibold"><Link className={`mr-2 ${pathname == "/" && "btn btn-success btn-outline"}`} to="/">Home</Link></li>
          <li className="font-semibold"><Link className={`mr-2 ${pathname == "/all-visa" && "btn btn-success btn-outline"}`} to="/all-visa">All Visa</Link></li>
          <li className="font-semibold"><Link className={`mr-2 ${pathname == "/add-visa" && "btn btn-success btn-outline"}`} to="/add-visa">Add Visa</Link></li>
          <li className="font-semibold"><Link className={`mr-2 ${pathname == "/my-visa" && "btn btn-success btn-outline"}`} to="/my-visa">My added visas</Link></li>
          <li className="font-semibold"><Link className={`mr-2 ${pathname == "/my-applied-visa" && "btn btn-success btn-outline"}`} to="/my-applied-visa">My Visa applications</Link></li>
     </>
     return (
          <div className="navbar bg-base-100 shadow-sm">
               <div className="navbar-start">
                    <div className="dropdown">
                         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                         </div>
                         <ul
                              tabIndex={0}
                              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                              {nav_item}
                         </ul>
                    </div>
                    <Link to="/" >
                         <img
                              src="/logo.jpg"
                              className="w-20"
                         />
                    </Link>
               </div>
               <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                         {nav_item}
                    </ul>
               </div>
               <div className="navbar-end space-x-3">
                    <button className="btn btn-success">Log In</button>
                    <button className="btn btn-info">Register</button>
               </div>
          </div>
     )
}
