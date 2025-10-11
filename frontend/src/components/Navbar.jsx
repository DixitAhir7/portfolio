import { Link, NavLink } from "react-router-dom";

export default function Navbar() {


    return (
        <header className="shadow-sm">
            <nav className="flex h-20">
                <Link to='/' className="text-2xl ml-5">Introduction</Link>
                <ul className="flex gap-12 text-2xl ml-auto mr-25">
                    <NavLink className={({ isActive }) =>
                        isActive ? 'bg-gray-400' : ''}
                        to='/'>
                        Home
                    </NavLink>

                    <NavLink className={({ isActive }) =>
                        isActive ? 'bg-orange-400 p-1 text-white/90' : ''}
                        to='/projects'>
                        projects
                    </NavLink>

                    <NavLink className={({ isActive }) =>
                        isActive ? 'bg-gray-400' : ''}
                        to='/contact'>
                        contact
                    </NavLink>
                </ul>
            </nav>
        </header>
    );
};