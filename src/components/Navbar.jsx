import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";
import Langselector from "./Langselector";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png"
import { IoPersonSharp } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { LuAlertCircle } from "react-icons/lu";
const Navbar = () => {

    const {t} = useTranslation();
    const [arrow, setArrow] = useState(true);
    const { user, logOut, loading } = useContext(AuthContext);

    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }

    const handleLogout = () => {
        logOut()
        .then(() => {
            toast.success("Logout successful");
          })
        .catch(error => {
            toast.error(error.message);
          });
    };

    return (
        <div >  
            {/* 1st navbar */}
           <div className="navbar flex flex-col justify-center bg-base-100 py-5">
                <img src={logo} className="w-auto h-20" />
            </div>
            {/* 2nd navbar */}
            <div className="navbar bg-transparent border-[1px] border-gray-500 px-5 md:px-24">
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
                        <li><Link to="/">{t("Home")}</Link></li>
                        <li>
                        <a>{t("Categories")}</a>
                        <ul className="p-2">
                            <li><Link to={`/category/${t("Sports")}`}>{t("Sports")}</Link></li>
                            <li><Link to={`/category/${t("Business")}`}>{t("Business")}</Link></li>
                            <li><Link to={`/category/${t("Entertainment")}`}>{t("Entertainment")}</Link></li>
                            <li><Link to={`/category/${t("LifeandLiving")}`}>{t("LifeandLiving")}</Link></li>
                            <li><Link to={`/category/${t("Youth")}`}>{t("Youth")}</Link></li>
                            <li><Link to={`/category/${t("Tech")}`}>{t("Tech")}</Link></li>
                            <li><Link to={`/category/${t("Multimedia")}`}>{t("Multimedia")}</Link></li>
                            <li><Link to={`/category/${t("Politics")}`}>{t("Politics")}</Link></li>
                        </ul>
                        </li>
                        <li><Link to="/latestnews">{t("LatestNews")}</Link></li>
                        <li><Link to="/breakingnews">{t("BreakingNews")}</Link></li>
                        <li><Link to="/contact">{t("Contact")}</Link></li>
                    </ul>
                    </div>
                    {/* <a className="btn btn-ghost text-xl">{t("websitename")}</a> */}
                     {/* Admin Login */}
                    {
                    user ? (
                        user.email === "admin@gmail.com" ? (
                            // If user is logged in and is an admin
                            <div className=" font-normal text-xs md:text-base flex justify-center md:justify-end gap-5 md:gap-10">
                                <Link to="/adminpanel" className="flex gap-2 items-center btn btn-ghost"><IoPersonSharp />Admin Panel</Link>
                                {/* Additional options for admin can be added here */}
                                
                                <p onClick={handleLogout} className="flex gap-2 items-center btn btn-ghost"><IoIosLogOut />Logout</p>
                            </div>
                        ) : (
                            <div>You must be an admin to access this option</div>
                        )
                    ) : (
                        // If user is not logged in
                        <div className="text-xs md:text-3xl">
                            <Link to="/Login" className="btn btn-ghost">{t("Login")}</Link>
                        </div>
                    )
                }
                </div>
                <div className="navbar-center hidden lg:flex z-50">
                    <ul className="menu menu-horizontal px-1 text-xl">
                    <li><Link to="/">{t("Home")}</Link></li>
                    <li>
                        <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
                            <div tabIndex={0} role="button" className="">{t("Categories")}</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                <li><Link to={`/category/${t("Sports")}`}>{t("Sports")}</Link></li>
                                <li><Link to={`/category/${t("Business")}`}>{t("Business")}</Link></li>
                                <li><Link to={`/category/${t("Entertainment")}`}>{t("Entertainment")}</Link></li>
                                <li><Link to={`/category/${t("LifeandLiving")}`}>{t("LifeandLiving")}</Link></li>
                                <li><Link to={`/category/${t("Youth")}`}>{t("Youth")}</Link></li>
                                <li><Link to={`/category/${t("Tech")}`}>{t("Tech")}</Link></li>
                                <li><Link to={`/category/${t("Multimedia")}`}>{t("Multimedia")}</Link></li>
                                <li><Link to={`/category/${t("Politics")}`}>{t("Politics")}</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li><Link to="/latestnews">{t("LatestNews")}</Link></li>
                    <li><Link to="/breakingnews">{t("BreakingNews")}</Link></li>
                    <li><Link to="/contact">{t("Contact")}</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Langselector></Langselector>
                </div>
            </div>
            {/* headline */}
            <div className="text-base lg:text-xl font-semibold flex items-center">
                <div className="py-4 lg:py-5 px-2 w-1/6 text-white bg-green-400 flex items-center gap-3 justify-center">
                    <LuAlertCircle className="text-3xl" />
                    {t("headlines")}
                </div>
                <div className="py-4 w-5/6 bg-base-300">
                    <marquee behavior="" direction="left">
                        {t("headline")}
                    </marquee>
                </div>
            </div>
        </div>
    );
};

export default Navbar;