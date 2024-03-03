import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { NavLinks } from "../Navbar/Navbar";
// import { NavLinks } from "../Navbar/Navbar"; shu tepadagi o'zgaruvchi import qilib olib kelindi uyoqdan esa constdan avval export yozib export qilindi

const ResponsiveMenu = ({ showMenu }) => {
    return (
        <div
            className={`${showMenu ? "left-0" : "-left-full"}
        fixed top-0 z-50 bg-white dark:bg-gray-900
        h-screen w-[60%] md:hidden rounded-r-xl shadow-md flex  flex-col justify-between px-8 pb-6 pt-16 transition-all duration-300`}
        >
            <div className="card ">
                <div className="flex items-center justify-start gap-3">
                    <FaUserCircle size={50} />
                    <div>
                        <h1>Hello User</h1>
                        <h1>Premium user</h1>
                    </div>
                </div>
                {/* Links */}
                <nav className="mt-12">
                    <ul className="space-y-4 text-xl">
                        {NavLinks.map((data) => (
                            <li>
                                <a href={data.link}>{data.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            {/* Footer */}
            <div>
                <h1>
                    Made with 🖤 by
                    <a
                        href="https://github.com/NurMuhammad1988/for-jizzax-motors-uz"
                        target="_blank"
                    >
                        Nur
                    </a>
                </h1>
            </div>
        </div>
    );
};

export default ResponsiveMenu;