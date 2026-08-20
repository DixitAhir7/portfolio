import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    const navLinkClass = ({ isActive }) =>
        `rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 sm:px-4 sm:py-2.5 sm:text-base ${isActive
            ? "bg-orange-500 text-white shadow-sm"
            : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
        }`;

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur">
            <nav className="mx-auto flex min-h-16 max-w-7xl items-center px-4 sm:min-h-20 sm:px-6 lg:px-8">

                {/* Logo + Profile */}
                <div className="flex items-center gap-3 sm:gap-4">
                    <Link
                        to="/"
                        className="text-lg font-bold tracking-tight text-gray-900 transition-colors hover:text-orange-500 sm:text-2xl"
                    >
                        Dixit Ahir
                    </Link>

                    {/* <Link to="/" aria-label="Dixit Ahir profile">
                        <img
                            src="/images/WhatsApp Image 2025-07-12 at 22.02.01_418d642f.jpg"
                            alt="Dixit Ahir"
                            className="size-9 rounded-full object-cover shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg sm:h-11 sm:w-11"
                        />
                    </Link> */}
                </div>

                {/* Navigation */}
                <ul className="ml-auto flex items-center gap-1 sm:gap-2 md:gap-3">
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