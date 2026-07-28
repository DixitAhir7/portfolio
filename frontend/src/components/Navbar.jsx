import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    const navLinkClass = ({ isActive }) =>
        `px-3 py-2 rounded-md transition-colors duration-200 ${isActive
            ? "bg-orange-400 text-white"
            : "text-gray-700 hover:bg-gray-100"
        }`;

    return (
        <header className="w-full border-b shadow-sm">
            <nav className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* Logo / Name */}
                <Link
                    to="/"
                    className="text-xl font-semibold sm:text-2xl"
                >
                    Dixit Ahir
                </Link>

                {/* Navigation Links */}
                <ul className="flex items-center gap-2 text-sm sm:gap-4 sm:text-base md:gap-6 md:text-lg">
                    <li>
                        <NavLink to="/" className={navLinkClass}>
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/projects" className={navLinkClass}>
                            Projects
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/contact" className={navLinkClass}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}