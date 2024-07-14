import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Authentication/AuthProvider";
import logo from "../../../assets/logo.png"

const Navbar = (props) => {
    const { user, logout } = useContext(AuthContext)
    const handleLogout = () => [
        logout()
            .then()
            .catch()

    ]
    const navlist = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/properties">Properties</NavLink></li>

    </>
    return (
        <div className="navbar bg-base-100 mb-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navlist}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><img className="w-12" src={logo} alt="" /><span>Luxudo</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlist}

                </ul>
            </div>

            <div className="navbar-end">
                {user ?
                    <div className="flex gap-2 items-center">


                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">



                            <div className="w-10 rounded-full">
                                <img

                                    src={user.photoURL} alt="Tailwind CSS Navbar component" />
                            </div>

                        </div>
                        <Link className="hover:underline hover:text-blue-600 lg:block hidden" to={`profile/${user.uid}`}>{user.displayName}</Link>
                        <button onClick={handleLogout} className="btn">Logout</button>
                    </div> :
                    <div>
                        <Link to='/login' className="btn">Login</Link>
                        <Link to='/register' className="btn">Register</Link>

                    </div>


                }


            </div>
        </div>
    )
};

export default Navbar;
