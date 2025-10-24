import React from "react";
import {

    FaUser,
    FaBoxOpen,
    FaClipboardList,

} from "react-icons/fa";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png"


const Sidebar = () => {






    // --- Admin menu items ---
    const adminItems = [


        { icon: <FaUser />, label: "My bookings", path: "/dashboard" },
        { icon: <FaBoxOpen />, label: "Add Package", path: "/dashboard/add-package" },
       { icon: <FaClipboardList />, label: "Manage Packages", path: "/dashboard/managePackages" },




    ];





    return (
        <div className="h-screen w-64  text-[#083c3a] flex flex-col shadow-xl border-r bg-indigo-300  fixed md:static z-40">
            {/* Logo */}

            <div className="mt-6 ml-16  md:ml-8 lg:ml-8">
                <NavLink to="/" className=" text-2xl mr-2 text-blue-700 font-bold flex items-center gap-1">
                    <img src={logo} alt="logo" className="w-8 h-8 mr-1 " />
                    Tourmate
                </NavLink>
            </div>
            {/* Menu Section */}
            <nav className="flex-1 px-4 py-6 space-y-2 bg-indigo-300 shadow-inner overflow-y-auto">
                {adminItems.map((item, idx) => (
                    <NavLink
                        key={idx}
                        to={item.path ?? "#"}
                        end
                        className={({ isActive }) =>
                            `flex items-center gap-3 p-3 rounded-lg transition-all duration-300 cursor-pointer group ${isActive
                                ? "bg-blue-700 text-white"
                                : "hover:bg-blue-600 hover:text-white"
                            }`
                        }
                    >
                        <span className="text-lg transition-transform duration-200 group-hover:scale-110">
                            {item.icon}
                        </span>
                        <span className="font-medium tracking-wide">{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            {/* Footer */}

        </div>
    );
};

export default Sidebar;